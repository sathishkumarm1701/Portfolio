# Test Checklist - Portfolio Website

## Pre-Testing Setup

- [ ] Install all dependencies: `npm install`
- [ ] Install Playwright browsers: `npx playwright install`
- [ ] Verify Node.js version (18+)
- [ ] Check all environment variables
- [ ] Verify database connections (if applicable)

## Unit Tests

### Blog Utilities Tests (`__tests__/lib/blogs.test.ts`)

#### getBlogPosts()
- [ ] Returns all blog posts
- [ ] Returns posts sorted by date (newest first)
- [ ] Limits results when limit parameter provided
- [ ] Returns empty array when limit is 0
- [ ] Returns correct number of posts

#### getFeaturedBlogs()
- [ ] Returns only featured blogs
- [ ] Returns maximum 3 featured blogs
- [ ] Returns featured blogs sorted by date
- [ ] All returned blogs have featured: true

#### getBlogByCategory()
- [ ] Returns blogs for valid category
- [ ] Returns empty array for invalid category
- [ ] Is case-sensitive
- [ ] All returned blogs match category

#### getBlogById()
- [ ] Returns blog post by valid ID
- [ ] Returns undefined for invalid ID
- [ ] Returns blog with all required fields
- [ ] Returned blog has correct ID

#### getRelatedBlogs()
- [ ] Returns related blogs based on tags
- [ ] Does not include original blog in results
- [ ] Returns blogs with shared tags
- [ ] Returns empty array for non-existent ID
- [ ] Respects limit parameter

#### getAllCategories()
- [ ] Returns array of categories
- [ ] Returns unique categories
- [ ] Includes expected categories
- [ ] No duplicate categories

#### getAllTags()
- [ ] Returns array of tags
- [ ] Returns unique tags
- [ ] Returns sorted tags
- [ ] Includes expected tags
- [ ] No duplicate tags

#### Blog Data Integrity
- [ ] Valid date format for all blogs
- [ ] Positive read time for all blogs
- [ ] Non-empty title and excerpt
- [ ] At least one tag per blog
- [ ] Valid image path for all blogs
- [ ] Author field populated
- [ ] Content field populated

### Component Tests (`__tests__/components/BlogCard.test.tsx`)

#### Regular Variant
- [ ] Renders blog card with title
- [ ] Renders blog excerpt
- [ ] Renders category badge
- [ ] Renders read time
- [ ] Renders tags
- [ ] Renders "Read More" link
- [ ] Renders blog image
- [ ] Image has correct src

#### Featured Variant
- [ ] Renders featured blog card with title
- [ ] Renders featured blog with larger layout
- [ ] Renders all tags in featured variant
- [ ] Renders "Read Article" button
- [ ] Has correct CSS classes for featured

#### Date Formatting
- [ ] Formats date correctly
- [ ] Date is readable format
- [ ] Date matches blog date

#### Accessibility
- [ ] Has proper alt text for image
- [ ] Has semantic HTML structure
- [ ] Article tag used
- [ ] Proper heading hierarchy

#### Link Navigation
- [ ] Has link to blog post
- [ ] Has correct href for featured variant
- [ ] Has correct href for regular variant
- [ ] Links are clickable

#### Content Truncation
- [ ] Truncates long excerpt in regular variant
- [ ] Uses line-clamp class
- [ ] Excerpt is readable

## Component Integration Tests

### Blog Section Component
- [ ] Renders blog section
- [ ] Displays featured articles
- [ ] Displays category filter buttons
- [ ] Displays all articles grid
- [ ] Category filtering works
- [ ] Animations are smooth

### Navbar Component
- [ ] Blog link is visible
- [ ] Blog link navigates correctly
- [ ] Blog link is in correct position
- [ ] Mobile menu includes Blog link

## End-to-End Tests

### Blog Section on Home Page
- [ ] Blog section is visible
- [ ] "Latest Articles" heading displays
- [ ] Featured articles display
- [ ] Category filter buttons display
- [ ] All articles grid displays
- [ ] Scroll to blog section works

### Blog Listing Page (`/blog`)
- [ ] Page navigates successfully
- [ ] Blog page title displays
- [ ] Back to home button displays
- [ ] Back button navigates correctly
- [ ] All blog articles display
- [ ] Page loads within 3 seconds

### Category Filtering
- [ ] Fire TV category filter works
- [ ] Kepler Apps category filter works
- [ ] All Articles button works
- [ ] Active category button highlighted
- [ ] Filtered articles display correctly
- [ ] Filter persists on page

### Individual Blog Post (`/blog/[id]`)
- [ ] Blog post page navigates
- [ ] Blog post content displays
- [ ] Article metadata displays (date, author, read time)
- [ ] Back to articles button displays
- [ ] Back button navigates correctly
- [ ] Article tags display
- [ ] Related articles display
- [ ] Related articles are clickable
- [ ] Non-existent post shows error

### Navigation Integration
- [ ] Blog link in navbar visible
- [ ] Blog link navigates to blog section
- [ ] Blog link works on all pages
- [ ] Mobile menu includes Blog link
- [ ] Mobile menu Blog link works

### Responsive Design

