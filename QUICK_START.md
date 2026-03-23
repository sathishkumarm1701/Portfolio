# Quick Start Guide

Get your portfolio running in 5 minutes!

## 1. Install Dependencies

```bash
npm install
```

## 2. Set Up Environment Variables

Copy the example file:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add:
- MongoDB connection string
- Gmail SMTP credentials
- Admin token

## 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 4. Customize Your Portfolio

Edit these files:
- `components/sections/Hero.tsx` - Your name and title
- `components/sections/About.tsx` - Your bio
- `components/sections/Experience.tsx` - Your work experience
- `components/sections/Projects.tsx` - Your projects
- `components/sections/Skills.tsx` - Your skills
- `components/Footer.tsx` - Social links

## 5. Test Contact Form

1. Fill out the contact form
2. Check your email for confirmation
3. Check admin email for notification

## 6. Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Follow the prompts and add environment variables when asked.

## Common Issues

**MongoDB connection error?**
- Check your connection string
- Verify IP whitelist in MongoDB Atlas

**Email not sending?**
- Verify Gmail App Password
- Check spam folder

**Build error?**
```bash
rm -rf node_modules .next
npm install
npm run build
```

## Next Steps

1. Add your resume to `public/resume.pdf`
2. Update social media links
3. Add your projects
4. Deploy to Vercel
5. Set up custom domain

## Need Help?

- Check `SETUP.md` for detailed setup
- Check `DEPLOYMENT.md` for deployment
- Check `README.md` for full documentation

Happy coding! 🚀
