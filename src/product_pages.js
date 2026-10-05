/**
 * ClickMyLoan — Product, Tools, Company & Compliance Page Generators
 */

import { ICONS } from './templates.js';
import { getCalculatorComponentHtml, getTrustStripHtml } from './pages.js';

// ==========================================================================
// 1. Personal Loan Page Content
// ==========================================================================
export function getPersonalLoanContent() {
  return `
    <!-- Product Hero -->
    <section class="hero-fintech" style="padding:60px 0 72px;">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="hero-badge-dot"></span>
              <span>100% Digital Processing</span>
            </div>
            <h1 class="hero-title">Quick &amp; Simple Personal Loans Up to ₹5 Lakh</h1>
            <p class="hero-subtitle">
              Achieve your personal milestones with transparent digital financing. Benefit from clear daily ROI disclosures, 8.99% processing fee, 0% foreclosure charges, and a hassle-free paperless application.
            </p>
            <div class="hero-cta-group">
              <a href="/apply" class="btn btn-primary btn-lg" data-track="cta_click" data-track-label="Personal Loan Hero Apply">
                Check Your Eligibility
              </a>
              <a href="#personal-calc" class="btn btn-outline-white btn-lg" data-track="cta_click" data-track-label="Personal Loan Hero Calc">
                ${ICONS.calculator} Calculate Loan
              </a>
            </div>
            <div class="hero-trust-bullets">
              <div class="hero-trust-item">${ICONS.checkCircle} Up to ₹5,00,000 Sanction</div>
              <div class="hero-trust-item">${ICONS.checkCircle} ROI: 0.2% – 1% / day*</div>
              <div class="hero-trust-item">${ICONS.checkCircle} 0% Foreclosure Charges*</div>
            </div>
          </div>

          <div style="background:#fff; border-radius:16px; padding:32px; border:1px solid rgba(255,255,255,0.2); box-shadow:0 20px 40px rgba(0,0,0,0.25); color:var(--c-text-main);">
            <span class="section-pill section-pill-emerald">ClickMyLoan at a Glance</span>
            <h3 style="font-size:1.35rem; color:var(--c-primary); margin:8px 0 16px;">Personal Loan Features</h3>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:12px; font-size:0.925rem; color:var(--c-text-muted);">
              <li style="display:flex; justify-content:space-between; border-bottom:1px solid #E2E8F0; padding-bottom:8px;">
                <span>Maximum Loan Amount</span>
                <strong style="color:var(--c-text-main);">Up to ₹5,00,000</strong>
              </li>
              <li style="display:flex; justify-content:space-between; border-bottom:1px solid #E2E8F0; padding-bottom:8px;">
                <span>Rate of Interest (ROI)</span>
                <strong style="color:var(--c-text-main);">0.2% – 1% / day*</strong>
              </li>
              <li style="display:flex; justify-content:space-between; border-bottom:1px solid #E2E8F0; padding-bottom:8px;">
                <span>Processing Fee</span>
                <strong style="color:var(--c-text-main);">8.99% + applicable GST*</strong>
              </li>
              <li style="display:flex; justify-content:space-between; border-bottom:1px solid #E2E8F0; padding-bottom:8px;">
                <span>Foreclosure Charges</span>
                <strong style="color:var(--c-success-dark);">0%* (Zero penalty)</strong>
              </li>
              <li style="display:flex; justify-content:space-between;">
                <span>Application Journey</span>
                <strong style="color:var(--c-text-main);">100% Digital Process</strong>
              </li>
            </ul>
            <p style="font-size:0.75rem; color:var(--c-text-subtle); margin-top:14px; line-height:1.5;">
              *Loan amount, interest rate, tenure, processing fee and other applicable charges are subject to customer eligibility, credit assessment, lender policy and the applicable loan agreement/KFS.
            </p>
            <div style="margin-top:16px;">
              <a href="/apply" class="btn btn-primary btn-block">Apply for Personal Loan</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${getTrustStripHtml()}

    <!-- Features & Key Benefits -->
    <section class="section">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-pill">Why Choose ClickMyLoan</span>
          <h2 class="section-title">Key Features of Our Personal Loans</h2>
          <p class="section-desc">
            Designed to provide financial breathing room with zero ambiguity and strict compliance with RBI digital lending norms.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:24px;">
          <div class="product-card">
            <div class="product-icon-wrap">${ICONS.shield}</div>
            <h4>Collateral-Free Financing</h4>
            <p style="font-size:0.875rem; color:var(--c-text-muted); margin-top:8px;">
              No requirement to pledge personal assets, gold, or property. Sanction is determined by credit profile and income stability.
            </p>
          </div>
          <div class="product-card">
            <div class="product-icon-wrap">${ICONS.fileText}</div>
            <h4>Pre-Agreed Key Fact Statement</h4>
            <p style="font-size:0.875rem; color:var(--c-text-muted); margin-top:8px;">
              Full disclosure of all borrowing costs, penal charges, and fees before you execute the loan agreement.
            </p>
          </div>
          <div class="product-card">
            <div class="product-icon-wrap">${ICONS.clock}</div>
            <h4>Statutory Look-Up Period</h4>
            <p style="font-size:0.875rem; color:var(--c-text-muted); margin-top:8px;">
              Exit the loan without penalties during the cooling-off window in accordance with RBI Digital Lending Guidelines.
            </p>
          </div>
          <div class="product-card">
            <div class="product-icon-wrap">${ICONS.lock}</div>
            <h4>Direct Account Disbursal</h4>
            <p style="font-size:0.875rem; color:var(--c-text-muted); margin-top:8px;">
              Sanctioned funds are disbursed directly by the regulated lending partner into your verified primary bank account.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Eligibility & Documents Grid -->
    <section class="section" style="background-color:var(--c-bg-subtle);">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-pill">Transparent Criteria</span>
          <h2 class="section-title">Eligibility Criteria & Documentation</h2>
          <p class="section-desc">
            Clear standards for both salaried and self-employed applicants. No hidden conditions.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:32px;">
          <!-- Salaried Box -->
          <div style="background:#fff; border-radius:16px; border:1px solid var(--c-border); padding:32px;">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
              <div style="width:40px; height:40px; border-radius:10px; background:var(--c-accent-light); color:var(--c-accent); display:flex; align-items:center; justify-content:center;">
                ${ICONS.user}
              </div>
              <h3 style="font-size:1.3rem;">For Salaried Applicants</h3>
            </div>
            <h4 style="font-size:0.95rem; margin-bottom:8px; color:var(--c-text-main);">Eligibility Thresholds:</h4>
            <ul style="font-size:0.875rem; color:var(--c-text-muted); padding-left:20px; line-height:1.7; margin-bottom:20px;">
              <li>Age: 21 to 58 years at the time of application</li>
              <li>Employment: Minimum 6 months continuous service</li>
              <li>Minimum Monthly Income: ₹20,000 net take-home salary</li>
              <li>Salary Mode: Direct bank account credit (cash salary not accepted)</li>
              <li>Credit Profile: CIBIL / credit bureau score of 650+ preferred</li>
            </ul>
            <h4 style="font-size:0.95rem; margin-bottom:8px; color:var(--c-text-main);">Required Documents:</h4>
            <ul style="font-size:0.875rem; color:var(--c-text-muted); padding-left:20px; line-height:1.7;">
              <li>PAN Card (Mandatory for tax identity verification)</li>
              <li>Aadhaar Card / Passport (Proof of identity & current address)</li>
              <li>Last 3 months salary slips</li>
              <li>Last 6 months salary account bank statements (PDF format)</li>
            </ul>
          </div>

          <!-- Self-Employed Box -->
          <div style="background:#fff; border-radius:16px; border:1px solid var(--c-border); padding:32px;">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
              <div style="width:40px; height:40px; border-radius:10px; background:var(--c-success-light); color:var(--c-success-dark); display:flex; align-items:center; justify-content:center;">
                ${ICONS.briefcase}
              </div>
              <h3 style="font-size:1.3rem;">For Self-Employed Individuals</h3>
            </div>
            <h4 style="font-size:0.95rem; margin-bottom:8px; color:var(--c-text-main);">Eligibility Thresholds:</h4>
            <ul style="font-size:0.875rem; color:var(--c-text-muted); padding-left:20px; line-height:1.7; margin-bottom:20px;">
              <li>Age: 23 to 65 years at the time of application</li>
              <li>Business Vintage: Minimum 2 years of active business operations</li>
              <li>Minimum Annual Net Income: ₹3,00,000 as per verified ITR</li>
              <li>Banking Activity: Consistent operational current/savings account</li>
              <li>Credit Profile: CIBIL / credit bureau score of 675+ preferred</li>
            </ul>
            <h4 style="font-size:0.95rem; margin-bottom:8px; color:var(--c-text-main);">Required Documents:</h4>
            <ul style="font-size:0.875rem; color:var(--c-text-muted); padding-left:20px; line-height:1.7;">
              <li>PAN Card of Individual / Firm</li>
              <li>Aadhaar / Proof of Business Address</li>
              <li>Last 2 years Income Tax Returns (ITR) with Computation of Income</li>
              <li>Last 6 to 12 months primary operative bank statements</li>
              <li>Business Registration Proof (GST Certificate, Shop & Est., or Udyam)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Representative APR Example Table -->
    <section class="section">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-pill section-pill-emerald">Pricing Clarity</span>
          <h2 class="section-title">Representative Loan Example</h2>
          <p class="section-desc">
            To understand the true cost of borrowing, here is an illustrative calculation demonstrating Annual Percentage Rate (APR), processing fees, and total repayment.
          </p>
        </div>

        <div style="max-width:860px; margin:0 auto; background:#fff; border:1px solid var(--c-border); border-radius:16px; padding:32px; box-shadow:var(--shadow-sm);">
          <table class="fin-table">
            <thead>
              <tr>
                <th>Loan Component</th>
                <th>Illustrative Value</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Sanctioned Principal Amount</strong></td>
                <td>₹1,00,000</td>
                <td>Total approved loan facility</td>
              </tr>
              <tr>
                <td><strong>Repayment Tenure</strong></td>
                <td>12 Months</td>
                <td>12 equated monthly installments</td>
              </tr>
              <tr>
                <td><strong>Nominal Interest Rate</strong></td>
                <td>13.5% p.a. (Reducing Balance)</td>
                <td>Charged strictly on the outstanding balance</td>
              </tr>
              <tr>
                <td><strong>Processing Fee</strong></td>
                <td>₹2,000 (2% + 18% GST = ₹2,360)</td>
                <td>Deducted upfront from disbursed amount</td>
              </tr>
              <tr>
                <td><strong>Net Disbursed Amount</strong></td>
                <td>₹97,640</td>
                <td>Transferred directly to borrower's bank</td>
              </tr>
              <tr>
                <td><strong>Monthly EMI</strong></td>
                <td>₹8,956</td>
                <td>Payable every month for 12 months</td>
              </tr>
              <tr>
                <td><strong>Total Interest Paid</strong></td>
                <td>₹7,472</td>
                <td>Cumulative interest over 12 months</td>
              </tr>
              <tr>
                <td><strong>Total Repayment Amount</strong></td>
                <td>₹1,07,472</td>
                <td>Total of 12 EMIs paid</td>
              </tr>
              <tr style="background:#F0FDF4;">
                <td><strong>Annual Percentage Rate (APR)</strong></td>
                <td><strong>18.15%</strong></td>
                <td>Comprehensive annual cost including all fees & interest</td>
              </tr>
            </tbody>
          </table>

          <p style="font-size:0.8rem; color:var(--c-text-subtle); margin-top:16px; line-height:1.5;">
            *Note: The example above is illustrative. Actual APR offered depends on borrower credit score, debt-to-income ratio, sanctioned amount, and final terms specified in the Key Fact Statement by our regulated partner lending institution.
          </p>
        </div>
      </div>
    </section>

    <!-- Embedded Calculator Anchor -->
    <section class="section" id="personal-calc" style="background-color:var(--c-bg-subtle);">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-pill">Interactive Estimator</span>
          <h2 class="section-title">Calculate Your Personal Loan EMI</h2>
          <p class="section-desc">
            Test different amounts and tenures to discover an EMI that comfortably aligns with your monthly cash flow.
          </p>
        </div>

        ${getCalculatorComponentHtml('personal')}
      </div>
    </section>

    <!-- Responsible Borrowing Section -->
    <section class="section">
      <div class="container" style="max-width:840px;">
        <div class="section-title-wrap">
          <span class="section-pill">Borrow Safely</span>
          <h2 class="section-title">Responsible Borrowing Commitment</h2>
          <p class="section-desc">
            Personal loans are financial commitments. We encourage every borrower to evaluate their repayment capacity carefully.
          </p>
        </div>

        <div style="background:#fff; border-radius:16px; border:1px solid var(--c-border); padding:32px;">
          <ul style="display:flex; flex-direction:column; gap:16px; list-style:none;">
            <li style="display:flex; gap:12px;">
              <span style="color:var(--c-accent); flex-shrink:0;">${ICONS.checkCircle}</span>
              <div>
                <strong>Assess Your Debt-to-Income Ratio (FOIR):</strong>
                <p style="font-size:0.875rem; color:var(--c-text-muted);">Ensure that your cumulative loan EMIs (including car, credit card, or existing loans) do not exceed 50% of your take-home pay.</p>
              </div>
            </li>
            <li style="display:flex; gap:12px;">
              <span style="color:var(--c-accent); flex-shrink:0;">${ICONS.checkCircle}</span>
              <div>
                <strong>Avoid Borrowing for Speculative Activities:</strong>
                <p style="font-size:0.875rem; color:var(--c-text-muted);">Never take personal loans to fund volatile market speculation, gambling, or unregulated schemes.</p>
              </div>
            </li>
            <li style="display:flex; gap:12px;">
              <span style="color:var(--c-accent); flex-shrink:0;">${ICONS.checkCircle}</span>
              <div>
                <strong>Maintain an Emergency Buffer:</strong>
                <p style="font-size:0.875rem; color:var(--c-text-muted);">Borrow only what you require, ensuring you maintain a reserve for unexpected medical or household obligations.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Conversion CTA -->
    <section class="section" style="background:linear-gradient(135deg, #FF5E00 0%, #EA580C 50%, #C2410C 100%); color:#fff; text-align:center;">
      <div class="container" style="max-width:680px;">
        <h2 style="color:#fff; margin-bottom:16px;">Ready to Check Your Personal Loan Eligibility?</h2>
        <p style="color:#FFF4ED; font-size:1.1rem; margin-bottom:28px;">
          Complete our simple digital form and review indicative offers with zero upfront commitment.
        </p>
        <a href="/apply" class="btn btn-outline-white btn-lg" style="background:#fff; color:#FF5E00; font-weight:700; border-color:#fff;" data-track="cta_click" data-track-label="Personal Loan Bottom Apply">
          Apply Online Now
        </a>
      </div>
    </section>
  `;
}

