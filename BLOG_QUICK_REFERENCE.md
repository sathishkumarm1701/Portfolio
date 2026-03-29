# Blog Quick Reference

## Quick Start

### View Blog
- **Home Page**: Scroll to "Latest Articles" section
- **Blog Page**: Visit `/blog`
- **Individual Post**: Click "Read Article" on any blog card

### Add New Article

1. Open `lib/blogs.ts`
2. Add to `blogPosts` array:

```typescript
{
  id: 'your-article-slug',
  title: 'Your Article Title',
  excerpt: 'One-line summary',
  content: `Full article content...`,
  author: 'Sathish Kumar M',
  date: '2026-03-20',
  readTime: 8,
  category: 'Fire TV', // or 'Kepler Apps', 'Video Streaming', 'React Native', 'Testing'
  tags: ['tag1', 'tag2', 'tag3'],
  image: '/image-name.svg',
  featured: false, // Set to true for featured articles (max 3)
}
```

3. Save and deploy

## Article Template

```typescript
{
  id: 'article-slug-here',
  title: 'Article Title Here',
  excerpt: 'Brief one-line summary of the article',
  content: `
## Section 1
Content here...

## Section 2
Content here...

### Subsection
More content...

\`\`\`typescript
// Code examples
const example = () => {};
\`\`\`
  `,
  author: 'Sathish Kumar M',
  date: '2026-03-20',
  readTime: 8,
  category: 'Fire TV',
  tags: ['Fire TV', 'React Native', 'Performance'],
  image: '/image.svg',
  featured: false,
}
```

## Categories

Current categories:
- **Fire TV** - Fire TV specific optimization and development
- **Kepler Apps** - Kepler Apps framework and integration
- **Video Streaming** - Video streaming technologies (Shaka Player, HLS, DASH)
- **React Native** - React Native patterns and best practices
- **Testing** - Testing strategies and tools

## Common Tags

- Fire TV
- React Native
- Performance
- Optimization
- Kepler Apps
- WebView
- Shaka Player
- Video Streaming
- Redux
- State Management
- Testing
- Jest
- E2E Testing
- DRM
- Security
- Integration
- SDK

## File Locations

| File | Purpose |
|------|---------|
| `lib/blogs.ts` | Blog data and utilities |
| `components/BlogCard.tsx` | Blog card component |
| `components/sections/Blog.tsx` | Blog listing section |
| `app/blog/page.tsx` | Blog index page |
| `app/blog/[id]/page.tsx` | Individual blog post |
| `app/blog/layout.tsx` | Blog layout & metadata |

## Useful Functions

```typescript
// Get all blog posts
const posts = getBlogPosts();

// Get first 5 posts
const recent = getBlogPosts(5);

// Get featured posts
const featured = getFeaturedBlogs();

// Get posts by category
const fireTVPosts = getBlogByCategory('Fire TV');

// Get single post
const post = getBlogById('fire-tv-optimization-2026');

// Get related posts
const related = getRelatedBlogs('fire-tv-optimization-2026', 3);

// Get all categories
const categories = getAllCategories();

// Get all tags
const tags = getAllTags();
```

## Formatting Tips

### Markdown-like Formatting

```
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point
- Another point

1. Numbered item
2. Another item

`inline code`

\`\`\`typescript
// Code block
const example = () => {};
\`\`\`
```

### Content Structure

```
## Introduction
Brief intro...

## Main Topic 1
Content...

### Subtopic
More details...

## Main Topic 2
Content...

## Conclusion
Summary...
```

## SEO Tips

1. **Title**: Keep under 60 characters
2. **Excerpt**: Keep under 160 characters
3. **Tags**: Use 3-5 relevant tags
4. **Category**: Choose one primary category
5. **Date**: Use YYYY-MM-DD format
6. **Read Time**: Estimate 200 words per minute

## Performance Notes

- Blog section is lazy loaded on home page
- Individual blog pages are code-split
- Static data (no database queries)
- Optimized for Core Web Vitals

## Navigation

- Blog link in navbar
- Blog section on home page
- Individual blog post pages
- Related articles on each post
- Back navigation on blog pages

## Customization

### Change Blog Title
Edit `components/sections/Blog.tsx` line ~50

### Change Featured Count
Edit `lib/blogs.ts` - `getFeaturedBlogs()` function

### Change Related Count
Edit `lib/blogs.ts` - `getRelatedBlogs()` function

### Change Card Styling
Edit `components/BlogCard.tsx`

## Deployment Checklist

- [ ] All blog posts have unique IDs
- [ ] All images exist in `/public` folder
- [ ] All dates are in YYYY-MM-DD format
- [ ] Read times are accurate
- [ ] Categories are consistent
- [ ] Tags are relevant
- [ ] Featured posts count ≤ 3
- [ ] No broken links
- [ ] Tested on mobile/tablet/desktop

## Future Ideas

- Add search functionality
- Add comments system
- Add newsletter signup
- Add reading progress indicator
- Add social sharing buttons
- Add author bio section
- Add article archive
- Add reading time estimate
- Add table of contents
- Add code syntax highlighting

## Support Resources

- Next.js: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com/
- React: https://react.dev/

## Example Article

See `lib/blogs.ts` for 6 complete example articles covering:
1. Fire TV Performance Optimization
2. Kepler Apps Integration
3. WebView Integration
4. Shaka Player
5. Redux Toolkit
6. Testing Strategies
