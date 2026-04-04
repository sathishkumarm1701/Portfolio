'use client';

import { memo, useState, useCallback, useRef } from 'react';
import BlogCard from '@/components/BlogCard';
import { getFeaturedBlogs, getBlogPosts, getAllCategories } from '@/lib/blogs';
import { FiFilter } from 'react-icons/fi';

const Blog = memo(() => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const featuredBlogs = getFeaturedBlogs();
  const allBlogs = getBlogPosts();
  const categories = getAllCategories();
  const filterSectionRef = useRef<HTMLDivElement>(null);

  const handleCategoryChange = useCallback((category: string | null) => {
    setSelectedCategory(category);
    
    // Scroll to filter section smoothly after state update
    setTimeout(() => {
      if (filterSectionRef.current) {
        const yOffset = -100; // Offset for navbar
        const element = filterSectionRef.current;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  }, []);

  const filteredBlogs = selectedCategory
    ? allBlogs.filter(blog => blog.category === selectedCategory)
    : allBlogs;

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Latest Articles</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl">
            Deep dives into Fire TV optimization, Kepler Apps integration, and modern streaming technologies.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Featured Blogs */}
        {!selectedCategory && featuredBlogs.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">Featured</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredBlogs.map((blog) => (
                <div key={blog.id}>
                  <BlogCard blog={blog} featured={true} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div ref={filterSectionRef} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FiFilter size={20} className="text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Filter by Category</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleCategoryChange(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All Articles
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="min-h-[400px]" key={selectedCategory || 'all'}>
          <h3 className="text-2xl font-bold text-white mb-8">
            {selectedCategory ? `${selectedCategory} Articles` : 'All Articles'}
            <span className="text-slate-400 text-base ml-2">({filteredBlogs.length})</span>
          </h3>
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <BlogCard key={`${selectedCategory}-${blog.id}`} blog={blog} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-300 mb-6">
            More articles coming soon. Subscribe to stay updated with the latest Fire TV and streaming technologies.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Get Notified
          </a>
        </div>
      </div>
    </section>
  );
});

Blog.displayName = 'Blog';

export default Blog;
