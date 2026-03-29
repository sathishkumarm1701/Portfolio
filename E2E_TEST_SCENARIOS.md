# End-to-End Test Scenarios

## Test Scenario Overview

Comprehensive E2E test scenarios for the portfolio website blog system.

## Scenario 1: User Discovers Blog on Home Page

### Steps
1. User visits home page
2. User scrolls to "Latest Articles" section
3. User sees featured articles
4. User sees category filter buttons
5. User sees all articles grid

### Expected Results
- Blog section is visible
- Featured articles display correctly
- Category buttons are clickable
- Articles are in responsive grid
- All elements load within 3 seconds

### Assertions
```
✓ Blog section visible
✓ Featured articles count = 3
✓ Category buttons visible
✓ Articles grid responsive
✓ No console errors
```

---

## Scenario 2: User Navigates to Blog Page

### Steps
1. User clicks "Blog" link in navbar
2. User is redirected to `/blog`
3. User sees blog listing page
4. User sees all blog articles
5. User sees back to home button

### Expected Results
- Navigation to `/blog` successful
- Blog page title displays
- All articles visible
- Back button functional
- Page loads within 3 seconds

### Assertions
```
✓ URL = /blog
✓ Page title contains "Blog"
✓ Articles count > 0
✓ Back button visible
✓ Load time < 3s
```

---

## Scenario 3: User Filters Articles by Category

### Steps
1. User is on blog page
2. User clicks "Fire TV" category button
3. Articles are filtered
4. User sees only Fire TV articles
5. User clicks "All Articles" to reset

### Expected Results
- Category filter works
- Only Fire TV articles display
- Active button highlighted
- All articles button resets filter
- Filter updates instantly

### Assertions
```
✓ Fire TV articles displayed
✓ All articles have category = "Fire TV"
✓ Active button has blue background
✓ All articles button resets filter
✓ No console errors
```

---

## Scenario 4: User Reads Individual Blog Post

### Steps
1. User is on blog page
2. User clicks "Read More" on article
3. User navigates to blog post page
4. User sees full article content
5. User sees article metadata
6. User sees related articles

### Expected Results
- Navigation to `/blog/[id]` successful
- Article content displays
- Metadata visible (date, author, read time)
- Related articles display
- Back button functional

### Assertions
```
✓ URL = /blog/[id]
✓ Article title visible
✓ Article content visible
✓ Metadata displays
✓ Related articles visible
✓ Back button works
```

---

## Scenario 5: User Navigates Between Related Articles

### Steps
1. User is on blog post page
2. User sees related articles section
3. User clicks on related article
4. User navigates to new blog post
5. User sees new article content
6. User sees new related articles

### Expected Results
- Related articles clickable
- Navigation successful
- New article content displays
- New related articles show
- No broken links

### Assertions
```
✓ Related articles clickable
✓ Navigation successful
✓ New article displays
✓ New related articles show
✓ No 404 errors
```

---

## Scenario 6: User Handles Non-Existent Blog Post

### Steps
1. User navigates to `/blog/non-existent-post`
2. User sees error message
3. User sees back to blog button
4. User clicks back button
5. User returns to blog page

### Expected Results
- Error message displays
- Back button visible
- Navigation back works
- No console errors
- Graceful error handling

### Assertions
```
✓ Error message visible
✓ Back button visible
✓ Navigation works
✓ No console errors
✓ Proper error handling
```

---

## Scenario 7: User Tests Responsive Design on Mobile

### Steps
1. User opens portfolio on mobile (375x667)
2. User scrolls to blog section
3. User sees single column layout
4. User clicks on article
5. User reads article on mobile
6. User navigates back

### Expected Results
- Blog section responsive
- Single column layout
- Text readable
- Images scale properly
- Touch interactions work
- Navigation works

### Assertions
```
✓ Viewport = 375x667
✓ Single column layout
✓ Text readable
✓ Images visible
✓ Touch works
✓ Navigation works
```

---

## Scenario 8: User Tests Responsive Design on Tablet

### Steps
1. User opens portfolio on tablet (768x1024)
2. User scrolls to blog section
3. User sees two column layout
4. User clicks on article
5. User reads article on tablet
6. User navigates back

### Expected Results
- Blog section responsive
- Two column layout
- Text readable
- Images scale properly
- Touch interactions work
- Navigation works

### Assertions
```
✓ Viewport = 768x1024
✓ Two column layout
✓ Text readable
✓ Images visible
✓ Touch works
✓ Navigation works
```

---

## Scenario 9: User Tests Responsive Design on Desktop

### Steps
1. User opens portfolio on desktop (1920x1080)
2. User scrolls to blog section
3. User sees three column layout
4. User sees featured articles span 2 columns
5. User clicks on article
6. User reads article on desktop

### Expected Results
- Blog section responsive
- Three column layout
- Featured articles span 2 columns
- Text readable
- Images scale properly
- Navigation works

### Assertions
```
✓ Viewport = 1920x1080
✓ Three column layout
✓ Featured articles span 2 columns
✓ Text readable
✓ Images visible
✓ Navigation works
```

---

## Scenario 10: User Tests Keyboard Navigation

