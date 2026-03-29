import { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Technical Blog | Sathish Kumar M - React Native & Fire TV Development',
  description: 'In-depth articles about React Native, Fire TV development, WebView optimization, Shaka Player integration, Redux Toolkit patterns, and testing strategies. Learn from real-world OTT platform experience.',
  keywords: [
    'React Native Blog',
    'Fire TV Development',
    'WebView Optimization',
    'Shaka Player',
    'Redux Toolkit',
    'React Native Testing',
    'OTT Development',
    'Streaming Technology',
    'Mobile Development Blog',
    'Fire TV Tutorial',
  ],
  openGraph: {
    type: 'website',
    title: 'Technical Blog | Sathish Kumar M',
    description: 'In-depth articles about React Native, Fire TV, and OTT platform development.',
    url: 'https://sathishm.online/blog',
    siteName: 'Sathish Kumar M Portfolio',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Sathish Kumar M - Technical Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Blog | Sathish Kumar M',
    description: 'In-depth articles about React Native, Fire TV, and OTT platform development.',
    images: ['/og-image.svg'],
    creator: '@sathishkumarm',
  },
  alternates: {
    canonical: 'https://sathishm.online/blog',
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
