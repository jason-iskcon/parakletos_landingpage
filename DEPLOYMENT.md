# 🚀 Azure Static Web Apps Deployment Guide

## Parakletos Landing Page A/B/C Test Deployment

This guide will help you deploy your landing page variations to Azure Static Web Apps for **FREE**.

---

## 📋 **What You'll Get**

- ✅ **Free hosting** for static websites
- ✅ **Custom domain** support
- ✅ **SSL certificates** (automatic)
- ✅ **Global CDN** for fast loading
- ✅ **Easy A/B testing** setup
- ✅ **Analytics integration** ready

---

## 🎯 **Method 1: Azure Portal (Easiest)**

### Step 1: Create Azure Account
1. Go to [portal.azure.com](https://portal.azure.com)
2. Sign up for free account (no credit card required for Static Web Apps)
3. You get $200 free credits + free services

### Step 2: Create Static Web App
1. In Azure Portal, click **"Create a resource"**
2. Search for **"Static Web App"**
3. Click **"Create"**
4. Fill in details:
   - **Subscription**: Your free subscription
   - **Resource Group**: Create new "parakletos-landing"
   - **Name**: "parakletos-abtest"
   - **Plan**: **Free** (0 GB included)
   - **Region**: Choose closest to your audience
   - **Source**: **Other** (we'll upload manually)

### Step 3: Deploy Files
1. After creation, go to your Static Web App resource
2. Click **"Browse"** to see your site URL
3. Go to **"Configuration"** → **"Application settings"**
4. Upload your files using Azure CLI or GitHub (see methods below)

---

## 🎯 **Method 2: GitHub + Azure (Recommended for Updates)**

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) and create new repository
2. Name it: `parakletos-landing-test`
3. Make it **public** (required for free tier)

### Step 2: Upload Files to GitHub
```bash
# In your project folder
git init
git add .
git commit -m "Initial landing page variations"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/parakletos-landing-test.git
git push -u origin main
```

### Step 3: Connect Azure to GitHub
1. In Azure Portal, create Static Web App
2. Choose **GitHub** as source
3. Authorize Azure to access your GitHub
4. Select your repository
5. **Build Details**:
   - **Build Presets**: Custom
   - **App location**: `/` (root)
   - **Output location**: `/` (root)

---

## 🎯 **Method 3: Direct Upload (Quickest)**

### Using Azure Storage Static Website
1. Create **Storage Account** in Azure Portal
2. Go to **Data management** → **Static website**
3. Enable static website hosting
4. Set **Index document**: `test-index.html`
5. Upload all your files to the `$web` container

---

## 📊 **A/B Testing Setup**

### URL Structure After Deployment
```
https://your-site.azurestaticapps.net/           → Test index page
https://your-site.azurestaticapps.net/original  → Control version
https://your-site.azurestaticapps.net/variation-a → FOMO version
https://your-site.azurestaticapps.net/variation-b → Proof version  
https://your-site.azurestaticapps.net/variation-c → Ease version
```

### Traffic Splitting Options
1. **Manual Split**: Direct users to different URLs
2. **Google Optimize**: Use for automatic 25/25/25/25 split
3. **Azure Traffic Manager**: For advanced routing
4. **JavaScript Redirect**: Random assignment on landing

---

## 🔧 **Custom Domain Setup**

### After Deployment
1. Go to your Static Web App in Azure Portal
2. Click **"Custom domains"**
3. Add your domain (e.g., `test.parakletos.com`)
4. Follow DNS verification steps
5. SSL certificate auto-generated

---

## 📈 **Analytics Integration**

### Add to each HTML file (before `</head>`):
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>

<!-- Google Optimize -->
<script src="https://www.googleoptimize.com/optimize.js?id=GTM-XXXXXXX"></script>
```

---

## 🚀 **Quick Deploy Commands**

### If you have Azure CLI installed:
```bash
# Login to Azure
az login

# Create resource group
az group create --name parakletos-landing --location eastus

# Create static web app
az staticwebapp create \
  --name parakletos-abtest \
  --resource-group parakletos-landing \
  --source https://github.com/YOUR_USERNAME/parakletos-landing-test \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "/"
```

---

## 💰 **Cost Breakdown**

### Azure Static Web Apps (Free Tier)
- ✅ **Hosting**: FREE (100 GB bandwidth/month)
- ✅ **SSL Certificate**: FREE
- ✅ **Custom Domain**: FREE
- ✅ **Global CDN**: FREE
- ✅ **Build & Deploy**: FREE (100 builds/month)

### Only pay if you exceed:
- 100 GB bandwidth/month
- 0.5 GB storage
- 100 builds/month

**Perfect for A/B testing!**

---

## 🔍 **Testing Your Deployment**

### Checklist
- [ ] All 4 variations load correctly
- [ ] CSS and JavaScript work
- [ ] Mobile responsive design
- [ ] FAQ accordions function
- [ ] Button clicks tracked
- [ ] Fast loading times
- [ ] SSL certificate active

---

## 🆘 **Troubleshooting**

### Common Issues
1. **404 errors**: Check `staticwebapp.config.json` routes
2. **CSS not loading**: Verify MIME types in config
3. **Slow loading**: Enable CDN and compression
4. **Mobile issues**: Test responsive breakpoints

### Support Resources
- [Azure Static Web Apps Docs](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [GitHub Actions for deployment](https://docs.github.com/en/actions)
- [Google Optimize Setup](https://support.google.com/optimize/)

---

## 🎯 **Next Steps After Deployment**

1. **Set up analytics** tracking
2. **Configure A/B testing** tool
3. **Test all variations** thoroughly  
4. **Share URLs** with stakeholders
5. **Monitor performance** and conversions
6. **Analyze results** after 2 weeks

**Your landing pages are ready for professional A/B testing!** 🚀 