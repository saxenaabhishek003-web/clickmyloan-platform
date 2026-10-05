# ClickMyLoan — Modern Indian Digital Lending Platform

ClickMyLoan is a production-ready, mobile-first financial services platform designed for digital lending in India. Inspired by the UX clarity and product structure of leading Indian fintechs, ClickMyLoan features an original brand identity, transparent financial architecture, interactive financial tools, and strict adherence to the Reserve Bank of India (RBI) Digital Lending Guidelines and the Digital Personal Data Protection (DPDP) Act, 2023.

---

## 🏛️ Brand Positioning & Identity

- **Brand:** ClickMyLoan (`ClickMyLoan Financial Technologies Pvt. Ltd.`)
- **Industry:** Digital Lending / Financial Services (LSP Facilitator)
- **Primary Market:** India
- **Core Personality:** Trustworthy, Transparent, Modern, Digital-First, Secure, and Accessible
- **Visual Design System:**
  - *Primary Theme:* Vibrant Fintech Tangerine & Warm Orange (`#FF5E00`, `#FF7A1A`, `#EA580C`, `#D44200`)
  - *Crisp Clean Surfaces:* Pure White (`#FFFFFF`), Warm Cream Tint (`#FFF4ED`, `#FFF7ED`), Soft Slate (`#FAFAFA`)
  - *High-Contrast Readability:* Deep Charcoal / Zinc 900 (`#18181B`, `#52525B`)
  - *Financial Trust & Approvals:* Emerald Green (`#16A34A`, `#15803D`)
  - *Micro-interactions:* Inline SVG iconography, animated donut charts, range sliders, accessible accordions, and mobile sticky CTA bar.

---

## 🌐 Complete Website Information Architecture (34 Pages)

### 1. Core Products & Tools
- `/` — High-converting, trustworthy Homepage with quick evaluation module, verified trust strip, product cards, interactive calculator preview, 4-step process, and regulatory disclosures.
- `/personal-loan` — In-depth Personal Loan landing page with features, criteria, document checklist, transparent fees, representative APR table, and calculator.
- `/business-loan` — Business financing for sole proprietors, partnerships, LLPs, and MSMEs.
- `/travel-loan` — Dedicated travel financing with clear upfront APR and no deceptive "pay later" gimmicks.
- `/calculator` — Smart EMI & Loan Calculator with dynamic SVG Donut chart and full month-by-month / year-by-year Amortization Schedule.
- `/eligibility` — Pre-qualification evaluator assessing Fixed Obligation to Income Ratio (FOIR), income capacity, and credit score tiers.
- `/documents` — Complete document requirements for salaried and self-employed applicants with digital KYC guidelines.
- `/fees-and-charges` — Full schedule of charges (processing fee, APR, penal charges, foreclosure rules) with zero hidden fees.
- `/how-it-works` — 4-step digital lending process from eligibility check to direct bank disbursal.
- `/faq` — Categorized, searchable FAQ system with 15+ comprehensive questions and Schema `FAQPage`.
- `/apply` — Complete 9-step conversion application flow with simulated OTP verification and Key Fact Statement review.

### 2. Company & Trust
- `/about-us` — Corporate mission, ethical governance, and lending partner disclosures.
- `/contact-us` — Customer care channels, business hours, and interactive inquiry form.
- `/security` — Data protection, TLS encryption, DPDP compliance, and explicit prohibition on accessing contacts/media galleries.
- `/grievance-redressal` — Statutory 3-tier escalation matrix, Principal Grievance Redressal Officer contact, and interactive complaint form.

### 3. Financial Education Hub (`/blog`)
- `/blog` — Education hub directory.
- `/blog/personal-loans` — Personal loan category hub.
- `/blog/credit-score` — Credit score and CIBIL category hub.
- `/blog/emi` — EMI and interest calculation category hub.
- `/blog/financial-guides` — Financial planning and borrowing category hub.
- **In-Depth Guides:**
  - `/blog/how-personal-loan-eligibility-is-calculated`
  - `/blog/apr-vs-interest-rate-difference`
  - `/blog/how-does-an-emi-work`
  - `/blog/documents-required-for-personal-loan`
  - `/blog/how-credit-score-affects-loan-eligibility`
  - `/blog/personal-loan-for-salaried-employees`
  - `/blog/personal-loan-for-self-employed`

