# Testing Guide - Portfolio Website

## Overview

This guide covers all testing aspects of the portfolio website including unit tests, component tests, and end-to-end tests.

## Test Structure

```
portfolio-website/
├── __tests__/
│   ├── lib/
│   │   └── blogs.test.ts          # Blog utilities tests
│   └── components/
│       └── BlogCard.test.tsx       # Blog card component tests
├── e2e/
│   └── blog.spec.ts               # End-to-end blog tests
├── jest.config.js                 # Jest configuration
├── jest.setup.js                  # Jest setup file
└── playwright.config.ts           # Playwright configuration
```

## Setup

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

## Running Tests

### Unit Tests

```bash
# Run all unit tests
npm test

# Run tests in watch mode
npm test:watch

# Run tests with coverage
npm test:coverage

# Run specific test file
npm test -- blogs.test.ts

# Run tests matching pattern
npm test -- --testNamePattern="getBlogPosts"
```

### End-to-End Tests

```bash
# Run all E2E tests
npm run test:e2e

# Run E2E tests in UI mode
npm run test:e2e:ui

# Run specific E2E test file
npx playwright test e2e/blog.spec.ts

# Run tests in specific browser
npx playwright test --project=chromium

# Run tests in headed mode (see browser)
npx playwright test --headed

# Debug tests
npx playwright test --debug
```

## Test Coverage

### Unit Tests - Blog Utilities (`__tests__/lib/blogs.test.ts`)

#### getBlogPosts()
- ✅ Returns all blog posts
- ✅ Returns posts sorted by date (newest first)
- ✅ Limits results when limit parameter provided
- ✅ Returns empty array when limit is 0

#### getFeaturedBlogs()
- ✅ Returns only featured blogs
- ✅ Returns maximum 3 featured blogs
- ✅ Returns featured blogs sorted by date

#### getBlogByCategory()
- ✅ Returns blogs for valid category
- ✅ Returns empty array for invalid category
- ✅ Is case-sensitive

#### getBlogById()
- ✅ Returns blog post by valid ID
- ✅ Returns undefined for invalid ID
- ✅ Returns blog with all required fields

#### getRelatedBlogs()
- ✅ Returns related blogs based on tags
- ✅ Does not include original blog in results
- ✅ Returns blogs with shared tags
- ✅ Returns empty array for non-existent ID
- ✅ Respects limit parameter

#### getAllCategories()
- ✅ Returns array of categories
- ✅ Returns unique categories
- ✅ Includes expected categories

#### getAllTags()
- ✅ Returns array of tags
- ✅ Returns unique tags
- ✅ Returns sorted tags
- ✅ Includes expected tags

#### Blog Data Integrity
- ✅ Valid date format for all blogs
- ✅ Positive read time for all blogs
- ✅ Non-empty title and excerpt
- ✅ At least one tag per blog
- ✅ Valid image path for all blogs

### Component Tests - BlogCard (`__tests__/components/BlogCard.test.tsx`)

#### Regular Variant
- ✅ Renders blog card with title
- ✅ Renders blog excerpt
- ✅ Renders category badge
- ✅ Renders read time
- ✅ Renders tags
- ✅ Renders "Read More" link
- ✅ Renders blog image

#### Featured Variant
- ✅ Renders featured blog card with title
- ✅ Renders featured blog with larger layout
- ✅ Renders all tags in featured variant
- ✅ Renders "Read Article" button

#### Date Formatting
- ✅ Formats date correctly

#### Accessibility
- ✅ Has proper alt text for image
- ✅ Has semantic HTML structure

#### Link Navigation
- ✅ Has link to blog post
- ✅ Has correct href for featured variant

#### Content Truncation
- ✅ Truncates long excerpt in regular variant

### End-to-End Tests - Blog (`e2e/blog.spec.ts`)

#### Blog Section on Home Page
- ✅ Displays blog section
- ✅ Displays "Latest Articles" heading
- ✅ Displays featured articles
- ✅ Displays category filter buttons
- ✅ Displays all articles grid

#### Blog Listing Page
- ✅ Navigates to blog page
- ✅ Displays blog page title
- ✅ Displays back to home button
- ✅ Navigates back to home
- ✅ Displays all blog articles

#### Category Filtering
- ✅ Filters articles by Fire TV category
- ✅ Filters articles by Kepler Apps category
- ✅ Shows all articles when "All Articles" clicked
- ✅ Highlights active category button

