# Getting Started with Your Portfolio

Welcome! This guide will help you get your portfolio up and running.

## 📋 What You Have

A complete, production-ready portfolio website with:
- ✨ Modern animations and smooth scrolling
- 🎨 Dark theme with glassmorphism design
- 📱 Fully responsive layout
- 📧 Contact form with email integration
- 🗄️ MongoDB database for messages
- 🚀 Ready to deploy on Vercel

## 🚀 Quick Start (5 Minutes)

### 1. Install Dependencies
```bash
cd portfolio-website
npm install
```

### 2. Set Up Environment
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add:
- MongoDB connection string
- Gmail SMTP credentials
- Admin token

### 3. Run Locally
```bash
npm run dev
```

Visit http://localhost:3000

### 4. Customize
Edit files in `components/sections/` to add your information

### 5. Deploy
```bash
npm i -g vercel
vercel
```

## 📚 Documentation

### For Setup Help
→ Read `SETUP.md`
- MongoDB Atlas setup
- Gmail configuration
- Environment variables
- Detailed customization

### For Deployment
→ Read `DEPLOYMENT.md`
- Vercel deployment steps
- Custom domain setup
- Production configuration
- Monitoring and maintenance

### For Customization
→ Read `CUSTOMIZATION_CHECKLIST.md`
- What to update
- Where to find each section
- Content examples
- Tips and tricks

### For Full Details
→ Read `README.md`
- Complete documentation
- API endpoints
- Performance info
- Browser support

## 🎯 Your First Steps

### Step 1: Update Personal Info (10 min)

**Hero Section** - `components/sections/Hero.tsx`
```tsx
// Change these:
<h1>Sathish Kumar M</h1>
<h2>React Native Developer | OTT & Amazon Fire TV Specialist</h2>
<p>Building high-performance streaming experiences for millions</p>
```

**About Section** - `components/sections/About.tsx`
```tsx
// Update your bio and highlights
```

### Step 2: Add Your Experience (15 min)

**Experience Timeline** - `components/sections/Experience.tsx`
```tsx
// Add your work history
{
  company: 'Your Company',
  position: 'Your Position',
  period: '2022 - Present',
  achievements: ['Achievement 1', 'Achievement 2']
}
```

### Step 3: Showcase Your Projects (15 min)

**Projects Section** - `components/sections/Projects.tsx`
```tsx
// Add your projects
{
  title: 'Project Name',
  description: 'What it does',
  tech: ['React', 'Node.js'],
  achievements: ['What you achieved']
}
```

### Step 4: Update Skills (5 min)

**Skills Section** - `components/sections/Skills.tsx`
```tsx
// Update your skills
skills: ['React Native', 'TypeScript', 'Fire TV']
```

### Step 5: Add Resume (2 min)

1. Save your resume as `public/resume.pdf`
2. Done! Download button will work automatically

## 🔧 Setting Up Backend

### MongoDB Setup (5 min)

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create cluster (M0 free tier)
4. Create database user
5. Get connection string
6. Add to `.env.local`

### Gmail Setup (3 min)

1. Enable 2-factor authentication
2. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Generate App Password
4. Add to `.env.local`

## 🧪 Testing

### Test Locally
```bash
npm run dev
```

### Test Contact Form
1. Fill out form
2. Check your email for confirmation
3. Check admin email for notification

### Test Build
```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

### Option 1: Dashboard (Easiest)
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Add environment variables
5. Deploy

### Option 2: CLI
```bash
npm i -g vercel
vercel
```

## 📁 Project Structure

```
portfolio-website/
├── app/                          # Next.js app
│   ├── api/contact/route.ts      # Contact API
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── Navbar.tsx                # Navigation
│   ├── Footer.tsx                # Footer
│   ├── ParticleBackground.tsx    # Animations
│   └── sections/                 # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Achievements.tsx
│       └── Contact.tsx
├── lib/                          # Utilities
│   ├── db.ts                     # Database
│   ├── email.ts                  # Email
│   ├── rateLimit.ts              # Rate limiting
│   └── models/Contact.ts         # Database schema
├── public/                       # Static files
│   └── resume.pdf                # Your resume
└── Configuration files
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.ts
    ├── next.config.js
    └── vercel.json
```

## 🎨 Customization Examples

### Change Hero Title
File: `components/sections/Hero.tsx`
```tsx
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
  <span className="gradient-text">Your Name Here</span>
</h1>
```

### Add New Project
File: `components/sections/Projects.tsx`
```tsx
{
  title: 'My Awesome Project',
  description: 'What it does',
  tech: ['React', 'Node.js', 'MongoDB'],
  achievements: ['Achievement 1', 'Achievement 2'],
  link: 'https://project-link.com',
}
```

### Update Skills
File: `components/sections/Skills.tsx`
```tsx
skills: ['React Native', 'TypeScript', 'Fire TV', 'Redux']
```

## 🔐 Environment Variables

Create `.env.local`:
```env
# MongoDB
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@sathishkumar.dev

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Your Name

# Admin
ADMIN_TOKEN=your-secure-token
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### MongoDB Connection Error
- Check connection string
- Verify IP whitelist in MongoDB Atlas
- Ensure database user password is correct

### Email Not Sending
- Verify Gmail credentials
- Check 2-factor authentication is enabled
- Verify App Password is correct

### Build Errors
```bash
rm -rf node_modules .next
npm install
npm run build
```

## 📊 Performance

Your portfolio includes:
- ✅ Image lazy loading
- ✅ Code splitting
- ✅ Optimized animations
- ✅ Efficient particle rendering
- ✅ Fast API responses

Target metrics:
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s

## 🔒 Security

- ✅ Input validation
- ✅ Rate limiting
- ✅ CORS protection
- ✅ Environment variables
- ✅ XSS protection headers

## 📱 Responsive Design

Works perfectly on:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 📺 Large screens (1920px+)

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Set up environment variables
3. ✅ Run locally
4. ✅ Customize with your info
5. ✅ Test contact form
6. ✅ Deploy to Vercel
7. ✅ Set up custom domain
8. ✅ Share with the world!

## 📞 Need Help?

- **Setup issues?** → See `SETUP.md`
- **Deployment help?** → See `DEPLOYMENT.md`
- **Customization?** → See `CUSTOMIZATION_CHECKLIST.md`
- **Full docs?** → See `README.md`

## 🎉 You're All Set!

Your portfolio is ready to go. Start customizing and deploying!

### Quick Commands

```bash
# Install
npm install

# Development
npm run dev

# Build
npm run build

# Production
npm start

# Deploy
vercel
```

---

**Happy coding!** 🚀

Questions? Check the documentation files or review the component code.
