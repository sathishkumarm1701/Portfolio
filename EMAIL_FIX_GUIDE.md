# Email Not Working - Fix Guide

## Problem Identified

Your Gmail App Password had spaces in it: `kqnv rwvc gial bbnq`

This causes authentication failures with SMTP.

## ✅ Fixed

Changed `.env.local` to remove spaces:
```
SMTP_PASS=kqnvrwvcgialbbnq
```

---

## Test Email Configuration (Do This Now)

### Step 1: Install Dependencies (if needed)

```bash
cd portfolio-website
npm install
```

### Step 2: Run Email Test

```bash
node test-email.js
```

This will:
- Check all environment variables
- Verify SMTP connection
- Send a test email to yourself
- Show detailed error messages if anything fails

### Expected Output (Success)

```
🔍 Testing Email Configuration...

📋 Environment Variables:
SMTP_HOST: smtp.gmail.com
SMTP_PORT: 587
SMTP_USER: sathishm1701@gmail.com
SMTP_PASS: ✅ Set (hidden)
SMTP_FROM: sathishm1701@gmail.com

🔧 Creating email transporter...
🔌 Verifying SMTP connection...
✅ SMTP connection successful!

📧 Sending test email...
✅ Test email sent successfully!
Message ID: <...>

📬 Check your inbox: sathishm1701@gmail.com

✨ Email configuration is working correctly!
```

---

## If Test Fails

### Error: "Invalid login"

**Cause:** App Password is incorrect or has spaces

**Fix:**
1. Go to Google Account: https://myaccount.google.com/apppasswords
2. Generate a NEW App Password
3. Copy it WITHOUT spaces
4. Update `.env.local`:
   ```
   SMTP_PASS=yournewpasswordhere
   ```
5. Run test again

### Error: "Connection timeout"

**Cause:** Firewall or network blocking SMTP

**Fix:**
1. Check if port 587 is open
2. Try port 465 (SSL):
   ```
   SMTP_PORT=465
   ```
3. Check firewall settings

### Error: "App Password not available"

**Cause:** 2-Step Verification not enabled

**Fix:**
1. Go to: https://myaccount.google.com/security
2. Enable "2-Step Verification"
3. Wait 5 minutes
4. Generate App Password: https://myaccount.google.com/apppasswords
5. Update `.env.local`

---

## Common Issues & Solutions

### 1. Spaces in App Password ✅ FIXED

**Problem:** Gmail shows App Password with spaces for readability
```
kqnv rwvc gial bbnq  ❌ Wrong
```

**Solution:** Remove ALL spaces
```
kqnvrwvcgialbbnq  ✅ Correct
```

### 2. Using Regular Gmail Password

**Problem:** Using your Gmail login password instead of App Password

**Solution:** 
- NEVER use your regular Gmail password
- Always use App Password from: https://myaccount.google.com/apppasswords

### 3. App Password Expired

**Problem:** App Passwords can expire or be revoked

**Solution:**
1. Delete old App Password in Google Account
2. Generate new one
3. Update `.env.local`

### 4. Wrong SMTP Settings

**Problem:** Incorrect host or port

**Solution:** Use these exact settings for Gmail:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

OR for SSL:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
```

---

## Verify Contact Form Works

### Step 1: Start Development Server

```bash
cd portfolio-website
npm run dev
```

### Step 2: Test Contact Form

1. Open: http://localhost:3000
2. Scroll to Contact section
3. Fill out form:
   - Name: Test User
   - Email: your-email@example.com
   - Subject: Test Message
   - Category: General Inquiry
   - Message: Testing contact form
4. Click "Send Message"

### Step 3: Check Results

**Success Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! Thank you for reaching out."
}
```

**Check Your Email:**
- You should receive 2 emails:
  1. Confirmation email to the sender
  2. Notification email to you (sathishm1701@gmail.com)

---

## Production Deployment

### Vercel Environment Variables

After fixing locally, update Vercel:

