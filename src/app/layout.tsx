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
  title: 'Kumari Rupam | Data Analytics Professional',
  description:
    'Portfolio of Kumari Rupam — Data Analytics professional at Wipro. Specialized in data visualization, Power BI, SQL, and full stack development. Pursuing M.Tech from BITS Pilani.',
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
  authors: [{ name: 'Kumari Rupam' }],
  creator: 'Kumari Rupam',
  openGraph: {
    title: 'Kumari Rupam | Data Analytics Professional',
    description:
      'Portfolio of Kumari Rupam — Data Analytics professional at Wipro. Specialized in data visualization, Power BI, SQL, and full stack development.',
    url: 'https://portfolio-rupam.vercel.app',
    siteName: 'Kumari Rupam Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kumari Rupam | Data Analytics Professional',
    description:
      'Portfolio of Kumari Rupam — Data Analytics professional at Wipro.',
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
