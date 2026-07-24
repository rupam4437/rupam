import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

const siteUrl = 'https://portfolio-rupam.vercel.app';
const siteTitle = 'Kumari Rupam | Data Analytics Professional';
const siteDescription =
  'Portfolio of Kumari Rupam, a Data Analytics professional at Wipro specializing in Power BI, SQL, Azure, reporting, data visualization, and full stack development.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Kumari Rupam',
  },
  description: siteDescription,
  keywords: [
    'Kumari Rupam',
    'Data Analytics',
    'Power BI',
    'Wipro',
    'BITS Pilani',
    'M.Tech Systems',
    'Software Engineer',
    'Full Stack Developer',
    'IIT Patna',
    'Aryabhatta Knowledge University'
  ],
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Kumari Rupam' }],
  creator: 'Kumari Rupam',
  publisher: 'Kumari Rupam',
  category: 'portfolio',
  applicationName: 'Kumari Rupam Portfolio',
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'Kumari Rupam Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/rupam-profile.jpg',
        width: 1200,
        height: 1200,
        alt: 'Kumari Rupam, Data Analytics Professional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/images/rupam-profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/images/rupam-profile-2.png',
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#08090d' },
  ],
  colorScheme: 'dark light',
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kumari Rupam',
  url: siteUrl,
  image: `${siteUrl}/images/rupam-profile.jpg`,
  jobTitle: 'Data Analytics Professional',
  worksFor: {
    '@type': 'Organization',
    name: 'Wipro',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Birla Institute of Technology and Science, Pilani',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Aryabhatta Knowledge University, Patna',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Indian Institute of Technology, Patna',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/in/kumari-rupam-4621a024b/',
    'https://github.com/rupam4437',
  ],
  knowsAbout: ['Power BI', 'SQL', 'Data Visualization', 'Microsoft Azure', 'Full Stack Development'],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Kumari Rupam Portfolio',
  url: siteUrl,
  description: siteDescription,
  publisher: {
    '@type': 'Person',
    name: 'Kumari Rupam',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
        />
      </head>
      <body className="font-sans antialiased">
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
