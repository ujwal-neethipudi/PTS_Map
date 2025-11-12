# Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended - Easiest)

**Why Vercel?**
- Zero configuration needed
- Automatic deployments from Git
- Free SSL certificate
- Global CDN
- Preview deployments for branches

**Steps:**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd /Users/gowthamgaddam/Downloads/Applications/Ujwal/political-tech-map
   vercel
   ```

3. **Follow prompts:**
   - Login to Vercel
   - Set up and deploy project
   - Your app will be live at `https://your-project.vercel.app`

**Continuous Deployment:**
1. Push code to GitHub
2. Import repository in Vercel dashboard
3. Auto-deploys on every push

---

### 2. Netlify

**Steps:**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Or use Netlify Drop:**
   - Go to https://app.netlify.com/drop
   - Drag and drop the `dist` folder

**Configuration:**
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. GitHub Pages

**Steps:**

1. **Update `vite.config.ts`:**
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'
   })
   ```

2. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add to `package.json`:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to repository settings
   - Pages section
   - Select `gh-pages` branch
   - Your site: `https://username.github.io/repo-name`

---

### 4. Firebase Hosting

**Steps:**

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login**
   ```bash
   firebase login
   ```

3. **Initialize**
   ```bash
   firebase init hosting
   ```

4. **Configure:**
   - Public directory: `dist`
   - Single-page app: Yes
   - GitHub integration: Optional

5. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

**firebase.json:**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{
      "source": "**",
      "destination": "/index.html"
    }]
  }
}
```

---

### 5. AWS S3 + CloudFront

**Steps:**

1. **Build**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**
   - Enable static website hosting
   - Set bucket policy for public access

3. **Upload**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name
   ```

4. **Create CloudFront Distribution**
   - Origin: S3 bucket
   - Enable HTTPS
   - Custom domain (optional)

---

## Environment Variables

### For Google Sheets Integration

**Development (.env.local):**
```env
VITE_GOOGLE_SHEET_ID=your-sheet-id
VITE_GOOGLE_API_KEY=your-api-key
VITE_SHEET_NAME=Sheet1
```

**Production:**
- Add variables in your hosting platform's dashboard
- Vercel: Settings → Environment Variables
- Netlify: Site settings → Build & deploy → Environment

**Update `src/data/entities.ts`:**
```typescript
const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID || 'fallback-id';
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || 'fallback-key';
const SHEET_NAME = import.meta.env.VITE_SHEET_NAME || 'Sheet1';
```

---

## Pre-Deployment Checklist

- [ ] Test build locally: `npm run build && npm run preview`
- [ ] Check all links work
- [ ] Verify images load
- [ ] Test on mobile devices
- [ ] Update Google Sheets credentials (if using)
- [ ] Set proper environment variables
- [ ] Test with production data
- [ ] Check browser console for errors
- [ ] Verify arrow connections display
- [ ] Test all interactive features

---

## Performance Optimization

### 1. Image Optimization

**Use optimized logo formats:**
```typescript
// Prefer WebP or SVG
logoUrl: 'https://example.com/logo.webp'
```

**Lazy load images:**
```typescript
<img loading="lazy" src={entity.logoUrl} />
```

### 2. Code Splitting

Already configured with Vite's default settings.

### 3. Cache Headers

**Vercel** - `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 4. Compression

Most platforms (Vercel, Netlify) handle this automatically.

---

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as shown
4. SSL auto-configured

### Netlify
1. Site settings → Domain management
2. Add custom domain
3. Configure DNS
4. HTTPS auto-enabled

---

## Monitoring & Analytics

### Google Analytics

1. **Add to `index.html`:**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics

Add to `package.json`:
```json
"dependencies": {
  "@vercel/analytics": "^1.0.0"
}
```

Add to `src/main.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
)
```

---

## Troubleshooting Deployment

### Build Fails

**Check Node version:**
```bash
node --version  # Should be v18+
```

**Clear cache:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### 404 on Refresh

Add routing fallback (most platforms do this automatically).

**Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Images Not Loading

- Verify URLs are HTTPS
- Check CORS settings
- Use absolute URLs
- Test URLs in browser

### Environment Variables Not Working

- Check variable names match (VITE_ prefix)
- Rebuild after adding variables
- Verify in platform dashboard
- Check build logs

---

## CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        env:
          VITE_GOOGLE_SHEET_ID: ${{ secrets.GOOGLE_SHEET_ID }}
          VITE_GOOGLE_API_KEY: ${{ secrets.GOOGLE_API_KEY }}
          
      - name: Deploy to Vercel
        run: npx vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

---

## Recommended: Vercel + GitHub

**Best workflow:**
1. Push code to GitHub
2. Import to Vercel
3. Every push auto-deploys
4. Preview URLs for PRs
5. Production at custom domain

**One-time setup:**
```bash
# Create GitHub repo
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo.git
git push -u origin main

# Import to Vercel
# Visit vercel.com → New Project → Import Git Repository
```

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Vite Deployment**: https://vitejs.dev/guide/static-deploy.html

---

**Ready to deploy?** Start with Vercel for the easiest experience! 🚀
