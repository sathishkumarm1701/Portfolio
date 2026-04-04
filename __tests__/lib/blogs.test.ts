import {
  getBlogPosts,
  getFeaturedBlogs,
  getBlogByCategory,
  getBlogById,
  getRelatedBlogs,
  getAllCategories,
  getAllTags,
} from '@/lib/blogs'

describe('Blog Utilities', () => {
  describe('getBlogPosts', () => {
    it('should return all blog posts', () => {
      const posts = getBlogPosts()
      expect(posts.length).toBeGreaterThan(0)
      expect(Array.isArray(posts)).toBe(true)
    })

    it('should return posts sorted by date (newest first)', () => {
      const posts = getBlogPosts()
      for (let i = 0; i < posts.length - 1; i++) {
        const currentDate = new Date(posts[i].date).getTime()
        const nextDate = new Date(posts[i + 1].date).getTime()
        expect(currentDate).toBeGreaterThanOrEqual(nextDate)
      }
    })

    it('should limit results when limit parameter is provided', () => {
      const limit = 3
      const posts = getBlogPosts(limit)
      expect(posts.length).toBeLessThanOrEqual(limit)
    })

    it('should return empty array when limit is 0', () => {
      const posts = getBlogPosts(0)
      expect(posts.length).toBe(0)
    })
  })

  describe('getFeaturedBlogs', () => {
    it('should return only featured blogs', () => {
      const featured = getFeaturedBlogs()
      featured.forEach(blog => {
        expect(blog.featured).toBe(true)
      })
    })

    it('should return maximum 3 featured blogs', () => {
      const featured = getFeaturedBlogs()
      expect(featured.length).toBeLessThanOrEqual(3)
    })

    it('should return featured blogs sorted by date', () => {
      const featured = getFeaturedBlogs()
      for (let i = 0; i < featured.length - 1; i++) {
        const currentDate = new Date(featured[i].date).getTime()
        const nextDate = new Date(featured[i + 1].date).getTime()
        expect(currentDate).toBeGreaterThanOrEqual(nextDate)
      }
    })
  })

  describe('getBlogByCategory', () => {
    it('should return blogs for valid category', () => {
      const category = 'Fire TV'
      const blogs = getBlogByCategory(category)
      expect(blogs.length).toBeGreaterThan(0)
      blogs.forEach(blog => {
        expect(blog.category).toBe(category)
      })
    })

    it('should return empty array for invalid category', () => {
      const blogs = getBlogByCategory('NonExistentCategory')
      expect(blogs.length).toBe(0)
    })

    it('should be case-sensitive', () => {
      const blogsLower = getBlogByCategory('fire tv')
      const blogsUpper = getBlogByCategory('Fire TV')
      expect(blogsLower.length).toBe(0)
      expect(blogsUpper.length).toBeGreaterThan(0)
    })
  })

  describe('getBlogById', () => {
    it('should return blog post by valid ID', () => {
      const blog = getBlogById('fire-tv-development-guide')
      expect(blog).toBeDefined()
      expect(blog?.id).toBe('fire-tv-development-guide')
    })

    it('should return undefined for invalid ID', () => {
      const blog = getBlogById('non-existent-id')
      expect(blog).toBeUndefined()
    })

    it('should return blog with all required fields', () => {
      const blog = getBlogById('fire-tv-development-guide')
      expect(blog).toHaveProperty('id')
      expect(blog).toHaveProperty('title')
      expect(blog).toHaveProperty('excerpt')
      expect(blog).toHaveProperty('content')
      expect(blog).toHaveProperty('author')
      expect(blog).toHaveProperty('date')
      expect(blog).toHaveProperty('readTime')
      expect(blog).toHaveProperty('category')
      expect(blog).toHaveProperty('tags')
      expect(blog).toHaveProperty('image')
    })
  })

  describe('getRelatedBlogs', () => {
    it('should return related blogs based on tags', () => {
      const related = getRelatedBlogs('fire-tv-development-guide', 3)
      expect(Array.isArray(related)).toBe(true)
      expect(related.length).toBeLessThanOrEqual(3)
    })

    it('should not include the original blog in related blogs', () => {
      const related = getRelatedBlogs('fire-tv-development-guide', 10)
      const ids = related.map(blog => blog.id)
      expect(ids).not.toContain('fire-tv-development-guide')
    })

    it('should return blogs with shared tags', () => {
      const original = getBlogById('fire-tv-development-guide')
      const related = getRelatedBlogs('fire-tv-development-guide', 10)
      
      related.forEach(blog => {
        const hasSharedTag = blog.tags.some(tag => original?.tags.includes(tag))
        expect(hasSharedTag).toBe(true)
      })
    })

    it('should return empty array for non-existent blog ID', () => {
      const related = getRelatedBlogs('non-existent-id', 3)
      expect(related.length).toBe(0)
    })

    it('should respect limit parameter', () => {
      const limit = 2
      const related = getRelatedBlogs('fire-tv-development-guide', limit)
      expect(related.length).toBeLessThanOrEqual(limit)
    })
  })

  describe('getAllCategories', () => {
    it('should return array of categories', () => {
      const categories = getAllCategories()
      expect(Array.isArray(categories)).toBe(true)
      expect(categories.length).toBeGreaterThan(0)
    })

    it('should return unique categories', () => {
      const categories = getAllCategories()
      const uniqueCategories = new Set(categories)
      expect(categories.length).toBe(uniqueCategories.size)
    })

    it('should include expected categories', () => {
      const categories = getAllCategories()
      expect(categories).toContain('Fire TV')
      expect(categories).toContain('Kepler Apps')
    })
  })

  describe('getAllTags', () => {
    it('should return array of tags', () => {
      const tags = getAllTags()
      expect(Array.isArray(tags)).toBe(true)
      expect(tags.length).toBeGreaterThan(0)
    })

    it('should return unique tags', () => {
      const tags = getAllTags()
      const uniqueTags = new Set(tags)
      expect(tags.length).toBe(uniqueTags.size)
    })

    it('should return sorted tags', () => {
      const tags = getAllTags()
      const sortedTags = [...tags].sort()
      expect(tags).toEqual(sortedTags)
    })

    it('should include expected tags', () => {
      const tags = getAllTags()
      expect(tags).toContain('Fire TV')
      expect(tags).toContain('React Native')
    })
  })

  describe('Blog data integrity', () => {
    it('should have valid date format for all blogs', () => {
      const posts = getBlogPosts()
      posts.forEach(blog => {
        const date = new Date(blog.date)
        expect(date.toString()).not.toBe('Invalid Date')
      })
    })

    it('should have positive read time for all blogs', () => {
      const posts = getBlogPosts()
      posts.forEach(blog => {
        expect(blog.readTime).toBeGreaterThan(0)
      })
    })

    it('should have non-empty title and excerpt for all blogs', () => {
      const posts = getBlogPosts()
      posts.forEach(blog => {
        expect(blog.title.length).toBeGreaterThan(0)
        expect(blog.excerpt.length).toBeGreaterThan(0)
      })
    })

    it('should have at least one tag for all blogs', () => {
      const posts = getBlogPosts()
      posts.forEach(blog => {
        expect(blog.tags.length).toBeGreaterThan(0)
      })
    })

    it('should have valid image URL for all blogs', () => {
      const posts = getBlogPosts()
      posts.forEach(blog => {
        // Image should be either a local path starting with / or an external URL starting with http
        expect(blog.image).toMatch(/^(\/|https?:\/\/)/)
      })
    })
  })
})
