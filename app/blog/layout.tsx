import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Sathish Kumar M | Fire TV & Streaming Technology',
  description: 'Read articles about Fire TV optimization, Kepler Apps integration, React Native performance, and modern streaming technologies.',
  keywords: [
    'Fire TV Blog',
    'Streaming Technology',
    'React Native',
    'Kepler Apps',
    'Video Streaming',
    'Performance Optimization',
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
