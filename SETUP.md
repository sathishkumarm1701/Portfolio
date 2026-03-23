# Setup Instructions

## Quick Start Guide

### Step 1: Clone and Install

```bash
git clone <your-repo-url>
cd portfolio-website
npm install
```

### Step 2: MongoDB Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new project
4. Create a cluster (M0 free tier is fine)
5. Create a database user:
   - Username: `portfolio_user`
   - Password: Generate a strong password
6. Get connection string:
   - Click "Connect" → "Drivers" → "Node.js"
   - Copy the connection string
   - Replace `<password>` with your password
   - Replace `myFirstDatabase` with `portfolio`

### Step 3: Gmail Setup for Email

1. Go to [Gmail Account Settings](https://myaccount.google.com/security)
2. Enable 2-Step Verification if not already enabled
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select "Mail" and "Windows Computer"
5. Generate and copy the 16-character password

### Step 4: Environment Variables

Create `.env.local` file:

```env
# MongoDB
MONGODB_URI=mongodb+srv://portfolio_user:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
SMTP_FROM=noreply@sathishkumar.dev

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Sathish Kumar M

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5

# Admin Token (generate a random string)
ADMIN_TOKEN=your-super-secret-admin-token-12345
```

### Step 5: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Customization

### Update Personal Information

**Hero Section** (`components/sections/Hero.tsx`):
- Change name, title, and tagline
- Update CTA button links

**About Section** (`components/sections/About.tsx`):
- Update bio and experience
- Modify highlights (years, achievements)

**Skills Section** (`components/sections/Skills.tsx`):
- Add/remove skill categories
- Update skill names

**Experience Section** (`components/sections/Experience.tsx`):
- Add your work experience
- Update company names and achievements

**Projects Section** (`components/sections/Projects.tsx`):
- Add your projects
- Update tech stack and achievements
- Add project links

**Footer** (`components/Footer.tsx`):
- Update social media links
- Add resume PDF to `public/resume.pdf`

### Add Resume

1. Place your resume PDF in `public/resume.pdf`
2. Update the download link in `components/Footer.tsx` if needed

## Deployment to Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Add environment variables:
   - `MONGODB_URI`
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM`
   - `ADMIN_TOKEN`
5. Click "Deploy"

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## Testing

### Test Contact Form

1. Fill out the contact form on the website
2. Check your email for confirmation
3. Check admin email for notification

### Test Admin Panel

```bash
curl -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  https://your-domain.com/api/contact
```

## Troubleshooting

### MongoDB Connection Error

- Verify connection string in `.env.local`
- Check IP whitelist in MongoDB Atlas (add 0.0.0.0/0 for development)
- Ensure database user password is correct

### Email Not Sending

- Verify Gmail credentials
- Check if 2-factor authentication is enabled
- Verify App Password is correct (16 characters)
- Check spam folder

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Port Already in Use

```bash
# Use different port
npm run dev -- -p 3001
```

## Performance Tips

1. Optimize images before adding to projects
2. Use lazy loading for images
3. Monitor bundle size: `npm run build`
4. Use Chrome DevTools to check performance

## Security

- Never commit `.env.local` to git
- Use strong admin token
- Enable MongoDB IP whitelist
- Use HTTPS in production
- Validate all form inputs

## Next Steps

1. Add your projects and achievements
2. Update social media links
3. Add your resume
4. Deploy to Vercel
5. Set up custom domain
6. Monitor analytics

## Support

For issues:
1. Check MongoDB connection
2. Verify environment variables
3. Check browser console for errors
4. Check server logs in Vercel dashboard

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Vercel Deployment](https://vercel.com/docs)