#### Individual Blog Post
- ✅ Navigates to blog post page
- ✅ Displays blog post content
- ✅ Displays article metadata
- ✅ Displays back to articles button
- ✅ Navigates back to blog listing
- ✅ Displays article tags
- ✅ Displays related articles
- ✅ Navigates to related article
- ✅ Handles non-existent blog post

#### Navigation Integration
- ✅ Has Blog link in navbar
- ✅ Navigates to blog from navbar
- ✅ Navigates to blog page from navbar

#### Responsive Design
- ✅ Displays blog section on mobile (375x667)
- ✅ Displays blog section on tablet (768x1024)
- ✅ Displays blog section on desktop (1920x1080)
- ✅ Has responsive article grid on mobile
- ✅ Has responsive article grid on desktop

#### Accessibility
- ✅ Has proper heading hierarchy
- ✅ Has alt text on images
- ✅ Has aria labels on buttons
- ✅ Is keyboard navigable

#### Performance
- ✅ Loads blog page within 3 seconds
- ✅ Loads blog post within 3 seconds
- ✅ Has images loaded

#### SEO
- ✅ Has proper page title
- ✅ Has meta description
- ✅ Has canonical URL

## Test Execution Flow

### Before Running Tests

1. **Start Development Server** (for E2E tests)
   ```bash
   npm run dev
   ```

2. **In Another Terminal, Run Tests**
   ```bash
   npm test              # Unit tests
   npm run test:e2e      # E2E tests
   ```

### Test Execution Order

1. **Unit Tests** (Fast - ~5-10 seconds)
   - Blog utilities tests
   - Component tests

2. **E2E Tests** (Slower - ~30-60 seconds)
   - Blog section tests
   - Navigation tests
   - Responsive design tests
   - Accessibility tests
   - Performance tests

## Continuous Integration

### GitHub Actions Example

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Run unit tests
        run: npm test -- --coverage
      
      - name: Install Playwright
        run: npx playwright install --with-deps
      
      - name: Run E2E tests
        run: npm run test:e2e
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
```

## Test Debugging

### Debug Unit Tests

```bash
# Run tests in debug mode
node --inspect-brk node_modules/.bin/jest --runInBand

# Then open chrome://inspect in Chrome
```

### Debug E2E Tests

```bash
# Run with Playwright Inspector
npx playwright test --debug

# Run in headed mode to see browser
npx playwright test --headed

# Generate trace for debugging
npx playwright test --trace on
```

### View Test Reports

```bash
# Generate HTML report
npx playwright show-report

# View coverage report
npm test -- --coverage
open coverage/lcov-report/index.html
```

## Common Issues & Solutions

### Issue: Tests fail with "Cannot find module"
**Solution**: Ensure `jest.config.js` has correct `moduleNameMapper` for `@/` alias

### Issue: Playwright tests timeout
**Solution**: Increase timeout in `playwright.config.ts` or specific test

### Issue: Mock not working
**Solution**: Check `jest.setup.js` for proper mock configuration

### Issue: E2E tests fail locally but pass in CI
**Solution**: Check viewport size, network conditions, or timing issues

## Best Practices

### Unit Tests
- ✅ Test one thing per test
- ✅ Use descriptive test names
- ✅ Mock external dependencies
- ✅ Test edge cases
- ✅ Keep tests fast

### Component Tests
- ✅ Test user interactions
- ✅ Test accessibility
- ✅ Test rendering
- ✅ Test props variations
- ✅ Use semantic queries

### E2E Tests
- ✅ Test user workflows
- ✅ Test across browsers
- ✅ Test responsive design
- ✅ Test accessibility
- ✅ Test performance

## Coverage Goals

- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 80%
- **Lines**: > 80%

## Test Maintenance

### Regular Tasks
- [ ] Update tests when features change
- [ ] Add tests for new features
- [ ] Review and refactor tests
- [ ] Update test data
- [ ] Monitor test performance

### Quarterly Review
- [ ] Review test coverage
- [ ] Update dependencies
- [ ] Optimize slow tests
- [ ] Remove obsolete tests
- [ ] Document new patterns

## Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Playwright Documentation](https://playwright.dev/)
- [Testing Best Practices](https://testingjavascript.com/)

## Support

For test-related issues:
1. Check test output for error messages
2. Review test file for logic errors
3. Check mock configuration
4. Consult documentation
5. Debug with inspector tools

---

**Last Updated**: March 2026
**Version**: 1.0.0
**Status**: Complete ✅
