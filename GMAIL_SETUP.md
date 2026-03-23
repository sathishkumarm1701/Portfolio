# Gmail Setup for Email Notifications

## Problem
Gmail rejected the password with error: `535-5.7.8 Username and Password not accepted`

## Solution
You need to use an **App Password**, not your regular Gmail password.

## Step-by-Step Setup

### Step 1: Enable 2-Factor Authentication
1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click **Security** in the left menu
3. Scroll down to **How you sign in to Google**
4. Click **2-Step Verification**
5. Follow the prompts to enable it

### Step 2: Generate App Password
1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. You should see a dropdown for "Select the app and device you're using"
3. Select:
   - App: **Mail**
   - Device: **Windows Computer** (or your device type)
4. Click **Generate**
5. Google will show you a 16-character password like: `xxxx xxxx xxxx xxxx`
6. **Copy this password** (you'll need it in the next step)

### Step 3: Update .env.local
Edit your `.env.local` file and update:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=sathishm1701@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
SMTP_FROM=sathishm1701@gmail.com
```

**Important**: 
- Replace `xxxx xxxx xxxx xxxx` with the 16-character password from Step 2
- Keep the spaces in the password
- Use your actual Gmail address for both `SMTP_USER` and `SMTP_FROM`

### Step 4: Restart Your App
```bash
# Stop the dev server (Ctrl+C)
# Then restart it
npm run dev
```

### Step 5: Test
1. Fill out the contact form
2. Submit it
3. Check your email for the confirmation message

## Troubleshooting

### Still getting "Username and Password not accepted"?

**Check 1: Is 2-Factor Authentication enabled?**
- Go to [myaccount.google.com/security](https://myaccount.google.com/security)
- Look for "2-Step Verification" - it should say "On"
- If it says "Off", enable it first

**Check 2: Did you use the App Password?**
- Don't use your regular Gmail password
- Use the 16-character password from App Passwords
- Include the spaces: `xxxx xxxx xxxx xxxx`

**Check 3: Is the password correct?**
- Copy-paste the password directly from Google
- Don't type it manually
- Make sure there are no extra spaces

**Check 4: Did you restart the app?**
- Stop the dev server: `Ctrl+C`
- Restart it: `npm run dev`
- Environment variables only load on startup

### "App Passwords" option not showing?

This means 2-Factor Authentication is not enabled. Follow Step 1 above.

### Still not working?

Try this alternative approach:

1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Scroll down to "Less secure app access"
3. Turn it ON (not recommended for production, but works for testing)
4. Use your regular Gmail password in `.env.local`

## For Production (Vercel)

When you deploy to Vercel:

1. Go to your Vercel project dashboard
2. Go to **Settings** → **Environment Variables**
3. Add these variables:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=sathishm1701@gmail.com
   SMTP_PASS=xxxx xxxx xxxx xxxx
   SMTP_FROM=sathishm1701@gmail.com
   ```
4. Redeploy your project

## Alternative Email Services

If Gmail doesn't work, you can use:

### SendGrid (Recommended)
1. Create account at [sendgrid.com](https://sendgrid.com)
2. Generate API key
3. Update `.env.local`:
   ```env
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASS=SG.xxxxx...
   SMTP_FROM=your-email@example.com
   ```

### Mailgun
1. Create account at [mailgun.com](https://www.mailgun.com)
2. Get SMTP credentials
3. Update `.env.local` with Mailgun SMTP details

### AWS SES
1. Set up AWS SES
2. Verify your email
3. Get SMTP credentials
4. Update `.env.local`

## Quick Checklist

- [ ] 2-Factor Authentication enabled on Gmail
- [ ] App Password generated (16 characters)
- [ ] `.env.local` updated with App Password
- [ ] Dev server restarted
- [ ] Contact form tested
- [ ] Email received

## Need Help?

1. Check the error message carefully
2. Verify 2-Factor Authentication is ON
3. Verify you're using the App Password (not regular password)
4. Restart the dev server
5. Try again

---

**Once this is set up, emails will send automatically when someone submits the contact form!**
