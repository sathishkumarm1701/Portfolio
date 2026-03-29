# Blog Section Setup Guide

## Overview

A complete blog system has been added to your portfolio with support for Fire TV, Kepler Apps, and streaming technology articles. The blog includes:

- **6 Pre-written Articles** covering Fire TV optimization, Kepler Apps integration, WebView, Shaka Player, Redux, and testing
- **Blog Listing Page** with category filtering
- **Individual Article Pages** with related articles
- **Responsive Design** optimized for all devices
- **SEO Optimized** with proper metadata

## File Structure

```
portfolio-website/
├── lib/
│   └── blogs.ts                    # Blog data and utility functions
├── components/
│   ├── BlogCard.tsx                # Blog card component (featured & regular)
│   └── sections/
│       └── Blog.tsx                # Blog section with filtering
├── app/
│   ├── blog/
│   │   ├── page.tsx                # Blog listing page
│   │   ├── layout.tsx              # Blog layout with metadata
│   │   └── [id]/
│   │       └── page.tsx            # Individual blog post page
│   └── page.tsx                    # Updated with Blog section
└── components/
    └── Navbar.tsx                  # Updated with Blog link
```

## Features

### 1. Blog Data Management (`lib/blogs.ts`)

All blog posts are stored in a centralized TypeScript file with the following structure:

```typescript
interface BlogPost {
  id: string;                    // Unique identifier
  title: string;                 // Article title
  excerpt: string;               // Short summary
  content: string;               // Full article content
  author: string;                // Author name
  date: string;                  // Publication date (YYYY-MM-DD)
  readTime: number;              // Estimated read time in minutes
  category: string;              // Article category
  tags: string[];                // Array of tags
  image: string;                 // Featured image path
  featured?: boolean;            // Mark as featured
}
```

### 2. Utility Functions

The `blogs.ts` file provides several utility functions:

- `getBlogPosts(limit?)` - Get all blog posts, optionally limited
- `getFeaturedBlogs()` - Get featured articles (max 3)
- `getBlogByCategory(category)` - Filter by category
- `getBlogById(id)` - Get single blog post
- `getRelatedBlogs(id, limit)` - Get related articles based on tags
- `getAllCategories()` - Get all unique categories
- `getAllTags()` - Get all unique tags

### 3. Blog Components

#### BlogCard Component
- Displays blog posts in card format
- Two variants: featured (large) and regular (small)
- Shows category, date, read time, and tags
- Hover animations and transitions
- Links to individual blog posts

#### Blog Section Component
- Main blog listing page
- Category filtering
- Featured articles showcase
- Responsive grid layout
- Call-to-action for newsletter signup

### 4. Blog Pages

#### Blog Listing Page (`/blog`)
- Full blog listing with all articles
- Category filter buttons
- Featured articles section
- Responsive design

#### Individual Blog Post (`/blog/[id]`)
- Full article content with formatting
- Article metadata (date, author, read time)
- Featured image
- Related articles section
- Back navigation

## Adding New Blog Posts

To add a new blog post, edit `lib/blogs.ts` and add to the `blogPosts` array:

```typescript
{
  id: 'unique-slug',
  title: 'Your Article Title',
  excerpt: 'Short summary of the article',
  content: `Full article content with markdown-like formatting...`,
  author: 'Sathish Kumar M',
  date: '2026-03-20',
  readTime: 8,
  category: 'Fire TV',
  tags: ['Fire TV', 'React Native', 'Performance'],
  image: '/your-image.svg',
  featured: true, // Optional
}
```

## Current Articles

### 1. Fire TV Performance Optimization (Featured)
- **Category**: Fire TV
- **Tags**: Fire TV, React Native, Performance, Optimization
- **Read Time**: 8 minutes
- **Topics**: Memory management, spatial navigation, video streaming

### 2. Kepler Apps Integration (Featured)
- **Category**: Kepler Apps
- **Tags**: Kepler Apps, Fire TV, Integration, SDK
- **Read Time**: 10 minutes
- **Topics**: SDK setup, analytics, monetization

### 3. WebView Integration in Fire TV
- **Category**: Fire TV
- **Tags**: WebView, Fire TV, Security, Performance
- **Read Time**: 7 minutes
- **Topics**: Performance, remote control, video playback

