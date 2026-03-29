# Testing Quick Start Guide

## Overview
This project includes comprehensive testing with Jest (unit tests) and Playwright (E2E tests).

## Quick Commands

### Unit Tests
```bash
# Run all unit tests once
npm test

# Run tests in watch mode (re-runs on file changes)
npm test:watch

# Run tests with coverage report
npm run test:coverage
```

### E2E Tests
```bash
# Run all E2E tests (starts dev server automatically)
npm run test:e2e

# Run E2E tests with interactive UI
npm run test:e2e:ui

# Run E2E tests with visible browser
npx playwright test --headed

# Run specific test file
npx playwright test e2e/blog.spec.ts

# Run tests in debug mode
npx playwright test --debug
```

## Test Structure

### Unit Tests (47 tests)
Located in `__tests__/` directory:
- `__tests__/lib/blogs.test.ts` - Blog utility functions (30+ tests)
- `__tests__/components/BlogCard.test.tsx` - BlogCard component (15+ tests)

**Coverage**: 96.96% for blogs.ts, 100% for BlogCard.tsx

### E2E Tests
Located in `e2e/` directory:
- `e2e/blog.spec.ts` - Complete blog feature workflows

**Browsers Tested**: Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari

## Test Results

### Latest Run
- ✅ **47 unit tests passing**
- ✅ **0 failures**
- ✅ **Build successful**
- ✅ **No TypeScript errors**

### Coverage Report
```
BlogCard Component:     100% coverage
blogs.ts Utilities:     96.96% coverage
Overall:                7.14% (focused on tested modules)
```

## What's Being Tested

### Blog Utilities (`blogs.ts`)
- ✅ Fetching all blog posts
- ✅ Limiting results
- ✅ Getting featured blogs
- ✅ Filtering by category
- ✅ Finding posts by ID
- ✅ Getting related posts
- ✅ Extracting categories and tags
- ✅ Edge cases and error handling

### BlogCard Component
- ✅ Featured variant rendering
- ✅ Regular variant rendering
- ✅ Correct data display
- ✅ Styling and responsive classes
- ✅ Accessibility attributes

### E2E Workflows
- ✅ Blog section visibility on home page
- ✅ Blog listing page navigation
- ✅ Individual blog post pages
- ✅ Category filtering
- ✅ Search functionality
- ✅ Responsive design on mobile
- ✅ Navigation between posts

## Configuration Files

### Jest Configuration
- **File**: `jest.config.js`
- **Setup**: `jest.setup.js`
- **Features**:
  - Next.js support
  - jsdom environment
  - Module path mapping
  - E2E tests excluded from unit test runs

### Playwright Configuration
- **File**: `playwright.config.ts`
- **Features**:
  - Auto-starts dev server
  - Multiple browser support
  - Mobile device testing
  - Screenshot on failure
  - HTML report generation

## Troubleshooting

### Tests Won't Run
```bash
# Clear Jest cache
npm test -- --clearCache

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### E2E Tests Timeout
```bash
# Increase timeout
npx playwright test --timeout=60000

# Run with debug output
npx playwright test --debug
```

### Build Errors
```bash
# Clean build
rm -rf .next
npm run build
```

## CI/CD Integration

To integrate tests into your CI/CD pipeline:

```yaml
# Example GitHub Actions
- name: Run unit tests
  run: npm test

- name: Run E2E tests
  run: npm run test:e2e
```

## Best Practices

1. **Run tests before committing**
   ```bash
   npm test && npm run test:coverage
   ```

2. **Monitor coverage**
   - Aim for >80% coverage on critical paths
   - Check `coverage/` directory after running coverage tests

3. **Add tests for new features**
   - Unit tests for utilities
   - Component tests for UI changes
   - E2E tests for user workflows

4. **Keep tests fast**
   - Mock external dependencies
   - Use test data efficiently
   - Avoid unnecessary waits

## Resources

- [Jest Documentation](https://jestjs.io/)
- [Playwright Documentation](https://playwright.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Next.js Testing](https://nextjs.org/docs/testing)

---

**Last Updated**: March 29, 2026
**Test Framework**: Jest + Playwright
**Status**: ✅ All tests passing
