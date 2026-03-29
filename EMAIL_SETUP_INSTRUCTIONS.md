# Email Setup - Complete Instructions

## Current Status
❌ Email is not working because `.env.local` has placeholder values

## What You Need to Do

### Step 1: Enable 2-Factor Authentication on Gmail

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click **Security** in the left sidebar
3. Scroll down to **How you sign in to Google**
4. Click **2-Step Verification**
5. Follow the prompts to enable it
6. You'll need to verify with your phone

**Status**: ✅ Complete when you see "2-Step Verification is on"

---

### Step 2: Generate Gmail App Password

1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - **Note**: You must have 2-Factor Authentication enabled (Step 1)
   - If you don't see this page, go back and enable 2FA first

2. You'll see a dropdown menu:
   - **Select app**: Choose **Mail**
   - **Select device**: Choose **Windows Computer** (or your device type)

3. Click **Generate**

4. Google will show you a 16-character password like:
   ```
   xxxx xxxx xxxx xxxx
   ```

5. **Copy this password** - you'll use it in the next step

**Status**: ✅ Complete when you have the 16-character password

---

### Step 3: Update `.env.local` File

Open `portfolio-website/.env.local` and update the email section:

**Current (Wrong):**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@sathishkumar.dev
```

**Updated (Correct):**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=sathishm1701@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
SMTP_FROM=sathishm1701@gmail.com
```

**Replace:**
- `sathishm1701@gmail.com` with your actual Gmail address
- `xxxx xxxx xxxx xxxx` with the 16-character password from Step 2
- Keep the spaces in the password

**Status**: ✅ Complete when `.env.local` is updated

---

### Step 4: Restart the Dev Server

1. Stop the current dev server:
   - Press `Ctrl+C` in your terminal

2. Restart it:
   ```bash
   npm run dev
   ```

3. Wait for it to start (you'll see "ready - started server on 0.0.0.0:3000")

**Status**: ✅ Complete when dev server is running

---

### Step 5: Test the Email

1. Open your portfolio website: `http://localhost:3000`
2. Scroll to the **Contact** section
3. Fill out the form:
   - Name: Your name
   - Email: Your email address
   - Message: Test message
4. Click **Send Message**
5. Check your email for the confirmation message

**Status**: ✅ Complete when you receive the email

---

## Troubleshooting

### Problem: "Username and Password not accepted"

**Solution 1: Check 2-Factor Authentication**
- Go to [myaccount.google.com/security](https://myaccount.google.com/security)
- Look for "2-Step Verification"
- It should say "On"
- If it says "Off", enable it first

**Solution 2: Use the App Password, Not Regular Password**
- Don't use your Gmail password
- Use the 16-character password from App Passwords
- Include the spaces: `xxxx xxxx xxxx xxxx`

**Solution 3: Verify the Password is Correct**
- Copy-paste the password directly from Google
- Don't type it manually
- Make sure there are no extra spaces at the beginning or end

**Solution 4: Restart the Dev Server**
- Environment variables only load when the server starts
- Stop the server: `Ctrl+C`
- Restart it: `npm run dev`

### Problem: "App Passwords" option not showing

This means 2-Factor Authentication is not enabled.
- Go back to Step 1
- Enable 2-Factor Authentication first
- Then try to access App Passwords again

### Problem: Still not working after all steps?

Try this alternative (less secure, but works for testing):

1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Scroll down to **Less secure app access**
3. Turn it **ON**
4. Use your regular Gmail password in `.env.local`
5. Restart the dev server

**Note**: This is not recommended for production. Use App Passwords for production.

---

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

---

## Alternative Email Services

If Gmail doesn't work, you can use these alternatives:

### SendGrid (Recommended for Production)
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

---

## Quick Checklist

- [ ] 2-Factor Authentication enabled on Gmail
- [ ] App Password generated (16 characters)
- [ ] `.env.local` updated with correct email and password
- [ ] Dev server restarted
- [ ] Contact form tested
- [ ] Email received successfully

---

## What Happens When Email is Configured

When someone submits the contact form:

1. **Confirmation Email** - Sent to the person who submitted the form
   - Subject: "Message Received - Sathish Kumar M"
   - Contains: Thank you message

2. **Admin Notification** - Sent to your email
   - Subject: "New Contact: [Name]"
   - Contains: Full message details

3. **Database** - Message stored in MongoDB (if configured)
   - Can be retrieved later
   - Includes timestamp and IP address

---

## Email Configuration Details

### What Each Variable Does

| Variable | Purpose | Example |
|----------|---------|---------|
| `SMTP_HOST` | Email server address | `smtp.gmail.com` |
| `SMTP_PORT` | Email server port | `587` |
| `SMTP_USER` | Your Gmail address | `sathishm1701@gmail.com` |
| `SMTP_PASS` | App Password (16 chars) | `xxxx xxxx xxxx xxxx` |
| `SMTP_FROM` | Sender email address | `sathishm1701@gmail.com` |

### Why App Password?

- **More Secure**: Doesn't expose your main Gmail password
- **Limited Access**: Only works for email sending
- **Revocable**: Can be deleted anytime
- **Required**: Gmail requires this for third-party apps

---

## Testing Email Locally

### Test 1: Basic Form Submission
1. Fill out contact form
2. Submit
3. Check email for confirmation

### Test 2: Check Server Logs
1. Look at terminal where dev server is running
2. You should see: `Email sent to [email]`
3. If you see errors, check the error message

### Test 3: Check Admin Email
1. Submit form with your email
2. Check your Gmail inbox
3. You should receive admin notification

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| "Username and Password not accepted" | Use App Password, not regular password |
| "App Passwords not showing" | Enable 2-Factor Authentication first |
| "Email not received" | Restart dev server, check spam folder |
| "Error in server logs" | Check `.env.local` for typos |
| "Form submits but no email" | Check if SMTP variables are set |

---

## Next Steps

1. **Complete Step 1-5 above** to set up email
2. **Test the contact form** to verify it works
3. **Check your email** for confirmation message
4. **Deploy to production** with same email configuration

---

**Once email is set up, your contact form will be fully functional!**

**Last Updated**: March 29, 2026
**Status**: Ready to configure
