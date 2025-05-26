# 🌍 Parakletos Landing Page

**Real-time multilingual worship translation service**

A comprehensive A/B/C testing landing page suite for Parakletos beta program launch.

## 🎯 Project Overview

This repository contains four landing page variations designed to test different psychological triggers for faith-tech audiences:

- **Control (Original)**: Traditional benefits-focused approach
- **Variation A (FOMO)**: Scarcity and urgency-driven messaging  
- **Variation B (Proof)**: Results and social proof emphasis
- **Variation C (Ease)**: Simplicity and quick wins focus

## 📁 File Structure

```
parakletos_landingpage/
├── index.html                    # Control version
├── variation-1-fomo.html         # FOMO & Urgency
├── variation-2-proof.html        # Results & Social Proof  
├── variation-3-ease.html         # Ease & Quick Wins
├── beta-registration.html        # Application form
├── terms.html                    # Terms of Service
├── privacy.html                  # Privacy Policy
├── test-index.html               # Navigation hub
├── styles.css                    # Complete design system
├── script.js                     # Interactive features
├── staticwebapp.config.json      # Azure routing
├── .github/workflows/            # CI/CD pipeline
├── docs/                         # Setup guides
│   ├── domain-setup.md
│   ├── azure-account-setup.md
│   ├── DEPLOYMENT.md
│   └── PRE-LAUNCH-CHECKLIST.md
└── Deploy-Azure.ps1              # Deployment helper
```

## 🚀 Deployment

### Domains
- **Primary**: parakletos.io
- **Secondary**: parakletos.co.uk

### Hosting
- **Platform**: Azure Static Web Apps (Free Tier)
- **CI/CD**: GitHub Actions
- **SSL**: Automatic Let's Encrypt certificates

### URL Structure
```
https://parakletos.io/           → Test index
https://parakletos.io/original  → Control version
https://parakletos.io/variation-a → FOMO version
https://parakletos.io/variation-b → Proof version
https://parakletos.io/variation-c → Ease version
https://parakletos.io/apply     → Beta registration
https://parakletos.io/terms     → Terms of Service
https://parakletos.io/privacy   → Privacy Policy
```

## 🧪 A/B/C Testing Strategy

### Traffic Split
- 25% Control (Original)
- 25% Variation A (FOMO & Urgency)
- 25% Variation B (Results & Social Proof)
- 25% Variation C (Ease & Quick Wins)

### Primary Metrics
- Beta application registrations
- Demo booking requests
- Form completion rates
- Time on page and scroll depth

### Testing Frameworks
- **Variation A**: AIDA (Attention → Interest → Desire → Action)
- **Variation B**: PASO (Problem → Agitate → Solution → Outcome)
- **Variation C**: 4Ps (Promise → Picture → Proof → Push)

## 🎨 Design System

### Color Tokens
- **Primary**: Deep Blue (#1E40AF)
- **Accent**: Gold (#D4AF37)
- **Text**: Charcoal (#2D2D2D)
- **Background**: Off-white (#FAFBFC)

### Typography
- **Font**: Open Sans
- **Scale**: 8pt spacing system (4px to 96px)
- **Hierarchy**: 48px/32px headlines, 18px/16px body

### Grid System
- **Layout**: 12-column grid
- **Max-width**: 1200px
- **Gutters**: 24px
- **Mobile-first**: Responsive breakpoints

## 📊 Beta Program Details

### Program Scope
- **Participants**: 20 churches worldwide
- **Duration**: March - August 2025
- **Investment**: £150/month (credited to full launch)
- **Requirements**: Laptop (2018+), internet, feedback participation

### Service Features
- Real-time translation in 100+ languages
- Sub-2-second processing delay
- Mobile-friendly congregation access
- End-to-end encryption
- No permanent audio storage

## 🔧 Development

### Prerequisites
- Modern web browser
- Git for version control
- Azure account for deployment
- GitHub account for CI/CD

### Local Development
```bash
# Clone repository
git clone [repository-url]
cd parakletos_landingpage

# Open in browser
# No build process required - pure HTML/CSS/JS
```

### Deployment Process
1. **Setup**: Follow `azure-account-setup.md`
2. **Domain**: Configure DNS per `domain-setup.md`
3. **Deploy**: Push to main branch triggers auto-deployment
4. **Monitor**: Track performance and conversions

## 📋 Pre-Launch Checklist

- [x] Landing page variations complete
- [x] Beta registration form
- [x] Legal pages (Terms & Privacy)
- [x] Azure deployment configuration
- [x] CI/CD pipeline setup
- [ ] Domain DNS configuration
- [ ] Azure account setup
- [ ] Copy accuracy claims review
- [ ] Analytics integration
- [ ] Form submission handling

## 🎯 Success Metrics

### Primary Goals
- 20 beta applications within 2 weeks
- 5+ demo bookings per week
- <3 second page load times
- >70% mobile usability score

### Conversion Tracking
- Application form submissions
- Demo booking clicks
- Email newsletter signups
- Social media engagement

## 📞 Contact & Support

- **Email**: beta@parakletos.io
- **Website**: https://parakletos.io
- **Repository**: [GitHub URL]

## 📄 License

© 2025 Parakletos Ltd. All rights reserved.

---

**🚀 Ready for professional A/B/C testing launch!** 

<!-- Deployment trigger: Azure Static Web Apps deployment --> 