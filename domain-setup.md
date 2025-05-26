# 🌐 Domain Setup Guide: parakletos.ai

## Azure Static Web Apps + Custom Domain

### Step 1: Domain Registration
- **Domain**: parakletos.ai
- **Registrar**: Namecheap, GoDaddy, or Azure Domains
- **Cost**: ~$10-15/year for .ai domains

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
https://parakletos.ai/                → Test index
https://parakletos.ai/original       → Control version
https://parakletos.ai/variation-a    → FOMO version
https://parakletos.ai/variation-b    → Proof version
https://parakletos.ai/variation-c    → Ease version
https://parakletos.ai/apply          → Beta registration
```

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