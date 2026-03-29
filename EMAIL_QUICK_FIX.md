# Email Setup - Quick Fix (5 Minutes)

## The Problem
Your `.env.local` has placeholder email values. Email won't work until you configure it.

## The Solution (5 Steps)

### ✅ Step 1: Enable 2FA on Gmail (2 min)
```
1. Go to: myaccount.google.com
2. Click: Security (left menu)
3. Find: 2-Step Verification
4. Click: Enable it
5. Verify with your phone
```

### ✅ Step 2: Get App Password (1 min)
```
1. Go to: myaccount.google.com/apppasswords
2. Select: Mail + Your Device
3. Click: Generate
4. Copy: 16-character password (xxxx xxxx xxxx xxxx)
```

### ✅ Step 3: Update `.env.local` (1 min)
```
Open: portfolio-website/.env.local

Change this:
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@sathishkumar.dev

To this:
SMTP_USER=sathishm1701@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
SMTP_FROM=sathishm1701@gmail.com

Replace:
- sathishm1701@gmail.com with YOUR Gmail
- xxxx xxxx xxxx xxxx with the password from Step 2
```

### ✅ Step 4: Restart Dev Server (1 min)
```bash
# Press Ctrl+C to stop current server
# Then run:
npm run dev
```

### ✅ Step 5: Test (1 min)
```
1. Open: http://localhost:3000
2. Scroll to: Contact section
3. Fill form and submit
4. Check email for confirmation
```

---

## That's It! 🎉

Your email should now work. When someone submits the contact form:
- ✅ They get a confirmation email
- ✅ You get a notification email
- ✅ Message is stored in database

---

## If It Still Doesn't Work

### Check 1: Is 2FA enabled?
```
Go to: myaccount.google.com/security
Look for: 2-Step Verification
Should say: "On"
```

### Check 2: Did you restart the server?
```bash
# Stop: Ctrl+C
# Start: npm run dev
```

### Check 3: Is the password correct?
- Copy-paste from Google (don't type)
- Include spaces: `xxxx xxxx xxxx xxxx`
- No extra spaces at start/end

### Check 4: Check server logs
```
Look at terminal where npm run dev is running
Should show: "Email sent to [email]"
If error, read the error message
```

---

## Alternative: Less Secure (Testing Only)

If you want to skip 2FA:

1. Go to: [myaccount.google.com/security](https://myaccount.google.com/security)
2. Find: "Less secure app access"
3. Turn: ON
4. Use: Your regular Gmail password
5. Restart: Dev server

**⚠️ Not recommended for production**

---

## For Production (Vercel)

When deploying:

1. Go to Vercel dashboard
2. Settings → Environment Variables
3. Add same variables:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=sathishm1701@gmail.com
   SMTP_PASS=xxxx xxxx xxxx xxxx
   SMTP_FROM=sathishm1701@gmail.com
   ```
4. Redeploy

---

## Done! ✅

Email is now configured and working.

**Questions?** See `EMAIL_SETUP_INSTRUCTIONS.md` for detailed guide.
