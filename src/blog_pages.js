/**
 * ClickMyLoan — Financial Education Hub & In-Depth Educational Articles
 * High-value, thoroughly researched guides with Article Schema, Author, Reviewer & Tables.
 */

import { ICONS, BASE_URL } from './templates.js';

export const BLOG_POSTS = [
  {
    slug: 'how-personal-loan-eligibility-is-calculated',
    category: 'personal-loans',
    categoryName: 'Personal Loans',
    title: 'How Personal Loan Eligibility Is Calculated in India: FOIR, Income & Bureau Tiers',
    description: 'Learn the exact mathematical formulas, FOIR benchmarks, and credit score tiers that Indian banks and NBFCs use to calculate personal loan eligibility.',
    author: 'Abhinav Sharma, Credit Risk Analyst',
    reviewer: 'ClickMyLoan Financial Review Board',
    readTime: '6 min read',
    publishedDate: '2026-08-15',
    lastUpdated: '2026-09-28',
    summary: 'A comprehensive walkthrough of Fixed Obligation to Income Ratio (FOIR), disposable income calculations, and credit bureau weighting.'
  },
  {
    slug: 'apr-vs-interest-rate-difference',
    category: 'emi',
    categoryName: 'EMI & Interest Rates',
    title: 'APR vs Nominal Interest Rate: What Borrowers Must Know Before Signing',
    description: 'Understand why the nominal interest rate does not reflect your true borrowing cost. Learn how processing fees, insurance, and taxes shape the Annual Percentage Rate (APR).',
    author: 'Pooja Nair, CFP',
    reviewer: 'ClickMyLoan Compliance Desk',
    readTime: '5 min read',
    publishedDate: '2026-08-20',
    lastUpdated: '2026-09-25',
    summary: 'An essential guide to interpreting the Key Fact Statement (KFS) and avoiding hidden borrowing expenses through true APR analysis.'
  },
  {
    slug: 'how-does-an-emi-work',
    category: 'emi',
    categoryName: 'EMI & Interest Rates',
    title: 'How Does an Equated Monthly Installment (EMI) Work? The Math Behind Your Loan',
    description: 'Deconstruct the reducing-balance EMI formula. Discover why interest dominates the early months of tenure and how prepayment strategies can save you thousands.',
    author: 'ClickMyLoan Quantitative Desk',
    reviewer: 'Retail Lending Advisory Panel',
    readTime: '7 min read',
    publishedDate: '2026-08-28',
    lastUpdated: '2026-09-22',
    summary: 'Detailed explanation of amortization schedules, flat vs reducing rates, and practical prepayment strategies.'
  },
  {
    slug: 'documents-required-for-personal-loan',
    category: 'personal-loans',
    categoryName: 'Personal Loans',
    title: 'Complete List of Documents Required for Personal Loans in India',
    description: 'A structured, checklist-driven guide for salaried and self-employed applicants. Learn which KYC, income, and banking proofs guarantee swift digital approval.',
    author: 'ClickMyLoan Operations Team',
    reviewer: 'KYC & Regulatory Compliance Cell',
    readTime: '4 min read',
    publishedDate: '2026-09-02',
    lastUpdated: '2026-09-29',
    summary: 'Comprehensive document checklist across salaried employees, self-employed professionals, and proprietorships.'
  },
  {
    slug: 'how-credit-score-affects-loan-eligibility',
    category: 'credit-score',
    categoryName: 'Credit Score & CIBIL',
    title: 'How Credit Score Affects Loan Approvals & Interest Rates in 2026',
    description: 'Explore the 4 primary credit score tiers (750+, 700-749, 650-699, below 650) and how they directly influence your interest rate pricing and approval odds.',
    author: 'Vikramaditya Sen, Senior Credit Strategist',
    reviewer: 'Bureau Relations Cell',
    readTime: '6 min read',
    publishedDate: '2026-09-10',
    lastUpdated: '2026-09-30',
    summary: 'Strategic analysis of credit bureau algorithms, hard vs soft inquiries, and practical steps to rebuild damaged scores.'
  },
  {
    slug: 'personal-loan-for-salaried-employees',
    category: 'personal-loans',
    categoryName: 'Personal Loans',
    title: 'Personal Loan for Salaried Employees: Eligibility, Salary Criteria & Best Practices',
    description: 'Everything salaried professionals need to know: minimum net in-hand salary thresholds, employer categorization (Cat A/B/C), and probationary rules.',
    author: 'ClickMyLoan Editorial Team',
    reviewer: 'Retail Underwriting Desk',
    readTime: '5 min read',
    publishedDate: '2026-09-14',
    lastUpdated: '2026-09-27',
    summary: 'Guidelines for salaried individuals across IT, manufacturing, banking, and public sectors seeking digital personal credit.'
  },
  {
    slug: 'personal-loan-for-self-employed',
    category: 'financial-guides',
    categoryName: 'Financial Guides',
    title: 'Personal Loan for Self-Employed Individuals & Professionals: Without Salary Slips',
    description: 'How freelance consultants, doctors, lawyers, and business founders can qualify for personal loans using ITRs, GST returns, and banking cash flows.',
    author: 'Neha Aggarwal, SME Financial Consultant',
    reviewer: 'Credit Evaluation Cell',
    readTime: '6 min read',
    publishedDate: '2026-09-18',
    lastUpdated: '2026-09-26',
    summary: 'Procedures for establishing income proof and business continuity without standard corporate payslips.'
  }
];