### 4. Shaka Player: Advanced Video Streaming
- **Category**: Video Streaming
- **Tags**: Shaka Player, Video Streaming, Fire TV, DRM
- **Read Time**: 9 minutes
- **Topics**: HLS/DASH, DRM, adaptive bitrate

### 5. Redux Toolkit Best Practices
- **Category**: React Native
- **Tags**: Redux, State Management, Fire TV, Performance
- **Read Time**: 8 minutes
- **Topics**: Setup, patterns, optimization

### 6. Testing Strategies for Fire TV
- **Category**: Testing
- **Tags**: Testing, Fire TV, Jest, E2E Testing
- **Read Time**: 10 minutes
- **Topics**: Unit tests, integration tests, E2E tests

## Navigation Integration

The blog is integrated into the main navigation:

1. **Navbar** - Added "Blog" link to navigation menu
2. **Home Page** - Blog section appears between Achievements and Certifications
3. **Footer** - Can add blog link if needed

## SEO Optimization

### Blog Listing Page
- Meta title and description
- Keywords for blog discovery
- Structured data ready

### Individual Blog Posts
- Dynamic metadata based on article
- Open Graph tags for social sharing
- Canonical URLs

### Sitemap
Update `public/sitemap.xml` to include blog routes:

```xml
<url>
  <loc>https://sathishm.online/blog</loc>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://sathishm.online/blog/fire-tv-optimization-2026</loc>
  <priority>0.7</priority>
</url>
```

## Styling

The blog uses:
- **Tailwind CSS** for responsive design
- **Framer Motion** for animations
- **Glass morphism** effects for cards
- **Gradient text** for headings
- **Dark theme** consistent with portfolio

## Performance Considerations

1. **Lazy Loading** - Blog section is lazy loaded on the home page
2. **Image Optimization** - Use SVG or optimized images
3. **Code Splitting** - Blog pages are code-split automatically
4. **Caching** - Blog data is static and can be cached

## Future Enhancements

### Planned Features
1. **Search Functionality** - Search articles by title, content, tags
2. **Comments System** - Allow readers to comment on articles
3. **Newsletter Integration** - Subscribe to new articles
4. **Reading Progress** - Show reading progress indicator
5. **Social Sharing** - Share articles on social media
6. **Author Bio** - Display author information
7. **Related Articles** - Already implemented, can be enhanced
8. **Archive** - Browse articles by month/year

### Database Integration
When ready to move to a database:

1. Create MongoDB schema for blog posts
2. Create API routes for CRUD operations
3. Update components to fetch from API
4. Implement pagination for large datasets
5. Add admin panel for blog management

## Testing

To test the blog functionality:

1. **Blog Listing** - Navigate to `/#blog` or `/blog`
2. **Category Filter** - Click category buttons to filter
3. **Individual Post** - Click "Read More" to view full article
4. **Related Articles** - Check related articles section
5. **Navigation** - Test back buttons and links
6. **Responsive** - Test on mobile, tablet, desktop

## Deployment

The blog is fully integrated and ready for deployment:

1. No additional environment variables needed
2. No database setup required (uses static data)
3. All routes are pre-rendered for optimal performance
4. SEO-friendly with proper metadata

## Customization

### Change Blog Title/Description
Edit `components/sections/Blog.tsx`:
```typescript
<p className="text-slate-300 text-lg max-w-2xl">
  Your custom description here
</p>
```

### Modify Card Styling
Edit `components/BlogCard.tsx` to change colors, spacing, or layout.

### Update Categories
Add new categories by adding articles with new category names in `lib/blogs.ts`.

## Troubleshooting

### Blog Section Not Showing
- Ensure `Blog` component is imported in `app/page.tsx`
- Check that `Suspense` wrapper is in place
- Verify no console errors

### Links Not Working
- Check blog post IDs match in `lib/blogs.ts`
- Verify Next.js Link components are used
- Check routing configuration

### Images Not Loading
- Ensure image paths are correct in `public/` folder
- Check image file extensions
- Verify image permissions

## Support

For questions or issues with the blog system, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com/docs
