import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Sathish Kumar M — React Native Developer | OTT & Fire TV Specialist',
  description: 'Sathish Kumar M — React Native developer with 3+ years building OTT and Fire TV streaming apps. Based in Chennai. Improved SunNXT performance by 30% serving 1M+ users.',
  keywords: ['React Native', 'OTT', 'Fire TV', 'Developer', 'Portfolio', 'Streaming', 'Mobile Development', 'Chennai', 'React Native Developer Chennai'],
  authors: [{ name: 'Sathish Kumar M' }],
  creator: 'Sathish Kumar M',
  metadataBase: new URL('https://sathishm.online'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sathishm.online',
    title: 'Sathish Kumar M — React Native Developer',
    description: 'React Native & Fire TV specialist. Built streaming apps for 1M+ users at Sun TV Network. Based in Chennai.',
    siteName: 'Sathish Kumar M Portfolio',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Sathish Kumar M - React Native Developer Portfolio',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sathish Kumar M — React Native Developer',
    description: 'React Native & Fire TV specialist. 3+ years experience, 30% performance improvement, 1M+ users reached.',
    images: ['/og-image.svg'],
    creator: '@sathishkumarm',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://sathishm.online',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sathish Kumar M',
    jobTitle: 'React Native Developer',
    url: 'https://sathishm.online',
    email: 'sathishm1701@gmail.com',
    telephone: '+91 9025439966',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    knowsAbout: [
      'React Native',
      'Fire TV',
      'OTT Platforms',
      'Shaka Player',
      'TypeScript',
      'Redux Toolkit',
      'Amazon Fire TV',
      'Streaming Technology',
    ],
    sameAs: [
      'https://www.linkedin.com/in/sathish-kumar-m-453464265/',
      'https://github.com/sathishkumarm1701',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0e27" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="canonical" href="https://sathishm.online" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VR1HFN2ZBV"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VR1HFN2ZBV');
            `,
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
      <body className="relative overflow-x-hidden">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