### Steps
1. User opens blog page
2. User presses Tab to navigate
3. User navigates through elements
4. User presses Enter on links
5. User presses Escape if needed
6. User navigates back

### Expected Results
- Tab navigation works
- Focus indicators visible
- Links clickable with Enter
- All interactive elements accessible
- No keyboard traps
- Logical tab order

### Assertions
```
✓ Tab navigation works
✓ Focus indicators visible
✓ Enter activates links
✓ No keyboard traps
✓ Logical tab order
✓ All elements accessible
```

---

## Scenario 11: User Tests with Screen Reader

### Steps
1. User enables screen reader
2. User navigates to blog page
3. User hears page structure
4. User hears article titles
5. User hears category buttons
6. User navigates to article

### Expected Results
- Page structure announced
- Headings announced
- Links announced
- Buttons announced
- Images have alt text
- Form labels associated

### Assertions
```
✓ Headings announced
✓ Links announced
✓ Buttons announced
✓ Images have alt text
✓ Proper ARIA labels
✓ Semantic HTML used
```

---

## Scenario 12: User Tests Performance

### Steps
1. User opens blog page
2. User measures load time
3. User checks for images
4. User checks animations
5. User checks console
6. User measures performance

### Expected Results
- Page loads < 3 seconds
- Images load properly
- Animations smooth
- No console errors
- No console warnings
- Good performance score

### Assertions
```
✓ Load time < 3s
✓ Images loaded
✓ Animations smooth
✓ No console errors
✓ No console warnings
✓ Performance good
```

---

## Scenario 13: User Tests SEO

### Steps
1. User inspects page source
2. User checks page title
3. User checks meta description
4. User checks canonical URL
5. User checks structured data
6. User checks Open Graph tags

### Expected Results
- Page title set
- Meta description set
- Canonical URL set
- Structured data present
- Open Graph tags set
- Twitter tags set

### Assertions
```
✓ Page title set
✓ Meta description set
✓ Canonical URL set
✓ Structured data present
✓ Open Graph tags set
✓ Twitter tags set
```

---

## Scenario 14: User Tests Cross-Browser Compatibility

### Steps
1. User tests on Chrome
2. User tests on Firefox
3. User tests on Safari
4. User tests on Edge
5. User tests on mobile browsers
6. User verifies consistency

### Expected Results
- All browsers render correctly
- All interactions work
- Performance acceptable
- No browser-specific issues
- Consistent experience
- All features work

### Assertions
```
✓ Chrome: All tests pass
✓ Firefox: All tests pass
✓ Safari: All tests pass
✓ Edge: All tests pass
✓ Mobile Chrome: All tests pass
✓ Mobile Safari: All tests pass
```

---

## Scenario 15: User Tests Error Recovery

### Steps
1. User navigates to non-existent post
2. User sees error message
3. User clicks back button
4. User returns to blog
5. User navigates to valid post
6. User reads article successfully

### Expected Results
- Error handled gracefully
- Error message clear
- Back button works
- Navigation recovers
- No broken state
- User can continue

### Assertions
```
✓ Error message visible
✓ Back button works
✓ Navigation recovers
✓ No broken state
✓ User can continue
✓ No console errors
```

---

## Test Execution Matrix

| Scenario | Unit | Component | E2E | Mobile | Tablet | Desktop |
|----------|------|-----------|-----|--------|--------|---------|
| 1. Discover Blog | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 2. Navigate to Blog | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 3. Filter Articles | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 4. Read Article | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 5. Related Articles | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 6. Error Handling | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 7. Mobile Design | - | - | ✓ | ✓ | - | - |
| 8. Tablet Design | - | - | ✓ | - | ✓ | - |
| 9. Desktop Design | - | - | ✓ | - | - | ✓ |
| 10. Keyboard Nav | - | - | ✓ | ✓ | ✓ | ✓ |
| 11. Screen Reader | - | - | ✓ | ✓ | ✓ | ✓ |
| 12. Performance | - | - | ✓ | ✓ | ✓ | ✓ |
| 13. SEO | - | - | ✓ | - | - | ✓ |
| 14. Cross-Browser | - | - | ✓ | ✓ | ✓ | ✓ |
| 15. Error Recovery | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

---

## Test Execution Checklist

### Before Testing
- [ ] All dependencies installed
- [ ] Playwright browsers installed
- [ ] Development server running
- [ ] No console errors
- [ ] Network connection stable

### During Testing
- [ ] Follow scenario steps
- [ ] Record results
- [ ] Note any issues
- [ ] Take screenshots if needed
- [ ] Document failures

### After Testing
- [ ] Review all results
- [ ] Document findings
- [ ] Report issues
- [ ] Update test cases
- [ ] Sign off on testing

---

## Test Results Template

```
Scenario: [Scenario Name]
Date: [Date]
Tester: [Name]
Browser: [Browser]
Device: [Device]
Status: [PASS/FAIL]

Steps Completed:
- [ ] Step 1
- [ ] Step 2
- [ ] Step 3

Assertions:
- [ ] Assertion 1
- [ ] Assertion 2
- [ ] Assertion 3

Issues Found:
[List any issues]

Notes:
[Additional notes]
```

---

**Last Updated**: March 2026
**Version**: 1.0.0
**Status**: Complete ✅
