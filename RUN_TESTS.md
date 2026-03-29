# How to Run Tests - Quick Guide

## ⚠️ IMPORTANT: Run Commands from `portfolio-website` Directory

Make sure you're in the correct directory:
```bash
cd portfolio-website
```

Then run the commands below.

---

## Unit Tests

### Run All Unit Tests
```bash
npm test
```

**Expected Output:**
```
PASS __tests__/lib/blogs.test.ts
PASS __tests__/components/BlogCard.test.tsx

Test Suites: 2 passed, 2 total
Tests:       47 passed, 47 total
```

### Run Tests in Watch Mode
```bash
npm test:watch
```
Tests will re-run automatically when files change.

### Run Tests with Coverage Report
```bash
npm run test:coverage
```

**Expected Output:**
```
BlogCard Component:     100% coverage
blogs.ts Utilities:     96.96% coverage
```

---

## E2E Tests

### Run All E2E Tests
```bash
npm run test:e2e
```

This will:
- Automatically start the dev server
- Run tests across multiple browsers
- Generate HTML report

**Note**: First run may take 2-5 minutes as it starts the dev server.

### Run E2E Tests with Interactive UI
```bash
npm run test:e2e:ui
```

Opens an interactive UI where you can:
- See tests running in real-time
- Debug individual tests
- Inspect elements

### Run E2E Tests with Visible Browser
```bash
npx playwright test --headed
```

Shows the browser window while tests run.

### Run Specific E2E Test
```bash
npx playwright test -g "should display blog section"
```

### Debug E2E Tests
```bash
npx playwright test --debug
```

Opens Playwright Inspector for step-by-step debugging.

---

## Build & Lint

### Build for Production
```bash
npm run build
```

### Run Linting
```bash
npm run lint
```

### Start Dev Server
```bash
npm run dev
```

---

## View Test Reports

### View E2E Test Report
```bash
npx playwright show-report
```

This opens an HTML report showing:
- Test results
- Screenshots on failure
- Error details
- Execution time

---

## Complete Test Workflow

Run these commands in order:

```bash
# 1. Install dependencies (if not already done)
npm install

# 2. Run unit tests
npm test

# 3. Check coverage
npm run test:coverage

# 4. Build project
npm run build

# 5. Run E2E tests
npm run test:e2e

# 6. View E2E report
npx playwright show-report
```

---

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
```

### Build Errors
```bash
# Clean build
rm -rf .next
npm run build
```

### Port 3000 Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Try again
npm run test:e2e
```

---

## Test Results Summary

### Unit Tests
- ✅ 47 tests passing
- ✅ 2 test suites passing
- ✅ ~1.2 seconds execution time

### E2E Tests
- ✅ 50+ test scenarios
- ✅ Multi-browser testing
- ✅ Mobile device testing
- ✅ ~2-5 minutes execution time

### Coverage
- ✅ BlogCard: 100% coverage
- ✅ blogs.ts: 96.96% coverage

---

## Documentation

For more information, see:
- **FINAL_TESTING_SUMMARY.md** - Complete overview
- **TESTING_QUICK_START.md** - Quick reference
- **E2E_TESTING_GUIDE.md** - E2E testing guide
- **TESTING_COMPLETE_REPORT.md** - Detailed report

---

## Key Points

1. **Always run from `portfolio-website` directory**
2. **Unit tests run in ~1.2 seconds**
3. **E2E tests take 2-5 minutes (includes dev server startup)**
4. **All 47 unit tests are passing**
5. **50+ E2E test scenarios are ready**
6. **Build is successful with no errors**

---

**Status**: ✅ Ready for production
**Last Updated**: March 29, 2026
