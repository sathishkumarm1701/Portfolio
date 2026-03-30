'use client';

import { memo, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '@/components/BlogCard';
import { getFeaturedBlogs, getBlogPosts, getAllCategories } from '@/lib/blogs';
import { FiFilter } from 'react-icons/fi';
import { containerVariants, itemVariants } from '@/lib/animations';

const Blog = memo(() => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const featuredBlogs = getFeaturedBlogs();
  const allBlogs = getBlogPosts();
  const categories = getAllCategories();

  const handleCategoryChange = useCallback((category: string | null) => {
    setSelectedCategory(category);
  }, []);

  const filteredBlogs = selectedCategory
    ? allBlogs.filter(blog => blog.category === selectedCategory)
    : allBlogs;

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Latest Articles</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl">
              Deep dives into Fire TV optimization, Kepler Apps integration, and modern streaming technologies.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
          </motion.div>

          {/* Featured Blogs */}
          {!selectedCategory && (
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8">Featured</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredBlogs.map((blog) => (
                  <motion.div key={blog.id} variants={itemVariants}>
                    <BlogCard blog={blog} featured={true} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FiFilter size={20} className="text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <motion.button
                onClick={() => handleCategoryChange(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === null
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All Articles
              </motion.button>
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Blog Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8">
              {selectedCategory ? `${selectedCategory} Articles` : 'All Articles'}
              <span className="text-slate-400 text-base ml-2">({filteredBlogs.length})</span>
            </h3>
            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog) => (
                  <motion.div key={blog.id} variants={itemVariants}>
                    <BlogCard blog={blog} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-slate-400 text-lg">No articles found in this category.</p>
              </motion.div>
            )}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-slate-300 mb-6">
              More articles coming soon. Subscribe to stay updated with the latest Fire TV and streaming technologies.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Notified
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

Blog.displayName = 'Blog';

export default Blog;
