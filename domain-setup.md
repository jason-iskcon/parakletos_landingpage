# 🌐 Domain Setup Guide: parakletos.io & parakletos.co.uk

## Azure Static Web Apps + Custom Domain

### Step 1: Domain Registration ✅ COMPLETED
- **Primary Domain**: parakletos.io
- **Secondary Domain**: parakletos.co.uk
- **Status**: Both domains purchased and ready for configuration

### Step 2: DNS Configuration
After deploying to Azure Static Web Apps:

1. **Get your Azure URL**: `https://parakletos-abtest.azurestaticapps.net`
2. **Add Custom Domain in Azure Portal**:
   - Go to Static Web App → Custom domains
   - Add `parakletos.ai`
   - Add `www.parakletos.ai`

3. **DNS Records to Add**:
```
Type: CNAME
Name: www
Value: parakletos-abtest.azurestaticapps.net

Type: ALIAS/ANAME (or A record)
Name: @
Value: parakletos-abtest.azurestaticapps.net
```

### Step 3: SSL Certificate
- Azure automatically provisions SSL certificates
- Usually takes 5-10 minutes after DNS propagation
- Free Let's Encrypt certificates

### Step 4: URL Structure
```
https://parakletos.io/                → Test index
https://parakletos.io/original       → Control version
https://parakletos.io/variation-a    → FOMO version
https://parakletos.io/variation-b    → Proof version
https://parakletos.io/variation-c    → Ease version
https://parakletos.io/apply          → Beta registration
```

### Step 5: Secondary Domain (parakletos.co.uk)
- Can redirect to primary domain (parakletos.io)
- Or serve UK-specific content if needed
- Configure same DNS records for both domains

### Step 5: Redirect Setup
Add to `staticwebapp.config.json`:
```json
{
  "routes": [
    {
      "route": "/apply",
      "serve": "/beta-registration.html"
    }
  ]
}
``` 