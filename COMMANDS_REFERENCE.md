# Commands Reference Guide

Quick reference for all commands you'll need.

## 🚀 Development

### Start Development Server
```bash
npm run dev
```
- Runs on http://localhost:3000
- Hot reload enabled
- Watch mode for changes

### Use Different Port
```bash
npm run dev -- -p 3001
```

### Build for Production
```bash
npm run build
```
- Optimizes code
- Generates static files
- Checks for errors

### Run Production Build Locally
```bash
npm start
```
- Runs optimized build
- Simulates production environment

### Lint Code
```bash
npm run lint
```
- Checks for code issues
- Follows Next.js standards

## 📦 Dependencies

### Install All Dependencies
```bash
npm install
```

### Install Specific Package
```bash
npm install package-name
```

### Install Dev Dependency
```bash
npm install --save-dev package-name
```

### Update Dependencies
```bash
npm update
```

### Check for Vulnerabilities
```bash
npm audit
```

### Fix Vulnerabilities
```bash
npm audit fix
```

## 🗄️ Database

### Connect to MongoDB
```bash
# In your app, connection is automatic
# Check .env.local for MONGODB_URI
```

### View MongoDB Data
1. Go to MongoDB Atlas dashboard
2. Click "Collections"
3. Browse your data

### Backup Database
```bash
# In MongoDB Atlas:
# 1. Go to Backup
# 2. Click "Restore"
# 3. Download backup
```

## 📧 Email Testing

### Test Email Locally
```bash
# Use Mailtrap or similar service
# Update SMTP credentials in .env.local
```

### Check Email Logs
```bash
# In Gmail:
# 1. Go to Activity
# 2. Check "Less secure app access"
# 3. Review recent activity
```

## 🌐 Deployment

### Deploy to Vercel (CLI)
```bash
npm i -g vercel
vercel
```

### Deploy to Production
```bash
vercel --prod
```

### View Deployment Logs
```bash
vercel logs
```

### Rollback Deployment
```bash
vercel rollback
```

## 🔧 Git Commands

### Initialize Git
```bash
git init
```

### Add Files
```bash
git add .
```

### Commit Changes
```bash
git commit -m "Your message"
```

### Create Branch
```bash
git branch feature-name
git checkout feature-name
```

### Push to GitHub
```bash
git push origin main
```

### Pull Latest Changes
```bash
git pull origin main
```

### View Status
```bash
git status
```

### View Commit History
```bash
git log
```

## 🧹 Cleanup

### Clear Node Modules
```bash
rm -rf node_modules
npm install
```

### Clear Next.js Cache
```bash
rm -rf .next
npm run build
```

### Clear All Caches
```bash
rm -rf node_modules .next
npm install
npm run build
```

## 🔍 Debugging

### Check TypeScript Errors
```bash
npx tsc --noEmit
```

### Check Build Errors
```bash
npm run build
```

### View Console Logs
```bash
# In browser:
# 1. Open DevTools (F12)
# 2. Go to Console tab
# 3. Check for errors
```

### Check Network Requests
```bash
# In browser:
# 1. Open DevTools (F12)
# 2. Go to Network tab
# 3. Make request
# 4. Check response
```

## 📊 Performance

### Analyze Bundle Size
```bash
npm install --save-dev @next/bundle-analyzer
```

Then add to `next.config.js`:
```js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

Run:
```bash
ANALYZE=true npm run build
```

### Check Performance
```bash
# In browser:
# 1. Open DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Click "Analyze page load"
```

## 🔐 Security

### Generate Admin Token
```bash
# Use a secure random generator
# Option 1: Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Option 2: OpenSSL
openssl rand -hex 32

# Option 3: Online generator
# https://www.random.org/strings/
```

### Check for Vulnerabilities
```bash
npm audit
npm audit fix
```

## 📝 Environment Variables

### View Environment Variables
```bash
# In .env.local file
cat .env.local
```

### Update Environment Variables
```bash
# Edit .env.local
nano .env.local
# or
vim .env.local
```

### Verify Variables are Set
```bash
# In Node.js
node -e "console.log(process.env.MONGODB_URI)"
```

## 🚨 Common Issues

### Port 3000 Already in Use
```bash
# Find process using port
lsof -i :3000

# Kill process
kill -9 <PID>

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Build Fails
```bash
# Check for errors
npm run build

# Check TypeScript
npx tsc --noEmit

# Check linting
npm run lint
```

### Database Connection Error
```bash
# Verify connection string
echo $MONGODB_URI

# Test connection
# Use MongoDB Compass or Atlas UI
```

## 📱 Testing

### Test on Mobile
```bash
# Get your local IP
ipconfig getifaddr en0  # macOS
hostname -I            # Linux

# Visit http://YOUR_IP:3000 on mobile
```

### Test Responsive Design
```bash
# In browser:
# 1. Open DevTools (F12)
# 2. Click device toggle (Ctrl+Shift+M)
# 3. Select device
```

### Test Contact Form
```bash
# 1. Fill out form
# 2. Submit
# 3. Check email
# 4. Check MongoDB
```

## 🔄 Continuous Integration

### GitHub Actions (Optional)
```bash
# Create .github/workflows/deploy.yml
# Add deployment workflow
```

### Pre-commit Hooks (Optional)
```bash
npm install --save-dev husky
npx husky install
```

## 📚 Documentation

### Generate Documentation
```bash
# Using TypeDoc
npm install --save-dev typedoc
npx typedoc
```

## 🎯 Useful Shortcuts

### Quick Development
```bash
# Install and run
npm install && npm run dev
```

### Quick Build and Test
```bash
npm run build && npm start
```

### Quick Deploy
```bash
git add . && git commit -m "Update" && git push && vercel --prod
```

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)
- [MongoDB Docs](https://docs.mongodb.com)
- [Vercel Docs](https://vercel.com/docs)
- [Node.js Docs](https://nodejs.org/docs)

## 💡 Pro Tips

### Faster Development
```bash
# Use npm ci instead of npm install
npm ci
```

### Check Package Versions
```bash
npm list
npm list package-name
```

### Update Specific Package
```bash
npm update package-name
```

### Check Outdated Packages
```bash
npm outdated
```

### Clean Install
```bash
rm -rf node_modules package-lock.json
npm install
```

## 🆘 Getting Help

### Check Logs
```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start
```

### Check Error Messages
- Read error message carefully
- Search error on Google
- Check documentation
- Ask on Stack Overflow

### Debug Mode
```bash
# Enable debug logging
DEBUG=* npm run dev
```

---

**Bookmark this page for quick reference!**

For more detailed help, see:
- `SETUP.md` - Setup instructions
- `DEPLOYMENT.md` - Deployment guide
- `README.md` - Full documentation