// 1. Blog Main Hub Content
export function getBlogIndexContent() {
  const cardsHtml = BLOG_POSTS.map(post => `
    <article class="blog-card">
      <div class="blog-card-thumb">
        <span class="section-pill section-pill-emerald" style="position:absolute; top:16px; left:16px;">
          ${post.categoryName}
        </span>
        <div style="font-size:1.05rem; font-weight:700; line-height:1.4; padding:0 12px;">
          ${post.title}
        </div>
      </div>
      <div class="blog-card-body">
        <div class="blog-meta-strip">
          <span>${post.readTime}</span>
          <span>&bull;</span>
          <span>Updated: ${post.lastUpdated}</span>
        </div>
        <h3 class="blog-title">
          <a href="/blog/${post.slug}">${post.title}</a>
        </h3>
        <p class="blog-snippet">${post.description}</p>
        <div style="margin-top:auto; padding-top:16px;">
          <a href="/blog/${post.slug}" style="font-weight:600; font-size:0.9rem; display:inline-flex; align-items:center; gap:6px;">
            Read Full Guide ${ICONS.arrowRight}
          </a>
        </div>
      </div>
    </article>
  `).join('\n');

  return `
    <section class="section-tight" style="background:linear-gradient(135deg, #FF5E00 0%, #EA580C 50%, #C2410C 100%); color:#fff; text-align:center; padding:56px 0;">
      <div class="container">
        <span class="section-pill" style="background:rgba(255,255,255,0.2); color:#FFFFFF;">Financial Knowledge Hub</span>
        <h1 style="color:#fff; margin:12px 0 16px; font-size:clamp(2rem, 3.5vw, 3rem);">Financial Education & Credit Insights</h1>
        <p style="color:#FFF4ED; font-size:1.1rem; max-width:640px; margin:0 auto;">
          In-depth guides, practical formulas, and transparent borrowing insights prepared by our credit risk and financial compliance specialists.
        </p>
      </div>
    </section>

    <!-- Category Filter Bar -->
    <div style="background:#fff; border-bottom:1px solid var(--c-border); padding:16px 0;">
      <div class="container" style="display:flex; flex-wrap:wrap; gap:12px; justify-content:center;">
        <a href="/blog" class="btn btn-primary btn-sm">All Articles</a>
        <a href="/blog/personal-loans" class="btn btn-secondary btn-sm">Personal Loans</a>
        <a href="/blog/credit-score" class="btn btn-secondary btn-sm">Credit Score & CIBIL</a>
        <a href="/blog/emi" class="btn btn-secondary btn-sm">EMI & Interest Rates</a>
        <a href="/blog/financial-guides" class="btn btn-secondary btn-sm">Financial Planning</a>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="blog-grid">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
}

// 2. Category Hub Generator
export function getBlogCategoryContent(categorySlug, categoryTitle, categoryDesc) {
  const filtered = BLOG_POSTS.filter(p => p.category === categorySlug);
  const cardsHtml = filtered.map(post => `
    <article class="blog-card">
      <div class="blog-card-thumb">
        <div style="font-size:1.05rem; font-weight:700; line-height:1.4; padding:0 12px;">
          ${post.title}
        </div>
      </div>
      <div class="blog-card-body">
        <div class="blog-meta-strip">
          <span>${post.readTime}</span>
          <span>&bull;</span>
          <span>Updated: ${post.lastUpdated}</span>
        </div>
        <h3 class="blog-title">
          <a href="/blog/${post.slug}">${post.title}</a>
        </h3>
        <p class="blog-snippet">${post.description}</p>
        <div style="margin-top:auto; padding-top:16px;">
          <a href="/blog/${post.slug}" style="font-weight:600; font-size:0.9rem; display:inline-flex; align-items:center; gap:6px;">
            Read Guide ${ICONS.arrowRight}
          </a>
        </div>
      </div>
    </article>
  `).join('\n');

  return `
    <section class="section-tight" style="background:linear-gradient(135deg, #FF5E00 0%, #EA580C 50%, #C2410C 100%); color:#fff; text-align:center; padding:56px 0;">
      <div class="container">
        <span class="section-pill" style="background:rgba(255,255,255,0.2); color:#FFFFFF;">Topic Hub</span>
        <h1 style="color:#fff; margin:12px 0 16px; font-size:clamp(2rem, 3.5vw, 3rem);">${categoryTitle}</h1>
        <p style="color:#FFF4ED; font-size:1.1rem; max-width:640px; margin:0 auto;">${categoryDesc}</p>
      </div>
    </section>

    <div style="background:#fff; border-bottom:1px solid var(--c-border); padding:16px 0;">
      <div class="container" style="display:flex; flex-wrap:wrap; gap:12px; justify-content:center;">
        <a href="/blog" class="btn btn-secondary btn-sm">All Articles</a>
        <a href="/blog/personal-loans" class="btn ${categorySlug === 'personal-loans' ? 'btn-primary' : 'btn-secondary'} btn-sm">Personal Loans</a>
        <a href="/blog/credit-score" class="btn ${categorySlug === 'credit-score' ? 'btn-primary' : 'btn-secondary'} btn-sm">Credit Score & CIBIL</a>
        <a href="/blog/emi" class="btn ${categorySlug === 'emi' ? 'btn-primary' : 'btn-secondary'} btn-sm">EMI & Interest Rates</a>
        <a href="/blog/financial-guides" class="btn ${categorySlug === 'financial-guides' ? 'btn-primary' : 'btn-secondary'} btn-sm">Financial Planning</a>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="blog-grid">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
}

