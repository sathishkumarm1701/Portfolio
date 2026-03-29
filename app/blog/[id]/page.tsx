'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiClock, FiCalendar, FiTag } from 'react-icons/fi';
import { getBlogById, getRelatedBlogs } from '@/lib/blogs';
import BlogCard from '@/components/BlogCard';
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const params = useParams();
  const blogId = params.id as string;
  const blog = getBlogById(blogId);
  const relatedBlogs = getRelatedBlogs(blogId, 3);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-slate-300 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/#blog">
            <motion.button
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg font-semibold text-white hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiArrowLeft size={20} />
              Back to Blog
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link href="/#blog">
          <motion.button
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
            whileHover={{ x: -5 }}
          >
            <FiArrowLeft size={20} />
            Back to Articles
          </motion.button>
        </Link>
      </div>

      {/* Article Header */}
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6">
          <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">
            {blog.category}
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-slate-300 mb-8">
          <div className="flex items-center gap-2">
            <FiCalendar size={18} />
            <span>{formatDate(blog.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiClock size={18} />
            <span>{blog.readTime} min read</span>
          </div>
          <div className="text-slate-400">By {blog.author}</div>
        </div>

        {/* Featured Image */}
        <motion.div
          className="relative h-96 rounded-lg overflow-hidden mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Article Content */}
      <motion.article
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="prose prose-invert max-w-none">
          <div className="text-slate-300 leading-relaxed whitespace-pre-wrap">
            {blog.content}
          </div>
        </div>
      </motion.article>

      {/* Tags */}
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pb-16 border-b border-slate-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <FiTag size={20} className="text-blue-400" />
          <h3 className="text-lg font-semibold text-white">Tags</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-full text-sm hover:bg-slate-700 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedBlogs.map((relatedBlog) => (
              <motion.div
                key={relatedBlog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <BlogCard blog={relatedBlog} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