// ==========================================================================
// 2. Business Loan Page Content
// ==========================================================================
export function getBusinessLoanContent() {
  return `
    <section class="hero-fintech" style="padding:60px 0 72px;">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="hero-badge-dot"></span>
              <span>For Indian MSMEs & Entrepreneurs</span>
            </div>
            <h1 class="hero-title">Business Loan Online for MSMEs & Entrepreneurs</h1>
            <p class="hero-subtitle">
              Scale your enterprise, manage seasonal working capital, and invest in inventory or equipment. Transparent terms designed to fuel sustainable Indian business growth.
            </p>
            <div class="hero-cta-group">
              <a href="/apply" class="btn btn-primary btn-lg" data-track="cta_click" data-track-label="Business Loan Hero Apply">
                Check Business Eligibility
              </a>
              <a href="#business-calc" class="btn btn-outline-white btn-lg" data-track="cta_click" data-track-label="Business Loan Hero Calc">
                ${ICONS.calculator} Calculate EMI
              </a>
            </div>
            <div class="hero-trust-bullets">
              <div class="hero-trust-item">${ICONS.checkCircle} Facility up to ₹30,00,000</div>
              <div class="hero-trust-item">${ICONS.checkCircle} GST & Banking Verification</div>
              <div class="hero-trust-item">${ICONS.checkCircle} Flexible Cash-Flow Repayment</div>
            </div>
          </div>

          <div style="background:#fff; border-radius:16px; padding:32px; box-shadow:0 20px 40px rgba(0,0,0,0.25); color:var(--c-text-main);">
            <span class="section-pill">MSME Finance Snapshot</span>
            <h3 style="font-size:1.35rem; color:var(--c-primary); margin:8px 0 16px;">Business Financing Terms</h3>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:12px; font-size:0.925rem; color:var(--c-text-muted);">
              <li style="display:flex; justify-content:space-between; border-bottom:1px solid #E2E8F0; padding-bottom:8px;">
                <span>Loan Amount</span>
                <strong style="color:var(--c-text-main);">₹50,000 to ₹30,00,000</strong>
              </li>
              <li style="display:flex; justify-content:space-between; border-bottom:1px solid #E2E8F0; padding-bottom:8px;">
                <span>Indicative APR</span>
                <strong style="color:var(--c-text-main);">12.5% to 28.0% p.a.</strong>
              </li>
              <li style="display:flex; justify-content:space-between; border-bottom:1px solid #E2E8F0; padding-bottom:8px;">
                <span>Tenure</span>
                <strong style="color:var(--c-text-main);">12 to 60 Months</strong>
              </li>
              <li style="display:flex; justify-content:space-between; border-bottom:1px solid #E2E8F0; padding-bottom:8px;">
                <span>Security / Collateral</span>
                <strong style="color:var(--c-text-main);">Collateral-free options</strong>
              </li>
              <li style="display:flex; justify-content:space-between;">
                <span>Evaluation Basis</span>
                <strong style="color:var(--c-text-main);">Banking & GST turnover</strong>
              </li>
            </ul>
            <div style="margin-top:24px;">
              <a href="/apply" class="btn btn-primary btn-block">Apply for Business Loan</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${getTrustStripHtml()}

    <!-- Who Can Apply / Business Types -->
    <section class="section">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-pill">Eligible Entities</span>
          <h2 class="section-title">Who Can Apply For ClickMyLoan Business Financing?</h2>
          <p class="section-desc">
            We support formal Indian business entities that possess verifiable banking and regulatory registrations.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:24px;">
          <div class="product-card">
            <div class="product-icon-wrap">${ICONS.user}</div>
            <h4>Sole Proprietorships</h4>
            <p style="font-size:0.875rem; color:var(--c-text-muted); margin-top:8px;">
              Individual entrepreneurs operating retail, wholesale, consulting, or local service enterprises with GST or Shop & Establishment licenses.
            </p>
          </div>
          <div class="product-card">
            <div class="product-icon-wrap">${ICONS.briefcase}</div>
            <h4>Partnership Firms & LLPs</h4>
            <p style="font-size:0.875rem; color:var(--c-text-muted); margin-top:8px;">
              Registered partnership firms and Limited Liability Partnerships with partnership deeds, joint bank accounts, and active GST filings.
            </p>
          </div>
          <div class="product-card">
            <div class="product-icon-wrap">${ICONS.shield}</div>
            <h4>Private Limited Companies</h4>
            <p style="font-size:0.875rem; color:var(--c-text-muted); margin-top:8px;">
              Closely held private companies requiring unsecured working capital lines backed by director KYC and audited financials.
            </p>
          </div>
          <div class="product-card">
            <div class="product-icon-wrap">${ICONS.checkCircle}</div>
            <h4>Registered MSMEs</h4>
            <p style="font-size:0.875rem; color:var(--c-text-muted); margin-top:8px;">
              Manufacturing and service enterprises holding valid Udyam Registration certificates seeking structured growth capital.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Loan Use Cases -->
    <section class="section" style="background-color:var(--c-bg-subtle);">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-pill">Capital Utilization</span>
          <h2 class="section-title">Designed for Realistic Business Milestones</h2>
          <p class="section-desc">
            Unsecured business loans can be deployed across core operational needs to keep cash flows stable.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:20px;">
          <div style="background:#fff; border-radius:12px; padding:24px; border:1px solid var(--c-border);">
            <h4 style="margin-bottom:8px; color:var(--c-primary);">Working Capital Cushion</h4>
            <p style="font-size:0.875rem; color:var(--c-text-muted);">Manage accounts receivable delays, pay vendor invoices promptly, and maintain uninterrupted day-to-day operations.</p>
          </div>
          <div style="background:#fff; border-radius:12px; padding:24px; border:1px solid var(--c-border);">
            <h4 style="margin-bottom:8px; color:var(--c-primary);">Bulk Inventory Procurement</h4>
            <p style="font-size:0.875rem; color:var(--c-text-muted);">Take advantage of supplier volume discounts and stock up in advance of festive demand peaks.</p>
          </div>
          <div style="background:#fff; border-radius:12px; padding:24px; border:1px solid var(--c-border);">
            <h4 style="margin-bottom:8px; color:var(--c-primary);">Equipment & Technology</h4>
            <p style="font-size:0.875rem; color:var(--c-text-muted);">Upgrade software, production tools, or commercial equipment to improve efficiency without depleting reserves.</p>
          </div>
          <div style="background:#fff; border-radius:12px; padding:24px; border:1px solid var(--c-border);">
            <h4 style="margin-bottom:8px; color:var(--c-primary);">Store / Office Expansion</h4>
            <p style="font-size:0.875rem; color:var(--c-text-muted);">Renovate existing commercial premises or establish branch offices to reach new customer segments.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Embedded Calculator Anchor -->
    <section class="section" id="business-calc">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-pill">Estimate Cash Outflow</span>
          <h2 class="section-title">Business Loan EMI Calculator</h2>
          <p class="section-desc">
            Calculate your monthly commercial loan commitments to ensure sustainable debt service coverage.
          </p>
        </div>

        ${getCalculatorComponentHtml('business')}
      </div>
    </section>

    <!-- Conversion CTA -->
    <section class="section" style="background:linear-gradient(135deg, #FF5E00 0%, #EA580C 50%, #C2410C 100%); color:#fff; text-align:center;">
      <div class="container" style="max-width:680px;">
        <h2 style="color:#fff; margin-bottom:16px;">Empower Your Business Growth Today</h2>
        <p style="color:#FFF4ED; font-size:1.1rem; margin-bottom:28px;">
          Check indicative business financing eligibility with your GST and banking records.
        </p>
        <a href="/apply" class="btn btn-outline-white btn-lg" style="background:#fff; color:#FF5E00; font-weight:700; border-color:#fff;" data-track="cta_click" data-track-label="Business Loan Bottom Apply">
          Apply For Business Loan
        </a>
      </div>
    </section>
  `;
}

