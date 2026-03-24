# Google Analytics Setup Guide

## Overview
Google Analytics 4 (GA4) is now integrated into your portfolio. It will track visitor behavior, traffic sources, and help you understand who's visiting your site.

## Step 1: Create a Google Analytics Account

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click **Start measuring** or **Create account**
3. Fill in your account details:
   - **Account name**: Your name or "Portfolio"
   - **Website URL**: Your custom domain (e.g., `sathishkumar.dev`)
   - **Industry category**: Technology
   - **Business size**: Small

## Step 2: Create a Property

1. After creating the account, create a new **Property**
2. **Property name**: "Portfolio Website"
3. **Reporting timezone**: Asia/Kolkata (or your timezone)
4. **Currency**: INR (or your currency)

## Step 3: Your Measurement ID

Your Google Analytics Measurement ID is: **G-VR1HFN2ZBV**

This has already been added to your portfolio code in `app/layout.tsx`

## Step 4: Verify Setup

The Google Analytics tag is now installed in your portfolio:
- Location: `app/layout.tsx` in the `<head>` section
- Measurement ID: `G-VR1HFN2ZBV`
- Status: ✅ Active and ready to track

## Step 5: Verify It's Working

1. After deploying, wait 5-10 minutes
2. Go back to GA4 dashboard
3. Click **Realtime** (left sidebar)
4. Visit your portfolio website
5. You should see yourself as an active user in the Realtime view

## What You Can Track

### Essential Metrics
- **Total Visitors**: How many people visited your site
- **Traffic Source**: Where they came from (Google, LinkedIn, direct, etc.)
- **Location**: Which country/city they're from
- **Time on Page**: How long they stayed (under 30 seconds = bounce)
- **Scroll Depth**: Which sections they viewed

### Key Reports to Check
1. **Realtime** - See live visitors right now
2. **Acquisition** - Where traffic comes from
3. **Engagement** - Which pages people spend time on
4. **Conversions** - Track contact form submissions
5. **Audience** - Demographics and location data

## Combine with Google Search Console

For complete SEO insights:
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your custom domain
3. This shows:
   - Keywords people used to find you
   - Your average ranking position
   - Click-through rate from search results

**GA4 + Search Console = Complete picture of your traffic**

## Privacy & GDPR

Your portfolio is already GDPR-compliant:
- GA4 is configured with privacy-friendly settings
- No personal data is collected
- Visitors can opt-out via browser settings
- No cookies are set for tracking (GA4 uses first-party cookies only)

## Tips for Portfolio Analytics

1. **Check weekly**: See if traffic is growing
2. **Monitor bounce rate**: If >70%, your hero section might need work
3. **Track scroll depth**: If people don't reach projects, reorder sections
4. **Watch for geographic patterns**: If most visitors are from India, optimize for that
5. **Compare traffic sources**: Which channel (LinkedIn, Google, direct) sends best visitors?

## Troubleshooting

**GA4 not showing data?**
- Wait 24-48 hours for initial data to appear
- Check that `NEXT_PUBLIC_GA_ID` is set correctly
- Verify it's deployed to Vercel (not just local)
- Check browser console for errors

**Want to exclude your own visits?**
- In GA4, go to Admin → Data Filters
- Create a filter to exclude your IP address
- This prevents your own visits from skewing data

## Next Steps

1. ✅ GA4 is now installed
2. ⏳ Wait 24 hours for data to appear
3. 📊 Check your Realtime dashboard
4. 🔍 Set up Google Search Console for SEO data
5. 📈 Review analytics weekly to understand your audience

---

**Questions?** Check the [GA4 documentation](https://support.google.com/analytics/answer/10089681) or reach out to Google Analytics support.
