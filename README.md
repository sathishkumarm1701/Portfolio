# Sathish Kumar M - Developer Portfolio

A modern, high-performance developer portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Smooth animations and transitions with Framer Motion
- 🎨 Dark theme with glassmorphism design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 High-performance optimizations
- 📧 Contact form with MongoDB integration
- 🔐 Rate limiting and validation
- 📊 Admin panel for viewing messages
- 🎯 SEO optimized
- ⚡ Fast loading with lazy loading images
- 🌙 Particle background animation

## Tech Stack

### Frontend
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

### Backend
- Next.js API Routes
- Node.js
- Express (optional)
- MongoDB
- Nodemailer

### Deployment
- Vercel
- MongoDB Atlas

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- MongoDB Atlas account
- Gmail account (for email notifications)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your configuration:
```env
# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@sathishkumar.dev

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Sathish Kumar M

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5

# Admin Token (for viewing messages)
ADMIN_TOKEN=your-secure-token
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:
```bash
npm run build
npm start
```

## Project Structure

```
portfolio-website/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── Navbar.tsx                # Navigation bar
│   ├── Footer.tsx                # Footer
│   ├── ParticleBackground.tsx    # Particle animation
│   └── sections/
│       ├── Hero.tsx              # Hero section
│       ├── About.tsx             # About section
│       ├── Skills.tsx            # Skills section
│       ├── Experience.tsx        # Experience timeline
│       ├── Projects.tsx          # Projects showcase
│       ├── Achievements.tsx      # Achievements
│       └── Contact.tsx           # Contact form
├── lib/
│   ├── db.ts                     # MongoDB connection
│   ├── email.ts                  # Email utilities
│   ├── rateLimit.ts              # Rate limiting
│   └── models/
│       └── Contact.ts            # Contact schema
├── public/
│   └── resume.pdf                # Resume file
├── .env.local.example            # Environment variables template
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## Configuration

### MongoDB Setup

1. Create a MongoDB Atlas account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user
4. Get your connection string
5. Add it to `.env.local`

### Email Setup (Gmail)

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Use the generated password in `SMTP_PASS`

### Customization

Edit the following files to customize your portfolio:

- `app/page.tsx` - Main page structure
- `components/sections/Hero.tsx` - Hero section content
- `components/sections/About.tsx` - About section
- `components/sections/Experience.tsx` - Experience timeline
- `components/sections/Projects.tsx` - Projects showcase
- `components/sections/Skills.tsx` - Skills section
- `components/Footer.tsx` - Footer links and info

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Environment Variables on Vercel

Add these in Vercel dashboard under Project Settings → Environment Variables:
- `MONGODB_URI`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `ADMIN_TOKEN`

## API Endpoints

### POST /api/contact
Submit a contact form message.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!",
  "id": "message-id"
}
```

### GET /api/contact
Retrieve all contact messages (requires admin token).

**Headers:**
```
Authorization: Bearer your-admin-token
```

## Performance Optimizations

- Image lazy loading
- Code splitting with dynamic imports
- CSS-in-JS optimization
- Particle animation using Canvas
- Smooth scrolling with Lenis
- Optimized animations with Framer Motion

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your portfolio.

## Support

For issues or questions, please open an issue on GitHub.

## Author

Sathish Kumar M - React Native Developer | OTT & Fire TV Specialist

- Website: [sathishkumar.dev](https://sathishkumar.dev)
- LinkedIn: [linkedin.com/in/sathish-kumar-m](https://linkedin.com/in/sathish-kumar-m)
- GitHub: [github.com/sathishkumar](https://github.com/sathishkumar)
