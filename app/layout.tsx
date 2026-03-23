import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Sathish Kumar M - React Native Developer',
  description: 'Building high-performance streaming experiences for millions. React Native, OTT, Fire TV specialist.',
  keywords: ['React Native', 'OTT', 'Fire TV', 'Developer', 'Portfolio'],
  authors: [{ name: 'Sathish Kumar M' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sathishkumar.dev',
    title: 'Sathish Kumar M - React Native Developer',
    description: 'Building high-performance streaming experiences for millions',
    images: [
      {
        url: 'https://sathishkumar.dev/og-image.svg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0e27" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="relative">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
