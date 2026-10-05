/**
 * ClickMyLoan — Page Content Generators
 * High-converting, transparent, compliant, and SEO-optimized HTML generators
 */

import { ICONS } from './templates.js';

// Shared Calculator Component HTML
export function getCalculatorComponentHtml(defaultProduct = 'short-term') {
  return `
    <div class="calc-wrapper" id="emi-calculator">
      <div class="calc-nav-tabs">
        <button type="button" class="calc-tab-btn active" data-product="short-term">
          Daily ROI Loan (Up to ₹5 Lakh)
        </button>
        <button type="button" class="calc-tab-btn" data-product="personal">
          Monthly EMI Option
        </button>
      </div>

      <div class="calc-body">
        <div class="calc-inputs">
          <!-- Loan Amount -->
          <div class="calc-group">
            <div class="calc-group-header">
              <label for="calc-amount-slider" class="calc-label">Required Loan Amount</label>
              <div class="calc-value-display">
                <span>₹</span>
                <input type="number" id="calc-amount-input" value="50000" min="10000" max="500000" step="5000" aria-label="Loan Amount in Rupees">
              </div>
            </div>
            <input type="range" class="range-slider" id="calc-amount-slider" min="10000" max="500000" step="5000" value="50000" aria-label="Loan Amount Slider">
            <div class="range-limits">
              <span id="calc-amount-min">₹10,000</span>
              <span id="calc-amount-max">₹5,00,000</span>
            </div>
          </div>

          <!-- Interest Rate -->
          <div class="calc-group">
            <div class="calc-group-header">
              <label for="calc-rate-slider" class="calc-label" id="calc-rate-label">Applicable Interest Rate (% per day)</label>
              <div class="calc-value-display">
                <input type="number" id="calc-rate-input" value="0.5" min="0.2" max="1.0" step="0.05" aria-label="Daily Interest Rate Percentage">
                <span id="calc-rate-unit">%/day</span>
              </div>
            </div>
            <input type="range" class="range-slider" id="calc-rate-slider" min="0.2" max="1.0" step="0.05" value="0.5" aria-label="Interest Rate Slider">
            <div class="range-limits">
              <span id="calc-rate-min">0.2% / day</span>
              <span id="calc-rate-max">1.0% / day</span>
            </div>
          </div>

          <!-- Tenure -->
          <div class="calc-group">
            <div class="calc-group-header">
              <label for="calc-tenure-slider" class="calc-label" id="calc-tenure-label">Repayment Tenure (Days)</label>
              <div class="calc-value-display">
                <input type="number" id="calc-tenure-input" value="30" min="15" max="180" step="5" aria-label="Loan Tenure">
                <span id="calc-tenure-unit">Days</span>
              </div>
            </div>
            <input type="range" class="range-slider" id="calc-tenure-slider" min="15" max="180" step="5" value="30" aria-label="Tenure Slider">
            <div class="range-limits">
              <span id="calc-tenure-min">15 Days</span>
              <span id="calc-tenure-max">180 Days</span>
            </div>
          </div>
        </div>

        <!-- Visual Summary -->
        <div class="calc-summary-card">
          <div class="calc-emi-badge" id="calc-badge-title">Estimated Daily Repayment</div>
          <div class="calc-emi-amount tabular-nums" id="calc-monthly-emi">₹1,917</div>
          <div style="font-size:0.8rem; color:var(--c-text-muted); margin-bottom:12px;" id="calc-repay-sub">
            per day for <span id="calc-tenure-summary-days">30</span> days
          </div>

          <!-- Visual SVG Donut Chart -->
          <div class="chart-container" aria-hidden="true">
            <svg class="donut-svg" viewBox="0 0 180 180">
              <circle class="donut-bg" cx="90" cy="90" r="70"></circle>
              <circle class="donut-segment-principal" id="donut-segment-principal" cx="90" cy="90" r="70"></circle>
              <circle class="donut-segment-interest" id="donut-segment-interest" cx="90" cy="90" r="70"></circle>
            </svg>
          </div>

          <div class="calc-stats-breakdown">
            <div class="stat-row">
              <span class="stat-label-wrap">
                <span class="stat-dot principal"></span> Principal Amount
              </span>
              <span class="stat-val tabular-nums" id="calc-principal-display">₹50,000</span>
            </div>
            <div class="stat-row">
              <span class="stat-label-wrap">
                <span class="stat-dot interest"></span> Estimated Interest
              </span>
              <span class="stat-val tabular-nums" id="calc-interest-display">₹7,500</span>
            </div>
            <div class="stat-row">
              <span class="stat-label-wrap">
                <span class="stat-dot" style="background:#0284C7;"></span> Processing Fee (8.99%)
              </span>
              <span class="stat-val tabular-nums" id="calc-pf-display">₹4,495</span>
            </div>
            <div class="stat-row">
              <span class="stat-label-wrap">
                <span class="stat-dot" style="background:#9333EA;"></span> GST on PF (18%)
              </span>
              <span class="stat-val tabular-nums" id="calc-gst-display">₹809</span>
            </div>
            <div class="stat-row">
              <span class="stat-label-wrap">
                <span class="stat-dot" style="background:#10B981;"></span> Estimated Disbursed Amount
              </span>
              <span class="stat-val tabular-nums" id="calc-disbursed-display" style="color:#34D399; font-weight:700;">₹44,696</span>
            </div>
            <div class="stat-row" style="font-weight:700; border-top:1px dashed #334155; padding-top:10px; margin-top:4px;">
              <span class="stat-label-wrap" style="color:#FFFFFF; font-size:1.05rem;">Total Repayment</span>
              <span class="stat-val tabular-nums" id="calc-total-display" style="color:#FFFFFF; font-size:1.25rem; font-weight:800;">₹57,500</span>
            </div>
          </div>

          <a href="/apply" class="btn btn-primary btn-block btn-lg" style="background:#FF5E00; color:#FFFFFF; font-weight:800; border:none; box-shadow:0 4px 14px rgba(255, 94, 0, 0.45); padding:14px;" data-track="cta_click" data-track-label="Calculator Check Eligibility">
            Check My Eligibility &rarr;
          </a>

          <p class="calc-disclaimer" style="color:#94A3B8; font-size:0.775rem; line-height:1.5; margin-top:16px;">
            Illustrative estimate only. Final loan terms, charges and repayment amount will be disclosed before acceptance. Loan amount, interest rate, tenure, processing fee and other charges are subject to customer eligibility, credit assessment, lender policy and the applicable loan agreement/KFS.
          </p>
        </div>
      </div>

      <!-- Repayment Schedule Accordion -->
      <div class="amortization-section">
        <div class="amortization-header">
          <h4 style="font-size:1.05rem; color:var(--c-text-main);">Detailed Repayment Schedule</h4>
          <button type="button" class="btn btn-secondary btn-sm" id="toggle-amortization-btn">
            View Schedule Breakdown
          </button>
        </div>

        <div id="amortization-schedule-wrap" hidden>
          <div class="amortization-table-wrap">
            <table class="fin-table">
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Principal Paid</th>
                  <th>Interest Paid</th>
                  <th>Total Installment</th>
                  <th>Remaining Balance</th>
                </tr>
              </thead>
              <tbody id="amortization-tbody" class="tabular-nums">
                <!-- Dynamically populated by calculator.js -->
              </tbody>
            </table>
          </div>
          <p style="font-size:0.75rem; color:var(--c-text-subtle); margin-top:8px;">
            Schedule demonstrates indicative repayment breakdown. 0% Foreclosure Charges apply for early settlement at any time.
          </p>
        </div>
      </div>
    </div>
  `;
}

// Shared Trust Strip Component (Section 4 Specification)
export function getTrustStripHtml() {
  return `
    <section class="trust-strip-dashboard" aria-label="Platform Highlights">
      <div class="container">
        <div class="trust-dash-grid">
          <div class="trust-dash-card">
            <div class="trust-dash-icon">${ICONS.shield}</div>
            <div class="trust-dash-info">
              <div class="trust-dash-val">₹5 Lakh</div>
              <div class="trust-dash-label">Maximum Loan</div>
            </div>
          </div>
          <div class="trust-dash-card">
            <div class="trust-dash-icon" style="background:#F0FDF4; color:#16A34A;">${ICONS.sparkle}</div>
            <div class="trust-dash-info">
              <div class="trust-dash-val">0%*</div>
              <div class="trust-dash-label">Foreclosure Charges</div>
            </div>
          </div>
          <div class="trust-dash-card">
            <div class="trust-dash-icon" style="background:#F0F9FF; color:#0284C7;">${ICONS.fileText}</div>
            <div class="trust-dash-info">
              <div class="trust-dash-val">8.99% + GST*</div>
              <div class="trust-dash-label">Processing Fee</div>
            </div>
          </div>
          <div class="trust-dash-card">
            <div class="trust-dash-icon" style="background:#FFF7ED; color:#FF5E00;">${ICONS.percent}</div>
            <div class="trust-dash-info">
              <div class="trust-dash-val">0.2%–1%*</div>
              <div class="trust-dash-label">Daily ROI</div>
            </div>
          </div>
        </div>
        <div class="trust-dash-disclaimer">
          *Applicable terms depend on eligibility and the applicable loan agreement/KFS. ClickMyLoan adheres strictly to RBI Digital Lending Directions.
        </div>
      </div>
    </section>
  `;
}

