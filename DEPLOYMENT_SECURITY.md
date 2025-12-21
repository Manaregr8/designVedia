# Deployment & Security Optimization Guide

## Pre-Deployment Checklist

### Environment Configuration
- [ ] Set `NEXT_PUBLIC_APP_URL` to production domain
- [ ] Generate strong `ADMIN_SESSION_SECRET` (32+ random characters)
- [ ] Change default `ADMIN_USERNAME` and `ADMIN_PASSWORD`
- [ ] Verify `DATABASE_URL` points to production database
- [ ] Ensure all secrets are in `.env.local` (NOT in git)
- [ ] Test environment variables work correctly

### Security Review
- [ ] Enable HTTPS only in production
- [ ] Set secure cookie flags: `HttpOnly`, `Secure`, `SameSite`
- [ ] Configure CORS properly (not `*`)
- [ ] Enable Content Security Policy (CSP) headers
- [ ] Review rate limiting on sensitive endpoints
- [ ] Audit file upload validation
- [ ] Check authentication token expiration
- [ ] Verify session management is secure

### Performance Optimization
- [ ] Run `npm run build` and check build output size
- [ ] Test with Lighthouse (target: 90+)
- [ ] Verify Core Web Vitals:
  - LCP (Largest Contentful Paint) < 2.5s
  - FID/INP (First/Interaction to Next Paint) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1
- [ ] Test on slow network (Chrome DevTools)
- [ ] Verify images are optimized
- [ ] Check caching headers are correct

### Content & SEO
- [ ] Verify all pages have proper meta tags
- [ ] Check Open Graph tags for social sharing
- [ ] Test robots.txt and sitemap.xml
- [ ] Validate structured data (Schema.org)
- [ ] Proofread copy for typos
- [ ] Test all internal links work

### Functionality Testing
- [ ] Blog listing page loads correctly
- [ ] Blog detail page displays content
- [ ] Admin login works
- [ ] Blog create/edit/delete functions work
- [ ] Image uploads work
- [ ] Comments/contact form works (if enabled)
- [ ] Mobile responsiveness verified
- [ ] Test on multiple browsers

### Database
- [ ] Backup database before deployment
- [ ] Run migrations on production database
- [ ] Verify seed data is appropriate
- [ ] Check database connection pooling is enabled
- [ ] Monitor database performance
- [ ] Enable automated backups

---

## Deployment Options

### Option 1: Vercel (Recommended)
**Easiest for Next.js**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
# - DATABASE_URL
# - ADMIN_USERNAME
# - ADMIN_PASSWORD
# - ADMIN_SESSION_SECRET
```

**Vercel Features**:
- Automatic deployments on git push
- Built-in performance monitoring
- CDN included
- Serverless functions
- Preview deployments

### Option 2: Netlify
**Good alternative**

```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Configuration** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  functions = "functions"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: Self-Hosted (Docker)
**Full control**

```dockerfile
# Dockerfile
FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

**Docker Compose**:
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/dbname
      - ADMIN_SESSION_SECRET=your-secret
    depends_on:
      - db
  
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: dbname
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### Option 4: AWS (Scalable)
Use AWS Amplify or Elastic Beanstalk

```bash
amplify init
amplify add hosting
amplify publish
```

---

## Security Best Practices

### 1. Authentication & Authorization
```javascript
// Verify authentication on protected routes
export const ensureAdminSession = async (request) => {
  const session = request.cookies.get('adminSession')
  
  if (!session) {
    return null
  }
  
  // Verify session is valid (not expired)
  const isValid = await verifySessionToken(session.value)
  
  return isValid ? session : null
}
```

### 2. Input Validation
```javascript
// Always validate user input
export const validateBlogInput = (data) => {
  const errors = {}
  
  if (!data.title?.trim()) {
    errors.title = 'Title is required'
  } else if (data.title.length > 200) {
    errors.title = 'Title must be less than 200 characters'
  }
  
  if (!data.content?.trim()) {
    errors.content = 'Content is required'
  } else if (data.content.length < 100) {
    errors.content = 'Content must be at least 100 characters'
  }
  
  // Sanitize HTML if needed
  if (data.content) {
    data.content = sanitizeHtml(data.content, sanitizeOptions)
  }
  
  return Object.keys(errors).length > 0 ? { valid: false, errors } : { valid: true }
}
```

### 3. CORS Configuration
```javascript
// next.config.mjs
async headers() {
  return [
    {
      source: '/api/:path*',
      headers: [
        {
          key: 'Access-Control-Allow-Origin',
          value: process.env.NEXT_PUBLIC_APP_URL
        },
        {
          key: 'Access-Control-Allow-Methods',
          value: 'GET, POST, PUT, DELETE, OPTIONS'
        },
      ],
    },
  ]
}
```

### 4. Rate Limiting
```javascript
// src/lib/rate-limit.js
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '60 s'),
})