#### Mobile (375x667)
- [ ] Blog section displays
- [ ] Articles stack vertically
- [ ] Text is readable
- [ ] Images scale properly
- [ ] Buttons are clickable
- [ ] Navigation works

#### Tablet (768x1024)
- [ ] Blog section displays
- [ ] Articles in 2-column grid
- [ ] Text is readable
- [ ] Images scale properly
- [ ] Buttons are clickable

#### Desktop (1920x1080)
- [ ] Blog section displays
- [ ] Articles in 3-column grid
- [ ] Featured articles span 2 columns
- [ ] Text is readable
- [ ] Images scale properly

### Accessibility

#### Keyboard Navigation
- [ ] Tab through elements works
- [ ] Focus indicators visible
- [ ] Links are keyboard accessible
- [ ] Buttons are keyboard accessible
- [ ] Forms are keyboard accessible

#### Screen Reader
- [ ] Headings are announced
- [ ] Images have alt text
- [ ] Buttons have labels
- [ ] Links have descriptive text
- [ ] Form labels are associated

#### Color Contrast
- [ ] Text contrast is sufficient
- [ ] Links are distinguishable
- [ ] Buttons are distinguishable
- [ ] No color-only information

#### Semantic HTML
- [ ] Proper heading hierarchy
- [ ] Article tags used
- [ ] Section tags used
- [ ] Nav tags used
- [ ] Button tags used

### Performance

#### Load Time
- [ ] Blog page loads < 3 seconds
- [ ] Blog post loads < 3 seconds
- [ ] Images load properly
- [ ] No console errors
- [ ] No console warnings

#### Animations
- [ ] Animations are smooth
- [ ] No jank or stuttering
- [ ] Animations respect prefers-reduced-motion
- [ ] Animations don't block interaction

#### Bundle Size
- [ ] Blog code is optimized
- [ ] No unused code
- [ ] Lazy loading works
- [ ] Code splitting works

### SEO

#### Meta Tags
- [ ] Page title is set
- [ ] Meta description is set
- [ ] Keywords are set
- [ ] Open Graph tags are set
- [ ] Twitter tags are set

#### Structured Data
- [ ] Schema.org markup present
- [ ] JSON-LD format used
- [ ] Markup is valid
- [ ] Markup is complete

#### Canonical URLs
- [ ] Canonical URL is set
- [ ] Canonical URL is correct
- [ ] No duplicate content issues

### Cross-Browser Testing

#### Chrome/Chromium
- [ ] All tests pass
- [ ] Rendering correct
- [ ] Interactions work
- [ ] Performance good

#### Firefox
- [ ] All tests pass
- [ ] Rendering correct
- [ ] Interactions work
- [ ] Performance good

#### Safari/WebKit
- [ ] All tests pass
- [ ] Rendering correct
- [ ] Interactions work
- [ ] Performance good

#### Mobile Chrome
- [ ] All tests pass
- [ ] Touch interactions work
- [ ] Responsive design works
- [ ] Performance good

#### Mobile Safari
- [ ] All tests pass
- [ ] Touch interactions work
- [ ] Responsive design works
- [ ] Performance good

## Integration Tests

### Blog + Navigation
- [ ] Blog link in navbar works
- [ ] Blog section on home page works
- [ ] Blog page navigation works
- [ ] Back navigation works

### Blog + Routing
- [ ] `/blog` route works
- [ ] `/blog/[id]` route works
- [ ] Dynamic routing works
- [ ] 404 handling works

### Blog + Styling
- [ ] Dark theme works
- [ ] Light theme works (if applicable)
- [ ] Responsive styles work
- [ ] Animations work

### Blog + Performance
- [ ] Lazy loading works
- [ ] Code splitting works
- [ ] Images optimized
- [ ] CSS optimized

## Regression Tests

### After Each Update
- [ ] All unit tests pass
- [ ] All component tests pass
- [ ] All E2E tests pass
- [ ] No new console errors
- [ ] No new console warnings
- [ ] Performance not degraded

### Before Deployment
- [ ] All tests pass
- [ ] Coverage meets goals
- [ ] No failing tests
- [ ] No skipped tests
- [ ] Performance acceptable

## Test Execution

### Run All Tests
```bash
npm test                    # Unit tests
npm run test:coverage       # With coverage
npm run test:e2e           # E2E tests
npm run test:e2e:ui        # E2E with UI
```

### Test Results
- [ ] All unit tests pass
- [ ] All component tests pass
- [ ] All E2E tests pass
- [ ] Coverage > 80%
- [ ] No flaky tests
- [ ] No timeout issues

## Documentation

- [ ] Testing guide complete
- [ ] Test cases documented
- [ ] Setup instructions clear
- [ ] Troubleshooting guide included
- [ ] Examples provided

## Sign-Off

- [ ] All tests written
- [ ] All tests passing
- [ ] Coverage acceptable
- [ ] Documentation complete
- [ ] Ready for deployment

---

**Test Execution Date**: _______________
**Executed By**: _______________
**Status**: _______________

## Notes

_______________________________________________________________
_______________________________________________________________
_______________________________________________________________

---

**Last Updated**: March 2026
**Version**: 1.0.0