1. Go to: https://vercel.com/dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Update these:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=sathishm1701@gmail.com
   SMTP_PASS=kqnvrwvcgialbbnq
   SMTP_FROM=sathishm1701@gmail.com
   ```
5. Redeploy

### Test Production

1. Visit: https://sathishm.online
2. Submit contact form
3. Check email

---

## Email Flow Diagram

```
User submits form
    ↓
API validates input
    ↓
Saves to memory/database
    ↓
Returns success immediately
    ↓
Sends emails in background (async)
    ├─→ Confirmation email to user
    └─→ Notification email to you
```

**Important:** Form returns success even if emails fail (graceful degradation)

---

## Debugging Checklist

- [ ] Removed spaces from App Password in `.env.local`
- [ ] Ran `node test-email.js` successfully
- [ ] Received test email in inbox
- [ ] Tested contact form locally
- [ ] Received both confirmation and notification emails
- [ ] Updated Vercel environment variables
- [ ] Tested production contact form
- [ ] Verified emails arrive in production

---

## Alternative: Use Different Email Service

If Gmail continues to have issues, consider:

### 1. SendGrid (Recommended for Production)

**Pros:**
- Free tier: 100 emails/day
- More reliable than Gmail
- Better deliverability
- Detailed analytics

**Setup:**
1. Sign up: https://sendgrid.com
2. Get API key
3. Update `.env.local`:
   ```
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASS=your-sendgrid-api-key
   SMTP_FROM=sathishm1701@gmail.com
   ```

### 2. Mailgun

**Pros:**
- Free tier: 5,000 emails/month
- Good for transactional emails

**Setup:**
1. Sign up: https://mailgun.com
2. Get SMTP credentials
3. Update `.env.local`

### 3. AWS SES

**Pros:**
- Very cheap ($0.10 per 1,000 emails)
- Highly scalable

**Cons:**
- More complex setup
- Requires AWS account

---

## Security Best Practices

### 1. Never Commit `.env.local`

Already in `.gitignore` ✅

### 2. Use Different Passwords

- Development: One App Password
- Production: Different App Password

### 3. Rotate App Passwords

- Change every 3-6 months
- Revoke old ones

### 4. Monitor Email Usage

- Check Gmail sent folder
- Watch for suspicious activity

---

## Monitoring Email Delivery

### Check Logs (Development)

```bash
npm run dev
```

Look for:
```
Email sent to user@example.com
Emails sent successfully
```

Or errors:
```
Email sending failed in background: [error details]
```

### Check Logs (Production - Vercel)

1. Go to Vercel Dashboard
2. Select project
3. Go to Deployments → Latest
4. Click "View Function Logs"
5. Look for email-related logs

---

## Quick Reference

### Gmail App Password Setup

1. **Enable 2-Step Verification:**
   https://myaccount.google.com/security

2. **Generate App Password:**
   https://myaccount.google.com/apppasswords
   - Select app: "Mail"
   - Select device: "Other (Custom name)"
   - Name it: "Portfolio Website"
   - Copy password WITHOUT spaces

3. **Update `.env.local`:**
   ```
   SMTP_PASS=yourapppasswordhere
   ```

### Test Commands

```bash
# Test email configuration
node test-email.js

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

---

## Status

- [x] Identified issue (spaces in App Password)
- [x] Fixed `.env.local`
- [x] Created test script (`test-email.js`)
- [ ] Run test script to verify
- [ ] Test contact form locally
- [ ] Update Vercel environment variables
- [ ] Test production contact form

---

## Next Steps

1. **Run test script NOW:**
   ```bash
   node test-email.js
   ```

2. **If test passes:**
   - Test contact form locally
   - Update Vercel env vars
   - Deploy and test production

3. **If test fails:**
   - Generate new App Password
   - Remove ALL spaces
   - Try again

---

## Support

If you still have issues after following this guide:

1. Check Gmail security settings
2. Try generating a new App Password
3. Consider using SendGrid instead
4. Check Vercel function logs for errors

---

**Priority: 🔴 URGENT - Test email now**

**Time Required: 5 minutes to test and verify**
