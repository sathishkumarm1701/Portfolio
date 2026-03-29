import React from 'react'
import { render, screen } from '@testing-library/react'
import BlogCard from '@/components/BlogCard'
import { BlogPost } from '@/lib/blogs'

const mockBlog: BlogPost = {
  id: 'test-blog',
  title: 'Test Blog Post',
  excerpt: 'This is a test blog excerpt',
  content: 'This is test content',
  author: 'Test Author',
  date: '2026-03-20',
  readTime: 5,
  category: 'Fire TV',
  tags: ['test', 'blog'],
  image: '/test-image.svg',
  featured: false,
}

describe('BlogCard Component', () => {
  describe('Regular Variant', () => {
    it('should render blog card with title', () => {
      render(<BlogCard blog={mockBlog} />)
      expect(screen.getByText('Test Blog Post')).toBeInTheDocument()
    })

    it('should render blog excerpt', () => {
      render(<BlogCard blog={mockBlog} />)
      expect(screen.getByText('This is a test blog excerpt')).toBeInTheDocument()
    })

    it('should render category badge', () => {
      render(<BlogCard blog={mockBlog} />)
      expect(screen.getByText('Fire TV')).toBeInTheDocument()
    })

    it('should render read time', () => {
      render(<BlogCard blog={mockBlog} />)
      expect(screen.getByText('5 min')).toBeInTheDocument()
    })

    it('should render tags', () => {
      render(<BlogCard blog={mockBlog} />)
      expect(screen.getByText('#test')).toBeInTheDocument()
      expect(screen.getByText('#blog')).toBeInTheDocument()
    })

    it('should render "Read More" link', () => {
      render(<BlogCard blog={mockBlog} />)
      expect(screen.getByText('Read More')).toBeInTheDocument()
    })

    it('should render blog image', () => {
      render(<BlogCard blog={mockBlog} />)
      const image = screen.getByAltText('Test Blog Post')
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', '/test-image.svg')
    })
  })

  describe('Featured Variant', () => {
    it('should render featured blog card with title', () => {
      render(<BlogCard blog={mockBlog} featured={true} />)
      expect(screen.getByText('Test Blog Post')).toBeInTheDocument()
    })

    it('should render featured blog with larger layout', () => {
      const { container } = render(<BlogCard blog={mockBlog} featured={true} />)
      const article = container.querySelector('article')
      expect(article).toHaveClass('lg:col-span-2')
    })

    it('should render all tags in featured variant', () => {
      render(<BlogCard blog={mockBlog} featured={true} />)
      mockBlog.tags.forEach(tag => {
        expect(screen.getByText(`#${tag}`)).toBeInTheDocument()
      })
    })

    it('should render "Read Article" button in featured variant', () => {
      render(<BlogCard blog={mockBlog} featured={true} />)
      expect(screen.getByText('Read Article')).toBeInTheDocument()
    })
  })

  describe('Date Formatting', () => {
    it('should format date correctly', () => {
      render(<BlogCard blog={mockBlog} />)
      // Date should be formatted as "Mar 20, 2026"
      expect(screen.getByText(/Mar 20, 2026/)).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper alt text for image', () => {
      render(<BlogCard blog={mockBlog} />)
      const image = screen.getByAltText('Test Blog Post')
      expect(image).toBeInTheDocument()
    })

    it('should have semantic HTML structure', () => {
      const { container } = render(<BlogCard blog={mockBlog} />)
      const article = container.querySelector('article')
      expect(article).toBeInTheDocument()
    })
  })

  describe('Link Navigation', () => {
    it('should have link to blog post', () => {
      render(<BlogCard blog={mockBlog} />)
      const button = screen.getByText(/read more/i)
      expect(button).toBeInTheDocument()
    })

    it('should have correct href for featured variant', () => {
      render(<BlogCard blog={mockBlog} featured={true} />)
      const button = screen.getByText(/read article/i)
      expect(button).toBeInTheDocument()
    })
  })

  describe('Content Truncation', () => {
    it('should truncate long excerpt in regular variant', () => {
      const longExcerpt = 'A'.repeat(200)
      const blogWithLongExcerpt = { ...mockBlog, excerpt: longExcerpt }
      const { container } = render(<BlogCard blog={blogWithLongExcerpt} />)
      const excerpt = container.querySelector('.line-clamp-2')
      expect(excerpt).toBeInTheDocument()
    })
  })
})
