# Google Search Console Setup Guide

## Critical: Do This Today (10 Minutes)

Google Search Console tells Google your site exists and helps it rank when recruiters search your name.

### Step 1: Add Property (2 minutes)

1. Go to: https://search.google.com/search-console
2. Click "Add Property"
3. Choose "Domain" property type
4. Enter: `sathishm.online`

### Step 2: Verify via DNS (5 minutes)

Google will give you a TXT record like:
```
google-site-verification=abc123xyz456
```

**Add this to Namecheap:**

1. Log into Namecheap
2. Go to Domain List → Manage → Advanced DNS
3. Click "Add New Record"
4. Type: `TXT Record`
5. Host: `@`
6. Value: `google-site-verification=abc123xyz456` (use YOUR code)
7. TTL: Automatic
8. Save

**Wait 5-10 minutes**, then click "Verify" in Search Console.

### Step 3: Submit Sitemap (1 minute)

Once verified:

1. In Search Console, go to "Sitemaps" (left sidebar)
2. Enter: `sitemap.xml`
3. Click "Submit"

Your sitemap is already live at: https://sathishm.online/sitemap.xml

### Step 4: Request Indexing (2 minutes)

1. Go to "URL Inspection" in Search Console
2. Enter: `https://sathishm.online`
3. Click "Request Indexing"

This tells Google to crawl your site immediately instead of waiting weeks.

## What This Does

- Makes your portfolio appear when recruiters Google "Sathish Kumar M React Native"
- Shows your site in search results within 24-48 hours
- Provides analytics on how people find you
- Alerts you to any technical SEO issues

## Verification Status

- [ ] Property added to Search Console
- [ ] DNS TXT record added to Namecheap
- [ ] Ownership verified
- [ ] Sitemap submitted
- [ ] Homepage indexing requested

## After Setup

Check Search Console weekly to see:
- How many people found your site via Google
- What keywords they searched
- Any crawl errors to fix

## Troubleshooting

**Verification fails?**
- Wait 10-15 minutes after adding DNS record
- Check you copied the EXACT verification code
- Make sure Host is `@` not `www`

**Sitemap not found?**
- Your sitemap is already live, this shouldn't happen
- If it does, check: https://sathishm.online/sitemap.xml in browser

## Next Steps After Verification

1. Submit blog post URLs individually for faster indexing
2. Set up Google Analytics (if not already done)
3. Monitor "Performance" tab weekly for search traffic
