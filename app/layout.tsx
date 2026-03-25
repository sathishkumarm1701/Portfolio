import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Sathish Kumar M — React Native & Fire TV Developer | OTT Specialist',
  description: 'React Native developer specializing in Fire TV apps, WebView integration, and ad SDK implementation. 3+ years building high-performance OTT platforms. SunNXT: 30% performance improvement, 500K+ Fire TV users.',
  keywords: [
    'React Native Developer',
    'Fire TV Developer',
    'OTT Platform Developer',
    'WebView Integration',
    'Ad SDK Implementation',
    'React Native Chennai',
    'Fire TV Optimization',
    'Streaming App Developer',
    'React Native Performance',
    'Mobile App Developer',
    'React Native Freelancer',
    'Fire TV Specialist',
  ],
  authors: [{ name: 'Sathish Kumar M' }],
  creator: 'Sathish Kumar M',
  metadataBase: new URL('https://sathishm.online'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sathishm.online',
    title: 'Sathish Kumar M — React Native & Fire TV Developer',
    description: 'Specialized in Fire TV apps, WebView integration, and ad SDK implementation. 3+ years experience, 30% performance improvement, 1M+ users reached.',
    siteName: 'Sathish Kumar M Portfolio',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Sathish Kumar M - React Native & Fire TV Developer Portfolio',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sathish Kumar M — React Native & Fire TV Developer',
    description: 'Fire TV specialist. 3+ years, 30% performance improvement, 1M+ users, WebView & ad SDK expert.',
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
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Add after Google Search Console verification
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
    image: 'https://sathishm.online/og-image.svg',
    description: 'React Native developer specializing in Fire TV apps, WebView integration, and ad SDK implementation. 3+ years experience building high-performance OTT platforms.',
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
      'WebView Integration',
      'Ad SDK Implementation',
      'Performance Optimization',
      'Mobile Development',
    ],
    sameAs: [
      'https://www.linkedin.com/in/sathish-kumar-m-453464265/',
      'https://github.com/sathishkumarm1701',
    ],
    workLocation: {
      '@type': 'Place',
      name: 'Chennai, Tamil Nadu, India',
    },
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
