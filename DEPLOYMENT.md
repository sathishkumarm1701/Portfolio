# Deployment Guide

## Pre-Deployment Checklist

- [ ] All personal information updated
- [ ] Projects and achievements added
- [ ] Resume PDF added to `public/resume.pdf`
- [ ] Social media links updated
- [ ] Environment variables configured
- [ ] MongoDB Atlas cluster created
- [ ] Gmail App Password generated
- [ ] Code tested locally

## Vercel Deployment

### Option 1: Using Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Select your repository
   - Click "Import"

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add the following variables:
     ```
     MONGODB_URI=mongodb+srv://...
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_USER=your-email@gmail.com
     SMTP_PASS=xxxx xxxx xxxx xxxx
     SMTP_FROM=noreply@sathishkumar.dev
     ADMIN_TOKEN=your-secure-token
     NEXT_PUBLIC_SITE_URL=https://your-domain.com
     NEXT_PUBLIC_SITE_NAME=Sathish Kumar M
     ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site is live!

### Option 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production
vercel --prod
```

## Custom Domain Setup

### Add Domain to Vercel

1. In Vercel dashboard, go to Settings → Domains
2. Enter your domain name
3. Click "Add"
4. Follow DNS configuration instructions

### DNS Configuration

**For Namecheap:**
1. Go to Domain List → Manage
2. Go to Advanced DNS
3. Add CNAME record:
   - Host: `@` or `www`
   - Value: `cname.vercel-dns.com`
   - TTL: 30 min

**For GoDaddy:**
1. Go to DNS Management
2. Add CNAME record:
   - Name: `@` or `www`
   - Value: `cname.vercel-dns.com`
   - TTL: 1 hour

**For Other Providers:**
- Follow Vercel's DNS instructions
- Usually involves adding CNAME or A records

### SSL Certificate

- Vercel automatically provides free SSL
- Certificate is issued within 24 hours
- Redirects HTTP to HTTPS automatically

## MongoDB Atlas Production Setup

### Create Production Cluster

1. **Create Dedicated Cluster**
   - Go to MongoDB Atlas
   - Create new cluster (M2 or higher for production)
   - Choose region closest to your users

2. **Configure Security**
   - Go to Network Access
   - Add IP address: `0.0.0.0/0` (or specific Vercel IPs)
   - Create database user with strong password

3. **Enable Backups**
   - Go to Backup
   - Enable automatic backups
   - Set retention to 30 days

4. **Monitor Performance**
   - Use MongoDB Atlas monitoring
   - Set up alerts for high CPU/memory

## Email Configuration for Production

### Gmail Setup

1. Enable 2-factor authentication
2. Generate App Password
3. Use in `SMTP_PASS`

### Alternative: SendGrid

1. Create SendGrid account
2. Generate API key
3. Update environment variables:
   ```
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASS=SG.xxxxx
   ```

### Alternative: AWS SES

1. Verify email in AWS SES
2. Generate SMTP credentials
3. Update environment variables accordingly

## Performance Optimization

### Image Optimization

1. Compress images before uploading
2. Use WebP format when possible
3. Implement lazy loading (already done)

### Build Optimization

```bash
# Check bundle size
npm run build

# Analyze bundle
npm install --save-dev @next/bundle-analyzer
```

### Caching Strategy

- Static pages: 1 year
- API routes: No cache
- Images: 1 year

## Monitoring and Analytics

### Vercel Analytics

1. In Vercel dashboard, go to Analytics
2. Monitor:
   - Page load times
   - Core Web Vitals
   - Traffic patterns

### Error Tracking

1. Go to Deployments → Logs
2. Monitor for errors
3. Set up email alerts

### Database Monitoring

1. MongoDB Atlas → Monitoring
2. Check:
   - Query performance
   - Connection count
   - Storage usage

## Backup Strategy

### MongoDB Backups

- Enable automatic backups in MongoDB Atlas
- Download backups monthly
- Test restore process quarterly

### Code Backups

- Use GitHub for version control
- Tag releases: `git tag v1.0.0`
- Create releases on GitHub

## Security Checklist

- [ ] Environment variables not in git
- [ ] Strong admin token generated
- [ ] MongoDB IP whitelist configured
- [ ] HTTPS enabled
- [ ] Rate limiting active
- [ ] Input validation enabled
- [ ] CORS properly configured
- [ ] Admin endpoints protected

## Troubleshooting Deployment

### Build Fails

```bash
# Check build locally
npm run build

# Check for TypeScript errors
npx tsc --noEmit

# Check for linting errors
npm run lint
```

### Environment Variables Not Working

1. Verify variables in Vercel dashboard
2. Redeploy after adding variables
3. Check variable names match exactly

### Database Connection Issues

1. Verify MongoDB URI
2. Check IP whitelist in MongoDB Atlas
3. Test connection locally first

### Email Not Sending

1. Verify SMTP credentials
2. Check spam folder
3. Test with curl:
   ```bash
   curl -X POST https://your-domain.com/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
   ```

## Post-Deployment

### Verify Everything Works

1. [ ] Website loads
2. [ ] All sections visible
3. [ ] Contact form works
4. [ ] Emails received
5. [ ] Mobile responsive
6. [ ] Performance acceptable

### Set Up Monitoring

1. Enable Vercel Analytics
2. Set up error alerts
3. Monitor database usage
4. Check email delivery

### Maintenance

- Update dependencies monthly
- Monitor security advisories
- Review analytics
- Backup data regularly

## Rollback Procedure

If something goes wrong:

1. **Vercel Rollback**
   - Go to Deployments
   - Click on previous deployment
   - Click "Redeploy"

2. **Code Rollback**
   ```bash
   git revert <commit-hash>
   git push origin main
   ```

## Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

## Support and Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com)
- [Vercel Support](https://vercel.com/support)

## Maintenance Schedule

- **Daily**: Monitor error logs
- **Weekly**: Check analytics
- **Monthly**: Update dependencies, review security
- **Quarterly**: Full backup test, performance review
- **Annually**: Security audit, infrastructure review