### 4. Legal & Regulatory Suite
- `/legal/privacy-policy` — DPDP Act & RBI compliant privacy policy.
- `/legal/terms-and-conditions` — Platform usage terms and LSP role definitions.
- `/legal/disclaimer` — Non-lender status and illustrative calculation disclaimer.
- `/legal/fair-practice-code` — Ethical debt recovery standards (8:00 AM - 7:00 PM calls, no harassment).
- `/legal/cancellation-refund` — Statutory look-up / cooling-off period exit policy.
- `/legal/communication-preferences` — National Do Not Call (NDNC) & DND registry compliance.
- `/404.html` — Custom 404 page with navigation fallbacks.

---

## 🛠️ Interactive Features & Technical Engines

1. **Smart EMI Calculator (`calculator.js`):**
   - Precise reducing-balance formula: $EMI = [P \times r \times (1+r)^n] / [(1+r)^n - 1]$.
   - Sliders and synchronized inputs for Loan Amount, Annual Interest Rate, and Tenure.
   - Dynamic SVG Donut Chart calculating real-time principal vs interest ratio.
   - Expandable Amortization Schedule table with monthly and yearly breakdowns.
   - Presets for Personal Loan, Business Loan, and Travel Loan.
2. **Loan Eligibility Evaluator (`eligibility.js`):**
   - Assesses applicant age, income, and existing monthly EMIs.
   - Calculates Fixed Obligation to Income Ratio (FOIR) adhering to the standard 50% debt cap.
   - Displays profile-specific document checklists and compliance notices.
3. **9-Step Application Journey (`apply.js`):**
   - Step 1: Mobile verification with OTP simulation.
   - Step 2: Basic details (Name as per PAN, DOB, Gender, City, PIN).
   - Step 3: Employment and monthly net income.
   - Step 4: Loan requirement (amount, tenure, purpose).
   - Step 5: Document upload simulation (PAN, Aadhaar, Bank statements).
   - Step 6: Explicit regulatory consent (CIBIL pull authorization, partner NBFC data sharing).
   - Step 7: Indicative offers review.
   - Step 8: Itemized Key Fact Statement (KFS) review.
   - Step 9: Submission confirmation with generated reference tracking ID (`CML-2026-XXXX`).
4. **Accessible FAQ & Instant Search (`faq.js`):**
   - Instant filtering across categories with live query search.
   - Full keyboard accessibility and `aria-expanded` state tracking.
5. **Grievance Redressal System (`grievance.js`):**
   - Interactive complaint filing generating unique acknowledgment tickets (`GRV-2026-XXXX`).
   - Clear 3-tier escalation path to RBI Ombudsman.
6. **Privacy-Safe Analytics (`analytics.js`):**
   - Ready for GA4, GTM, and Meta Pixel.
   - Client-side privacy guard: strictly blocks transmission of PAN, Aadhaar, bank details, or OTPs.

---

## 📈 Technical SEO & Performance Deliverables

- **0 Duplicate Titles:** Every single page has a unique, intent-driven title.
- **0 Duplicate H1s:** Exactly one primary `<h1>` per page.
- **100% Canonical Coverage:** Unique `<link rel="canonical">` on all indexable pages.
- **Structured Data (JSON-LD):**
  - `FinancialService` and `Organization` on Homepage.
  - `WebSite` with `SearchAction`.
  - `FinancialProduct` on product pages.
  - `BreadcrumbList` on all subpages.
  - `FAQPage` on `/faq`.
  - `Article` on all educational guides with author, publisher, and timestamps.
- **Crawl Files:**
  - `robots.txt`: Allowing indexable pages, disallowing private application parameters.
  - `sitemap.xml`: Complete XML sitemap containing all 33 indexable URLs with `<lastmod>`, `<changefreq>`, and `<priority>`.
- **Security Headers:** CSP, HSTS, X-Content-Type-Options (`nosniff`), X-Frame-Options (`SAMEORIGIN`), and Referrer-Policy configured on `server.js`.

---

## 💻 Developer Commands

### 1. Run Static Site Build
Compiles all 34 HTML pages, `sitemap.xml`, and `robots.txt`:
```bash
npm run build
# or
node build.js
```

### 2. Run Local Server
Starts the production Node.js server with clean URL rewrites, security headers, and mock APIs at `http://localhost:3000`:
```bash
npm start
# or
node server.js
```

### 3. Run Automated SEO & Integrity Audit
Verifies 0 duplicate titles, single H1s, canonical URLs, internal link resolution, and schema syntax:
```bash
npm run audit
# or
node scripts/audit.js
```

### 4. Run Server Route & API Verification Suite
Spins up an ephemeral instance, verifies HTTP 200/404 responses, and tests mock API endpoints:
```bash
node scripts/test_server.js
```
