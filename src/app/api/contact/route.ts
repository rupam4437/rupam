import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MIN_SUBMIT_DELAY_MS = 2500;
const MAX_NAME_LENGTH = 80;
const MAX_EMAIL_LENGTH = 254;
const MAX_SUBJECT_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 2000;

type RateLimitRecord = {
  count: number;
  resetAt: number;
};

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
  startedAt?: unknown;
  turnstileToken?: unknown;
};

type ValidationResult =
  | {
      ok: true;
      data: {
        name: string;
        email: string;
        subject: string;
        message: string;
      };
    }
  | {
      ok: false;
      errors: Record<string, string>;
    };

declare global {
  var contactRateLimitStore: Map<string, RateLimitRecord> | undefined;
}

const rateLimitStore = globalThis.contactRateLimitStore ?? new Map<string, RateLimitRecord>();
globalThis.contactRateLimitStore = rateLimitStore;

function jsonResponse(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const realIp = request.headers.get('x-real-ip')?.trim();
  const vercelIp = request.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim();

  return forwardedFor || vercelIp || realIp || 'unknown';
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return {
      allowed: false,
      retryAfter: Math.ceil((current.resetAt - now) / 1000),
    };
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return { allowed: true, retryAfter: 0 };
}

function normalizeText(value: unknown) {
  if (typeof value !== 'string') return '';

  return value
    .normalize('NFKC')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeMessage(value: unknown) {
  if (typeof value !== 'string') return '';

  return value
    .normalize('NFKC')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim();
}

function hasHeaderInjection(value: string) {
  return /[\r\n]/.test(value);
}

function isValidEmail(email: string) {
  if (email.length > MAX_EMAIL_LENGTH || hasHeaderInjection(email)) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function validatePayload(payload: ContactPayload): ValidationResult {
  const name = normalizeText(payload.name);
  const email = normalizeText(payload.email).toLowerCase();
  const subject = normalizeText(payload.subject);
  const message = normalizeMessage(payload.message);
  const errors: Record<string, string> = {};

  if (!name) errors.name = 'Please enter your name.';
  if (name.length > MAX_NAME_LENGTH) errors.name = `Name must be ${MAX_NAME_LENGTH} characters or less.`;
  if (hasHeaderInjection(name)) errors.name = 'Name contains invalid characters.';

  if (!email) errors.email = 'Please enter your email.';
  if (email && !isValidEmail(email)) errors.email = 'Please enter a valid email address.';

  if (!subject) errors.subject = 'Please enter a subject.';
  if (subject.length > MAX_SUBJECT_LENGTH) errors.subject = `Subject must be ${MAX_SUBJECT_LENGTH} characters or less.`;
  if (hasHeaderInjection(subject)) errors.subject = 'Subject contains invalid characters.';

  if (!message) errors.message = 'Please enter a message.';
  if (message.length > MAX_MESSAGE_LENGTH) errors.message = `Message must be ${MAX_MESSAGE_LENGTH} characters or less.`;

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data: { name, email, subject, message } };
}

async function verifyTurnstile(token: unknown, ip: string) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.error('Contact form is missing TURNSTILE_SECRET_KEY.');
    return false;
  }

  if (typeof token !== 'string' || token.length < 20 || token.length > 4096) {
    return false;
  }

  const formData = new FormData();
  formData.append('secret', secretKey);
  formData.append('response', token);
  if (ip !== 'unknown') formData.append('remoteip', ip);

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });
    const result = (await response.json()) as { success?: boolean };
    return Boolean(result.success);
  } catch (error) {
    console.error('Turnstile verification failed.', error);
    return false;
  }
}

async function sendEmail(data: ValidationResult & { ok: true }, request: NextRequest, ip: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error('Contact form is missing Resend email environment variables.');
    return false;
  }

  const submittedAt = new Date().toISOString();
  const userAgent = normalizeText(request.headers.get('user-agent') ?? 'unknown');
  const safe = {
    name: escapeHtml(data.data.name),
    email: escapeHtml(data.data.email),
    subject: escapeHtml(data.data.subject),
    message: escapeHtml(data.data.message).replace(/\n/g, '<br />'),
    submittedAt: escapeHtml(submittedAt),
    ip: escapeHtml(ip),
    userAgent: escapeHtml(userAgent),
  };

  const text = [
    'New portfolio contact form submission',
    '',
    `Name: ${data.data.name}`,
    `Email: ${data.data.email}`,
    `Subject: ${data.data.subject}`,
    `Message: ${data.data.message}`,
    `Submission Time: ${submittedAt}`,
    `User IP: ${ip}`,
    `User Agent: ${userAgent}`,
  ].join('\n');

  const html = `
    <h2>New portfolio contact form submission</h2>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;">
      <tr><td><strong>Name</strong></td><td>${safe.name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${safe.email}</td></tr>
      <tr><td><strong>Subject</strong></td><td>${safe.subject}</td></tr>
      <tr><td><strong>Message</strong></td><td>${safe.message}</td></tr>
      <tr><td><strong>Submission Time</strong></td><td>${safe.submittedAt}</td></tr>
      <tr><td><strong>User IP</strong></td><td>${safe.ip}</td></tr>
      <tr><td><strong>User Agent</strong></td><td>${safe.userAgent}</td></tr>
    </table>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: data.data.email,
        subject: `Portfolio contact: ${data.data.subject}`,
        text,
        html,
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error('Resend email delivery failed.', { status: response.status, details });
      return false;
    }

    return true;
  } catch (error) {
    console.error('Resend request failed.', error);
    return false;
  }
}

function isSameOrigin(request: NextRequest) {
  const origin = request.headers.get('origin');
  if (!origin) return true;

  const allowedOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio-rupam.vercel.app';
  return origin === allowedOrigin || origin === request.nextUrl.origin;
}

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return jsonResponse({ message: 'Request origin is not allowed.' }, 400);
  }

  if (!request.headers.get('content-type')?.includes('application/json')) {
    return jsonResponse({ message: 'Invalid request format.' }, 400);
  }

  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(ip);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { message: 'Too many submissions. Please try again later.' },
      {
        status: 429,
        headers: {
          'Cache-Control': 'no-store',
          'Retry-After': String(rateLimit.retryAfter),
        },
      }
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return jsonResponse({ message: 'Invalid request body.' }, 400);
  }

  if (typeof payload.website === 'string' && payload.website.trim().length > 0) {
    return jsonResponse({ message: 'Thanks, your message was received.' }, 200);
  }

  if (typeof payload.startedAt !== 'number' || Date.now() - payload.startedAt < MIN_SUBMIT_DELAY_MS) {
    return jsonResponse({ message: 'Please wait a moment before submitting.' }, 400);
  }

  const turnstileOk = await verifyTurnstile(payload.turnstileToken, ip);
  if (!turnstileOk) {
    return jsonResponse({ message: 'Security verification failed. Please try again.' }, 400);
  }

  const validation = validatePayload(payload);
  if (!validation.ok) {
    return jsonResponse({ message: 'Please correct the highlighted fields.', errors: validation.errors }, 400);
  }

  const delivered = await sendEmail(validation, request, ip);
  if (!delivered) {
    return jsonResponse({ message: 'Message could not be sent right now. Please email directly instead.' }, 500);
  }

  return jsonResponse({ message: 'Message sent successfully.' }, 200);
}
