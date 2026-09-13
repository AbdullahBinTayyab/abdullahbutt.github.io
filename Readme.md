# Executive Portfolio Website — Abdullah Butt

**Abdullah Butt**  
*CEO & Business Owner — Alkasim Group of Owners*  
*Digital Solutions Professional | Web & E-commerce Strategy | Search Engine Optimization*

---

## 1. Overview

This repository contains the complete, production-ready, static executive portfolio website for **Abdullah Butt**. Engineered to present an authoritative corporate presence suitable for institutional clients, business partners, and commercial ventures, the portfolio highlights strategic leadership and a verified body of completed digital projects.

### Project Links & Identity
- **Official GitHub Repository**: [https://github.com/AbdullahBinTayyab/abdullahbutt](https://github.com/AbdullahBinTayyab/abdullahbutt)
- **Live Website (GitHub Pages)**: [https://abdullahbintayyab.github.io/abdullahbutt/](https://abdullahbintayyab.github.io/abdullahbutt/)
- **Repository Identity / Owner**: `AbdullahBinTayyab`

### Technology Stack
- **Pure Semantic HTML5**
- **Modern Responsive CSS3** (Custom Design System, Obsidian & Imperial Gold Palette)
- **Zero-Dependency Vanilla JavaScript (ES6+)**
- **No Node.js, no npm build process, no frameworks, no database, no backend dependencies.**
- **100% Static & GitHub Pages Ready.**

---

## 2. GitHub Pages Deployment Guide

Deploying this website takes less than 60 seconds:

1. **Push Files to GitHub**:
1. **Push Files to GitHub Repository (`AbdullahBinTayyab/abdullahbutt`)**:
   ```bash
   git add .
   git commit -m "Deploy executive portfolio for Abdullah Butt"
   git push origin main
   ```
2. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Go to your repository on GitHub (`https://github.com/AbdullahBinTayyab/abdullahbutt`).
   - Navigate to **Settings** &rarr; **Pages**.
   - Under **Build and deployment** &gt; **Source**, choose **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.
3. **Live Site**:
   - GitHub will generate your live URL (e.g., `https://<username>.github.io/<repo-name>/`).
3. **Live Deployed Site**:
   - The verified live website is active at: `https://abdullahbintayyab.github.io/abdullahbutt/`
   - The website functions immediately with all links, case studies, and filters active.

---

## 3. Centralized Contact Configuration

All contact points, inquiry forms, and communication channels are centralized in a single configuration file:  
`assets/js/config.js`

To update your contact information:

```javascript
// assets/js/config.js
const SITE_CONFIG = {
  // 1. WhatsApp: Phone number with country code
  whatsappNumber: "+923371352528",
  whatsappDefaultMessage: "Hello Abdullah, I am interested in discussing a digital project with you.",

  // 2. Corporate Email
  emailAddress: "owner@alkasim.pro",
  emailSubject: "Executive Digital Project Inquiry",

  // 3. Google Form URL for Client Inquiries
  googleFormUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
  // 3. Official Google Form URL for Client Inquiries
  googleFormUrl: "https://forms.gle/bC6UiofRyDpN7T9s8"
};
```

All buttons across the homepage and individual project case study pages automatically resolve to these values.

---

## 4. Website Architecture

```
.
├── index.html                           # Executive One-Page Homepage
├── sitemap.xml                          # Search Engine XML Sitemap
├── robots.txt                           # Search Engine Crawler Directives
├── README.md                            # Documentation, Deployment & Verification Record
├── assets/
│   ├── css/
│   │   ├── style.css                    # Main design system, layout, responsive queries
│   │   └── project-detail.css           # Case study typography & technical analysis styles
│   ├── js/
│   │   ├── config.js                    # Centralized client contact configuration
│   │   ├── projects-data.js             # Structured database of all 66 verified live projects
│   │   └── main.js                      # Navigation, drawer, dynamic filtering, search
│   └── images/
│       └── abdullah-butt.png            # Official executive portrait of Abdullah Butt
└── projects/
    ├── khayat.html                      # Technical case study: Khayat
    ├── edenrobe.html                    # Technical case study: edenrobe
    ├── party-and-paper.html             # Technical case study: Party & Paper UK
    ├── hands-pakistan.html              # Technical case study: HANDS Pakistan
    ├── nutrifactor.html                 # Technical case study: Nutrifactor Laboratories
    ├── cadgulf-dubai.html               # Technical case study: Cadgulf IT Dubai
    ├── first-call-real-estate.html      # Technical case study: First Call Real Estate Dubai
    ├── shangrila-city.html              # Technical case study: Shangrila City
    ├── chyt-solar.html                  # Technical case study: CHYT Solar
    └── ... (66 dedicated case studies)  # Dedicated static HTML case studies for all verified projects
```

---

## 5. Project Verification Record

Before publishing, all **68 supplied URLs** were audited via network requests, HTTP status verification, redirect tracing, and DOM inspections:

- **Total Audited**: 68 URLs
- **Verified Live**: 64 + 2 (66 verified live with real visible content)
- **Excluded**: 2 URLs
  - `https://www.hugedomains.com/index.cfm` (Domain marketplace — excluded per explicit instruction)
  - `https://webexdesigner.online/torqueline/` (Returned HTTP 404 Not Found)

### Internal Verification Table

| # | Project Name | Original URL | Final Canonical URL | Category | Status | Verification Notes |
| :---: | :--- | :--- | :--- | :--- | :---: | :--- |
| 1 | **Khayat** | `https://khayat.pk/` | `https://khayat.pk/` | Fashion & E-commerce | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 2 | **Disposable Party Supply & Catering Supplies Wholesaler** | `https://www.partyandpaper.co.uk/` | `https://www.partyandpaper.co.uk/` | E-commerce & Retail | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 3 | **KGC** | `https://kgconstructionspvt.com/` | `https://kgconstructionspvt.com/` | Real Estate & Construction | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 4 | **Non** | `https://hands.org.pk/` | `https://hands.org.pk/` | Education & Non-Profit | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 5 | **Masonic Regalia Shop Supplies** | `https://trendwall.shop/` | `https://trendwall.shop/` | E-commerce & Retail | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 6 | **Shangrila City** | `https://shangrilacity.info/` | `https://shangrilacity.info/` | Real Estate & Construction | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 7 | **Fabrica** | `https://fabrica.pk/` | `https://fabrica.pk/` | Fashion & E-commerce | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 8 | **Greenpak** | `https://greenpak.uk/` | `https://greenpak.uk/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 9 | **Asian Gold Commodities Private Limited** | `https://asiangoldcommodities.com/` | `https://asiangoldcommodities.com/` | Education & Non-Profit | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 10 | **edenrobe Pakistan** | `https://edenrobe.com/` | `https://edenrobe.com/` | Fashion & E-commerce | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 11 | **Bukhari Group Of Companies** | `https://bukharigroup.com.pk/` | `https://bukharigroup.com.pk/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 12 | **Electraeng** | `https://electraeng.com/` | `https://electraeng.com/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 13 | **Start Your Business in the USA with Jorofy Today** | `https://jorofy.com/` | `https://jorofy.com/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 14 | **Nutrifactor** | `https://www.nutrifactor.com.pk/` | `https://www.nutrifactor.com.pk/` | Healthcare & Wellness | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 15 | **Uniguidepk** | `https://www.uniguidepk.com/` | `https://www.uniguidepk.com/` | Education & Non-Profit | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 16 | **Home Version Two** | `https://zaib.me/` | `https://zaib.me/` | Education & Non-Profit | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 17 | **IT Services in Dubai** | `https://cadgulf.com/` | `https://cadgulf.com/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 18 | **Men's Formal Shirts: Imported Cotton Fabrics** | `https://durinsplacket.com/` | `https://durinsplacket.com/` | Fashion & E-commerce | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 19 | **Which Country is Best For Pakistani Students in 2024** | `https://globalleadspk.com/` | `https://globalleadspk.com/` | Education & Non-Profit | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 20 | **Sindhnews** | `https://sindhnews.com.pk/` | `https://sindhnews.com.pk/` | Media & Publishing | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 21 | **China DC Circuit Breaker, Miniature Circuit Breaker, Surge Protector Suppliers, Manufacturers** | `https://www.chyt-solar.com/` | `https://www.chyt-solar.com/` | Industrial & Security | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 22 | **First Call Real Estate** | `https://fcrealestate.ae/` | `https://fcrealestate.ae/` | Real Estate & Construction | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 23 | **Expresstofly** | `https://www.expresstofly.com/` | `https://etfcourier.com/` | Logistics & Transportation | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 24 | **Beauty Teck GmbH** | `https://beauty-teck.de/` | `https://beauty-teck.de/` | Healthcare & Wellness | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 25 | **BILSA** | `https://bilsa.pk/` | `https://bilsa.pk/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 26 | **PPI** | `https://ppipopular.com/` | `https://ppipopular.com/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 27 | **Online24** | `https://online24.pk/` | `https://online24.pk/` | Industrial & Security | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 28 | **One Stop Security** | `https://onestopsecuritysolutions.co.uk/onestop/` | `https://onestopsecuritysolutions.co.uk/onestop/` | Industrial & Security | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 29 | **Bimza Store** | `https://bimzamotors.co.uk/` | `https://bimzamotors.co.uk/` | E-commerce & Retail | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 30 | **Aesthetic Online** | `https://aesthetic-online.com/` | `https://aesthetic-online.com/` | E-commerce & Retail | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 31 | **riyadhelitetransport** | `https://riyadhelitetransport.com/` | `https://riyadhelitetransport.com/` | Logistics & Transportation | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 32 | **airways** | `https://airwayzgroup.com/` | `https://airwayzgroup.com/` | Logistics & Transportation | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 33 | **GLOBY SECURITY** | `https://globysecurity.org/` | `https://globysecurity.org/` | Industrial & Security | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 34 | **elerouk** | `https://www.elerouk.com.eg/` | `https://www.elerouk.com.eg/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 35 | **Anji Technologies** | `https://www.anjitek.co/` | `https://www.anjitek.co/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 36 | **bwestimating** | `https://bwestimating.com/` | `https://bwestimating.com/` | Real Estate & Construction | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 37 | **MB Smart** | `https://mbsmartservices.com/` | `https://mbsmartservices.com/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 38 | **Online Quran Classes for Kids & Adults** | `https://equranjourney.com/` | `https://equranjourney.com/` | Education & Non-Profit | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 39 | **Homeyhaven** | `https://homeyhaven.co.uk/` | `https://homeyhaven.co.uk/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 40 | **CPMT Laser USA** | `https://cpmt-laser-usa.com/` | `https://cpmt-laser-usa.com/` | Healthcare & Wellness | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 41 | **Commercial Bounce Houses** | `https://jingojump.com/` | `https://jingojump.com/` | E-commerce & Retail | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 42 | **Becca Alvord** | `https://2-10solutions.com/becaaward/` | `https://2-10solutions.com/becaaward/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 43 | **Falcologistics** | `https://gracepearlpharma.com/falcologistics/` | `https://gracepearlpharma.com/falcologistics/` | Healthcare & Wellness | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 44 | **ridgerockfreight** | `https://ridgerockfreight.com/` | `https://ridgerockfreight.com/` | Logistics & Transportation | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 45 | **Best Halal Pizza in Staten Island, NY** | `https://pizzarus.com/` | `https://pizzarus.com/` | Food & Hospitality | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 46 | **ARKAAM GROUP OF COMPANIES** | `https://webextraining.site/akramgroup/` | `https://webextraining.site/akramgroup/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 47 | **WAHAT AL WASHM** | `https://waw-sa.com/` | `https://waw-sa.com/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 48 | **JS Safty** | `https://jssafty.com/` | `https://jssafty.com/` | Industrial & Security | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 49 | **safeholdinvestments.com** | `https://safeholdinvestments.com/` | `https://safeholdinvestments.com/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 50 | **Elite Coatings Midwest** | `https://elitecoatingsmidwest.com/` | `https://elitecoatingsmidwest.com/` | Industrial & Security | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 51 | **Ennif** | `https://webexdesigner.online/enniffinall/` | `https://webexdesigner.online/enniffinall/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 52 | **k2xtrade** | `https://k2xtrade.com/` | `https://k2xtrade.com/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 53 | **Nursecept** | `https://webexdesigner.online/Nursecept/` | `https://webexdesigner.online/Nursecept/` | Healthcare & Wellness | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 54 | **RA Electric** | `https://2-10solutions.com/Electronicshop/` | `https://2-10solutions.com/Electronicshop/` | E-commerce & Retail | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 55 | **Texas Roadside** | `https://texasroadside.org/` | `https://texasroadside.org/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 56 | **KC FIT CLUB** | `https://2-10solutions.com/kcfitclub/` | `https://2-10solutions.com/kcfitclub/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 57 | **HIC** | `https://hicconsult.com/` | `https://hicconsult.com/` | Education & Non-Profit | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 58 | **MoreHelp** | `https://morehelp.org/` | `https://morehelp.org/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 59 | **Globygroup** | `https://webexdesigner.online/Globygroup/` | `https://webexdesigner.online/Globygroup/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 60 | **DOCNOVA** | `https://docnova.co.uk/` | `https://docnova.co.uk/` | Healthcare & Wellness | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 61 | **White Coat Growth** | `https://webexdesigner.online/whitegrowth/` | `https://webexdesigner.online/whitegrowth/` | Healthcare & Wellness | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 62 | **earlybirddriving** | `https://earlybirdriving.ca/` | `https://earlybirdriving.ca/` | Logistics & Transportation | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 63 | **healthy herbies** | `https://healthyherbies.com/` | `https://healthyherbies.com/` | Healthcare & Wellness | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 64 | **ATLAS OCEAN TRADING** | `https://webexdesigner.online/atlasoceantrading/` | `https://webexdesigner.online/atlasoceantrading/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 65 | **Loan Broker** | `https://2-10solutions.com/loanbroker/` | `https://2-10solutions.com/loanbroker/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 66 | **FLT First Line** | `https://webexdesigner.online/firstline/` | `https://webexdesigner.online/firstline/` | Corporate & Business Services | `VERIFIED LIVE` | Resolves with active, functional website and verified public content. |
| 67 | **N/A** | `https://www.hugedomains.com/index.cfm` | `https://www.hugedomains.com/index.cfm` | N/A | `EXCLUDED` | Domain marketplace (explicitly excluded) |
| 68 | **N/A** | `https://webexdesigner.online/torqueline/` | `https://webexdesigner.online/torqueline/` | N/A | `EXCLUDED` | HTTP 404 Not Found |

---

## 6. Professional Integrity & Attribution Standards

In strict compliance with executive portfolio standards:
- All evaluations are derived from publicly observable websites and technologies.
- The portfolio does not fabricate private metrics, revenue figures, fake awards, or unverifiable statistics.
- Case study documentation uses neutral, credible terminology (*"Selected Digital Project"*, *"Project Portfolio Analysis"*) reflecting high-level technical stewardship and digital strategy.