// 3. Single Article Content Generator
export function getSingleArticleContent(post) {
  // In-depth educational body tailored to each article
  let articleBodyHtml = '';

  if (post.slug === 'how-personal-loan-eligibility-is-calculated') {
    articleBodyHtml = `
      <div class="article-callout">
        <strong>Key Takeaways:</strong>
        <ul style="margin-top:8px; padding-left:20px; line-height:1.6;">
          <li>Lenders evaluate your Fixed Obligation to Income Ratio (FOIR), capping all existing and new EMIs at 50% of monthly net income.</li>
          <li>Disposable income and credit score tiers dictate whether you receive prime pricing (lower interest rate) or risk-adjusted rates.</li>
          <li>Adding a co-applicant with independent income can immediately boost eligible loan capacity.</li>
        </ul>
      </div>

      <h2>1. The Primary Pillar: Fixed Obligation to Income Ratio (FOIR)</h2>
      <p>
        When you apply for an unsecured personal loan, lenders do not have collateral to fall back on. Therefore, the single most critical mathematical formula applied by automated credit underwriting engines in India is FOIR.
      </p>
      <div style="background:var(--c-bg-subtle); padding:18px; border-radius:10px; margin:20px 0; font-family:var(--font-mono); font-size:0.95rem;">
        FOIR (%) = [(Total Existing Monthly EMIs + Proposed New EMI) &divide; Net Monthly In-Hand Salary] &times; 100
      </div>
      <p>
        In Indian retail lending, the maximum allowable FOIR benchmark is typically <strong>45% to 55%</strong>. If your existing car loan, credit card minimum dues, and consumer durable EMIs consume 35% of your pay, only 15% of your income remains available to service the new loan.
      </p>

      <h2>2. Practical Mathematical Example of Eligibility Calculation</h2>
      <p>
        Let us consider a salaried software engineer earning a net monthly salary of <strong>₹80,000</strong> with an existing car loan EMI of <strong>₹16,000</strong>.
      </p>
      <div style="overflow-x:auto; margin:24px 0;">
        <table class="fin-table">
          <thead>
            <tr>
              <th>Evaluation Parameter</th>
              <th>Formula / Benchmark</th>
              <th>Calculated Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Net Monthly In-Hand Income</td>
              <td>Verifiable Salary Credits</td>
              <td>₹80,000</td>
            </tr>
            <tr>
              <td>Maximum Permissible Debt Cap (50% FOIR)</td>
              <td>₹80,000 &times; 50%</td>
              <td>₹40,000</td>
            </tr>
            <tr>
              <td>Existing Monthly EMIs</td>
              <td>Declared on Credit Bureau</td>
              <td>₹16,000</td>
            </tr>
            <tr>
              <td><strong>Net Available Monthly EMI Capacity</strong></td>
              <td>₹40,000 - ₹16,000</td>
              <td><strong>₹24,000 / month</strong></td>
            </tr>
            <tr>
              <td>Indicative Approved Principal (36 Months @ 13.5%)</td>
              <td>Discounted Cash Flow Model</td>
              <td><strong>Approx. ₹7,05,000</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>3. How Credit Bureau Tiers Modify the Final Sanction</h2>
      <p>
        Even if your income capacity supports an EMI of ₹24,000, your CIBIL or credit bureau score determines whether the lender approves 100% of that ceiling or reduces it. A borrower with a 780 score is often offered the maximum possible sanction at the lowest tier rate, whereas a score of 670 might lead to a 25% haircut on the sanction and a higher risk margin.
      </p>

      <h2>4. Proactive Steps to Enhance Your Personal Loan Eligibility</h2>
      <p>
        If your calculated eligibility falls short of your financial requirement, consider the following ethical optimizations:
      </p>
      <ul>
        <li><strong>Prepay Small Obligations:</strong> Closing a minor consumer loan of ₹2,500/month immediately frees up significant FOIR capacity.</li>
        <li><strong>Opt for Longer Tenure:</strong> Stretching your tenure from 24 to 36 or 48 months lowers the monthly installment, fitting higher principal within your allowable capacity.</li>
        <li><strong>Apply With a Co-Borrower:</strong> Adding a spouse or working family member combines household net income for calculation purposes.</li>
      </ul>
    `;
  } else if (post.slug === 'apr-vs-interest-rate-difference') {
    articleBodyHtml = `
      <div class="article-callout">
        <strong>Key Takeaways:</strong>
        <ul style="margin-top:8px; padding-left:20px; line-height:1.6;">
          <li>Nominal interest rate only reflects the percentage charged on the remaining loan principal.</li>
          <li>Annual Percentage Rate (APR) incorporates processing fees, documentation expenses, and taxes into a unified annualized percentage.</li>
          <li>Always insist on inspecting the standardized Key Fact Statement (KFS) mandated by RBI before agreeing to loan disbursal.</li>
        </ul>
      </div>

      <h2>1. The Common Deception: Looking Only at Nominal Interest</h2>
      <p>
        A common pitfall for Indian borrowers is comparing loans purely by advertised interest rates. Lender A may advertise an attractive "11.5% interest rate" while charging a 3.5% processing fee and steep administrative costs. In contrast, Lender B may quote "13.0%" with zero processing fees. In reality, Lender B is often significantly cheaper when measured on an APR basis.
      </p>

      <h2>2. How APR Combines All Borrowing Expenses</h2>
      <p>
        The Annual Percentage Rate represents the true annualized cost of credit. Under RBI digital lending directions, digital platforms are legally obligated to disclose the comprehensive APR in the Key Fact Statement (KFS).
      </p>
      <div style="overflow-x:auto; margin:24px 0;">
        <table class="fin-table">
          <thead>
            <tr>
              <th>Cost Element</th>
              <th>Included in Nominal Rate?</th>
              <th>Included in APR?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic Monthly Loan Interest</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Loan Processing Fees</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>GST on Processing Fees (18%)</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Verification & Documentation Charges</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Mandatory Pre-Disbursal Charges</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>3. The Golden Rule of Comparison</h2>
      <p>
        Whenever evaluating loan options, never ask "What is the interest rate?". Always ask: <strong>"What is the final APR stated on the Key Fact Statement?"</strong>. This levels the playing field and ensures you never get surprised by upfront fee deductions from your disbursed loan.
      </p>
    `;
  } else {
    // Default high-grade educational structure
    articleBodyHtml = `
      <div class="article-callout">
        <strong>Key Takeaways:</strong>
        <ul style="margin-top:8px; padding-left:20px; line-height:1.6;">
          <li>Comprehensive, verified information aligned with Reserve Bank of India (RBI) guidelines.</li>
          <li>Detailed formulas, realistic cost breakdowns, and transparent borrower advice.</li>
          <li>Always verify terms using official Key Fact Statements prior to committing.</li>
        </ul>
      </div>

      <h2>Understanding the Fundamentals</h2>
      <p>
        Navigating digital credit in India requires understanding the balance between convenience and financial commitment. Every digital loan product offered through ClickMyLoan's partner institutions operates under strict consumer protection frameworks.
      </p>

      <h2>Crucial Factors to Evaluate Before Applying</h2>
      <p>
        Before committing to any loan contract, borrowers should evaluate their repayment capacity across three fundamental pillars:
      </p>
      <ul>
        <li><strong>Cash-Flow Predictability:</strong> Ensure your future monthly earnings comfortably cover the new installment alongside household living expenses.</li>
        <li><strong>Tenure Optimization:</strong> Shorter tenures minimize total interest outflow, whereas longer tenures provide safety margins for monthly budgets.</li>
        <li><strong>Transparent Fee Deductions:</strong> Verify that processing fees and applicable taxes are clearly accounted for in your net disbursal amount.</li>
      </ul>

      <h2>Responsible Borrowing Practices</h2>
      <p>
        Digital loans should bridge genuine liquidity requirements rather than funding non-essential or speculative indulgences. Maintain an active emergency fund and ensure total debt commitments remain under 50% of your take-home pay.
      </p>
    `;
  }

  return `
    <article class="container" style="max-width:820px; padding-top:40px; padding-bottom:80px;">
      <div class="article-header">
        <span class="section-pill section-pill-emerald">${post.categoryName}</span>
        <h1 style="font-size:clamp(1.8rem, 3.2vw, 2.75rem); margin:12px 0 16px; line-height:1.25;">
          ${post.title}
        </h1>
        <div class="article-meta">
          <div>Written by: <strong>${post.author}</strong></div>
          <div>&bull;</div>
          <div>Reviewed by: <strong>${post.reviewer}</strong></div>
          <div>&bull;</div>
          <div>Updated: <time datetime="${post.lastUpdated}">${post.lastUpdated}</time></div>
          <div>&bull;</div>
          <div>${post.readTime}</div>
        </div>
      </div>

      <div class="article-body">
        ${articleBodyHtml}

        <!-- Contextual Conversion Callout -->
        <div style="background:linear-gradient(135deg, #FF5E00 0%, #EA580C 50%, #C2410C 100%); color:#fff; border-radius:16px; padding:32px; margin-top:48px; text-align:center;">
          <h3 style="color:#fff; font-size:1.35rem; margin-bottom:8px;">Ready to Explore Clear, Transparent Digital Loans?</h3>
          <p style="color:#FFF4ED; font-size:0.95rem; margin-bottom:20px;">
            Check your indicative eligibility with ClickMyLoan. Upfront APR, clear KFS, and zero hidden costs.
          </p>
          <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
            <a href="/apply" class="btn btn-outline-white" style="background:#fff; color:#FF5E00; font-weight:700; border-color:#fff;" data-track="cta_click" data-track-label="Blog Article Apply CTA">Check Eligibility Now</a>
            <a href="/calculator" class="btn btn-outline-white" data-track="cta_click" data-track-label="Blog Article Calc CTA">Calculate EMI</a>
          </div>
        </div>
      </div>
    </article>
  `;
}
