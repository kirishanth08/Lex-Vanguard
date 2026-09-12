# LexVanguard — Trademark & Patent Filing Service HTML Template

**LexVanguard** is a commercial-grade, ThemeForest-quality HTML5 template meticulously engineered for intellectual property law firms, patent consultants, trademark filing agencies, copyright specialists, and startup IP advisors.

Built exclusively with **HTML5, CSS3, Vanilla JavaScript, and Bootstrap 5.3**. Contains zero backend dependencies, zero bloated JavaScript frameworks, and zero admin/login systems.

---

## 1. Project Overview & Technology Stack

- **Markup**: Semantic HTML5 with complete ARIA roles and schema metadata.
- **CSS Architecture**: Custom Vanilla CSS design tokens (`:root` / `[data-theme="dark"]`), responsive layout rules (`responsive.css`), and dedicated right-to-left stylesheet (`rtl.css`).
- **UI Framework**: Bootstrap 5.3 (Grid, Modals, Offcanvas, Accordions, Dropdowns).
- **Icons**: Bootstrap Icons v1.11.3.
- **Typography**: Google Fonts — *Plus Jakarta Sans* (Weights: 400, 500, 600, 700, 800).
- **JavaScript**: Pure Vanilla JavaScript with modular separation (`main.js`, `theme.js`, `rtl.js`, `forms.js`, `faq.js`, `filters.js`).

---

## 2. Directory Structure

```text
trademark-patent-template/
│
├── index.html               # Home 1 — General IP Protection
├── home-2.html              # Home 2 — Startup & Business Innovation IP
├── about.html               # About Us — Story, Ethics, Practice Areas & Team
├── services.html            # Services Hub — Interactive Search & Category Filter
├── service-details.html     # Service Details — Trademark Search & Federal Filing
├── process.html             # Process & Timeline — 6-Stage Roadmap & Benchmarks
├── fees.html                # Fees — Official vs Legal Breakdown & Live Estimator
├── pricing.html             # Pricing Packages — Structured Tiers & Comparison
├── blog.html                # Blog & Insights — Live Filter, Search & Articles
├── blog-details.html        # Blog Details — DuPont Doctrine Precedent Analysis
├── contact.html             # Contact Us — Consultation Booking Form & Map
│
├── 404.html                 # 404 Error — IP Themed Lost Mark / Prior Art Metaphor
├── coming-soon.html         # Coming Soon — Docketing Portal Launch & Live Countdown
├── maintenance.html         # Maintenance — Registry Sync Notice & Emergency Desk
│
├── assets/
│   ├── css/
│   │   ├── style.css        # Core Design Tokens, Components, Dark Mode Overrides
│   │   ├── responsive.css   # Breakpoints (320px, 375px, 414px, 768px, 992px, 1200px)
│   │   └── rtl.css          # Full Right-to-Left Layout Adjustments & Icon Flips
│   │
│   ├── js/
│   │   ├── main.js          # Sticky Header, Active Links, Offcanvas, Counters, Toasts
│   │   ├── theme.js         # Dark/Light Mode with localStorage Persistence
│   │   ├── rtl.js           # LTR/RTL Toggle with localStorage Persistence
│   │   ├── forms.js         # Client-Side Form Validation & Live Fee Estimator
│   │   ├── faq.js           # Accessible Accordion Controls
│   │   └── filters.js       # Live Client-Side Category & Search Filtering
│   │
│   └── images/
│       ├── hero/            # Distinct Hero Visuals for Home 1 & Home 2
│       ├── services/        # Service Overview & Dossier Certificates
│       ├── team/            # Distinct Senior Attorney & Consultant Portraits
│       ├── blog/            # Unique Editorial Case Law Imagery
│       ├── process/         # Technical Review & Examination Imagery
│       ├── office/          # Executive Boardroom & Consultancy Images
│       └── misc/            # 404, Coming Soon, and Maintenance Graphics
│
└── README.md
```

---

## 3. Page-Level Distinct Image Inventory

Every page strictly incorporates at least **one visually prominent primary image that is unique to that specific page** (zero reuse across pages):