export const checkRateLimit = async (identifier) => {
  const { success } = await ratelimit.limit(identifier)
  return success
}
```

### 5. SQL Injection Prevention
```javascript
// Using Prisma ORM (already safe)
// Always use parameterized queries

// ✅ SAFE
const blog = await prisma.blog.findUnique({
  where: { id: userId }
})

// ❌ UNSAFE - Never do this
const blog = await prisma.$queryRaw(`
  SELECT * FROM blog WHERE id = ${userId}
`)
```

### 6. Secure Headers
```javascript
// next.config.mjs
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        },
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
        },
      ],
    },
  ]
}
```

### 7. File Upload Security
```javascript
// src/lib/file-upload.js
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const MAX_FILE_SIZE = 32 * 1024 * 1024 // 32MB

export const validateUploadFile = (file) => {
  if (!ALLOWED_MIME_TYPES.includes(file.type)) {
    throw new Error('Invalid file type. Only JPEG, PNG, WebP allowed.')
  }
  
  if (file.size > MAX_FILE_SIZE) {
    throw new Error('File size exceeds 32MB limit.')
  }
  
  return true
}
```

---

## Monitoring & Logging

### Setup Error Tracking (Sentry)
```bash
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
})
```

### Database Monitoring
```javascript
// Monitor slow queries
export const logSlowQuery = async (query, duration) => {
  if (duration > 1000) {
    console.warn(`Slow query (${duration}ms):`, query)
  }
}
```

### Analytics
```javascript
// src/lib/analytics.js
export const trackPageView = (page) => {
  if (typeof window !== 'undefined') {
    window.gtag?.('event', 'page_view', {
      page_path: page,
      page_title: document.title,
    })
  }
}
```

---

## Backup & Recovery

### Database Backup Strategy
```bash
# Backup Postgres
pg_dump -h localhost -U user -d dbname > backup.sql

# Restore
psql -h localhost -U user -d dbname < backup.sql

# Automated backup (cron)
0 2 * * * pg_dump -h localhost -U user -d dbname > /backups/$(date +\%Y\%m\%d).sql
```

### Disaster Recovery Plan
- [ ] Weekly automated backups
- [ ] Test restore procedure
- [ ] Document recovery steps
- [ ] Keep backups in separate location
- [ ] Monitor backup success

---

## Post-Deployment

### Monitoring
- [ ] Check error logs daily
- [ ] Monitor Core Web Vitals
- [ ] Track user analytics
- [ ] Monitor database performance
- [ ] Check server uptime

### Maintenance
- [ ] Update dependencies monthly
  ```bash
  npm outdated
  npm update
  ```
- [ ] Review and patch security vulnerabilities
  ```bash
  npm audit
  npm audit fix
  ```
- [ ] Optimize database regularly
  ```sql
  VACUUM ANALYZE;
  REINDEX DATABASE dbname;
  ```

### Scaling Considerations
- [ ] Monitor database connection pool
- [ ] Plan for traffic spikes
- [ ] Enable caching layer (Redis)
- [ ] Consider CDN for static assets
- [ ] Setup load balancing if needed

---

## Performance Optimization Post-Deployment

### Core Web Vitals Targets
```
LCP (Largest Contentful Paint): < 2.5s
FID/INP: < 100ms / < 200ms
CLS (Cumulative Layout Shift): < 0.1
```

### Tools for Monitoring
- [Google Search Console](https://search.google.com/search-console)
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Web.dev](https://web.dev/measure)
- [Sentry](https://sentry.io)
- [LogRocket](https://logrocket.com)

---

## Compliance & Legal

- [ ] Add Privacy Policy page
- [ ] Add Terms of Service page
- [ ] Setup GDPR compliance (if EU users)
- [ ] Add cookie consent banner
- [ ] Document data retention policy
- [ ] Setup data deletion process

---

## Rollback Plan

```bash
# If deployment has critical issues

# Vercel
vercel rollback

# Manual
git revert <commit-hash>
git push production main
npm run build && npm run start
```

---

**Last Updated**: December 11, 2025
**Recommended Deployment**: Vercel (easiest for Next.js)
**Estimated Deployment Time**: 30 minutes
