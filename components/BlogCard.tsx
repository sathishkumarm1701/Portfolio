'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiClock } from 'react-icons/fi';
import { BlogPost } from '@/lib/blogs';

interface BlogCardProps {
  blog: BlogPost;
  featured?: boolean;
}

const BlogCard = memo(({ blog, featured = false }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  if (featured) {
    return (
      <motion.article
        className="glass rounded-lg overflow-hidden group hover:border-blue-500/50 transition-all duration-300 lg:col-span-2"
        whileHover={{ y: -5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          {/* Image */}
          <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold">
                  {blog.category}
                </span>
                <span className="text-slate-400 text-sm">{formatDate(blog.date)}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {blog.title}
              </h3>

              <p className="text-slate-300 mb-4 leading-relaxed">{blog.excerpt}</p>

              <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                <div className="flex items-center gap-1">
                  <FiClock size={16} />
                  <span>{blog.readTime} min read</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <Link href={`/blog/${blog.id}`}>
              <motion.button
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all group/btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Article
                <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      className="glass rounded-lg overflow-hidden group hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full"
      whileHover={{ y: -5 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold">
            {blog.category}
          </span>
          <span className="text-slate-400 text-xs whitespace-nowrap">{formatDate(blog.date)}</span>
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-2 flex-grow">
          {blog.excerpt}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <FiClock size={14} />
            <span>{blog.readTime} min</span>
          </div>
          <div className="flex gap-1">
            {blog.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-slate-700/50 text-slate-300 rounded text-xs">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <Link href={`/blog/${blog.id}`}>
          <motion.button
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm group/btn"
            whileHover={{ x: 5 }}
          >
            Read More
            <FiArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </div>
    </motion.article>
  );
});

BlogCard.displayName = 'BlogCard';

export default BlogCard;
