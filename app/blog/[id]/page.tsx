import { Metadata } from 'next';
import { getBlogById } from '@/lib/blogs';
import BlogPostClient from './BlogPostClient';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = getBlogById(params.id);

  if (!blog) {
    return {
      title: 'Article Not Found | Sathish Kumar M',
      description: 'The article you are looking for could not be found.',
    };
  }

  const publishedTime = new Date(blog.date).toISOString();
  const modifiedTime = new Date(blog.date).toISOString();

  return {
    title: `${blog.title} | Sathish Kumar M`,
    description: blog.excerpt,
    keywords: blog.tags,
    authors: [{ name: blog.author }],
    openGraph: {
      type: 'article',
      title: blog.title,
      description: blog.excerpt,
      url: `https://sathishm.online/blog/${blog.id}`,
      siteName: 'Sathish Kumar M Portfolio',
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      publishedTime,
      modifiedTime,
      authors: [blog.author],
      tags: blog.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
      creator: '@sathishkumarm',
    },
    alternates: {
      canonical: `https://sathishm.online/blog/${blog.id}`,
    },
  };
}

export default function BlogPost({ params }: Props) {
  return <BlogPostClient params={params} />;
}