// ==========================================================================
// 3. Travel Loan Page Content
// ==========================================================================
export function getTravelLoanContent() {
  return `
    <section class="hero-fintech" style="padding:60px 0 72px;">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="hero-badge-dot"></span>
              <span>Transparent Travel Financing</span>
            </div>
            <h1 class="hero-title">Travel Loan Online | Finance Your Next Journey</h1>
            <p class="hero-subtitle">
              Plan your domestic holidays, international vacations, or educational journeys with clear, structured personal financing. No misleading gimmicks, just upfront terms.
            </p>
            <div class="hero-cta-group">
              <a href="/apply" class="btn btn-primary btn-lg" data-track="cta_click" data-track-label="Travel Loan Hero Apply">
                Check Travel Eligibility
              </a>
              <a href="#travel-calc" class="btn btn-outline-white btn-lg" data-track="cta_click" data-track-label="Travel Loan Hero Calc">
                ${ICONS.calculator} Calculate EMI
              </a>
            </div>
            <div class="hero-trust-bullets">
              <div class="hero-trust-item">${ICONS.checkCircle} Loan Amount: ₹25,000 - ₹8,00,000</div>
              <div class="hero-trust-item">${ICONS.checkCircle} Tenures: 6 - 36 Months</div>
              <div class="hero-trust-item">${ICONS.checkCircle} Transparent KFS & Fixed Rates</div>
            </div>
          </div>

          <div style="background:#fff; border-radius:16px; padding:32px; box-shadow:0 20px 40px rgba(0,0,0,0.25); color:var(--c-text-main);">
            <span class="section-pill">Travel Financing Snapshot</span>
            <h3 style="font-size:1.35rem; color:var(--c-primary); margin:8px 0 16px;">Travel Loan Features</h3>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:12px; font-size:0.925rem; color:var(--c-text-muted);">
              <li style="display:flex; justify-content:space-between; border-bottom:1px solid #E2E8F0; padding-bottom:8px;">
                <span>Financing Range</span>
                <strong style="color:var(--c-text-main);">₹25,000 to ₹8,00,000</strong>
              </li>
              <li style="display:flex; justify-content:space-between; border-bottom:1px solid #E2E8F0; padding-bottom:8px;">
                <span>Indicative APR</span>
                <strong style="color:var(--c-text-main);">12.0% to 24.0% p.a.</strong>
              </li>
              <li style="display:flex; justify-content:space-between; border-bottom:1px solid #E2E8F0; padding-bottom:8px;">
                <span>Tenures Available</span>
                <strong style="color:var(--c-text-main);">6 to 36 Months</strong>
              </li>
              <li style="display:flex; justify-content:space-between; border-bottom:1px solid #E2E8F0; padding-bottom:8px;">
                <span>Processing Fee</span>
                <strong style="color:var(--c-text-main);">1.5% - 2.5% + GST</strong>
              </li>
              <li style="display:flex; justify-content:space-between;">
                <span>Prepayment Policy</span>
                <strong style="color:var(--c-text-main);">Transparent per RBI norms</strong>
              </li>
            </ul>
            <div style="margin-top:24px;">
              <a href="/apply" class="btn btn-primary btn-block">Apply for Travel Loan</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${getTrustStripHtml()}

    <!-- Eligible Travel Expenses -->
    <section class="section">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-pill">Covered Outlays</span>
          <h2 class="section-title">Eligible Travel Expenses</h2>
          <p class="section-desc">
            Travel loans are disbursed directly as unrestricted personal credit to help you fund complete holiday logistics without breaking long-term savings.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:24px;">
          <div class="product-card">
            <div class="product-icon-wrap">${ICONS.plane}</div>
            <h4>Flight & Rail Tickets</h4>
            <p style="font-size:0.875rem; color:var(--c-text-muted); margin-top:8px;">
              Cover peak-season airfares and international multi-city connections upfront without maxing out high-interest credit cards.
            </p>
          </div>
          <div class="product-card">
            <div class="product-icon-wrap">${ICONS.fileText}</div>
            <h4>Visa & Documentation Fees</h4>
            <p style="font-size:0.875rem; color:var(--c-text-muted); margin-top:8px;">
              Manage consular visa fees, travel insurance premiums, and statutory overseas travel taxes with ease.
            </p>
          </div>
          <div class="product-card">
            <div class="product-icon-wrap">${ICONS.shield}</div>
            <h4>Hotel & Tour Packages</h4>
            <p style="font-size:0.875rem; color:var(--c-text-muted); margin-top:8px;">
              Secure early-bird bookings with verified tour operators, resorts, and vacation stays.
            </p>
          </div>
          <div class="product-card">
            <div class="product-icon-wrap">${ICONS.checkCircle}</div>
            <h4>Student & Educational Trips</h4>
            <p style="font-size:0.875rem; color:var(--c-text-muted); margin-top:8px;">
              Support international university orientation trips, conferences, and student exchange programs.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Embedded Calculator Anchor -->
    <section class="section" id="travel-calc" style="background-color:var(--c-bg-subtle);">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-pill">Budget Realistically</span>
          <h2 class="section-title">Calculate Your Travel Loan EMI</h2>
          <p class="section-desc">
            Keep your vacation memories pleasant by ensuring your monthly EMI fits comfortably into your post-travel budget.
          </p>
        </div>

        ${getCalculatorComponentHtml('travel')}
      </div>
    </section>

    <!-- Responsible Travel Notice -->
    <section class="section">
      <div class="container" style="max-width:760px;">
        <div class="kfs-banner">
          ${ICONS.info}
          <div>
            <strong>Borrowing Note on Travel Financing:</strong> Travel loans represent an unsecured financial obligation. Borrowers must consider their post-trip income continuity and avoid borrowing more than they can comfortably repay over the chosen tenure.
          </div>
        </div>
      </div>
    </section>

    <!-- Conversion CTA -->
    <section class="section" style="background:linear-gradient(135deg, #FF5E00 0%, #EA580C 50%, #C2410C 100%); color:#fff; text-align:center;">
      <div class="container" style="max-width:680px;">
        <h2 style="color:#fff; margin-bottom:16px;">Plan Your Trip With Peace of Mind</h2>
        <p style="color:#FFF4ED; font-size:1.1rem; margin-bottom:28px;">
          Check your travel loan eligibility online with verified documentation and instant digital terms.
        </p>
        <a href="/apply" class="btn btn-outline-white btn-lg" style="background:#fff; color:#FF5E00; font-weight:700; border-color:#fff;" data-track="cta_click" data-track-label="Travel Loan Bottom Apply">
          Apply For Travel Loan
        </a>
      </div>
    </section>
  `;
}

