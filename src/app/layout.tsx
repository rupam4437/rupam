import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kumari Rupam | Quality Assurance Engineer',
  description:
    'Portfolio of Kumari Rupam — Award-winning Quality Assurance Engineer specializing in test automation, API testing, and software quality. Dedicated to delivering excellence through accountability and high standards.',
  keywords: [
    'Kumari Rupam',
    'QA Engineer',
    'Quality Assurance',
    'Test Automation',
    'Software Testing',
    'Selenium',
    'Portfolio',
  ],
  authors: [{ name: 'Kumari Rupam' }],
  creator: 'Kumari Rupam',
  openGraph: {
    title: 'Kumari Rupam | Quality Assurance Engineer',
    description:
      'Award-winning QA Engineer portfolio — Specializing in test automation, API testing, and software quality excellence.',
    url: 'https://portfolio-rupam.vercel.app',
    siteName: 'Kumari Rupam Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kumari Rupam | Quality Assurance Engineer',
    description:
      'Award-winning QA Engineer portfolio — Test automation, API testing, and quality excellence.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="noise-bg">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