| Page | File Path | Subject Description |
| :--- | :--- | :--- |
| **Home Page 1** | `assets/images/hero/hero-general-ip.jpg` | Patent Document with Embossed Gold Seal, Fountain Pen & Glass Office |
| **Home Page 2** | `assets/images/hero/hero-bg-home-2.jpg` | High-Tech VC Advisory & Innovation Boardroom (Full-Bleed Centered Hero) |
| **About Us** | `assets/images/office/office-consultancy.jpg` | Two-Story Executive IP Law Library & Glass Conference Chamber |
| **Services** | `assets/images/services/services-overview.jpg` | Patent Drawings, Brass Scales, Compass & Registered Trademark Assets |
| **Service Details** | `assets/images/services/trademark-docket.jpg` | Registered Trademark Certificate Dossier with Embossed Royal Crest |
| **Process & Timeline** | `assets/images/process/process-docketing.jpg` | Legal Examiners Reviewing Multi-Jurisdiction Patent Workflow Timeline |
| **Fees** | `assets/images/office/fee-consultation.jpg` | Client Reviewing Itemized Fee Schedules & Financial Projections |
| **Pricing** | `assets/images/office/pricing-advisor.jpg` | Senior IP Advisor Consulting Executive Client in Modern Office |
| **Blog** | `assets/images/blog/blog-hero-editorial.jpg` | Law Library, Courtroom Gavel & Precedent Research Volumes |
| **Blog Details** | `assets/images/blog/trademark-infringement.jpg` | Visual Dissection of Trademark Likelihood-of-Confusion Precedents |
| **Contact Us** | `assets/images/office/consultation-meeting.jpg` | Confidential Client Consultation Chamber with Skyline Views |
| **404 Page** | `assets/images/misc/error-unregistered.jpg` | Lost Legal Document & Void Seal Prior Art Metaphor |
| **Coming Soon** | `assets/images/misc/portal-launch.jpg` | High-Tech Global Automated Docketing Digital Circuit Interface |
| **Maintenance** | `assets/images/misc/system-sync.jpg` | High-Security Data Server Infrastructure & Encrypted Cloud Vault |

---

## 4. Key Interactive Features

### Dark Mode System (`theme.js`)
- Toggled via the navigation bar theme switch.
- Persists user preference across all 14 pages using `localStorage`.
- Adapts surfaces, contrast ratios, border definitions, and card elevations specifically for readability.

### RTL Support (`rtl.js` & `rtl.css`)
- Full right-to-left layout adaptation with `dir="rtl"`.
- Directional arrow flips, margin/padding swaps, breadcrumb reverse direction, and floating toast relocation.
- Displays explicit text **"RTL / LTR"** on the toggle button.
- Preference persisted in `localStorage`.

### Client-Side Form Validation (`forms.js`)
- Validates required fields, corporate emails, telephone numbers, and dropdown selections.
- Prevents submission on invalid fields, provides contextual error states, and triggers floating demo toasts (`window.showLexToast`).
- Form submission triggers realistic loading spinners before clean reset.

### Live Category Filters & Instant Search (`filters.js`)
- Instant non-blocking client-side search across service practices and blog articles.
- Category button pills with dynamic counts and automatic empty state handling.

### Live Countdown Clock (`main.js`)
- Live JavaScript countdown timer on `coming-soon.html` calculating real-time days, hours, minutes, and seconds.

### Interactive Fee Estimator (`forms.js`)
- Real-time client-side calculation widget on `fees.html` that dynamically computes professional and statutory registry costs based on service type, class count, and target jurisdiction.

---

## 5. Browser & Device Compatibility

Tested across modern desktop, tablet, and mobile viewports:
- **Mobile Devices**: 320px, 360px, 375px, 390px, 414px (Zero horizontal overflow).
- **Tablets**: 768px, 820px, 1024px.
- **Desktops**: 1280px, 1440px, 1920px+.

---

## 6. Commercial License & Legal Disclaimer

Information provided throughout this template is for structural and commercial demonstration purposes and does not constitute formal legal counsel.