// ==========================================================================
// 4. Calculator Page Content (/calculator)
// ==========================================================================
export function getCalculatorPageContent() {
  return `
    <section class="section-tight" style="background:linear-gradient(135deg, #FF5E00 0%, #EA580C 50%, #C2410C 100%); color:#fff; text-align:center; padding:56px 0;">
      <div class="container">
        <span class="section-pill" style="background:rgba(255,255,255,0.2); color:#FFFFFF;">Financial Planning Tool</span>
        <h1 style="color:#fff; margin:12px 0 16px; font-size:clamp(2rem, 3.5vw, 3rem);">Smart EMI & Loan Calculator</h1>
        <p style="color:#FFF4ED; font-size:1.1rem; max-width:640px; margin:0 auto;">
          Accurately calculate your monthly installment (EMI), total interest, and full repayment schedule. Switch between Personal, Business, and Travel loan presets.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${getCalculatorComponentHtml('personal')}

        <!-- Educational Explanation on EMI Formulation -->
        <div style="background:#fff; border:1px solid var(--c-border); border-radius:16px; padding:36px; margin-top:48px;">
          <h2 style="font-size:1.5rem; margin-bottom:16px;">How Is Loan EMI Calculated?</h2>
          <p style="margin-bottom:16px;">
            An Equated Monthly Installment (EMI) consists of two components: the principal repayment and the interest charged on the reducing outstanding balance. In the initial months of the loan tenure, interest accounts for a higher portion of each EMI. Over time, as the principal balance decreases, the interest component decreases and principal repayment accelerates.
          </p>
          <div style="background:var(--c-bg-subtle); padding:20px; border-radius:10px; border-left:4px solid var(--c-accent); font-family:var(--font-mono); font-size:0.95rem; margin-bottom:20px;">
            <strong>Standard Reducing Balance Formula:</strong><br>
            EMI = [P &times; r &times; (1 + r)^n] / [(1 + r)^n - 1]<br><br>
            Where:<br>
            <strong>P</strong> = Principal Loan Amount<br>
            <strong>r</strong> = Monthly Interest Rate (Annual Rate &divide; 12 &divide; 100)<br>
            <strong>n</strong> = Loan Tenure in Months
          </div>

          <h3 style="font-size:1.2rem; margin:24px 0 12px;">Factors That Influence Your Loan EMI:</h3>
          <ul style="padding-left:24px; color:var(--c-text-muted); line-height:1.7;">
            <li><strong>Loan Amount:</strong> Higher principal increases both the monthly installment and cumulative interest paid.</li>
            <li><strong>Interest Rate:</strong> Driven by your credit score tier, debt-to-income ratio, and lending partner assessment. Lower rates dramatically reduce your overall repayment.</li>
            <li><strong>Tenure:</strong> Choosing a longer tenure lowers your monthly EMI but increases the total interest paid over the life of the loan. A shorter tenure increases monthly cash outflow but maximizes interest savings.</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================================
// 5. Eligibility Page Content (/eligibility)
// ==========================================================================
export function getEligibilityPageContent() {
  return `
    <section class="section-tight" style="background:linear-gradient(135deg, #FF5E00 0%, #EA580C 50%, #C2410C 100%); color:#fff; text-align:center; padding:56px 0;">
      <div class="container">
        <span class="section-pill" style="background:rgba(255,255,255,0.2); color:#FFFFFF;">Pre-Qualification Tool</span>
        <h1 style="color:#fff; margin:12px 0 16px; font-size:clamp(2rem, 3.5vw, 3rem);">Loan Eligibility Checker</h1>
        <p style="color:#FFF4ED; font-size:1.1rem; max-width:640px; margin:0 auto;">
          Assess your indicative borrowing capacity based on monthly income, existing debt obligations, and credit tier. Zero impact on your CIBIL score.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container" style="max-width:880px;">
        <div style="background:#fff; border:1px solid var(--c-border); border-radius:16px; padding:36px; box-shadow:var(--shadow-md);">
          <form id="eligibility-form">
            <h2 style="font-size:1.4rem; margin-bottom:24px; border-bottom:1px solid var(--c-border); padding-bottom:12px;">
              Enter Your Profile Details
            </h2>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:20px; margin-bottom:24px;">
              <div class="form-group">
                <label for="el-age" class="form-label">Age (Years)</label>
                <input type="number" id="el-age" class="form-control" value="28" min="18" max="65" required>
              </div>

              <div class="form-group">
                <label for="el-emp-type" class="form-label">Employment Type</label>
                <select id="el-emp-type" class="form-control">
                  <option value="salaried">Salaried Employee</option>
                  <option value="business">Self-Employed / Business Owner</option>
                </select>
              </div>

              <div class="form-group">
                <label for="el-income" class="form-label">Monthly Net In-Hand Income (₹)</label>
                <input type="number" id="el-income" class="form-control" value="65000" min="15000" step="1000" required>
              </div>

              <div class="form-group">
                <label for="el-obligations" class="form-label">Existing Monthly EMIs (₹)</label>
                <input type="number" id="el-obligations" class="form-control" value="8000" min="0" step="500" required>
              </div>

              <div class="form-group">
                <label for="el-credit-score" class="form-label">Credit Score Range</label>
                <select id="el-credit-score" class="form-control">
                  <option value="750_plus">750 & Above (Excellent)</option>
                  <option value="700_749">700 - 749 (Good)</option>
                  <option value="650_699">650 - 699 (Fair)</option>
                  <option value="new_to_credit">New to Credit / No Score</option>
                </select>
              </div>

              <div class="form-group">
                <label for="el-desired-amount" class="form-label">Desired Loan Amount (₹)</label>
                <input type="number" id="el-desired-amount" class="form-control" value="300000" min="25000" step="5000" required>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-lg btn-block" data-track="cta_click" data-track-label="Eligibility Evaluate Submit">
              Evaluate Indicative Eligibility
            </button>
          </form>

          <!-- Dynamic Result Box -->
          <div id="eligibility-result-box" style="margin-top:32px;" hidden>
            <!-- Injected by eligibility.js -->
          </div>
        </div>

        <!-- Educational Section on FOIR -->
        <div style="background:var(--c-bg-subtle); border-radius:12px; padding:28px; margin-top:36px; border:1px solid var(--c-border);">
          <h3 style="font-size:1.15rem; margin-bottom:8px;">Understanding Fixed Obligation to Income Ratio (FOIR)</h3>
          <p style="font-size:0.9rem; color:var(--c-text-muted); line-height:1.6;">
            In Indian lending practice, regulated lenders evaluate your Fixed Obligation to Income Ratio (FOIR) to prevent over-indebtedness. As a responsible digital lending platform, ClickMyLoan aligns with standard industry best practices where total monthly loan obligations should not exceed 50% of your verifiable net monthly income.
          </p>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================================
// 6. Documents Required Page Content (/documents)
// ==========================================================================
export function getDocumentsPageContent() {
  return `
    <section class="section-tight" style="background:linear-gradient(135deg, #FF5E00 0%, #EA580C 50%, #C2410C 100%); color:#fff; text-align:center; padding:56px 0;">
      <div class="container">
        <span class="section-pill" style="background:rgba(255,255,255,0.2); color:#FFFFFF;">Fast-Track Verification</span>
        <h1 style="color:#fff; margin:12px 0 16px; font-size:clamp(2rem, 3.5vw, 3rem);">Documents Required for Digital Loans</h1>
        <p style="color:#FFF4ED; font-size:1.1rem; max-width:640px; margin:0 auto;">
          Experience a completely paperless digital documentation process. Review the verified KYC and income proofs required before you begin.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:32px;">
          <!-- Salaried Box -->
          <div style="background:#fff; border-radius:16px; border:1px solid var(--c-border); padding:36px; box-shadow:var(--shadow-sm);">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px;">
              <div class="product-icon-wrap" style="margin-bottom:0;">${ICONS.user}</div>
              <h2 style="font-size:1.35rem;">Salaried Applicants</h2>
            </div>
            
            <div style="margin-bottom:20px;">
              <h4 style="font-size:0.95rem; color:var(--c-primary); margin-bottom:6px;">1. Identity & Age Proof</h4>
              <p style="font-size:0.875rem; color:var(--c-text-muted);">
                PAN Card (mandatory for credit assessment) + Aadhaar Card / Passport / Voter ID.
              </p>
            </div>

            <div style="margin-bottom:20px;">
              <h4 style="font-size:0.95rem; color:var(--c-primary); margin-bottom:6px;">2. Current Address Proof</h4>
              <p style="font-size:0.875rem; color:var(--c-text-muted);">
                Aadhaar with current address, recent utility bill (electricity, piped gas within 60 days), or registered rent agreement.
              </p>
            </div>

            <div style="margin-bottom:20px;">
              <h4 style="font-size:0.95rem; color:var(--c-primary); margin-bottom:6px;">3. Income & Employment Proof</h4>
              <p style="font-size:0.875rem; color:var(--c-text-muted);">
                Latest 3 months salary slips, employee ID card, and latest Form 16.
              </p>
            </div>

            <div>
              <h4 style="font-size:0.95rem; color:var(--c-primary); margin-bottom:6px;">4. Banking Verification</h4>
              <p style="font-size:0.875rem; color:var(--c-text-muted);">
                Last 6 months bank account statements (PDF e-statements showing salary credits) or instant verification via RBI-regulated Account Aggregator.
              </p>
            </div>
          </div>

          <!-- Self-Employed & Business Box -->
          <div style="background:#fff; border-radius:16px; border:1px solid var(--c-border); padding:36px; box-shadow:var(--shadow-sm);">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px;">
              <div class="product-icon-wrap" style="margin-bottom:0;">${ICONS.briefcase}</div>
              <h2 style="font-size:1.35rem;">Self-Employed / MSMEs</h2>
            </div>

            <div style="margin-bottom:20px;">
              <h4 style="font-size:0.95rem; color:var(--c-primary); margin-bottom:6px;">1. Business Entity Registration</h4>
              <p style="font-size:0.875rem; color:var(--c-text-muted);">
                GST Registration Certificate, Udyam Registration, Shop & Establishment Certificate, or Partnership Deed / Certificate of Incorporation.
              </p>
            </div>

            <div style="margin-bottom:20px;">
              <h4 style="font-size:0.95rem; color:var(--c-primary); margin-bottom:6px;">2. Tax & Financial Records</h4>
              <p style="font-size:0.875rem; color:var(--c-text-muted);">
                Income Tax Returns (ITR) for the last 2 assessment years with computation of income, Profit & Loss statement, and Balance Sheet.
              </p>
            </div>

            <div style="margin-bottom:20px;">
              <h4 style="font-size:0.95rem; color:var(--c-primary); margin-bottom:6px;">3. Operative Banking Records</h4>
              <p style="font-size:0.875rem; color:var(--c-text-muted);">
                Last 6 to 12 months primary operative bank statements (Current and/or Savings account).
              </p>
            </div>

            <div>
              <h4 style="font-size:0.95rem; color:var(--c-primary); margin-bottom:6px;">4. Promoters / Partners KYC</h4>
              <p style="font-size:0.875rem; color:var(--c-text-muted);">
                Individual PAN and Aadhaar of proprietor, managing partners, or primary directors.
              </p>
            </div>
          </div>
        </div>

        <!-- Digital KYC Guidelines -->
        <div style="background:var(--c-bg-subtle); border-radius:16px; border:1px solid var(--c-border); padding:32px; margin-top:36px;">
          <h3 style="font-size:1.2rem; margin-bottom:12px;">Tips for Instant Digital Approval</h3>
          <ul style="padding-left:20px; color:var(--c-text-muted); font-size:0.925rem; line-height:1.7;">
            <li>Ensure your Aadhaar is linked to your active mobile number for smooth OTP-based e-KYC.</li>
            <li>Submit official computer-generated PDF bank statements rather than mobile screenshots or camera scans.</li>
            <li>Verify that your name matches across PAN, Aadhaar, and primary bank records to avoid automated KYC verification holds.</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================================
// 7. Fees & Charges Page Content (/fees-and-charges)
// ==========================================================================
export function getFeesAndChargesPageContent() {
  return `
    <section class="section-tight" style="background:linear-gradient(135deg, #FF5E00 0%, #EA580C 50%, #C2410C 100%); color:#fff; text-align:center; padding:56px 0;">
      <div class="container">
        <span class="section-pill" style="background:rgba(255,255,255,0.2); color:#FFFFFF;">Zero Hidden Costs</span>
        <h1 style="color:#fff; margin:12px 0 16px; font-size:clamp(2rem, 3.5vw, 3rem);">Transparent Fees & Charges Schedule</h1>
        <p style="color:#FFF4ED; font-size:1.1rem; max-width:640px; margin:0 auto;">
          ClickMyLoan champions transparent digital lending. Below is our complete, transparent schedule of fees applicable across products.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="kfs-banner" style="margin-bottom:32px;">
          ${ICONS.shield}
          <div>
            <strong>RBI Digital Lending Commitment:</strong> No charges other than those specifically stated in the Key Fact Statement (KFS) will be levied on the borrower at any stage of the digital loan lifecycle.
          </div>
        </div>

        <div style="background:#fff; border-radius:16px; border:1px solid var(--c-border); overflow:hidden; box-shadow:var(--shadow-sm); margin-bottom:40px;">
          <table class="fin-table">
            <thead>
              <tr>
                <th>Charge Category</th>
                <th>Standard Fee Structure</th>
                <th>When / How Levied</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Loan Application / Pre-Check</strong></td>
                <td style="color:var(--c-success-dark); font-weight:700;">₹0 (Free)</td>
                <td>No charge for checking indicative eligibility or submitting an application</td>
              </tr>
              <tr>
                <td><strong>Processing Fee</strong></td>
                <td><strong>8.99%</strong> of sanctioned loan amount + 18% GST</td>
                <td>Deducted directly from disbursed loan; zero advance fees required</td>
              </tr>
              <tr>
                <td><strong>Rate of Interest (ROI)</strong></td>
                <td><strong>0.2% to 1% per day*</strong></td>
                <td>Clear daily rate based on customer eligibility; itemized in KFS</td>
              </tr>
              <tr>
                <td><strong>Foreclosure / Prepayment</strong></td>
                <td style="color:var(--c-success-dark); font-weight:700;">0% (Zero Charges)</td>
                <td>Enjoy total flexibility to repay your loan early without any penalty</td>
              </tr>
              <tr>
                <td><strong>Loan Cancellation (Look-Up Period)</strong></td>
                <td>Zero cancellation penalty</td>
                <td>Subject to repayment of principal + proportionate interest during statutory look-up window</td>
              </tr>
              <tr>
                <td><strong>Late Payment / Penal Charges</strong></td>
                <td>Reasonable penal charges (as stated in KFS)</td>
                <td>Levied strictly per RBI guidelines; no compounding penal interest</td>
              </tr>
              <tr>
                <td><strong>Statement / NOC Issuance</strong></td>
                <td style="color:var(--c-success-dark); font-weight:700;">₹0 (Free Digital Download)</td>
                <td>Available anytime via customer care or borrower self-service</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="background:var(--c-bg-subtle); border-radius:12px; padding:28px; border:1px solid var(--c-border);">
          <h2 style="font-size:1.25rem; margin-bottom:12px;">Zero Advance Fee Assurance</h2>
          <p style="font-size:0.9rem; color:var(--c-text-muted); line-height:1.6; margin-bottom:12px;">
            Beware of fraudulent websites or telecallers demanding upfront "file clearance fees", "deposit insurance", or money transfers into personal accounts. ClickMyLoan and our regulated institutional partners will <strong>NEVER</strong> request payment before disbursing your loan.
          </p>
          <p style="font-size:0.85rem; color:var(--c-text-subtle);">
            If you encounter anyone claiming to represent ClickMyLoan asking for upfront deposits, please immediately report them to <strong>grievance@clickmyloan.com</strong>.
          </p>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================================
// 8. How It Works Page Content (/how-it-works)
// ==========================================================================
export function getHowItWorksPageContent() {
  return `
    <section class="section-tight" style="background:linear-gradient(135deg, #FF5E00 0%, #EA580C 50%, #C2410C 100%); color:#fff; text-align:center; padding:56px 0;">
      <div class="container">
        <span class="section-pill" style="background:rgba(255,255,255,0.2); color:#FFFFFF;">Digital Lending Journey</span>
        <h1 style="color:#fff; margin:12px 0 16px; font-size:clamp(2rem, 3.5vw, 3rem);">How ClickMyLoan Works</h1>
        <p style="color:#FFF4ED; font-size:1.1rem; max-width:640px; margin:0 auto;">
          From discovering your indicative borrowing capacity to funds in your verified bank account, our 4-step process is built for clarity and speed.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container" style="max-width:860px;">
        <div style="display:flex; flex-direction:column; gap:36px;">
          <!-- Step 1 -->
          <div style="display:flex; gap:24px; align-items:flex-start;">
            <div style="width:56px; height:56px; border-radius:50%; background:var(--c-accent); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:1.4rem; flex-shrink:0;">
              1
            </div>
            <div style="background:#fff; border:1px solid var(--c-border); border-radius:16px; padding:28px; flex-grow:1; box-shadow:var(--shadow-xs);">
              <h2 style="font-size:1.3rem; margin-bottom:8px;">Step 1: Check Indicative Eligibility</h2>
              <p style="color:var(--c-text-muted); font-size:0.95rem; line-height:1.6; margin-bottom:12px;">
                Enter your mobile number, current city, employment category, and monthly take-home income. Our automated eligibility calculator assesses your borrowing capacity in real time without conducting a hard credit bureau pull.
              </p>
              <div style="font-size:0.85rem; color:var(--c-accent); font-weight:600;">
                Time required: ~2 minutes &bull; Credit impact: Zero
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div style="display:flex; gap:24px; align-items:flex-start;">
            <div style="width:56px; height:56px; border-radius:50%; background:var(--c-accent); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:1.4rem; flex-shrink:0;">
              2
            </div>
            <div style="background:#fff; border:1px solid var(--c-border); border-radius:16px; padding:28px; flex-grow:1; box-shadow:var(--shadow-xs);">
              <h2 style="font-size:1.3rem; margin-bottom:8px;">Step 2: Submit Digital Verification Information</h2>
              <p style="color:var(--c-text-muted); font-size:0.95rem; line-height:1.6; margin-bottom:12px;">
                Authenticate your profile using digital KYC (PAN and Aadhaar OTP verification). Upload recent salary slips or connect via RBI-approved Account Aggregator for automated bank statement verification.
              </p>
              <div style="font-size:0.85rem; color:var(--c-accent); font-weight:600;">
                Paperless &bull; 100% digital transmission encryption
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div style="display:flex; gap:24px; align-items:flex-start;">
            <div style="width:56px; height:56px; border-radius:50%; background:var(--c-accent); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:1.4rem; flex-shrink:0;">
              3
            </div>
            <div style="background:#fff; border:1px solid var(--c-border); border-radius:16px; padding:28px; flex-grow:1; box-shadow:var(--shadow-xs);">
              <h2 style="font-size:1.3rem; margin-bottom:8px;">Step 3: Review Terms & Key Fact Statement (KFS)</h2>
              <p style="color:var(--c-text-muted); font-size:0.95rem; line-height:1.6; margin-bottom:12px;">
                Review approved loan offers from our regulated partner institutions. Every offer presents an itemized Key Fact Statement disclosing the Annual Percentage Rate (APR), processing fees, exact monthly EMI, and cooling-off period.
              </p>
              <div style="font-size:0.85rem; color:var(--c-accent); font-weight:600;">
                Full transparency &bull; Take time to compare
              </div>
            </div>
          </div>

          <!-- Step 4 -->
          <div style="display:flex; gap:24px; align-items:flex-start;">
            <div style="width:56px; height:56px; border-radius:50%; background:var(--c-success); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:1.4rem; flex-shrink:0;">
              4
            </div>
            <div style="background:#fff; border:1px solid var(--c-border); border-radius:16px; padding:28px; flex-grow:1; box-shadow:var(--shadow-xs);">
              <h2 style="font-size:1.3rem; margin-bottom:8px;">Step 4: Digital Agreement & Direct Disbursal</h2>
              <p style="color:var(--c-text-muted); font-size:0.95rem; line-height:1.6; margin-bottom:12px;">
                E-sign the loan contract using Aadhaar e-Sign and set up automated repayment mandate (e-NACH). Sanctioned funds are disbursed directly by the regulated lending institution into your bank account.
              </p>
              <div style="font-size:0.85rem; color:var(--c-success-dark); font-weight:600;">
                Direct lender-to-bank transfer &bull; Zero intermediary withholding
              </div>
            </div>
          </div>
        </div>

        <div style="text-align:center; margin-top:48px;">
          <a href="/apply" class="btn btn-primary btn-lg" data-track="cta_click" data-track-label="How It Works Apply">
            Begin Your 4-Step Application
          </a>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================================
// 9. FAQ Page Content (/faq)
// ==========================================================================
export function getFaqPageContent() {
  return `
    <section class="section-tight" style="background:linear-gradient(135deg, #FF5E00 0%, #EA580C 50%, #C2410C 100%); color:#fff; text-align:center; padding:56px 0;">
      <div class="container">
        <span class="section-pill" style="background:rgba(255,255,255,0.2); color:#FFFFFF;">Knowledge Base</span>
        <h1 style="color:#fff; margin:12px 0 16px; font-size:clamp(2rem, 3.5vw, 3rem);">Frequently Asked Questions</h1>
        <p style="color:#FFF4ED; font-size:1.1rem; max-width:640px; margin:0 auto;">
          Find instant, transparent answers to questions regarding eligibility, interest rates, documentation, regulatory policies, and security.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- FAQ Search Input -->
        <div class="faq-search-wrap">
          <span class="faq-search-icon">${ICONS.info}</span>
          <input type="text" id="faq-search-input" class="faq-search-input" placeholder="Search questions (e.g. documents, APR, credit score, fees)..." aria-label="Search FAQs">
        </div>

        <!-- Category Tabs -->
        <div class="faq-categories">
          <button type="button" class="faq-cat-btn active" data-category="all">All Topics</button>
          <button type="button" class="faq-cat-btn" data-category="general">General</button>
          <button type="button" class="faq-cat-btn" data-category="rates">Rates &amp; Limits</button>
          <button type="button" class="faq-cat-btn" data-category="process">Application &amp; Process</button>
          <button type="button" class="faq-cat-btn" data-category="security">Security &amp; Repayment</button>
        </div>

        <!-- FAQ List with All 15 Specific Questions -->
        <div class="faq-list">
          <!-- 1 -->
          <div class="faq-item is-open" data-category="general">
            <button class="faq-question" type="button" aria-expanded="true">
              <span>What is ClickMyLoan?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>ClickMyLoan is a modern digital lending platform and Lending Service Provider (LSP) providing short-term personal loans up to ₹5,00,000 to eligible Indian borrowers. We facilitate transparent digital credit in strict compliance with the RBI Digital Lending Directions in partnership with regulated Banks and RBI-registered NBFCs.</p>
            </div>
          </div>

          <!-- 2 -->
          <div class="faq-item" data-category="rates">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>How much loan can I get?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>Eligible borrowers can receive loan sanctions up to ₹5,00,000. Your specific sanctioned amount is determined based on your monthly income, debt-to-income ratio (FOIR), credit assessment, and partner lender credit policies.</p>
            </div>
          </div>

          <!-- 3 -->
          <div class="faq-item" data-category="rates">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>What is the maximum loan amount?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>The maximum loan amount available through ClickMyLoan is ₹5,00,000, subject to borrower eligibility, credit appraisal, and verification.</p>
            </div>
          </div>

          <!-- 4 -->
          <div class="faq-item" data-category="rates">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>What is the applicable interest rate?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>The applicable interest rate ranges from 0.2% to 1% per day. The exact rate depends on your risk assessment, credit profile, and tenure, and is clearly disclosed in your Key Fact Statement (KFS) before loan acceptance.</p>
            </div>
          </div>

          <!-- 5 -->
          <div class="faq-item" data-category="rates">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>What is the processing fee?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>The processing fee is 8.99% of the sanctioned loan amount + applicable GST (18%). This fee is deducted directly from the disbursed loan amount. ClickMyLoan never asks for upfront or advance fees.</p>
            </div>
          </div>

          <!-- 6 -->
          <div class="faq-item" data-category="rates">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>Are there foreclosure charges?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>No. Foreclosure charges are 0%. Eligible borrowers can repay or close their loan early at any point without paying any prepayment penalty.</p>
            </div>
          </div>

          <!-- 7 -->
          <div class="faq-item" data-category="process">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>How can I apply?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>You can apply 100% digitally through our website: (1) Click "Apply Now" or "Check Your Eligibility", (2) Enter your mobile number and basic profile details, (3) Complete digital KYC and bank verification, and (4) Review your approved loan offer.</p>
            </div>
          </div>

          <!-- 8 -->
          <div class="faq-item" data-category="process">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>What documents are required?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>Standard documents include your PAN Card, Aadhaar Card (for digital paperless e-KYC), bank account details, and income/employment verification (such as bank statement or salary slip). Documents may vary based on eligibility and lender requirements.</p>
            </div>
          </div>

          <!-- 9 -->
          <div class="faq-item" data-category="process">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>How does the loan application process work?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>The journey consists of 4 digital steps: (1) Apply online with basic contact details, (2) Verify identity and income paperlessly, (3) Review approved terms in the Key Fact Statement (KFS), and (4) E-sign your agreement to receive funds directly into your verified bank account.</p>
            </div>
          </div>

          <!-- 10 -->
          <div class="faq-item" data-category="process">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>How is my eligibility determined?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>Eligibility is determined based on customer profile, regular income, credit assessment, age (typically 21–58 years), KYC verification, and applicable lender policies.</p>
            </div>
          </div>

          <!-- 11 -->
          <div class="faq-item" data-category="process">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>How long does the application process take?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>The online application takes approximately 2 minutes to submit. Upon complete document verification and approval by our regulated lending partners, eligible applicants receive direct account disbursal as per the applicable process.</p>
            </div>
          </div>

          <!-- 12 -->
          <div class="faq-item" data-category="security">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>How is repayment calculated?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>Repayment is calculated based on the sanctioned principal amount, the applicable daily interest rate (between 0.2% and 1% per day), and the agreed tenure. A clear breakdown is provided in the Key Fact Statement before acceptance.</p>
            </div>
          </div>

          <!-- 13 -->
          <div class="faq-item" data-category="security">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>Can I repay my loan early?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>Yes. ClickMyLoan features 0% foreclosure charges. You can prepay your loan ahead of schedule anytime with zero foreclosure penalty.</p>
            </div>
          </div>

          <!-- 14 -->
          <div class="faq-item" data-category="security">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>Is ClickMyLoan safe?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>Yes. ClickMyLoan operates with bank-grade 256-bit encryption (TLS 1.3), strictly complies with RBI Digital Lending Guidelines, and partners exclusively with regulated NBFCs and Banks. We maintain a zero advance fee policy and never request confidential PINs or OTPs.</p>
            </div>
          </div>

          <!-- 15 -->
          <div class="faq-item" data-category="security">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>How is my personal data handled?</span>
              ${ICONS.chevronDown}
            </button>
            <div class="faq-answer">
              <p>Your personal data is treated with the highest security standards under the Digital Personal Data Protection (DPDP) Act, 2023. Data is collected with explicit consent solely for underwriting and compliance, and we never access phone storage, contacts, or media galleries.</p>
            </div>
          </div>
        </div>

        <div style="background:var(--c-bg-subtle); border-radius:12px; padding:24px; max-width:840px; margin:40px auto 0; text-align:center;">
          <h3 style="font-size:1.15rem; margin-bottom:6px;">Have a specific question not covered here?</h3>
          <p style="font-size:0.9rem; color:var(--c-text-muted); margin-bottom:16px;">Our customer support team is happy to assist you Monday through Saturday.</p>
          <a href="/contact-us" class="btn btn-secondary btn-sm">Contact Customer Support</a>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================================
// 10. About Us Page Content (/about-us)
// ==========================================================================
// 10. About Us Page Content (/about-us)
// ==========================================================================
export function getAboutUsPageContent(relPrefix = '..') {
  const LINKEDIN_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`;
  const QUOTE_ICON = `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>`;
  const BOLT_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
  const TARGET_ICON = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`;
  const EYE_ICON = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  const HEART_ICON = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
  const BULB_ICON = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5h6.18z"/></svg>`;

  const TEAM_MEMBERS = [
    {
      name: "Kabir Chaudhary",
      role: "Founder / CEO",
      experience: "14 Years Experience",
      education: "Hansraj College, DU, IIM Calcutta",
      photo: "kabeer.jpeg",
      bio: "As the Founder and Chief Executive Officer (CEO), I lead the organization's vision, strategy, and growth. With a strong entrepreneurial mindset, I focus on building innovative solutions, driving business development, and fostering a high performance culture that delivers long-term value to clients, partners, and stakeholders.",
      linkedin: "https://www.linkedin.com/in/kabeer-chaudhary-18bb7984"
    },
    {
      name: "Apoorve Bansal",
      role: "Co-Founder",
      experience: "10 Years Experience",
      education: "Chartered Accountant",
      photo: "apoorv.jpeg",
      bio: "As the Co-Founder, I play a key role in shaping the company's vision, strategy, and growth. I collaborate closely with the leadership team to drive innovation, strengthen operations, and build a sustainable business that delivers value to clients and stakeholders.",
      linkedin: null
    },
    {
      name: "Aman Kumar",
      role: "Chief Operating Officer",
      experience: "5 Years Experience",
      education: "Engineering DCE",
      photo: "aman.jpeg",
      bio: "As the Chief Operating Officer (COO), I oversee the company's day-to-day operations ensuring efficiency, productivity, and alignment with strategic goals. With a focus on operational excellence, team leadership, and business growth.",
      linkedin: "https://www.linkedin.com/in/aman-kumar-46a957173/"
    },
    {
      name: "Akshay",
      role: "Product Manager",
      experience: "Product & Technology",
      education: "Fintech Product Management",
      photo: null,
      initials: "AK",
      bio: "Leads digital product strategy, conversion rate optimization, user journey streamlining, and borrower experience across ClickMyLoan's digital platforms.",
      linkedin: null
    },
    {
      name: "Nisha",
      role: "Head of Talent Acquisition",
      experience: "People & Talent Leadership",
      education: "Human Resources Management",
      photo: "ishika.png",
      bio: "Directs organizational talent acquisition, people strategy, employer branding, and building high-performance fintech teams across credit, technology, and operations.",
      linkedin: "https://www.linkedin.com/in/ishika-s-93082828b"
    },
    {
      name: "Rahul Kumar",
      role: "Head of Collections",
      experience: "12 Years Experience",
      education: "Post-Graduate",
      photo: "rahul.jpg",
      bio: "As the collection head, I lead and manage the overall collections strategy to ensure timely recovery and maintain portfolio health while upholding respectful, customer-centric approaches and the Fair Practice Code.",
      linkedin: null
    },
    {
      name: "Auro",
      role: "Data Scientist",
      experience: "5 Years Experience",
      education: "Commerce Graduation & Data Science",
      photo: "suraj.jpeg",
      bio: "As a Data Scientist, I specialize in transforming complex data into actionable insights that drive strategic decisions. Focuses on predictive risk analytics and machine learning underwriting algorithms.",
      linkedin: "https://www.linkedin.com/in/suraj-kashyap-796496240"
    },
    {
      name: "Rahul & Saurad",
      role: "[Designation to be confirmed]",
      experience: "Pending Team Confirmation",
      education: "[Designation to be confirmed]",
      photo: null,
      initials: "RS",
      bio: "Key team members identified from internal records. Official designation and profile specifications will be verified with the ClickMyLoan leadership team before publishing.",
      linkedin: null
    },
    {
      name: "Ajay Kumar",
      role: "Head of Credit",
      experience: "Senior Credit Leadership",
      education: "MBA",
      photo: "ajay.png",
      bio: "The Head of Credit is responsible for overseeing the entire credit function of the organization, ensuring sound credit risk management and adherence to company policies and regulatory standards.",
      linkedin: null
    },
    {
      name: "Shubham Kumar",
      role: "Credit Manager",
      experience: "Credit & Risk Management",
      education: "MBA",
      photo: "shubham.jpg",
      bio: "A result driven credit manager with strong expertise in assessing creditworthiness, managing risk and maintaining healthy loan portfolios through data-driven decision-making.",
      linkedin: null
    },
    {
      name: "Surender Singh",
      role: "Process Manager - In House Sales",
      experience: "12 Years Experience",
      education: "Graduation",
      photo: "surender.jpg",
      bio: "Oversees and optimizes the end-to-end sales operations to enhance productivity, efficiency, and customer satisfaction across borrowing journeys.",
      linkedin: null
    },
    {
      name: "Roshan Singh",
      role: "Process Manager - In House Sales",
      experience: "8 Years Experience",
      education: "Graduation",
      photo: "roshan.png",
      bio: "Focuses on streamlining sales processes, implementing performance strategies, and supporting teams to achieve organizational customer satisfaction goals.",
      linkedin: null
    },
    {
      name: "Mithun Chakarabortoi",
      role: "Process Manager - In House Sales",
      experience: "9 Years Experience",
      education: "Graduation",
      photo: "mithun.jpg",
      bio: "Specializes in client relationship management, customer query resolution, and operational process acceleration for short-term loan applicants.",
      linkedin: null
    }
  ];

  const teamCardsHtml = TEAM_MEMBERS.map(m => `
    <div class="flip-card" tabindex="0" onclick="this.classList.toggle('is-flipped')" aria-label="Profile of ${m.name}, ${m.role}">
      <div class="flip-card-inner">
        <!-- Front Side -->
        <div class="flip-card-front">
          ${m.photo 
            ? `<img src="${relPrefix}/assets/teams/${m.photo}" alt="${m.name}" class="profile-img" loading="lazy" width="130" height="130">`
            : `<div class="profile-img-avatar">${m.initials || m.name.slice(0, 2).toUpperCase()}</div>`
          }
          <h3 class="team-name">${m.name}</h3>
          <p class="team-role">${m.role}</p>
          ${m.experience ? `<span class="experience-badge">${m.experience}</span>` : ''}
          <div class="card-flip-prompt">
            <span>Hover / tap to view bio</span>
          </div>
        </div>
        <!-- Back Side -->
        <div class="flip-card-back">
          <div class="back-content">
            <h3 class="team-name-back">${m.name}</h3>
            ${m.education ? `<p class="education-text">${m.education}</p>` : ''}
            ${m.experience ? `<span class="experience-badge experience-badge-back">${m.experience}</span>` : ''}
            <div class="bio-scroll">
              <p>${m.bio}</p>
            </div>
            ${m.linkedin ? `
              <a href="${m.linkedin}" target="_blank" rel="noopener noreferrer" class="linkedin-btn" onclick="event.stopPropagation()">
                ${LINKEDIN_ICON}
                <span>Connect on LinkedIn</span>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    </div>
  `).join('\n');

  return `
    <!-- Hero Section -->
    <section class="section-tight about-hero" style="background:linear-gradient(135deg, #FF5E00 0%, #EA580C 50%, #C2410C 100%); color:#fff; text-align:center; padding:64px 0 56px;">
      <div class="container">
        <span class="section-pill" style="background:rgba(255,255,255,0.2); color:#FFFFFF;">About ClickMyLoan</span>
        <h1 style="color:#fff; margin:16px 0 16px; font-size:clamp(2.1rem, 3.8vw, 3.2rem); font-weight:800; letter-spacing:-0.02em;">
          Redefining Digital Lending in India
        </h1>
        <p style="color:#FFF4ED; font-size:1.15rem; max-width:720px; margin:0 auto 20px; line-height:1.6;">
          Quick online loans with instant approval, fair pricing, and complete transparency. Meet the team driving India's fastest growing digital fintech platform.
        </p>
      </div>
    </section>

    <!-- Company Introduction Section -->
    <section class="section" style="padding:64px 0; background:#FAFAFA;">
      <div class="container">
        <div class="about-intro-grid">
          <div class="about-intro-text">
            <span class="section-pill">Digital Lending Ecosystem</span>
            <h2 style="font-size:clamp(1.75rem, 2.5vw, 2.25rem); font-weight:800; margin:16px 0; color:#18181B; line-height:1.25;">
              Redefining Digital Lending
            </h2>
            <p style="font-size:1.05rem; line-height:1.75; color:#52525B; margin-bottom:16px;">
              At ClickMyLoan, we are committed to building a digital lending ecosystem that offers quick and hassle-free personal loans to individuals and businesses at affordable interest rates.
            </p>
            <p style="font-size:1rem; line-height:1.75; color:#71717A; margin-bottom:28px;">
              No more worrying about physical verification, multiple calls, complicated & long processes followed by an even longer waiting period for approval. Aligned to this vision, we have partnered with the latest technology for superior user experience while respecting privacy to offer a seamless experience.
            </p>
            <div class="feature-pills-row">
              <span class="feature-pill-badge pill-blue">${BOLT_ICON} Instant Approval</span>
              <span class="feature-pill-badge pill-green">${ICONS.shield} Secure &amp; Private</span>
              <span class="feature-pill-badge pill-purple">${ICONS.clock} Quick Disbursal</span>
            </div>
          </div>

          <div class="about-intro-card">
            <div class="digital-first-card">
              <div class="digital-card-icon">
                ${ICONS.sparkle}
              </div>
              <h3 style="font-size:1.4rem; font-weight:700; color:#18181B; margin-bottom:8px;">Digital First</h3>
              <p style="color:#71717A; font-size:0.95rem; line-height:1.6; margin-bottom:20px;">
                Completely paperless process with instant algorithmic verification and direct bank disbursal.
              </p>
              <ul class="digital-checklist">
                <li>${ICONS.checkCircle} 100% Paperless &amp; Digital KYC</li>
                <li>${ICONS.checkCircle} RBI Regulated NBFC Lending Partners</li>
                <li>${ICONS.checkCircle} Zero Advance &amp; Zero Hidden Fees</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="section" style="padding:64px 0; background:#FFFFFF;">
      <div class="container">
        <div style="text-align:center; max-width:680px; margin:0 auto 48px;">
          <span class="section-pill">Our Core Purpose</span>
          <h2 style="font-size:clamp(1.75rem, 2.5vw, 2.25rem); font-weight:800; margin:14px 0 10px; color:#18181B;">
            Our Mission &amp; Vision
          </h2>
          <p style="color:#71717A; font-size:1.05rem;">
            Driving financial inclusion across India through innovative digital solutions.
          </p>
        </div>

        <div class="mission-vision-grid">
          <!-- Mission Card -->
          <div class="mv-card mv-card-mission">
            <div class="mv-card-header">
              <div class="mv-icon-box mv-icon-orange">${TARGET_ICON}</div>
              <h3 style="font-size:1.4rem; font-weight:800; color:#18181B;">Our Mission</h3>
            </div>
            <p style="font-size:1.05rem; line-height:1.75; color:#52525B; margin-bottom:24px;">
              Our mission is to vitalize people through financial incorporation &amp; awareness allowing them to make wise decisions in regards to borrowing money.
            </p>
            <div class="mv-checklist">
              <div class="mv-check-item">${ICONS.checkCircle} <span>Financial empowerment through credit education</span></div>
              <div class="mv-check-item">${ICONS.checkCircle} <span>Transparent and responsible lending practices</span></div>
              <div class="mv-check-item">${ICONS.checkCircle} <span>Accessible financial solutions for all working professionals</span></div>
            </div>
          </div>

          <!-- Vision Card -->
          <div class="mv-card mv-card-vision">
            <div class="mv-card-header">
              <div class="mv-icon-box mv-icon-blue">${EYE_ICON}</div>
              <h3 style="font-size:1.4rem; font-weight:800; color:#18181B;">Our Vision</h3>
            </div>
            <p style="font-size:1.05rem; line-height:1.75; color:#52525B; margin-bottom:24px;">
              We look forward to establishing an ideal online platform, wherein every individual and business should be able to access instant monetary support innovative solution to financial challenges for working professionals across the month.
            </p>
            <div class="mv-checklist">
              <div class="mv-check-item">${ICONS.checkCircle} <span>Universal access to instant financial support</span></div>
              <div class="mv-check-item">${ICONS.checkCircle} <span>Innovative technology solutions for cashflow challenges</span></div>
              <div class="mv-check-item">${ICONS.checkCircle} <span>Supporting working professionals nationwide with dignity</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Team Section -->
    <section class="section team-section" id="team" style="padding:72px 0; background:#F8FAFC;">
      <div class="container">
        <div style="text-align:center; max-width:760px; margin:0 auto 52px;">
          <span class="section-pill">Executive Leadership</span>
          <h2 style="font-size:clamp(2rem, 3vw, 2.6rem); font-weight:800; margin:16px 0 12px; color:#18181B;">
            Our Leadership Team
          </h2>
          <p style="color:#64748B; font-size:1.1rem; line-height:1.6;">
            Meet the talented professionals who drive ClickMyLoan's vision and success. Hover over each card to learn more about their experience and connect with them.
          </p>
        </div>

        <div class="team-cards-grid">
          ${teamCardsHtml}
        </div>
      </div>
    </section>

    <!-- Leader's Message Section -->
    <section class="section" style="padding:56px 0; background:#FFFFFF;">
      <div class="container" style="max-width:960px;">
        <div class="leader-message-card">
          <div class="leader-message-quote-icon">
            ${QUOTE_ICON}
          </div>
          <div>
            <h3 style="font-size:1.6rem; font-weight:800; color:#FFFFFF; margin-bottom:16px;">
              A Few Words From Our Leader
            </h3>
            <p style="font-size:1.15rem; line-height:1.75; color:#FFF7ED; margin-bottom:18px; font-style:italic;">
              "ClickMyLoan is a digital lending FinTech product with technology and data-driven underwriting algorithm that helps borrowers avail instant and flexible cash loans in a simple, quick, and personalized way. It has rendered quick, comfortable and accountable loan services to many working professionals, all across India."
            </p>
            <p style="font-size:1rem; line-height:1.7; color:#FED7AA;">
              We are situated in the heart of India, Delhi, particularizing in offering instant monetary options. We have always been exploring for the finest ways to see how we can best financially support people and their pecuniary specific situation.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="section" style="padding:64px 0; background:#F8FAFC;">
      <div class="container">
        <div style="text-align:center; max-width:680px; margin:0 auto 48px;">
          <span class="section-pill">Core Principles</span>
          <h2 style="font-size:clamp(1.75rem, 2.5vw, 2.25rem); font-weight:800; margin:14px 0 10px; color:#18181B;">
            What We Value?
          </h2>
          <p style="color:#64748B; font-size:1.05rem;">
            Our foundational commitments that guide every interaction and loan evaluation.
          </p>
        </div>

        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon-box value-icon-orange">${HEART_ICON}</div>
            <h3 style="font-size:1.25rem; font-weight:700; color:#18181B; margin-bottom:12px;">Support in Need</h3>
            <p style="color:#64748B; font-size:0.95rem; line-height:1.65;">
              We standby people during unyielding conditions of life, where they are strapped for cash and unable to come out of it.
            </p>
          </div>

          <div class="value-card">
            <div class="value-icon-box value-icon-blue">${ICONS.shield}</div>
            <h3 style="font-size:1.25rem; font-weight:700; color:#18181B; margin-bottom:12px;">Reliability First</h3>
            <p style="color:#64748B; font-size:0.95rem; line-height:1.65;">
              Foremost, we value the reliability and committed nature of a borrower's profile before sanctioning him/her a loan.
            </p>
          </div>

          <div class="value-card">
            <div class="value-icon-box value-icon-green">${BULB_ICON}</div>
            <h3 style="font-size:1.25rem; font-weight:700; color:#18181B; margin-bottom:12px;">Innovation Driven</h3>
            <p style="color:#64748B; font-size:0.95rem; line-height:1.65;">
              We continuously explore new technologies and algorithmic models to provide the best financial solutions for our customers.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact & Metrics Section -->
    <section class="section" style="padding:64px 0; background:#FFFFFF;">
      <div class="container">
        <div style="text-align:center; max-width:680px; margin:0 auto 48px;">
          <span class="section-pill">Our Track Record</span>
          <h2 style="font-size:clamp(1.75rem, 2.5vw, 2.25rem); font-weight:800; margin:14px 0 10px; color:#18181B;">
            Our Impact
          </h2>
          <p style="color:#64748B; font-size:1.05rem;">
            Transforming financial credit access across India with speed and transparency.
          </p>
        </div>

        <div class="impact-metrics-grid">
          <div class="impact-metric-card">
            <div class="impact-number">5L+</div>
            <p class="impact-label">Happy Borrowers Served</p>
          </div>

          <div class="impact-metric-card">
            <div class="impact-number">₹500Cr+</div>
            <p class="impact-label">Loans Disbursed to Date</p>
          </div>

          <div class="impact-metric-card">
            <div class="impact-number">15 Mins</div>
            <p class="impact-label">Average Approval Time</p>
          </div>

          <div class="impact-metric-card">
            <div class="impact-number">98%</div>
            <p class="impact-label">Borrower Satisfaction</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Corporate Information & Location Section -->
    <section class="section" style="padding:56px 0; background:#F8FAFC;">
      <div class="container" style="max-width:960px;">
        <div class="corporate-info-box">
          <h3 style="font-size:1.35rem; font-weight:800; color:#18181B; margin-bottom:14px;">
            Corporate Office &amp; Regulatory Compliance
          </h3>
          <p style="font-size:0.95rem; color:#52525B; line-height:1.7; margin-bottom:20px;">
            ClickMyLoan operates as a modern digital Lending Service Provider (LSP) in adherence with the Reserve Bank of India (RBI) Digital Lending Guidelines. We partner exclusively with regulated Banks and RBI-registered NBFCs.
          </p>
          <div class="corporate-details-grid">
            <div>
              <p style="font-size:0.85rem; color:#A1A1AA; text-transform:uppercase; font-weight:700; margin-bottom:4px;">Headquarters</p>
              <p style="font-size:0.95rem; color:#18181B; font-weight:600;">900 Mercantile House, KP Marg, Connaught Place, New Delhi 110001</p>
            </div>
            <div>
              <p style="font-size:0.85rem; color:#A1A1AA; text-transform:uppercase; font-weight:700; margin-bottom:4px;">Helpline Support</p>
              <p style="font-size:0.95rem; color:#18181B; font-weight:600;">07971900085 (Mon-Sat, 9:30 AM - 6:30 PM)</p>
            </div>
            <div>
              <p style="font-size:0.85rem; color:#A1A1AA; text-transform:uppercase; font-weight:700; margin-bottom:4px;">Support Email</p>
              <p style="font-size:0.95rem; color:#18181B; font-weight:600;">help@clickmyloan.com / care@clickmyloan.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ready to Get Started CTA Section -->
    <section class="section" style="background:linear-gradient(135deg, #18181B 0%, #27272A 100%); color:#fff; text-align:center; padding:64px 0;">
      <div class="container" style="max-width:720px;">
        <h2 style="color:#fff; font-size:clamp(1.8rem, 2.6vw, 2.4rem); font-weight:800; margin-bottom:16px;">
          Ready to Get Started?
        </h2>
        <p style="color:#D4D4D8; font-size:1.1rem; line-height:1.6; margin-bottom:32px;">
          Join thousands of satisfied customers who have experienced transparent, zero-advance-fee digital borrowing.
        </p>
        <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
          <a href="/apply" class="btn btn-primary btn-lg" data-track="cta_click" data-track-label="About Us Bottom Apply">
            Apply for Loan &rarr;
          </a>
          <a href="/contact-us" class="btn btn-outline-white btn-lg" data-track="cta_click" data-track-label="About Us Bottom Contact">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================================
// 11. Contact Us Page Content (/contact-us)
// ==========================================================================
export function getContactUsPageContent() {
  return `
    <section class="section-tight" style="background:linear-gradient(135deg, #FF5E00 0%, #EA580C 50%, #C2410C 100%); color:#fff; text-align:center; padding:56px 0;">
      <div class="container">
        <span class="section-pill" style="background:rgba(255,255,255,0.2); color:#FFFFFF;">Customer Care</span>
        <h1 style="color:#fff; margin:12px 0 16px; font-size:clamp(2rem, 3.5vw, 3rem);">Contact ClickMyLoan Support</h1>
        <p style="color:#FFF4ED; font-size:1.1rem; max-width:640px; margin:0 auto;">
          Have questions about your application, loan terms, or documentation? Reach our dedicated support specialists.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="display:grid; grid-template-columns:1fr; gap:40px; align-items:start;">
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:32px;">
            <!-- Contact Info Column -->
            <div style="background:#fff; border:1px solid var(--c-border); border-radius:16px; padding:32px; box-shadow:var(--shadow-sm);">
              <h2 style="font-size:1.35rem; margin-bottom:24px;">Support Channels</h2>

              <div style="display:flex; gap:16px; margin-bottom:24px;">
                <div style="width:40px; height:40px; border-radius:10px; background:var(--c-accent-light); color:var(--c-accent); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                  ${ICONS.mail}
                </div>
                <div>
                  <h4 style="font-size:0.95rem; margin-bottom:4px;">Customer Care Email</h4>
                  <p style="font-size:0.9rem; color:var(--c-text-muted);">care@clickmyloan.com</p>
                  <span style="font-size:0.75rem; color:var(--c-text-subtle);">Response within 24 business hours</span>
                </div>
              </div>

              <div style="display:flex; gap:16px; margin-bottom:24px;">
                <div style="width:40px; height:40px; border-radius:10px; background:var(--c-success-light); color:var(--c-success-dark); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                  ${ICONS.phone}
                </div>
                <div>
                  <h4 style="font-size:0.95rem; margin-bottom:4px;">Customer Helpline</h4>
                  <p style="font-size:0.9rem; color:var(--c-text-muted);">+91 11 [VERIFY WITH CLICKMYLOAN]</p>
                  <span style="font-size:0.75rem; color:var(--c-text-subtle);">Mon to Sat: 9:30 AM – 6:30 PM</span>
                </div>
              </div>

              <div style="display:flex; gap:16px; margin-bottom:24px;">
                <div style="width:40px; height:40px; border-radius:10px; background:var(--c-warning-light); color:var(--c-warning); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                  ${ICONS.shield}
                </div>
                <div>
                  <h4 style="font-size:0.95rem; margin-bottom:4px;">Grievance Redressal Desk</h4>
                  <p style="font-size:0.9rem; color:var(--c-text-muted);">grievance@clickmyloan.com</p>
                  <a href="/grievance-redressal" style="font-size:0.8rem; font-weight:600;">View Escalation Matrix &rarr;</a>
                </div>
              </div>

              <div style="border-top:1px solid var(--c-border); padding-top:20px; font-size:0.85rem; color:var(--c-text-subtle);">
                <strong>Corporate Office:</strong><br>
                ClickMyLoan Financial Technologies Pvt. Ltd.<br>
                [VERIFY WITH CLICKMYLOAN: Registered Office Address, India]
              </div>
            </div>

            <!-- Inquiry Form Column -->
            <div style="background:#fff; border:1px solid var(--c-border); border-radius:16px; padding:32px; box-shadow:var(--shadow-sm);">
              <h2 style="font-size:1.35rem; margin-bottom:8px;">Send Us an Inquiry</h2>
              <p style="font-size:0.875rem; color:var(--c-text-muted); margin-bottom:24px;">
                Fill out the form below and our relationship team will reach out promptly.
              </p>

              <form id="contact-form" style="display:flex; flex-direction:column; gap:16px;">
                <div class="form-group">
                  <label for="contact-name" class="form-label">Full Name</label>
                  <input type="text" id="contact-name" class="form-control" required placeholder="Enter your full name">
                </div>

                <div class="form-group">
                  <label for="contact-email" class="form-label">Email Address</label>
                  <input type="email" id="contact-email" class="form-control" required placeholder="name@example.com">
                </div>

                <div class="form-group">
                  <label for="contact-subject" class="form-label">Subject</label>
                  <select id="contact-subject" class="form-control">
                    <option value="General Inquiry">General Loan Inquiry</option>
                    <option value="Application Status">Check Application Status</option>
                    <option value="Document Assistance">Document Upload Assistance</option>
                    <option value="Product Details">Product & Rate Clarification</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="contact-message" class="form-label">Message Details</label>
                  <textarea id="contact-message" class="form-control" rows="4" placeholder="How can we assist you today?" required></textarea>
                </div>

                <button type="submit" class="btn btn-primary btn-block btn-lg" data-track="cta_click" data-track-label="Contact Form Submit">
                  Submit Message
                </button>
              </form>

              <div id="contact-success-msg" style="margin-top:20px; background:#F0FDF4; border:1px solid #10B981; border-radius:10px; padding:16px; color:#065F46; font-size:0.875rem;" hidden>
                <strong>Thank you!</strong> Your message has been received. Our support team will respond within 24 business hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================================
// 12. Security Page Content (/security)
// ==========================================================================
export function getSecurityPageContent() {
  return `
    <section class="section-tight" style="background:linear-gradient(135deg, #FF5E00 0%, #EA580C 50%, #C2410C 100%); color:#fff; text-align:center; padding:56px 0;">
      <div class="container">
        <span class="section-pill" style="background:rgba(255,255,255,0.2); color:#FFFFFF;">Data Protection Standards</span>
        <h1 style="color:#fff; margin:12px 0 16px; font-size:clamp(2rem, 3.5vw, 3rem);">Your Information Matters</h1>
        <p style="color:#FFF4ED; font-size:1.1rem; max-width:640px; margin:0 auto;">
          ClickMyLoan operates with rigorous technical safeguards and legal controls compliant with India's DPDP Act and RBI Digital Lending Directions.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container" style="max-width:860px;">
        <div style="display:flex; flex-direction:column; gap:32px;">
          <div style="background:#fff; border:1px solid var(--c-border); border-radius:16px; padding:32px;">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
              <div style="color:var(--c-accent);">${ICONS.lock}</div>
              <h2 style="font-size:1.3rem;">1. Data Transmission & Storage Encryption</h2>
            </div>
            <p style="color:var(--c-text-muted); font-size:0.95rem; line-height:1.7;">
              All data transmitted between your browser and our servers is secured using modern TLS encryption protocols. Data at rest is encrypted in segregated secure cloud environments in India. We conduct routine vulnerability testing to maintain strong perimeter security.
            </p>
          </div>

          <div style="background:#fff; border:1px solid var(--c-border); border-radius:16px; padding:32px;">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
              <div style="color:var(--c-accent);">${ICONS.shield}</div>
              <h2 style="font-size:1.3rem;">2. RBI LSP Compliance: Zero Invasive Mobile Permissions</h2>
            </div>
            <p style="color:var(--c-text-muted); font-size:0.95rem; line-height:1.7; margin-bottom:12px;">
              Unlike unethical loan apps that violate consumer privacy, ClickMyLoan adheres strictly to the RBI Digital Lending Directions:
            </p>
            <ul style="padding-left:24px; color:var(--c-text-muted); font-size:0.925rem; line-height:1.7;">
              <li><strong>No Contact Access:</strong> We never request access to your address book or phone contacts.</li>
              <li><strong>No Photo Storage Access:</strong> We never scan your device photo gallery or personal storage.</li>
              <li><strong>No Call Logs / Social Data:</strong> We never inspect or harvest your communication logs.</li>
              <li><strong>Purpose-Specific Access:</strong> Camera access is requested only if you explicitly choose to take an in-browser selfie for digital KYC verification.</li>
            </ul>
          </div>

          <div style="background:#fff; border:1px solid var(--c-border); border-radius:16px; padding:32px;">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
              <div style="color:var(--c-accent);">${ICONS.fileText}</div>
              <h2 style="font-size:1.3rem;">3. Customer Consent & Privacy Controls</h2>
            </div>
            <p style="color:var(--c-text-muted); font-size:0.95rem; line-height:1.7;">
              In accordance with the Digital Personal Data Protection (DPDP) Act, you possess the clear right to understand what information is collected, how it is processed, and who it is shared with. Information is transferred strictly to the RBI-regulated lending partner evaluating your loan. You may withdraw consent or request deletion of personal records, subject to statutory loan audit obligations.
            </p>
          </div>

          <div style="background:#fff; border:1px solid var(--c-border); border-radius:16px; padding:32px;">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
              <div style="color:var(--c-accent);">${ICONS.checkCircle}</div>
              <h2 style="font-size:1.3rem;">4. Employee Access Controls</h2>
            </div>
            <p style="color:var(--c-text-muted); font-size:0.95rem; line-height:1.7;">
              Internal access to borrower records is restricted on a strict need-to-know basis. Customer care representatives only see masked identifiers and cannot view unencrypted sensitive tax or credit data.
            </p>
          </div>
        </div>

        <div style="text-align:center; margin-top:40px;">
          <a href="/legal/privacy-policy" class="btn btn-secondary">Read Full Privacy Policy &rarr;</a>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================================
// 13. Grievance Redressal Page Content (/grievance-redressal)
// ==========================================================================
export function getGrievanceRedressalPageContent() {
  return `
    <section class="section-tight" style="background:linear-gradient(135deg, #FF5E00 0%, #EA580C 50%, #C2410C 100%); color:#fff; text-align:center; padding:56px 0;">
      <div class="container">
        <span class="section-pill" style="background:rgba(255,255,255,0.2); color:#FFFFFF;">RBI Digital Lending Compliance</span>
        <h1 style="color:#fff; margin:12px 0 16px; font-size:clamp(2rem, 3.5vw, 3rem);">Grievance Redressal Mechanism</h1>
        <p style="color:#FFF4ED; font-size:1.1rem; max-width:640px; margin:0 auto;">
          ClickMyLoan is committed to resolving customer inquiries and complaints with accountability, transparency, and speed.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container" style="max-width:880px;">
        <!-- Principal Grievance Officer Profile Card -->
        <div style="background:#fff; border:2px solid var(--c-accent); border-radius:16px; padding:32px; box-shadow:var(--shadow-sm); margin-bottom:40px;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px; border-bottom:1px solid var(--c-border); padding-bottom:16px;">
            <div>
              <span class="section-pill">Statutory Designation</span>
              <h2 style="font-size:1.45rem; color:var(--c-primary); margin-top:4px;">Principal Grievance Redressal Officer</h2>
            </div>
            <span style="font-size:0.85rem; background:var(--c-accent-light); color:var(--c-accent); padding:4px 12px; border-radius:999px; font-weight:600;">
              Level 2 Officer
            </span>
          </div>

          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:20px; font-size:0.925rem;">
            <div>
              <span style="color:var(--c-text-subtle); font-size:0.8rem; text-transform:uppercase; font-weight:600;">Officer Name</span>
              <p style="font-weight:700; color:var(--c-text-main); margin-top:2px;">[VERIFY WITH CLICKMYLOAN: Officer Name]</p>
            </div>
            <div>
              <span style="color:var(--c-text-subtle); font-size:0.8rem; text-transform:uppercase; font-weight:600;">Designation</span>
              <p style="font-weight:700; color:var(--c-text-main); margin-top:2px;">Head of Customer Excellence & Compliance</p>
            </div>
            <div>
              <span style="color:var(--c-text-subtle); font-size:0.8rem; text-transform:uppercase; font-weight:600;">Official Email</span>
              <p style="font-weight:700; color:var(--c-accent); margin-top:2px;">grievance@clickmyloan.com</p>
            </div>
            <div>
              <span style="color:var(--c-text-subtle); font-size:0.8rem; text-transform:uppercase; font-weight:600;">Dedicated Phone</span>
              <p style="font-weight:700; color:var(--c-text-main); margin-top:2px;">+91 11 [VERIFY WITH CLICKMYLOAN]</p>
            </div>
          </div>

          <div style="margin-top:20px; padding-top:16px; border-top:1px solid var(--c-border); font-size:0.85rem; color:var(--c-text-subtle);">
            <strong>Office Address:</strong> ClickMyLoan Financial Technologies Pvt. Ltd., [VERIFY WITH CLICKMYLOAN: Corporate Office Address, India]. Working Hours: Monday to Friday (10:00 AM to 6:00 PM IST).
          </div>
        </div>

        <!-- 3-Tier Escalation Matrix -->
        <h2 style="font-size:1.5rem; margin-bottom:24px;">3-Tier Dispute Escalation Matrix</h2>

        <div style="display:flex; flex-direction:column; gap:24px; margin-bottom:48px;">
          <!-- Level 1 -->
          <div style="background:#fff; border:1px solid var(--c-border); border-radius:12px; padding:24px;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
              <h3 style="font-size:1.15rem; color:var(--c-primary);">Level 1: Customer Care Desk</h3>
              <span style="font-size:0.75rem; background:var(--c-bg-subtle); padding:4px 8px; border-radius:4px; font-weight:600;">Turnaround: 24 - 48 Hours</span>
            </div>
            <p style="font-size:0.875rem; color:var(--c-text-muted); line-height:1.6;">
              First point of contact for routine queries, document re-submissions, or technical issues. Write to <strong>care@clickmyloan.com</strong> or call our customer helpline.
            </p>
          </div>

          <!-- Level 2 -->
          <div style="background:#fff; border:1px solid var(--c-border); border-radius:12px; padding:24px;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
              <h3 style="font-size:1.15rem; color:var(--c-accent);">Level 2: Principal Grievance Redressal Officer</h3>
              <span style="font-size:0.75rem; background:var(--c-accent-light); color:var(--c-accent); padding:4px 8px; border-radius:4px; font-weight:600;">Turnaround: 7 Business Days</span>
            </div>
            <p style="font-size:0.875rem; color:var(--c-text-muted); line-height:1.6;">
              If your complaint is not resolved within 48 hours at Level 1, or if you are dissatisfied with the response, escalate directly to our Principal Grievance Officer at <strong>grievance@clickmyloan.com</strong> quoting your previous ticket number.
            </p>
          </div>

          <!-- Level 3 -->
          <div style="background:#fff; border:1px solid var(--c-border); border-radius:12px; padding:24px;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
              <h3 style="font-size:1.15rem; color:#92400E;">Level 3: Regulatory Escalation (RBI Sachet / Ombudsman)</h3>
              <span style="font-size:0.75rem; background:var(--c-warning-light); color:#92400E; padding:4px 8px; border-radius:4px; font-weight:600;">After 30 Days</span>
            </div>
            <p style="font-size:0.875rem; color:var(--c-text-muted); line-height:1.6; margin-bottom:8px;">
              If your grievance remains unaddressed or unresolved for 30 calendar days from registration, you have the statutory right under the Reserve Bank - Integrated Ombudsman Scheme (RB-IOS) to lodge a complaint with the RBI Ombudsman.
            </p>
            <div style="font-size:0.8rem; color:var(--c-text-subtle);">
              Official RBI Complaint Management System: <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer">https://cms.rbi.org.in</a> | RBI Sachet Portal: <a href="https://sachet.rbi.org.in" target="_blank" rel="noopener noreferrer">https://sachet.rbi.org.in</a>
            </div>
          </div>
        </div>

        <!-- Interactive Complaint Lodgment Form -->
        <div style="background:#fff; border:1px solid var(--c-border); border-radius:16px; padding:36px; box-shadow:var(--shadow-sm);">
          <h2 style="font-size:1.35rem; margin-bottom:8px;">Lodge a Formal Grievance Online</h2>
          <p style="font-size:0.875rem; color:var(--c-text-muted); margin-bottom:24px;">
            Submit your complaint below to generate a formal reference tracking ticket.
          </p>

          <form id="grievance-form">
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:20px; margin-bottom:20px;">
              <div class="form-group">
                <label for="gr-name" class="form-label">Full Name *</label>
                <input type="text" id="gr-name" class="form-control" required placeholder="Enter full name">
              </div>

              <div class="form-group">
                <label for="gr-mobile" class="form-label">Registered Mobile Number *</label>
                <input type="tel" id="gr-mobile" class="form-control" required placeholder="10-digit mobile" maxlength="10">
              </div>

              <div class="form-group">
                <label for="gr-email" class="form-label">Email Address *</label>
                <input type="email" id="gr-email" class="form-control" required placeholder="name@example.com">
              </div>

              <div class="form-group">
                <label for="gr-loan-ref" class="form-label">Loan Application / Reference No.</label>
                <input type="text" id="gr-loan-ref" class="form-control" placeholder="e.g. CML-2026-123456 (if known)">
              </div>
            </div>

            <div class="form-group" style="margin-bottom:20px;">
              <label for="gr-category" class="form-label">Grievance Category *</label>
              <select id="gr-category" class="form-control" required>
                <option value="Application Processing Delay">Application Processing Delay</option>
                <option value="Key Fact Statement / Fee Clarification">Key Fact Statement / Fee Clarification</option>
                <option value="Data Privacy & Consent Inquiry">Data Privacy & Consent Inquiry</option>
                <option value="Communication & DND Opt-Out">Communication & DND Opt-Out</option>
                <option value="Lending Partner Coordination">Lending Partner Coordination</option>
                <option value="Other Service Matter">Other Service Matter</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom:24px;">
              <label for="gr-details" class="form-label">Detailed Description of Issue *</label>
              <textarea id="gr-details" class="form-control" rows="4" placeholder="Please provide specific dates, reference details, and summary of the issue..." required></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-lg btn-block" data-track="cta_click" data-track-label="Grievance Form Submit">
              Submit Grievance & Generate Ticket
            </button>
          </form>

          <!-- Dynamic Result Box -->
          <div id="grievance-result" style="margin-top:28px;" hidden>
            <!-- Injected by grievance.js -->
          </div>
        </div>
      </div>
    </section>
  `;
}