// 1. Homepage Content Generator
export function getHomepageContent() {
  return `
    <!-- 1. HERO SECTION (Section 4 & 5 Specification) -->
    <section class="hero-fintech" id="hero-section">
      <div class="container">
        <div class="hero-grid">
          <!-- Left Column: Copy & Value Proposition -->
          <div class="hero-content">
            <div class="hero-badge">
              <span class="hero-badge-dot"></span>
              <span>🛡️ Trusted Digital Lending Platform</span>
            </div>
            
            <h1 class="hero-title">
              Get Instant Personal Loans Up to <span class="highlight-orange">₹5 Lakhs</span>
            </h1>
            
            <p class="hero-subtitle">
              100% digital process with minimal documentation and fast approval, subject to eligibility.
            </p>

            <div class="hero-cta-group">
              <a href="/apply" class="btn btn-primary btn-lg" data-track="cta_click" data-track-label="Hero Apply Now">
                Apply Now &rarr;
              </a>
              <a href="#hero-quick-widget" class="btn btn-secondary btn-lg" data-track="cta_click" data-track-label="Hero Check Eligibility">
                Check Eligibility
              </a>
            </div>

            <!-- Trust Indicators Below CTA -->
            <div class="hero-trust-indicators">
              <span class="trust-ind-item"><span class="trust-ind-check">✓</span> Low Interest Rates</span>
              <span class="trust-ind-divider">&bull;</span>
              <span class="trust-ind-item"><span class="trust-ind-check">✓</span> Minimal Documentation</span>
              <span class="trust-ind-divider">&bull;</span>
              <span class="trust-ind-item"><span class="trust-ind-check">✓</span> Flexible Tenure</span>
            </div>

            <!-- 4 Hero Information Mini Cards -->
            <div class="hero-info-cards-strip">
              <div class="hero-info-mini-card">
                <span class="mini-card-val">Up to ₹5 Lakh</span>
                <span class="mini-card-label">Maximum Loan</span>
              </div>
              <div class="hero-info-mini-card">
                <span class="mini-card-val">0%*</span>
                <span class="mini-card-label">Foreclosure Charges</span>
              </div>
              <div class="hero-info-mini-card">
                <span class="mini-card-val">8.99% + GST*</span>
                <span class="mini-card-label">Processing Fee</span>
              </div>
              <div class="hero-info-mini-card">
                <span class="mini-card-val">0.2%–1%*</span>
                <span class="mini-card-label">Daily ROI</span>
              </div>
            </div>

            <p class="hero-legal-disclaimer">
              *Applicable terms depend on eligibility and the applicable loan agreement/KFS.
            </p>
          </div>

          <!-- Right Column: Visual Lifestyle Photo with Floating Badges & FinTech Card -->
          <div class="hero-visual-col">
            <div class="hero-visual-wrapper">
              <!-- Floating Graphical Elements (Slow Parallax Float) -->
              <div class="hero-float-badge float-rupee" aria-hidden="true">₹</div>
              <div class="hero-float-badge float-percent" aria-hidden="true">%</div>
              <div class="hero-float-badge float-check" aria-hidden="true">✓</div>
              <div class="hero-float-tag float-fast-approval" aria-hidden="true">⚡ Fast Approval</div>
              <div class="hero-float-tag float-secure" aria-hidden="true">🛡️ Bank-Level Security</div>
              <div class="hero-float-tag float-emi" aria-hidden="true">EMI: ₹1,917/day</div>

              <!-- Human Financial Lifestyle Photo -->
              <div class="hero-image-card">
                <img src="/assets/images/hero-indian-professional.jpg" alt="Confident young Indian professional managing finances on smartphone" class="hero-human-img" width="560" height="420" loading="eager">
              </div>

              <!-- Overlapping Floating FinTech Application / Calculator Widget -->
              <div class="hero-widget-card" id="hero-quick-widget">
                <div class="widget-header">
                  <div class="widget-header-badge">
                    <span class="widget-dot"></span> ⚡ Instant Eligibility Check
                  </div>
                  <span class="widget-limit-tag">Up to ₹5,00,000</span>
                </div>
                <p class="widget-sub">Check indicative eligibility in 30 seconds &bull; Zero credit score impact</p>

                <form class="widget-form" id="hero-quick-form" action="/apply" method="GET">
                  <!-- Mobile Number Field -->
                  <div class="widget-form-group">
                    <label for="widget-mobile" class="widget-label">Mobile Number</label>
                    <div class="widget-phone-wrap">
                      <span class="widget-phone-prefix">+91</span>
                      <input type="tel" id="widget-mobile" name="mobile" class="widget-input phone-input" placeholder="Enter 10-digit mobile" maxlength="10" pattern="[6-9][0-9]{9}" required>
                    </div>
                  </div>

                  <!-- Desired Loan Amount with Preset Pills -->
                  <div class="widget-form-group">
                    <div class="widget-label-row">
                      <label for="widget-amount" class="widget-label">Loan Amount Required</label>
                      <span class="widget-val-preview" id="widget-amount-preview">₹50,000</span>
                    </div>
                    <div class="amount-preset-pills">
                      <button type="button" class="amount-pill" data-amount="25000">₹25K</button>
                      <button type="button" class="amount-pill active" data-amount="50000">₹50K</button>
                      <button type="button" class="amount-pill" data-amount="100000">₹1 Lakh</button>
                      <button type="button" class="amount-pill" data-amount="200000">₹2 Lakh</button>
                      <button type="button" class="amount-pill" data-amount="500000">₹5 Lakh</button>
                    </div>
                    <input type="hidden" id="widget-amount" name="amount" value="50000">
                  </div>

                  <!-- Purpose of Loan -->
                  <div class="widget-form-group">
                    <label for="widget-purpose" class="widget-label">Purpose of Loan</label>
                    <select id="widget-purpose" name="purpose" class="widget-select">
                      <option value="personal">Personal Expenses / Family Need</option>
                      <option value="emergency">Emergency / Medical Expense</option>
                      <option value="bills">Urgent Utility Bills &amp; Rent</option>
                      <option value="business">Small Business / Cash Flow Bridge</option>
                      <option value="travel">Travel &amp; Relocation</option>
                      <option value="home">Home Repairs / Maintenance</option>
                    </select>
                  </div>

                  <input type="checkbox" id="quick-consent" checked style="display:none;">

                  <button type="submit" class="btn btn-primary btn-block btn-lg widget-submit-btn" data-track="cta_click" data-track-label="Hero Widget Check Eligibility">
                    Check Eligibility &rarr;
                  </button>
                </form>

                <div class="widget-footer">
                  <span class="widget-trust-badge">${ICONS.lock} 256-Bit SSL</span>
                  <span class="widget-trust-badge">${ICONS.shield} Soft Bureau Check</span>
                  <span class="widget-trust-badge">${ICONS.checkCircle} Regulated NBFC Partners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Strip -->
    ${getTrustStripHtml()}

    <!-- 3. ANIMATED STATISTICS SECTION (Section 7 Specification) -->
    <section class="section stats-fintech-section" id="stats-section">
      <div class="container">
        <div class="section-title-wrap text-center">
          <span class="section-pill section-pill-amber">Verified Milestones</span>
          <h2 class="section-title">Numbers That Inspire Trust</h2>
          <p class="section-desc">
            Empowering hardworking Indians with transparent, ethical, and fast digital credit across the country.
          </p>
        </div>

        <div class="stats-grid">
          <div class="stat-fintech-card">
            <div class="stat-fintech-icon">${ICONS.user}</div>
            <div class="stat-fintech-num">
              <span class="counter-number" data-target="500000" data-format="lakh">0</span><span class="stat-plus">L+</span>
            </div>
            <div class="stat-fintech-label">Happy Customers</div>
            <div class="stat-fintech-sub">Across 100+ Indian cities</div>
          </div>

          <div class="stat-fintech-card">
            <div class="stat-fintech-icon">${ICONS.sparkle}</div>
            <div class="stat-fintech-num">
              <span class="stat-prefix">₹</span><span class="counter-number" data-target="500" data-format="int">0</span><span class="stat-plus">Cr+</span>
            </div>
            <div class="stat-fintech-label">Loan Disbursed</div>
            <div class="stat-fintech-sub">Through RBI-registered partners</div>
          </div>

          <div class="stat-fintech-card">
            <div class="stat-fintech-icon">${ICONS.checkCircle}</div>
            <div class="stat-fintech-num">
              <span class="counter-number" data-target="98" data-format="int">0</span><span class="stat-plus">%</span>
            </div>
            <div class="stat-fintech-label">Customer Satisfaction</div>
            <div class="stat-fintech-sub">Rated 4.8/5 across verified reviews</div>
          </div>

          <div class="stat-fintech-card">
            <div class="stat-fintech-icon">${ICONS.clock}</div>
            <div class="stat-fintech-num">
              <span class="counter-number" data-target="15" data-format="int">0</span><span class="stat-plus">min</span>
            </div>
            <div class="stat-fintech-label">Average Disbursal Time</div>
            <div class="stat-fintech-sub">Upon complete digital verification</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. WHY CHOOSE CLICKMYLOAN (Section 8 Specification - 3 Premium Feature Cards) -->
    <section class="section why-choose-section" id="why-choose-us" style="background:#FFFFFF;">
      <div class="container">
        <div class="section-title-wrap text-center">
          <span class="section-pill section-pill-emerald">The ClickMyLoan Advantage</span>
          <h2 class="section-title">Why Choose ClickMyLoan?</h2>
          <p class="section-desc">
            Engineered to remove bureaucratic friction, hidden markups, and complicated paperwork.
          </p>
        </div>

        <div class="why-choose-cards-3">
          <!-- Card 1: Quick Disbursal -->
          <div class="why-premium-card">
            <div class="why-num-watermark">01</div>
            <div class="why-card-icon-wrap" style="background:#FFF7ED; color:#FF5E00;">
              ${ICONS.clock}
            </div>
            <h3 class="why-card-title">Quick Disbursal</h3>
            <p class="why-card-desc">
              Rapid digital credit assessment and direct transfer to your verified Indian bank account with zero physical branch queues.
            </p>
            <div class="why-card-highlight">
              <span class="why-tag">⚡ Fast Processing</span>
              <span class="why-tag">Direct Bank Credit</span>
            </div>
          </div>

          <!-- Card 2: Bank-Level Security -->
          <div class="why-premium-card">
            <div class="why-num-watermark">02</div>
            <div class="why-card-icon-wrap" style="background:#F0FDF4; color:#16A34A;">
              ${ICONS.shield}
            </div>
            <h3 class="why-card-title">Bank-Level Security</h3>
            <p class="why-card-desc">
              Bank-grade 256-bit TLS encryption, strict compliance with India's DPDP Act 2023, and zero access to private phone contacts or media.
            </p>
            <div class="why-card-highlight">
              <span class="why-tag">🔒 256-Bit TLS</span>
              <span class="why-tag">Zero Contact Access</span>
            </div>
          </div>

          <!-- Card 3: Minimal Documentation -->
          <div class="why-premium-card">
            <div class="why-num-watermark">03</div>
            <div class="why-card-icon-wrap" style="background:#F0F9FF; color:#0284C7;">
              ${ICONS.fileText}
            </div>
            <h3 class="why-card-title">Minimal Documentation</h3>
            <p class="why-card-desc">
              100% paperless onboarding directly from your smartphone using Aadhaar OTP e-KYC and digital bank verification.
            </p>
            <div class="why-card-highlight">
              <span class="why-tag">📄 100% Paperless</span>
              <span class="why-tag">Instant e-KYC</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. LOAN PRODUCTS (Section 9 Specification - 4 Interactive Cards) -->
    <section class="section" id="products" style="background:var(--c-bg-subtle);">
      <div class="container">
        <div class="section-title-wrap text-center">
          <span class="section-pill">Digital Credit Facilities</span>
          <h2 class="section-title">Find the Loan That Fits Your Need</h2>
          <p class="section-desc">
            Explore transparent digital loan options tailored to your eligibility and immediate financial requirements.
          </p>
        </div>

        <div class="products-grid-4">
          <!-- Product 1: Personal Loan (Featured) -->
          <div class="product-premium-card is-featured">
            <div class="product-badge">Most Popular</div>
            <div class="product-icon-wrap" style="background:#FFF7ED; color:#FF5E00;">
              ${ICONS.user}
            </div>
            <h3 class="product-title">Personal Loan</h3>
            <p class="product-tagline">Short-term digital credit for urgent personal needs and household bills.</p>
            
            <div class="product-amount-box">
              <span class="product-amount-val">Up to ₹5,00,000</span>
              <span class="product-amount-sub">0.2%–1% Daily ROI &bull; 0% Foreclosure*</span>
            </div>

            <ul class="product-benefits-list">
              <li>${ICONS.checkCircle} 100% paperless online verification</li>
              <li>${ICONS.checkCircle} 0% Foreclosure charges for early settlement</li>
              <li>${ICONS.checkCircle} Transparent Key Fact Statement (KFS)</li>
            </ul>

            <a href="/apply" class="btn btn-primary btn-block" data-track="cta_click" data-track-label="Product Card Personal Loan">
              Apply for Personal Loan &rarr;
            </a>
          </div>

          <!-- Product 2: Business Loan -->
          <div class="product-premium-card">
            <div class="product-icon-wrap" style="background:#F0FDF4; color:#16A34A;">
              ${ICONS.briefcase}
            </div>
            <h3 class="product-title">Business Loan</h3>
            <p class="product-tagline">Working capital bridge and inventory financing for self-employed and proprietors.</p>
            
            <div class="product-amount-box">
              <span class="product-amount-val">Up to ₹10,00,000</span>
              <span class="product-amount-sub">Collateral-free &bull; Flexible tenures*</span>
            </div>

            <ul class="product-benefits-list">
              <li>${ICONS.checkCircle} Digital GST &amp; bank statement verification</li>
              <li>${ICONS.checkCircle} Fast turnaround for urgent cash flow</li>
              <li>${ICONS.checkCircle} 0% Foreclosure penalties*</li>
            </ul>

            <a href="/apply" class="btn btn-secondary btn-block" data-track="cta_click" data-track-label="Product Card Business Loan">
              Apply for Business Loan &rarr;
            </a>
          </div>

          <!-- Product 3: Credit Line -->
          <div class="product-premium-card">
            <div class="product-icon-wrap" style="background:#F0F9FF; color:#0284C7;">
              ${ICONS.sparkle}
            </div>
            <h3 class="product-title">Credit Line</h3>
            <p class="product-tagline">Revolving digital credit limit. Withdraw what you need and pay interest only on used funds.</p>
            
            <div class="product-amount-box">
              <span class="product-amount-val">Up to ₹5,00,000</span>
              <span class="product-amount-sub">Interest on utilized funds only*</span>
            </div>

            <ul class="product-benefits-list">
              <li>${ICONS.checkCircle} Multiple withdrawals within approved limit</li>
              <li>${ICONS.checkCircle} Repay anytime to restore your limit</li>
              <li>${ICONS.checkCircle} Ideal for recurring operational expenses</li>
            </ul>

            <a href="/apply" class="btn btn-secondary btn-block" data-track="cta_click" data-track-label="Product Card Credit Line">
              Check Credit Line &rarr;
            </a>
          </div>

          <!-- Product 4: Education Loan -->
          <div class="product-premium-card">
            <div class="product-icon-wrap" style="background:#FAF5FF; color:#9333EA;">
              ${ICONS.book}
            </div>
            <h3 class="product-title">Education Loan</h3>
            <p class="product-tagline">Financing for professional certifications, semester tuition, and skill upskilling.</p>
            
            <div class="product-amount-box">
              <span class="product-amount-val">Up to ₹5,00,000</span>
              <span class="product-amount-sub">Career advancement &bull; Low documentation*</span>
            </div>

            <ul class="product-benefits-list">
              <li>${ICONS.checkCircle} Covers course fees &amp; learning equipment</li>
              <li>${ICONS.checkCircle} Easy installment repayment terms</li>
              <li>${ICONS.checkCircle} Zero branch visits required</li>
            </ul>

            <a href="/apply" class="btn btn-secondary btn-block" data-track="cta_click" data-track-label="Product Card Education Loan">
              Apply for Education Loan &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. LOAN & REPAYMENT CALCULATOR SECTION (Section 26 Specification) -->
    <section class="section" id="calculator" style="background:#FFFFFF;">
      <div class="container">
        <div class="section-title-wrap text-center">
          <span class="section-pill">Interactive Financial Tool</span>
          <h2 class="section-title">Loan &amp; Repayment Calculator</h2>
          <p class="section-desc">
            Visualize your loan parameters, daily ROI, processing fee (8.99% + GST), and estimated repayment before applying.
          </p>
        </div>

        ${getCalculatorComponentHtml('short-term')}
      </div>
    </section>

    <!-- 7. HOW IT WORKS TIMELINE (Section 10 Specification - 3-Step Interactive Timeline) -->
    <section class="section how-it-works-fintech" id="how-it-works" style="background:var(--c-bg-subtle);">
      <div class="container">
        <div class="section-title-wrap text-center">
          <span class="section-pill section-pill-emerald">Simple 3-Step Journey</span>
          <h2 class="section-title">How It Works</h2>
          <p class="section-desc">
            From eligibility check to bank credit in 3 predictable digital steps.
          </p>
        </div>

        <div class="timeline-interactive-track">
          <!-- Step 1 -->
          <div class="timeline-fintech-step">
            <div class="timeline-step-badge">01</div>
            <div class="timeline-step-icon">${ICONS.user}</div>
            <h3 class="timeline-step-title">Check Eligibility</h3>
            <p class="timeline-step-desc">
              Submit your mobile number and basic employment details in under 30 seconds for an instant assessment.
            </p>
            <div class="timeline-step-sub">Zero credit score impact</div>
          </div>

          <!-- Step 2 -->
          <div class="timeline-fintech-step">
            <div class="timeline-step-badge">02</div>
            <div class="timeline-step-icon">${ICONS.shield}</div>
            <h3 class="timeline-step-title">Get Approved</h3>
            <p class="timeline-step-desc">
              Complete paperless online KYC with Aadhaar &amp; PAN and review your transparent Key Fact Statement.
            </p>
            <div class="timeline-step-sub">100% digital verification</div>
          </div>

          <!-- Step 3 -->
          <div class="timeline-fintech-step">
            <div class="timeline-step-badge">03</div>
            <div class="timeline-step-icon">${ICONS.sparkle}</div>
            <h3 class="timeline-step-title">Receive Money</h3>
            <p class="timeline-step-desc">
              Accept your loan offer and receive funds credited directly into your verified bank account.
            </p>
            <div class="timeline-step-sub">Direct bank transfer</div>
          </div>
        </div>

        <div style="text-align:center; margin-top:40px;">
          <a href="/apply" class="btn btn-primary btn-lg" data-track="cta_click" data-track-label="How It Works Start Application">
            Start Your Application &rarr;
          </a>
        </div>
      </div>
    </section>

    <!-- 8. HUMAN / LIFESTYLE STORY SECTION (Section 11 Specification) -->
    <section class="section human-lifestyle-section" style="background:#FFFFFF;">
      <div class="container">
        <div class="lifestyle-grid">
          <div class="lifestyle-image-col">
            <div class="lifestyle-visual-wrap">
              <img src="/assets/images/lifestyle-approval.jpg" alt="Relieved Indian couple celebrating loan approval on smartphone" class="lifestyle-img" width="560" height="420" loading="lazy">
              
              <!-- Floating Overlaid Approval Card -->
              <div class="lifestyle-approval-card" aria-label="Sample Loan Approval">
                <div class="approval-card-header">
                  <span class="approval-icon">🎉</span>
                  <div>
                    <div class="approval-title">Loan Approved!</div>
                    <div class="approval-status">Disbursed Successfully</div>
                  </div>
                </div>
                <div class="approval-amount">₹2,00,000</div>
                <div class="approval-account-note">Direct credit to HDFC Bank A/c &bull;&bull;4829</div>
              </div>
            </div>
          </div>

          <div class="lifestyle-content-col">
            <span class="section-pill section-pill-amber">Peace of Mind</span>
            <h2 class="lifestyle-heading">Money When You Need It.</h2>
            <p class="lifestyle-narrative">
              Life doesn't wait for payday. Whether it is an unexpected hospital deposit, emergency vehicle repair, or urgent business inventory before a festive sale, ClickMyLoan provides timely digital credit with complete transparency.
            </p>
            
            <div class="lifestyle-points-list">
              <div class="lifestyle-point">
                <span class="lifestyle-point-icon">${ICONS.checkCircle}</span>
                <div>
                  <strong>No Hidden Surprises:</strong> Every single rupee of processing fee and interest is itemized in your KFS before you accept.
                </div>
              </div>
              <div class="lifestyle-point">
                <span class="lifestyle-point-icon">${ICONS.checkCircle}</span>
                <div>
                  <strong>Zero Prepayment Penalties:</strong> Settle early anytime with 0% foreclosure charges.
                </div>
              </div>
              <div class="lifestyle-point">
                <span class="lifestyle-point-icon">${ICONS.checkCircle}</span>
                <div>
                  <strong>Respectful Support:</strong> Professional customer care and strict adherence to RBI digital lending norms.
                </div>
              </div>
            </div>

            <div style="margin-top:28px;">
              <a href="/apply" class="btn btn-primary btn-lg" data-track="cta_click" data-track-label="Lifestyle Section Apply">
                Check Your Eligibility Online &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. CUSTOMER TESTIMONIALS CAROUSEL (Section 12 Specification) -->
    <section class="section testimonials-carousel-section" style="background:var(--c-bg-subtle);">
      <div class="container">
        <div class="section-title-wrap text-center">
          <span class="section-pill section-pill-amber">Borrower Feedback</span>
          <h2 class="section-title">What Our Borrowers Say</h2>
          <p class="section-desc">
            Real experiences from working professionals and business owners across India.
          </p>
        </div>

        <div class="carousel-container" id="testimonials-carousel">
          <div class="carousel-track">
            <!-- Review 1 -->
            <div class="carousel-slide active">
              <div class="testimonial-card">
                <div class="testimonial-stars">★★★★★</div>
                <p class="testimonial-quote">
                  "Needed quick funds for a medical deposit when hospital insurance took time. The clear fee breakdown with zero hidden charges made me feel completely secure."
                </p>
                <div class="testimonial-author-wrap">
                  <div class="testimonial-avatar">RS</div>
                  <div>
                    <div class="testimonial-name">Ramesh S.</div>
                    <div class="testimonial-context">Medical Emergency &bull; Pune</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Review 2 -->
            <div class="carousel-slide">
              <div class="testimonial-card">
                <div class="testimonial-stars">★★★★★</div>
                <p class="testimonial-quote">
                  "The 0% foreclosure charge is genuine. I was able to settle my loan 20 days early right after getting my project payout, without paying a single rupee penalty."
                </p>
                <div class="testimonial-author-wrap">
                  <div class="testimonial-avatar">AM</div>
                  <div>
                    <div class="testimonial-name">Anita M.</div>
                    <div class="testimonial-context">Salaried Professional &bull; Bengaluru</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Review 3 -->
            <div class="carousel-slide">
              <div class="testimonial-card">
                <div class="testimonial-stars">★★★★★</div>
                <p class="testimonial-quote">
                  "Helped bridge our working capital inventory before a festive sale. The Key Fact Statement showed every single rupee of interest and processing fee upfront."
                </p>
                <div class="testimonial-author-wrap">
                  <div class="testimonial-avatar">VP</div>
                  <div>
                    <div class="testimonial-name">Vikram P.</div>
                    <div class="testimonial-context">Retail Business &bull; Delhi NCR</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Review 4 -->
            <div class="carousel-slide">
              <div class="testimonial-card">
                <div class="testimonial-stars">★★★★★</div>
                <p class="testimonial-quote">
                  "Approved my certification course fee in 15 minutes. The daily ROI structure was transparent and completely manageable for my 45-day bridge plan."
                </p>
                <div class="testimonial-author-wrap">
                  <div class="testimonial-avatar">PK</div>
                  <div>
                    <div class="testimonial-name">Priya K.</div>
                    <div class="testimonial-context">Tech Professional &bull; Mumbai</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Carousel Controls -->
          <div class="carousel-nav-controls">
            <button type="button" class="carousel-btn prev-btn" id="carousel-prev-btn" aria-label="Previous Testimonial">
              &larr;
            </button>
            <div class="carousel-dots" id="carousel-dots">
              <span class="carousel-dot active" data-slide="0"></span>
              <span class="carousel-dot" data-slide="1"></span>
              <span class="carousel-dot" data-slide="2"></span>
              <span class="carousel-dot" data-slide="3"></span>
            </div>
            <button type="button" class="carousel-btn next-btn" id="carousel-next-btn" aria-label="Next Testimonial">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. DEDICATED TRUST & SECURITY SECTION (Section 13 Specification) -->
    <section class="section trust-security-fintech-section" style="background:#0F172A; color:#FFFFFF;">
      <div class="container">
        <div class="section-title-wrap text-center">
          <span class="section-pill" style="background:rgba(255,94,0,0.15); color:#FF5E00; border:1px solid rgba(255,94,0,0.3);">
            Security &amp; Compliance
          </span>
          <h2 class="section-title" style="color:#FFFFFF;">Bank-Grade Digital Protection</h2>
          <p class="section-desc" style="color:#94A3B8;">
            We safeguard your privacy with certified enterprise cryptography and strict regulatory governance.
          </p>
        </div>

        <div class="security-pillars-grid">
          <div class="security-pillar-card">
            <div class="security-pillar-icon">${ICONS.lock}</div>
            <h3 class="security-pillar-title">256-Bit TLS Encryption</h3>
            <p class="security-pillar-desc">
              All communications between your device and our servers use TLS 1.3 protocol with SHA-256 cipher suites.
            </p>
          </div>

          <div class="security-pillar-card">
            <div class="security-pillar-icon">${ICONS.shield}</div>
            <h3 class="security-pillar-title">DPDP Act 2023 Compliant</h3>
            <p class="security-pillar-desc">
              Strict personal data privacy. We never access your contacts, private photos, or personal files.
            </p>
          </div>

          <div class="security-pillar-card">
            <div class="security-pillar-icon">${ICONS.checkCircle}</div>
            <h3 class="security-pillar-title">Regulated NBFC Partners</h3>
            <p class="security-pillar-desc">
              Credit facilities are extended exclusively by RBI-regulated banking and NBFC lending partners.
            </p>
          </div>

          <div class="security-pillar-card">
            <div class="security-pillar-icon">${ICONS.sparkle}</div>
            <h3 class="security-pillar-title">Zero Advance Fees</h3>
            <p class="security-pillar-desc">
              ClickMyLoan strictly enforces a zero upfront fee policy. Fees are deducted only upon disbursal.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. ELIGIBILITY SECTION -->
    <section class="section" id="eligibility" style="background:#FFFFFF;">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-pill">Fair &amp; Objective Criteria</span>
          <h2 class="section-title">Check Your Eligibility</h2>
          <p class="section-desc">
            We evaluate applications objectively without arbitrary criteria, keeping borrowing safe and affordable.
          </p>
        </div>

        <div class="eligibility-cards-grid">
          <div class="elig-card">
            <div class="elig-icon-box">${ICONS.briefcase}</div>
            <h3 class="elig-title">Employment</h3>
            <p class="elig-text">Salaried employees or self-employed professionals with regular active occupation.</p>
          </div>

          <div class="elig-card">
            <div class="elig-icon-box">${ICONS.percent}</div>
            <h3 class="elig-title">Income</h3>
            <p class="elig-text">Verifiable monthly income received regularly into an active Indian bank account.</p>
          </div>

          <div class="elig-card">
            <div class="elig-icon-box">${ICONS.clock}</div>
            <h3 class="elig-title">Age</h3>
            <p class="elig-text">Applicants should typically be between 21 and 58 years of age at the time of application.</p>
          </div>

          <div class="elig-card">
            <div class="elig-icon-box">${ICONS.shield}</div>
            <h3 class="elig-title">Credit Profile</h3>
            <p class="elig-text">Credit history assessed objectively in alignment with partner lender credit risk policies.</p>
          </div>

          <div class="elig-card">
            <div class="elig-icon-box">${ICONS.fileText}</div>
            <h3 class="elig-title">KYC Documents</h3>
            <p class="elig-text">Valid PAN Card and Aadhaar Card linked to an active mobile phone number for e-KYC.</p>
          </div>

          <div class="elig-card">
            <div class="elig-icon-box">${ICONS.checkCircle}</div>
            <h3 class="elig-title">Bank Account</h3>
            <p class="elig-text">An operational savings bank account in the applicant's name for direct disbursal and e-NACH.</p>
          </div>
        </div>

        <div class="elig-statement-box">
          <p>
            <strong>Important Policy:</strong> Eligibility is determined based on customer profile, income, credit assessment, verification and applicable lender policies. Checking indicative eligibility does not impact your credit bureau score.
          </p>
          <div style="margin-top:16px;">
            <a href="/apply" class="btn btn-primary" data-track="cta_click" data-track-label="Eligibility Section CTA">
              Check Eligibility
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. DOCUMENTS SECTION -->
    <section class="section" id="documents" style="background:var(--c-bg-subtle);">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-pill">Paperless Documentation</span>
          <h2 class="section-title">Documents You May Need</h2>
          <p class="section-desc">
            Simple digital verification from your smartphone. No physical visits, photocopying, or courier runs.
          </p>
        </div>

        <div class="doc-cards-grid">
          <div class="doc-card">
            <div class="doc-icon-wrap">${ICONS.fileText}</div>
            <h3 class="doc-title">PAN Card</h3>
            <p class="doc-desc">Primary government identity proof for PAN verification and tax identification.</p>
          </div>

          <div class="doc-card">
            <div class="doc-icon-wrap">${ICONS.shield}</div>
            <h3 class="doc-title">Aadhaar Card</h3>
            <p class="doc-desc">Address and identity verification completed instantly via paperless UIDAI OTP e-KYC.</p>
          </div>

          <div class="doc-card">
            <div class="doc-icon-wrap">${ICONS.sparkle}</div>
            <h3 class="doc-title">Bank Details</h3>
            <p class="doc-desc">Active account number &amp; IFSC to facilitate direct credit and repayment setup.</p>
          </div>

          <div class="doc-card">
            <div class="doc-icon-wrap">${ICONS.briefcase}</div>
            <h3 class="doc-title">Income &amp; Employment</h3>
            <p class="doc-desc">Recent salary slips or bank statements demonstrating regular financial inflow.</p>
          </div>

          <div class="doc-card">
            <div class="doc-icon-wrap">${ICONS.info}</div>
            <h3 class="doc-title">Other KYC Documents</h3>
            <p class="doc-desc">Supplementary documentation only where applicable based on profile assessment.</p>
          </div>
        </div>

        <div class="doc-notice-banner">
          <p>
            ${ICONS.info} <span><strong>Note:</strong> Documents may vary based on eligibility and lender requirements. All uploads are processed via encrypted protocols.</span>
          </p>
        </div>
      </div>
    </section>

    <!-- 8. LOAN USE CASES SECTION -->
    <section class="section" style="background:#FFFFFF;">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-pill section-pill-emerald">Financial Purpose</span>
          <h2 class="section-title">Funds For Your Important Needs</h2>
          <p class="section-desc">
            Flexible short-term credit designed to support you through planned milestones and unforeseen emergencies.
          </p>
        </div>

        <div class="usecases-grid">
          <div class="usecase-card">
            <div class="usecase-icon">🩺</div>
            <h3 class="usecase-title">Medical Expenses</h3>
            <p class="usecase-desc">Urgent healthcare needs, diagnostic tests, hospital deposits, or emergency care.</p>
          </div>

          <div class="usecase-card">
            <div class="usecase-icon">🎓</div>
            <h3 class="usecase-title">Education</h3>
            <p class="usecase-desc">Skill certification fees, college tuition installments, or semester course materials.</p>
          </div>

          <div class="usecase-card">
            <div class="usecase-icon">🏡</div>
            <h3 class="usecase-title">Home Needs</h3>
            <p class="usecase-desc">Essential home repairs, appliance replacements, or urgent household maintenance.</p>
          </div>

          <div class="usecase-card">
            <div class="usecase-icon">✈️</div>
            <h3 class="usecase-title">Travel</h3>
            <p class="usecase-desc">Urgent family visits, transit bookings, or essential hometown travels.</p>
          </div>

          <div class="usecase-card">
            <div class="usecase-icon">⚡</div>
            <h3 class="usecase-title">Emergency Expenses</h3>
            <p class="usecase-desc">Unforeseen lifestyle contingencies and temporary short-term liquidity shortfalls.</p>
          </div>

          <div class="usecase-card">
            <div class="usecase-icon">💼</div>
            <h3 class="usecase-title">Personal Requirements</h3>
            <p class="usecase-desc">Family celebrations, festive requirements, or personal milestone obligations.</p>
          </div>

          <div class="usecase-card">
            <div class="usecase-icon">⚖️</div>
            <h3 class="usecase-title">Debt Management</h3>
            <p class="usecase-desc">Managing short-term obligations and bridging monthly cash-flow gaps smoothly.</p>
          </div>
        </div>

        <p class="usecase-disclaimer">
          Depending on the applicable loan terms, eligible customers may use funds for permitted personal financial needs.
        </p>
      </div>
    </section>

    <!-- 9. TRUST & SECURITY SECTION -->
    <section class="section" style="background:var(--c-bg-subtle);">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-pill">Our Commitment</span>
          <h2 class="section-title">Built on Trust &amp; Responsible Lending</h2>
          <p class="section-desc">
            We adhere strictly to verified financial practices, digital security standards, and regulatory guidelines.
          </p>
        </div>

        <div class="trust-cards-grid">
          <div class="trust-pillar-card">
            <div class="trust-card-icon">${ICONS.lock}</div>
            <h3 class="trust-card-title">Secure Application</h3>
            <p class="trust-card-desc">
              Bank-grade 256-bit TLS encryption protects all data in transit. Your connection is fully secured.
            </p>
          </div>

          <div class="trust-pillar-card">
            <div class="trust-card-icon">${ICONS.fileText}</div>
            <h3 class="trust-card-title">Transparent Terms</h3>
            <p class="trust-card-desc">
              No hidden fees, no deceptive teaser rates. Every term is explained clearly before loan acceptance.
            </p>
          </div>

          <div class="trust-pillar-card">
            <div class="trust-card-icon">${ICONS.sparkle}</div>
            <h3 class="trust-card-title">Digital Process</h3>
            <p class="trust-card-desc">
              100% paperless onboarding and agreement execution without physical branch visits.
            </p>
          </div>

          <div class="trust-pillar-card">
            <div class="trust-card-icon">${ICONS.phone}</div>
            <h3 class="trust-card-title">Customer Support</h3>
            <p class="trust-card-desc">
              Dedicated relationship managers and helpdesk available Monday through Saturday (9:30 AM – 6:30 PM).
            </p>
          </div>

          <div class="trust-pillar-card">
            <div class="trust-card-icon">${ICONS.percent}</div>
            <h3 class="trust-card-title">Clear Charges</h3>
            <p class="trust-card-desc">
              Upfront 8.99% processing fee + GST, 0% foreclosure charges, and transparent daily ROI (0.2%–1%/day).
            </p>
          </div>

          <div class="trust-pillar-card">
            <div class="trust-card-icon">${ICONS.shield}</div>
            <h3 class="trust-card-title">Privacy &amp; Data Protection</h3>
            <p class="trust-card-desc">
              Full compliance with DPDP Act 2023. We never access private contacts, phone storage, or galleries.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. ABOUT CLICKMYLOAN -->
    <section class="section" id="about" style="background:#FFFFFF;">
      <div class="container">
        <div class="about-intro-grid">
          <div>
            <span class="section-pill section-pill-emerald">About ClickMyLoan</span>
            <h2 style="font-size:clamp(1.8rem, 3vw, 2.4rem); color:var(--c-text-main); margin:12px 0 16px;">
              Making Digital Borrowing Simpler
            </h2>
            <p style="font-size:1.05rem; line-height:1.7; color:var(--c-text-muted); margin-bottom:20px;">
              ClickMyLoan is focused on creating a simple, transparent and technology-driven borrowing experience for eligible customers. We believe that access to short-term credit should be dignified, rapid, and completely free of confusing jargon.
            </p>
            <p style="font-size:0.95rem; line-height:1.7; color:var(--c-text-muted); margin-bottom:24px;">
              Operating as a compliant Lending Service Provider (LSP), ClickMyLoan bridges borrowers with institutional capital through modern technology, clear Key Fact Statements, and strict adherence to RBI digital lending guidelines.
            </p>

            <div class="about-pillars-list">
              <div class="about-pillar-item">
                <span class="about-pillar-icon">${ICONS.checkCircle}</span>
                <div>
                  <strong>Digital-First Approach:</strong> 100% paperless onboarding and instant verification from your phone.
                </div>
              </div>
              <div class="about-pillar-item">
                <span class="about-pillar-icon">${ICONS.checkCircle}</span>
                <div>
                  <strong>Customer-First Experience:</strong> Respectful communication, zero aggressive recovery tactics, and empathetic support.
                </div>
              </div>
              <div class="about-pillar-item">
                <span class="about-pillar-icon">${ICONS.checkCircle}</span>
                <div>
                  <strong>Transparent Communication:</strong> Explicit cost disclosure with 0% foreclosure penalties.
                </div>
              </div>
              <div class="about-pillar-item">
                <span class="about-pillar-icon">${ICONS.checkCircle}</span>
                <div>
                  <strong>Responsible Lending:</strong> Structured credit limits ensuring borrowers are never trapped in unmanageable debt.
                </div>
              </div>
            </div>

            <div style="margin-top:28px;">
              <a href="/about-us" class="btn btn-secondary">
                Learn More About Us &rarr;
              </a>
            </div>
          </div>

          <div>
            <div class="digital-first-card">
              <div class="digital-card-icon">${ICONS.shield}</div>
              <h3 style="font-size:1.3rem; margin-bottom:12px; color:var(--c-text-main);">Our Ethical Lending Promise</h3>
              <p style="font-size:0.9rem; color:var(--c-text-muted); line-height:1.6; margin-bottom:20px;">
                We hold ourselves to the highest ethical and regulatory benchmarks in Indian digital finance.
              </p>
              <ul class="digital-checklist">
                <li>${ICONS.checkCircle} Zero advance fee policy strictly enforced</li>
                <li>${ICONS.checkCircle} Transparent 0.2% - 1% per day ROI</li>
                <li>${ICONS.checkCircle} Pre-agreed Key Fact Statement (KFS)</li>
                <li>${ICONS.checkCircle} 0% Foreclosure charges for early exit</li>
                <li>${ICONS.checkCircle} Regulated NBFC and Banking partners</li>
                <li>${ICONS.checkCircle} Dedicated Grievance Redressal Officer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 11. LEADERSHIP & TEAM SECTION -->
    <section class="section" id="team" style="background:#F8FAFC;">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-pill">Executive Leadership &amp; Core Team</span>
          <h2 class="section-title">Our Leadership Team</h2>
          <p class="section-desc">
            Guided by seasoned fintech practitioners committed to technological excellence and ethical financial governance.
          </p>
        </div>

        <div class="team-cards-grid">
          <!-- Kabir Chaudhary (Kabeer Sir) -->
          <div class="flip-card" tabindex="0" onclick="this.classList.toggle('is-flipped')" aria-label="Profile of Kabir Chaudhary, Founder / CEO">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="/assets/teams/kabeer.jpeg" alt="Kabir Chaudhary" class="profile-img" loading="lazy" width="130" height="130">
                <h3 class="team-name">Kabir Chaudhary</h3>
                <p class="team-role">Founder / CEO</p>
                <span class="experience-badge">14 Years Experience</span>
                <div class="card-flip-prompt"><span>Hover / tap to view bio</span></div>
              </div>
              <div class="flip-card-back">
                <div class="back-content">
                  <h3 class="team-name-back">Kabir Chaudhary</h3>
                  <p class="education-text">Hansraj College, DU &bull; IIM Calcutta</p>
                  <span class="experience-badge experience-badge-back">14 Years Experience</span>
                  <div class="bio-scroll">
                    <p>Leads ClickMyLoan's overall vision, strategy, and responsible lending partnerships. Focuses on building scalable technology, fostering compliance, and delivering lasting value to borrowers.</p>
                  </div>
                  <a href="https://www.linkedin.com/in/kabeer-chaudhary-18bb7984" target="_blank" rel="noopener noreferrer" class="linkedin-btn">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Apoorve Bansal (Apoorva Sir) -->
          <div class="flip-card" tabindex="0" onclick="this.classList.toggle('is-flipped')" aria-label="Profile of Apoorve Bansal, Co-Founder">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="/assets/teams/apoorv.jpeg" alt="Apoorve Bansal" class="profile-img" loading="lazy" width="130" height="130">
                <h3 class="team-name">Apoorve Bansal</h3>
                <p class="team-role">Co-Founder</p>
                <span class="experience-badge">10 Years Experience</span>
                <div class="card-flip-prompt"><span>Hover / tap to view bio</span></div>
              </div>
              <div class="flip-card-back">
                <div class="back-content">
                  <h3 class="team-name-back">Apoorve Bansal</h3>
                  <p class="education-text">Chartered Accountant (CA)</p>
                  <span class="experience-badge experience-badge-back">10 Years Experience</span>
                  <div class="bio-scroll">
                    <p>Co-Founder driving financial governance, capital structuring, risk management, and strategic partnerships to build a sustainable digital lending ecosystem.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Aman Kumar (Aman) -->
          <div class="flip-card" tabindex="0" onclick="this.classList.toggle('is-flipped')" aria-label="Profile of Aman Kumar, Chief Operating Officer">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="/assets/teams/aman.jpeg" alt="Aman Kumar" class="profile-img" loading="lazy" width="130" height="130">
                <h3 class="team-name">Aman Kumar</h3>
                <p class="team-role">Chief Operating Officer</p>
                <span class="experience-badge">5 Years Experience</span>
                <div class="card-flip-prompt"><span>Hover / tap to view bio</span></div>
              </div>
              <div class="flip-card-back">
                <div class="back-content">
                  <h3 class="team-name-back">Aman Kumar</h3>
                  <p class="education-text">Engineering DCE</p>
                  <span class="experience-badge experience-badge-back">5 Years Experience</span>
                  <div class="bio-scroll">
                    <p>Oversees end-to-end platform operations, customer delivery workflows, and cross-functional team execution to ensure seamless loan processing.</p>
                  </div>
                  <a href="https://www.linkedin.com/in/aman-kumar-46a957173/" target="_blank" rel="noopener noreferrer" class="linkedin-btn">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Akshay — Product Manager -->
          <div class="flip-card" tabindex="0" onclick="this.classList.toggle('is-flipped')" aria-label="Profile of Akshay, Product Manager">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="profile-img-avatar">AK</div>
                <h3 class="team-name">Akshay</h3>
                <p class="team-role">Product Manager</p>
                <span class="experience-badge" style="background:#0284C7;">Product &amp; Tech</span>
                <div class="card-flip-prompt"><span>Hover / tap to view role</span></div>
              </div>
              <div class="flip-card-back">
                <div class="back-content">
                  <h3 class="team-name-back">Akshay</h3>
                  <p class="education-text">Fintech Product Leadership</p>
                  <div class="bio-scroll">
                    <p>Leads product strategy, customer journey design, and conversion optimization, ensuring ClickMyLoan's digital platform is intuitive, fast, and accessible.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Nisha — Head of Talent Acquisition -->
          <div class="flip-card" tabindex="0" onclick="this.classList.toggle('is-flipped')" aria-label="Profile of Nisha, Head of Talent Acquisition">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="/assets/teams/ishika.png" alt="Nisha" class="profile-img" loading="lazy" width="130" height="130">
                <h3 class="team-name">Nisha</h3>
                <p class="team-role">Head of Talent Acquisition</p>
                <span class="experience-badge">People &amp; Culture</span>
                <div class="card-flip-prompt"><span>Hover / tap to view bio</span></div>
              </div>
              <div class="flip-card-back">
                <div class="back-content">
                  <h3 class="team-name-back">Nisha</h3>
                  <p class="education-text">Human Resources &amp; Talent Acquisition</p>
                  <div class="bio-scroll">
                    <p>Drives organizational hiring, talent acquisition strategy, employer branding, and building high-performance fintech teams across business functions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Rahul Kumar — Head of Collections -->
          <div class="flip-card" tabindex="0" onclick="this.classList.toggle('is-flipped')" aria-label="Profile of Rahul Kumar, Head of Collections">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="/assets/teams/rahul.jpg" alt="Rahul Kumar" class="profile-img" loading="lazy" width="130" height="130">
                <h3 class="team-name">Rahul Kumar</h3>
                <p class="team-role">Head of Collections</p>
                <span class="experience-badge">12 Years Experience</span>
                <div class="card-flip-prompt"><span>Hover / tap to view bio</span></div>
              </div>
              <div class="flip-card-back">
                <div class="back-content">
                  <h3 class="team-name-back">Rahul Kumar</h3>
                  <p class="education-text">Post-Graduate</p>
                  <span class="experience-badge experience-badge-back">12 Years Experience</span>
                  <div class="bio-scroll">
                    <p>Leads customer-centric collection strategies, ensuring strict adherence to the Fair Practice Code, ethical customer interaction, and healthy portfolio metrics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Auro — Data Scientist -->
          <div class="flip-card" tabindex="0" onclick="this.classList.toggle('is-flipped')" aria-label="Profile of Auro, Data Scientist">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="/assets/teams/suraj.jpeg" alt="Auro" class="profile-img" loading="lazy" width="130" height="130">
                <h3 class="team-name">Auro</h3>
                <p class="team-role">Data Scientist</p>
                <span class="experience-badge">5 Years Experience</span>
                <div class="card-flip-prompt"><span>Hover / tap to view bio</span></div>
              </div>
              <div class="flip-card-back">
                <div class="back-content">
                  <h3 class="team-name-back">Auro</h3>
                  <p class="education-text">Data Science &amp; Risk Analytics</p>
                  <span class="experience-badge experience-badge-back">5 Years Experience</span>
                  <div class="bio-scroll">
                    <p>Specializes in predictive credit risk analytics, automated underwriting algorithms, and data-driven fraud detection to empower fair credit assessments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Rahul & Saurad — Designation to be confirmed -->
          <div class="flip-card" tabindex="0" onclick="this.classList.toggle('is-flipped')" aria-label="Profile of Rahul & Saurad">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="profile-img-avatar" style="background:linear-gradient(135deg, #10B981 0%, #059669 100%);">RS</div>
                <h3 class="team-name">Rahul &amp; Saurad</h3>
                <p class="team-role">[Designation to be confirmed]</p>
                <span class="experience-badge" style="background:#64748B;">Pending Confirmation</span>
                <div class="card-flip-prompt"><span>Hover / tap to view note</span></div>
              </div>
              <div class="flip-card-back">
                <div class="back-content">
                  <h3 class="team-name-back">Rahul &amp; Saurad</h3>
                  <p class="education-text">[Designation to be confirmed]</p>
                  <div class="bio-scroll">
                    <p>Team members identified from internal records. Official designation and profile details will be confirmed with the ClickMyLoan leadership team before publishing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Ajay Kumar — Head of Credit -->
          <div class="flip-card" tabindex="0" onclick="this.classList.toggle('is-flipped')" aria-label="Profile of Ajay Kumar, Head of Credit">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="/assets/teams/ajay.png" alt="Ajay Kumar" class="profile-img" loading="lazy" width="130" height="130">
                <h3 class="team-name">Ajay Kumar</h3>
                <p class="team-role">Head of Credit</p>
                <span class="experience-badge">Credit Leadership</span>
                <div class="card-flip-prompt"><span>Hover / tap to view bio</span></div>
              </div>
              <div class="flip-card-back">
                <div class="back-content">
                  <h3 class="team-name-back">Ajay Kumar</h3>
                  <p class="education-text">MBA &bull; Senior Credit Leadership</p>
                  <div class="bio-scroll">
                    <p>Responsible for overseeing credit appraisal standards, portfolio risk management, and ensuring strict compliance with regulatory underwriting parameters.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="text-align:center; margin-top:32px;">
          <a href="/about-us#team" class="btn btn-secondary">
            View Complete Team Roster &rarr;
          </a>
        </div>
      </div>
    </section>

    <!-- 12. SANSKRIT SHLOK SECTION (Guiding Indian Financial Philosophy) -->
    <section class="section shlok-section" aria-label="Our Guiding Philosophy">
      <div class="container">
        <div class="shlok-card">
          <div class="shlok-pattern-overlay" aria-hidden="true"></div>
          <div class="shlok-content">
            <div class="shlok-emblem" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="24" cy="24" r="21" stroke="rgba(255, 122, 26, 0.4)"/>
                <polygon points="24,7 38,37 10,37" stroke="#FF7A1A"/>
                <polygon points="24,41 10,11 38,11" stroke="#FF7A1A"/>
                <circle cx="24" cy="24" r="4" fill="#FF5E00"/>
              </svg>
            </div>
            <span class="shlok-subheading">Our Guiding Principle &bull; भारतीय वित्तीय मूल्य</span>
            <blockquote class="shlok-verse">
              "उद्यमेन हि सिद्ध्यन्ति कार्याणि न मनोरथैः।"
            </blockquote>
            <p class="shlok-translit">
              <em>Udyamena hi siddhyanti kāryāṇi na manorathaiḥ</em>
            </p>
            <p class="shlok-meaning">
              "Success is achieved through effort, not merely through wishes."
            </p>
            <p class="shlok-narrative">
              At ClickMyLoan, we believe true financial progress is built through disciplined action, technological diligence, and ethical responsibility. We stand beside hardworking individuals and entrepreneurs to turn ambitions into reality through accessible, transparent digital lending.
            </p>
            <div class="shlok-pillars">
              <span class="shlok-pillar-pill"><span class="pillar-dot"></span> Trust</span>
              <span class="shlok-pillar-pill"><span class="pillar-dot"></span> Progress</span>
              <span class="shlok-pillar-pill"><span class="pillar-dot"></span> Responsibility</span>
              <span class="shlok-pillar-pill"><span class="pillar-dot"></span> Determination</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 13. TRANSPARENT CHARGES & IMPORTANT INFORMATION -->
    <section class="section" id="charges" style="background:#FFFFFF;">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-pill section-pill-emerald">Complete Clarity</span>
          <h2 class="section-title">Loan Charges &amp; Important Information</h2>
          <p class="section-desc">
            We believe pricing transparency is your fundamental right. Here is our full charge structure.
          </p>
        </div>

        <div class="charges-box">
          <div class="charges-highlight-grid">
            <div class="charge-stat-card">
              <span class="charge-stat-title">Maximum Loan Amount</span>
              <div class="charge-stat-val">Up to ₹5,00,000</div>
              <p class="charge-stat-desc">Structured for eligible short-term personal needs</p>
            </div>

            <div class="charge-stat-card">
              <span class="charge-stat-title">Rate of Interest (ROI)</span>
              <div class="charge-stat-val">0.2% – 1% / day</div>
              <p class="charge-stat-desc">Exact daily rate determined by credit assessment</p>
            </div>

            <div class="charge-stat-card">
              <span class="charge-stat-title">Processing Fee</span>
              <div class="charge-stat-val">8.99% + GST</div>
              <p class="charge-stat-desc">Deducted from disbursal; zero upfront fees</p>
            </div>

            <div class="charge-stat-card">
              <span class="charge-stat-title">Foreclosure Charges</span>
              <div class="charge-stat-val" style="color:var(--c-success-dark);">0%</div>
              <p class="charge-stat-desc">Zero penalty for prepaying or settling early</p>
            </div>
          </div>

          <div class="kfs-banner" style="margin-top:24px;">
            ${ICONS.info}
            <div>
              <strong>Key Fact Statement Guarantee:</strong> Actual loan terms, applicable interest rate, fees, tenure and repayment obligations depend on eligibility and the final loan agreement/KFS. ClickMyLoan guarantees that every cost is disclosed before you sign.
            </div>
          </div>

          <div style="text-align:center; margin-top:24px;">
            <a href="/fees-and-charges" class="btn btn-secondary">
              View Detailed Fees Schedule &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 14. FAQS SECTION (All 15 Specific Questions) -->
    <section class="section" id="faq" style="background:var(--c-bg-subtle);">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-pill">Clear Answers</span>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-desc">
            Verified answers to questions regarding loan amounts, interest rates, eligibility, and data safety.
          </p>
        </div>

        <div class="faq-list">
          <!-- 1 -->
          <div class="faq-item is-open">
            <button class="faq-question" type="button" aria-expanded="true">
              <span>What is ClickMyLoan?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>ClickMyLoan is a modern digital lending platform and Lending Service Provider (LSP) providing short-term personal loans up to ₹5,00,000 to eligible Indian borrowers. We facilitate transparent digital credit in strict compliance with the RBI Digital Lending Directions in partnership with regulated Banks and NBFCs.</p>
            </div>
          </div>

          <!-- 2 -->
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>How much loan can I get?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>Eligible borrowers can receive loan sanctions up to ₹5,00,000. Your specific sanctioned amount is determined based on your monthly income, debt-to-income ratio (FOIR), credit assessment, and partner lender credit policies.</p>
            </div>
          </div>

          <!-- 3 -->
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>What is the maximum loan amount?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>The maximum loan amount available through ClickMyLoan is ₹5,00,000, subject to borrower eligibility, credit appraisal, and verification.</p>
            </div>
          </div>

          <!-- 4 -->
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>What is the applicable interest rate?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>The applicable interest rate ranges from 0.2% to 1% per day. The exact rate depends on your risk assessment, credit profile, and tenure, and is clearly disclosed in your Key Fact Statement (KFS) before loan acceptance.</p>
            </div>
          </div>

          <!-- 5 -->
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>What is the processing fee?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>The processing fee is 8.99% of the sanctioned loan amount + applicable GST (18%). This fee is deducted directly from the disbursed loan amount. ClickMyLoan never asks for upfront or advance fees.</p>
            </div>
          </div>

          <!-- 6 -->
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>Are there foreclosure charges?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>No. Foreclosure charges are 0%. Eligible borrowers can repay or close their loan early at any point without paying any prepayment penalty.</p>
            </div>
          </div>

          <!-- 7 -->
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>How can I apply?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>You can apply 100% digitally through our website: (1) Click "Apply Now" or "Check Your Eligibility", (2) Enter your mobile number and basic profile details, (3) Complete digital KYC and bank verification, and (4) Review your approved loan offer.</p>
            </div>
          </div>

          <!-- 8 -->
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>What documents are required?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>Standard documents include your PAN Card, Aadhaar Card (for digital paperless e-KYC), bank account details, and income/employment verification (such as bank statement or salary slip). Documents may vary based on eligibility and lender requirements.</p>
            </div>
          </div>

          <!-- 9 -->
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>How does the loan application process work?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>The journey consists of 4 digital steps: (1) Apply online with basic contact details, (2) Verify identity and income paperlessly, (3) Review approved terms in the Key Fact Statement (KFS), and (4) E-sign your agreement to receive funds directly into your verified bank account.</p>
            </div>
          </div>

          <!-- 10 -->
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>How is my eligibility determined?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>Eligibility is determined based on customer profile, regular income, credit assessment, age (typically 21–58 years), KYC verification, and applicable lender policies.</p>
            </div>
          </div>

          <!-- 11 -->
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>How long does the application process take?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>The online application takes approximately 2 minutes to submit. Upon complete document verification and approval by our regulated lending partners, eligible applicants receive direct account disbursal as per the applicable process.</p>
            </div>
          </div>

          <!-- 12 -->
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>How is repayment calculated?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>Repayment is calculated based on the sanctioned principal amount, the applicable daily interest rate (between 0.2% and 1% per day), and the agreed tenure. A clear breakdown is provided in the Key Fact Statement before acceptance.</p>
            </div>
          </div>

          <!-- 13 -->
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>Can I repay my loan early?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>Yes. ClickMyLoan features 0% foreclosure charges. You can prepay your loan ahead of schedule anytime with zero foreclosure penalty.</p>
            </div>
          </div>

          <!-- 14 -->
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>Is ClickMyLoan safe?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>Yes. ClickMyLoan operates with bank-grade 256-bit encryption (TLS 1.3), strictly complies with RBI Digital Lending Guidelines, and partners exclusively with regulated NBFCs and Banks. We maintain a zero advance fee policy and never request confidential PINs or OTPs.</p>
            </div>
          </div>

          <!-- 15 -->
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>How is my personal data handled?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>Your personal data is treated with the highest security standards under the Digital Personal Data Protection (DPDP) Act, 2023. Data is collected with explicit consent solely for underwriting and compliance, and we never access phone storage, contacts, or media galleries.</p>
            </div>
          </div>
        </div>

        <div style="text-align:center; margin-top:36px;">
          <a href="/faq" class="btn btn-secondary">
            Visit Complete FAQ &amp; Knowledge Center &rarr;
          </a>
        </div>
      </div>
    </section>

    <!-- 15. FINAL HIGH-CONVERTING CTA (Section 15 Specification) -->
    <section class="section final-cta-section" id="final-cta">
      <div class="container">
        <div class="final-cta-card">
          <div class="final-cta-content">
            <span class="section-pill" style="background:#FFF7ED; color:#FF5E00; border:1px solid #FED7AA;">Fast &bull; 100% Digital &bull; Secure</span>
            <h2 class="final-cta-title">Ready to Get Your Loan?</h2>
            <p class="final-cta-desc">
              Get started with a simple digital application. Check your eligibility online in minutes and access transparent, short-term personal credit up to ₹5 Lakh.
            </p>
            <div class="final-cta-actions">
              <a href="/apply" class="btn btn-primary btn-lg" data-track="cta_click" data-track-label="Final CTA Apply Now">
                Apply Now &rarr;
              </a>
              <a href="#hero-quick-widget" class="btn btn-secondary btn-lg" data-track="cta_click" data-track-label="Final CTA Check Eligibility">
                Check Eligibility
              </a>
            </div>
            <p class="final-cta-disclaimer">
              *All loans subject to customer eligibility, credit assessment, and partner lender policy. Strictly 0% foreclosure charges.
            </p>
          </div>
          <div class="final-cta-visual">
            <div class="final-cta-img-wrap">
              <img src="/assets/images/hero-fintech-app.jpg" alt="ClickMyLoan Digital Lending App on Smartphone" class="final-cta-img" width="380" height="340" loading="lazy">
              <!-- Floating elements -->
              <div class="cta-float-badge float-rupee-cta" aria-hidden="true">₹</div>
              <div class="cta-float-badge float-percent-cta" aria-hidden="true">%</div>
              <div class="cta-float-badge float-check-cta" aria-hidden="true">✓</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
