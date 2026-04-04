import { test, expect } from '@playwright/test'

test.describe('Blog Section - End to End', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test.describe('Blog Section on Home Page', () => {
    test('should display blog section', async ({ page }) => {
      await page.goto('/#blog')
      const blogSection = page.locator('section#blog')
      await expect(blogSection).toBeVisible()
    })

    test('should display "Latest Articles" heading', async ({ page }) => {
      await page.goto('/#blog')
      const heading = page.locator('text=Latest Articles')
      await expect(heading).toBeVisible()
    })

    test('should display featured articles', async ({ page }) => {
      await page.goto('/#blog')
      // Featured articles are in a grid with lg:col-span-2 class
      const featuredSection = page.locator('h3:has-text("Featured")').first()
      await expect(featuredSection).toBeVisible()
      // Check that there are article cards in the featured section
      const articles = page.locator('article')
      const count = await articles.count()
      expect(count).toBeGreaterThan(0)
    })

    test('should display category filter buttons', async ({ page }) => {
      await page.goto('/#blog')
      const filterButtons = page.locator('button:has-text("Fire TV"), button:has-text("Kepler Apps")')
      const count = await filterButtons.count()
      expect(count).toBeGreaterThan(0)
    })

    test('should display all articles grid', async ({ page }) => {
      await page.goto('/#blog')
      const articles = page.locator('article')
      const count = await articles.count()
      expect(count).toBeGreaterThan(3) // At least featured + some regular
    })
  })

  test.describe('Blog Listing Page', () => {
    test('should navigate to blog page', async ({ page }) => {
      await page.goto('/blog')
      await expect(page).toHaveURL('/blog')
    })

    test('should display blog page title', async ({ page }) => {
      await page.goto('/blog')
      const heading = page.locator('text=Latest Articles')
      await expect(heading).toBeVisible()
    })

    test('should display back to home button', async ({ page }) => {
      await page.goto('/blog')
      const backButton = page.locator('text=Back to Home')
      await expect(backButton).toBeVisible()
    })

    test('should navigate back to home', async ({ page }) => {
      await page.goto('/blog')
      await page.click('text=Back to Home')
      await expect(page).toHaveURL('/')
    })

    test('should display all blog articles', async ({ page }) => {
      await page.goto('/blog')
      const articles = page.locator('article')
      const count = await articles.count()
      expect(count).toBeGreaterThan(0)
    })
  })

  test.describe('Category Filtering', () => {
    test('should filter articles by Fire TV category', async ({ page }) => {
      await page.goto('/blog')
      await page.click('button:has-text("Fire TV")')
      
      // Wait for articles to update
      await page.waitForTimeout(500)
      
      const articles = page.locator('article')
      const count = await articles.count()
      expect(count).toBeGreaterThan(0)
    })

    test('should filter articles by Kepler Apps category', async ({ page }) => {
      await page.goto('/blog')
      await page.click('button:has-text("Kepler Apps")')
      
      await page.waitForTimeout(500)
      
      const articles = page.locator('article')
      const count = await articles.count()
      expect(count).toBeGreaterThan(0)
    })

    test('should show all articles when "All Articles" is clicked', async ({ page }) => {
      await page.goto('/blog')
      
      // First filter by category
      await page.click('button:has-text("Fire TV")')
      await page.waitForTimeout(500)
      const filteredCount = await page.locator('article').count()
      
      // Then click "All Articles"
      await page.click('button:has-text("All Articles")')
      await page.waitForTimeout(500)
      const allCount = await page.locator('article').count()
      
      expect(allCount).toBeGreaterThanOrEqual(filteredCount)
    })

    test('should highlight active category button', async ({ page }) => {
      await page.goto('/blog')
      const firetvButton = page.locator('button:has-text("Fire TV")')
      
      await firetvButton.click()
      await page.waitForTimeout(500)
      
      // Check if button has active styling
      await expect(firetvButton).toHaveClass(/bg-blue-600/)
    })
  })

  test.describe('Individual Blog Post', () => {
    test('should navigate to blog post page', async ({ page }) => {
      await page.goto('/blog')
      
      // Click first "Read More" button
      const readMoreButton = page.locator('text=Read More').first()
      await readMoreButton.click()
      
      // Should navigate to blog post
      await expect(page).toHaveURL(/\/blog\//)
    })

    test('should display blog post content', async ({ page }) => {
      await page.goto('/blog/fire-tv-development-guide')
      
      const title = page.locator('text=Fire TV Performance Optimization')
      await expect(title).toBeVisible()
    })

    test('should display article metadata', async ({ page }) => {
      await page.goto('/blog/fire-tv-development-guide')
      
      // Check for date - use first() to avoid strict mode violation
      const date = page.locator('text=/Mar|Feb|Jan|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/').first()
      await expect(date).toBeVisible()
      
      // Check for read time
      const readTime = page.locator('text=/min read/')
      await expect(readTime).toBeVisible()
    })

    test('should display back to articles button', async ({ page }) => {
      await page.goto('/blog/fire-tv-development-guide')
      
      const backButton = page.locator('text=Back to Articles')
      await expect(backButton).toBeVisible()
    })

    test('should navigate back to blog listing', async ({ page }) => {
      await page.goto('/blog/fire-tv-development-guide')
      
      await page.click('text=Back to Articles')
      await expect(page).toHaveURL('/blog')
    })

    test('should display article tags', async ({ page }) => {
      await page.goto('/blog/fire-tv-development-guide')
      
      const tags = page.locator('text=/^#/')
      const count = await tags.count()
      expect(count).toBeGreaterThan(0)
    })

    test('should display related articles', async ({ page }) => {
      await page.goto('/blog/fire-tv-development-guide')
      
      const relatedHeading = page.locator('text=Related Articles')
      await expect(relatedHeading).toBeVisible()
      
      const relatedArticles = page.locator('article')
      const count = await relatedArticles.count()
      expect(count).toBeGreaterThan(0)
    })

    test('should navigate to related article', async ({ page }) => {
      await page.goto('/blog/fire-tv-development-guide')
      
      // Find and click a related article
      const relatedArticles = page.locator('article').filter({ has: page.locator('text=Related Articles').locator('..') })
      const firstRelated = relatedArticles.first()
      
      const link = firstRelated.locator('a[href*="/blog/"]')
      if (await link.count() > 0) {
        await link.first().click()
        await expect(page).toHaveURL(/\/blog\//)
      }
    })

    test('should handle non-existent blog post', async ({ page }) => {
      await page.goto('/blog/non-existent-post')
      
      const notFoundText = page.locator('text=Article Not Found')
      await expect(notFoundText).toBeVisible()
    })
  })

  test.describe('Navigation Integration', () => {
    test('should have Blog link in navbar', async ({ page }) => {
      await page.goto('/')
      
      const blogLink = page.locator('a:has-text("Blog")')
      await expect(blogLink).toBeVisible()
    })

    test('should navigate to blog from navbar', async ({ page }) => {
      await page.goto('/')
      
      const blogLink = page.locator('a:has-text("Blog")')
      await blogLink.click()
      
      await expect(page).toHaveURL('/#blog')
    })

    test('should navigate to blog page from navbar', async ({ page }) => {
      await page.goto('/')
      
      // Open mobile menu if needed
      const mobileMenuButton = page.locator('button[aria-label*="menu"]').first()
      const isVisible = await mobileMenuButton.isVisible()
      
      if (isVisible) {
        await mobileMenuButton.click()
      }
      
      const blogLink = page.locator('a:has-text("Blog")')
      await blogLink.click()
      
      // Should navigate to blog section
      await expect(page).toHaveURL(/\/#blog|\/blog/)
    })
  })

  test.describe('Responsive Design', () => {
    test('should display blog section on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 })
      await page.goto('/#blog')
      
      const blogSection = page.locator('section#blog')
      await expect(blogSection).toBeVisible()
    })

    test('should display blog section on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })
      await page.goto('/#blog')
      
      const blogSection = page.locator('section#blog')
      await expect(blogSection).toBeVisible()
    })

    test('should display blog section on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 })
      await page.goto('/#blog')
      
      const blogSection = page.locator('section#blog')
      await expect(blogSection).toBeVisible()
    })

    test('should have responsive article grid on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 })
      await page.goto('/blog')
      
      const articles = page.locator('article')
      const count = await articles.count()
      expect(count).toBeGreaterThan(0)
    })

    test('should have responsive article grid on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 })
      await page.goto('/blog')
      
      const articles = page.locator('article')
      const count = await articles.count()
      expect(count).toBeGreaterThan(0)
    })
  })

  test.describe('Accessibility', () => {
    test('should have proper heading hierarchy', async ({ page }) => {
      await page.goto('/blog')
      
      const h1 = page.locator('h1')
      const h2 = page.locator('h2')
      
      await expect(h1).toBeVisible()
      await expect(h2).toBeVisible()
    })

    test('should have alt text on images', async ({ page }) => {
      await page.goto('/blog')
      
      const images = page.locator('img')
      const count = await images.count()
      
      for (let i = 0; i < count; i++) {
        const alt = await images.nth(i).getAttribute('alt')
        expect(alt).toBeTruthy()
      }
    })

    test('should have aria labels on buttons', async ({ page }) => {
      await page.goto('/blog')
      
      const buttons = page.locator('button')
      const count = await buttons.count()
      
      // At least some buttons should have aria-label
      let hasAriaLabel = false
      for (let i = 0; i < count; i++) {
        const ariaLabel = await buttons.nth(i).getAttribute('aria-label')
        if (ariaLabel) {
          hasAriaLabel = true
          break
        }
      }
      
      expect(hasAriaLabel).toBe(true)
    })

    test('should be keyboard navigable', async ({ page }) => {
      await page.goto('/blog')
      
      // Tab through elements
      await page.keyboard.press('Tab')
      const focusedElement = await page.evaluate(() => document.activeElement?.tagName)
      
      expect(focusedElement).toBeTruthy()
    })
  })

  test.describe('Performance', () => {
    test('should load blog page within acceptable time', async ({ page }) => {
      const startTime = Date.now()
      await page.goto('/blog')
      const loadTime = Date.now() - startTime
      
      // Should load within 3 seconds
      expect(loadTime).toBeLessThan(3000)
    })

    test('should load blog post within acceptable time', async ({ page }) => {
      const startTime = Date.now()
      await page.goto('/blog/fire-tv-development-guide')
      const loadTime = Date.now() - startTime
      
      // Should load within 3 seconds
      expect(loadTime).toBeLessThan(3000)
    })

    test('should have images loaded', async ({ page }) => {
      await page.goto('/blog')
      
      const images = page.locator('img')
      const count = await images.count()
      
      for (let i = 0; i < count; i++) {
        const isVisible = await images.nth(i).isVisible()
        expect(isVisible).toBe(true)
      }
    })
  })

  test.describe('SEO', () => {
    test('should have proper page title', async ({ page }) => {
      await page.goto('/blog')
      const title = await page.title()
      expect(title).toContain('Blog')
    })

    test('should have meta description', async ({ page }) => {
      await page.goto('/blog')
      const description = await page.locator('meta[name="description"]').getAttribute('content')
      expect(description).toBeTruthy()
    })

    test('should have canonical URL', async ({ page }) => {
      await page.goto('/blog')
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href')
      expect(canonical).toBeTruthy()
    })
  })
})
