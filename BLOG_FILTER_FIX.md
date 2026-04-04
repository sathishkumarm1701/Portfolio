# Blog Category Filter Fix

## Issue Fixed
When clicking category filter buttons (Fire TV, Kepler Apps, etc.) and then clicking "All Articles", the page would scroll back to the top showing "Latest Articles" heading, and the filter section would appear hidden or show empty space.

## Root Cause
1. No scroll management when filtering - page position would jump
2. Component re-rendering without proper keys causing layout shifts
3. Featured section appearing/disappearing causing layout jumps

## Solution Applied

### 1. Added Scroll Management
- Added `useRef` to track the filter section position
- Implemented smooth scroll to keep filter section in view when category changes
- Added 100px offset to account for fixed navbar

### 2. Improved Component Keys
- Added unique keys to blog grid container: `key={selectedCategory || 'all'}`
- Added category-specific keys to BlogCard: `key={${selectedCategory}-${blog.id}}`
- Forces proper re-render when category changes

### 3. Layout Stability
- Maintained `min-h-[400px]` on blog grid to prevent collapse
- Featured section only shows when "All Articles" is selected
- Consistent spacing throughout filtering

## Changes Made

### File: `portfolio-website/components/sections/Blog.tsx`

**Added:**
```typescript
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
```

**Updated:**
- Added `ref={filterSectionRef}` to category filter div
- Added `key={selectedCategory || 'all'}` to blog grid container
- Changed BlogCard key from `blog.id` to `${selectedCategory}-${blog.id}`

## Testing Checklist

✅ Click "Fire TV" - should show 2 articles and scroll to filter section
✅ Click "Kepler Apps" - should show 1 article and scroll to filter section
✅ Click "Video Streaming" - should show 1 article and scroll to filter section
✅ Click "React Native" - should show 1 article and scroll to filter section
✅ Click "Testing" - should show 1 article and scroll to filter section
✅ Click "All Articles" - should show 6 articles and scroll to filter section
✅ Featured section only appears when "All Articles" is selected
✅ No empty space or hidden sections
✅ Smooth scroll behavior
✅ Correct article counts displayed

## Blog Post Categories

- **All Articles**: 6 posts
- **Fire TV**: 2 posts
  - Fire TV Performance Optimization
  - WebView Integration in Fire TV Apps
- **Kepler Apps**: 1 post
  - Integrating Kepler Apps with Fire TV
- **Video Streaming**: 1 post
  - Shaka Player: Advanced Video Streaming
- **React Native**: 1 post
  - State Management with Redux Toolkit
- **Testing**: 1 post
  - Testing Strategies for Fire TV Apps

## How to Test

1. Build the production version:
   ```bash
   npm run build
   npm run start
   ```

2. Open http://localhost:3000

3. Scroll down to the blog section

4. Click each category button and verify:
   - Correct number of articles shown
   - Page scrolls to keep filter section visible
   - No empty space or layout jumps
   - Featured section appears/disappears correctly

5. Click "All Articles" to return to full list

## Technical Details

### Scroll Behavior
- Uses `window.scrollTo()` with `behavior: 'smooth'`
- 100ms timeout allows React state to update before scrolling
- -100px offset accounts for fixed navbar height

### Re-render Strategy
- Unique keys force React to properly re-render components
- Category-specific keys prevent stale component reuse
- Memo wrapper prevents unnecessary parent re-renders

### Layout Stability
- `min-h-[400px]` prevents section collapse during filtering
- Consistent grid structure across all categories
- Featured section conditionally rendered based on filter state

## Performance Impact
- Minimal: Only adds scroll calculation on filter change
- Smooth scroll is hardware-accelerated
- No additional network requests
- Component memoization prevents unnecessary re-renders

## Browser Compatibility
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers
- Uses standard Web APIs (scrollTo, getBoundingClientRect)

---

**Status**: ✅ Fixed and tested
**Date**: April 3, 2026
