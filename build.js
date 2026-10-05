/**
 * ClickMyLoan — Master Static Site Build Script
 * Generates all 35+ production HTML pages, sitemap.xml, and robots.txt
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { renderPage, BASE_URL, DIST_DIR, ensureDir } from './src/templates.js';
import { getHomepageContent } from './src/pages.js';
import {
  getPersonalLoanContent,
  getBusinessLoanContent,
  getTravelLoanContent,
  getCalculatorPageContent,
  getEligibilityPageContent,
  getDocumentsPageContent,
  getFeesAndChargesPageContent,
  getHowItWorksPageContent,
  getFaqPageContent,
  getAboutUsPageContent,
  getContactUsPageContent,
  getSecurityPageContent,
  getGrievanceRedressalPageContent
} from './src/product_pages.js';
import {
  BLOG_POSTS,
  getBlogIndexContent,
  getBlogCategoryContent,
  getSingleArticleContent
} from './src/blog_pages.js';
import {
  getPrivacyPolicyContent,
  getTermsContent,
  getDisclaimerContent,
  getFairPracticeCodeContent,
  getCancellationRefundContent,
  getCommunicationPreferencesContent
} from './src/legal_pages.js';
import { getApplyPageContent } from './src/apply_page.js';
import { get404Content } from './src/error_pages.js';

console.log('🚀 Starting ClickMyLoan Static Site Build...\n');

// 15 Comprehensive SEO FAQ Entities matching Section 19
const FAQ_SCHEMA_ENTITIES = [
  {
    "@type": "Question",
    "name": "What is ClickMyLoan?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "ClickMyLoan is a digital lending platform and Lending Service Provider (LSP) providing short-term personal loans up to ₹5,00,000 to eligible Indian borrowers in compliance with RBI Digital Lending Directions."
    }
  },
  {
    "@type": "Question",
    "name": "How much loan can I get?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Eligible borrowers can receive loan sanctions up to ₹5,00,000 depending on their profile evaluation, monthly income, credit assessment, and partner lender credit policies."
    }
  },
  {
    "@type": "Question",
    "name": "What is the maximum loan amount?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The maximum loan amount available on ClickMyLoan is ₹5,00,000, subject to credit assessment and underwriting criteria."
    }
  },
  {
    "@type": "Question",
    "name": "What is the applicable interest rate?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The applicable interest rate ranges from 0.2% to 1% per day based on customer credit assessment and risk profile, disclosed in the Key Fact Statement (KFS)."
    }
  },
  {
    "@type": "Question",
    "name": "What is the processing fee?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The processing fee is 8.99% of the sanctioned loan amount + applicable GST (18%), deducted directly from disbursal with zero advance fees."
    }
  },
  {
    "@type": "Question",
    "name": "Are there foreclosure charges?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Foreclosure charges are 0%. Borrowers can repay or foreclose their loan early at any time without paying any penalty."
    }
  },
  {
    "@type": "Question",
    "name": "How can I apply?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Apply 100% digitally via our portal: enter your mobile number and basic profile, complete digital KYC and bank verification, and review your sanctioned offer."
    }
  },
  {
    "@type": "Question",
    "name": "What documents are required?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Standard documents include PAN Card, Aadhaar Card (for digital e-KYC), bank account details, and income/employment verification proofs."
    }
  },
  {
    "@type": "Question",
    "name": "How does the loan application process work?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The 4-step process includes: Apply online, verify details, review terms in the Key Fact Statement, and receive funds directly into your verified bank account."
    }
  },
  {
    "@type": "Question",
    "name": "How is my eligibility determined?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Eligibility is determined based on customer profile, regular income, credit assessment, age (21–58 years), KYC verification, and applicable lender policies."
    }
  },
  {
    "@type": "Question",
    "name": "How long does the application process take?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The digital application takes approximately 2 minutes to submit online. Disbursal follows prompt verification and approval by regulated lenders."
    }
  },
  {
    "@type": "Question",
    "name": "How is repayment calculated?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Repayment is calculated based on principal amount, daily ROI (0.2%–1%/day), and tenure, with all obligations disclosed upfront in the KFS."
    }
  },
  {
    "@type": "Question",
    "name": "Can I repay my loan early?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. ClickMyLoan features 0% foreclosure charges, allowing borrowers to settle their loans ahead of schedule with zero penalty."
    }
  },
  {
    "@type": "Question",
    "name": "Is ClickMyLoan safe?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. ClickMyLoan uses bank-grade 256-bit encryption (TLS 1.3), adheres to RBI Digital Lending Guidelines, and maintains a strict zero advance fee policy."
    }
  },
  {
    "@type": "Question",
    "name": "How is my personal data handled?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Personal data is protected under India's Digital Personal Data Protection (DPDP) Act, 2023. We collect data with explicit consent and never access contacts or device storage."
    }
  }
];

const pagesToBuild = [];

// 1. Homepage
pagesToBuild.push({
  filepath: 'index.html',
  pathname: '/',
  title: 'ClickMyLoan | Modern Digital Lending Platform India | Up to ₹5 Lakh',
  description: 'Quick & simple digital short-term loans up to ₹5,00,000 with ClickMyLoan. Transparent ROI (0.2%-1%/day), 8.99% processing fee + GST, 0% foreclosure charges.',
  activeNav: 'home',
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "ClickMyLoan",
      "alternateName": "ClickMyLoan Financial Technologies Pvt. Ltd.",
      "url": BASE_URL,
      "logo": `${BASE_URL}/assets/logo.png`,
      "description": "Digital Lending Platform and Lending Service Provider (LSP) in India connecting borrowers with regulated partner NBFCs and Banks.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "email": "care@clickmyloan.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "ClickMyLoan",
      "url": BASE_URL,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${BASE_URL}/faq?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQ_SCHEMA_ENTITIES
    }
  ],
  bodyContent: getHomepageContent()
});

// 2. Personal Loan
pagesToBuild.push({
  filepath: 'personal-loan/index.html',
  pathname: '/personal-loan',
  title: 'Quick & Simple Personal Loans Up to ₹5 Lakh | ClickMyLoan',
  description: 'Apply for digital personal loans online up to ₹5 Lakhs with ClickMyLoan. Transparent daily ROI (0.2%-1%/day), 8.99% processing fee, 0% foreclosure charges.',
  activeNav: 'personal',
  breadcrumbs: [{ name: 'Personal Loan', url: '/personal-loan' }],
  schema: {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "ClickMyLoan Personal Loan",
    "description": "Short-term personal loan facility in India with transparent daily ROI (0.2%-1%/day), 8.99% processing fee + GST, and 0% foreclosure charges.",
    "annualPercentageRate": "0.2% to 1.0% per day (KFS APR disclosed upfront)",
    "feesAndCommissionsSpecification": "Processing fee 8.99% + applicable GST deducted from disbursal; 0% foreclosure fee."
  },
  bodyContent: getPersonalLoanContent()
});

// 3. Business Loan
pagesToBuild.push({
  filepath: 'business-loan/index.html',
  pathname: '/business-loan',
  title: 'Business Loan Online for MSMEs & Entrepreneurs | ClickMyLoan',
  description: 'Digital business loans for proprietorships, partnerships, LLPs, and MSMEs. Working capital and growth financing with transparent interest terms.',
  activeNav: 'business',
  breadcrumbs: [{ name: 'Business Loan', url: '/business-loan' }],
  schema: {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "ClickMyLoan Business Loan",
    "description": "Collateral-free business financing facility for eligible Indian MSMEs, sole proprietorships, and partnerships.",
    "annualPercentageRate": "12.5% to 28.0%"
  },
  bodyContent: getBusinessLoanContent()
});

// 4. Travel Loan
pagesToBuild.push({
  filepath: 'travel-loan/index.html',
  pathname: '/travel-loan',
  title: 'Travel Loan Online | Finance Your Next Trip with ClickMyLoan',
  description: 'Transparent travel financing for flight bookings, holiday packages, and overseas travel. Clear EMI plans with upfront APR disclosure.',
  activeNav: 'travel',
  breadcrumbs: [{ name: 'Travel Loan', url: '/travel-loan' }],
  schema: {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "ClickMyLoan Travel Loan",
    "description": "Unsecured personal travel financing with structured monthly EMI options."
  },
  bodyContent: getTravelLoanContent()
});

// 5. Calculator
pagesToBuild.push({
  filepath: 'calculator/index.html',
  pathname: '/calculator',
  title: 'Smart EMI & Loan Eligibility Calculator | ClickMyLoan',
  description: 'Calculate your monthly loan EMI, total interest, and complete amortization schedule online. Free interactive financial calculator for personal, business & travel loans.',
  activeNav: 'calculator',
  breadcrumbs: [{ name: 'EMI Calculator', url: '/calculator' }],
  bodyContent: getCalculatorPageContent()
});

// 6. Eligibility
pagesToBuild.push({
  filepath: 'eligibility/index.html',
  pathname: '/eligibility',
  title: 'Loan Eligibility Checker Online | Check Criteria | ClickMyLoan',
  description: 'Evaluate your digital loan eligibility online. Transparent criteria based on age, monthly income, FOIR debt obligations, and credit score.',
  activeNav: 'eligibility',
  breadcrumbs: [{ name: 'Loan Eligibility', url: '/eligibility' }],
  bodyContent: getEligibilityPageContent()
});

// 7. Documents Required
pagesToBuild.push({
  filepath: 'documents/index.html',
  pathname: '/documents',
  title: 'Documents Required for Digital Loans | ClickMyLoan',
  description: 'Complete checklist of documents required for salaried and self-employed loan applicants. Digital KYC guidelines, PAN, Aadhaar, and income proof standards.',
  activeNav: 'documents',
  breadcrumbs: [{ name: 'Documents Required', url: '/documents' }],
  bodyContent: getDocumentsPageContent()
});

// 8. Fees & Charges
pagesToBuild.push({
  filepath: 'fees-and-charges/index.html',
  pathname: '/fees-and-charges',
  title: 'Transparent Fees & Charges Schedule | ClickMyLoan',
  description: 'Review all fees and charges upfront. Transparent breakdown of processing fees, APR range, penal charges, and foreclosure rules with zero hidden costs.',
  activeNav: 'fees',
  breadcrumbs: [{ name: 'Fees & Charges', url: '/fees-and-charges' }],
  bodyContent: getFeesAndChargesPageContent()
});

// 9. How It Works
pagesToBuild.push({
  filepath: 'how-it-works/index.html',
  pathname: '/how-it-works',
  title: 'How ClickMyLoan Works | 4-Step Digital Loan Process',
  description: 'Learn how ClickMyLoan\'s digital lending process works in 4 simple steps: eligibility check, documentation, term review, and digital disbursal.',
  activeNav: 'how-it-works',
  breadcrumbs: [{ name: 'How It Works', url: '/how-it-works' }],
  bodyContent: getHowItWorksPageContent()
});

// 10. FAQs
pagesToBuild.push({
  filepath: 'faq/index.html',
  pathname: '/faq',
  title: 'Loan FAQs | Eligibility, Interest Rates, Process & Security | ClickMyLoan',
  description: 'Get instant answers to all questions about personal loans, business loans, APR, EMI calculations, credit score impact, and RBI compliance.',
  activeNav: 'faq',
  breadcrumbs: [{ name: 'Loan FAQs', url: '/faq' }],
  schema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_SCHEMA_ENTITIES
  },
  bodyContent: getFaqPageContent()
});

// 11. About Us
pagesToBuild.push({
  filepath: 'about-us/index.html',
  pathname: '/about-us',
  title: 'About ClickMyLoan | Leadership Team, Mission & Digital Lending',
  description: 'Meet the executive leadership team at ClickMyLoan. Discover our mission, core values, and the leadership behind India\'s fastest growing digital lending platform.',
  activeNav: 'about-us',
  breadcrumbs: [{ name: 'About Us', url: '/about-us' }],
  bodyContent: getAboutUsPageContent()
});

// 12. Contact Us
pagesToBuild.push({
  filepath: 'contact-us/index.html',
  pathname: '/contact-us',
  title: 'Contact ClickMyLoan | Customer Support & Registered Office',
  description: 'Get in touch with ClickMyLoan loan support. Helpline numbers, customer care email, grievance desk, and registered office address.',
  activeNav: 'contact-us',
  breadcrumbs: [{ name: 'Contact Us', url: '/contact-us' }],
  schema: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact ClickMyLoan"
  },
  bodyContent: getContactUsPageContent()
});

// 13. Security
pagesToBuild.push({
  filepath: 'security/index.html',
  pathname: '/security',
  title: 'Security & Data Protection Standards | ClickMyLoan',
  description: 'How ClickMyLoan protects your personal information. Data transmission security, DPDP compliance, customer consent controls, and privacy safeguards.',
  activeNav: 'security',
  breadcrumbs: [{ name: 'Security & Data Protection', url: '/security' }],
  bodyContent: getSecurityPageContent()
});

// 14. Grievance Redressal
pagesToBuild.push({
  filepath: 'grievance-redressal/index.html',
  pathname: '/grievance-redressal',
  title: 'Grievance Redressal Mechanism & Officer Contact | ClickMyLoan',
  description: 'Official Grievance Redressal cell of ClickMyLoan. Contact details of the Principal Grievance Officer, 3-tier escalation matrix, and online complaint lodgment.',
  activeNav: 'grievance',
  breadcrumbs: [{ name: 'Grievance Redressal', url: '/grievance-redressal' }],
  bodyContent: getGrievanceRedressalPageContent()
});

// 15. Blog Main Hub
pagesToBuild.push({
  filepath: 'blog/index.html',
  pathname: '/blog',
  title: 'Financial Education Hub | Loan Guides & Credit Insights | ClickMyLoan',
  description: 'Read expert financial guides, credit score tips, APR comparisons, and borrowing advice written for Indian borrowers by ClickMyLoan.',
  activeNav: 'blog',
  breadcrumbs: [{ name: 'Financial Education', url: '/blog' }],
  schema: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "ClickMyLoan Financial Education Hub"
  },
  bodyContent: getBlogIndexContent()
});

// 16-19. Blog Categories
const BLOG_CATEGORIES = [
  {
    slug: 'personal-loans',
    name: 'Personal Loans',
    desc: 'Guides and insights on applying for personal loans in India, comparing offers, and understanding repayment.'
  },
  {
    slug: 'credit-score',
    name: 'Credit Score & CIBIL',
    desc: 'Learn how your CIBIL score is calculated, how it affects loan approvals, and practical ways to improve your credit rating.'
  },
  {
    slug: 'emi',
    name: 'EMI & Interest Rates',
    desc: 'Understand how loan EMIs work, reducing balance versus flat interest rates, and the impact of prepayments on total loan costs.'
  },
  {
    slug: 'financial-guides',
    name: 'Financial Planning Guides',
    desc: 'Tips for managing debt responsibly, avoiding loan scams, and planning your personal finances for long-term stability.'
  }
];

BLOG_CATEGORIES.forEach(cat => {
  pagesToBuild.push({
    filepath: `blog/${cat.slug}/index.html`,
    pathname: `/blog/${cat.slug}`,
    title: `${cat.name} Guides | ClickMyLoan Financial Education`,
    description: cat.desc,
    activeNav: 'blog',
    breadcrumbs: [
      { name: 'Financial Education', url: '/blog' },
      { name: cat.name, url: `/blog/${cat.slug}` }
    ],
    bodyContent: getBlogCategoryContent(cat.slug, cat.name, cat.desc)
  });
});

// 20-26. Blog Articles
BLOG_POSTS.forEach(post => {
  pagesToBuild.push({
    filepath: `blog/${post.slug}/index.html`,
    pathname: `/blog/${post.slug}`,
    title: `${post.title} | ClickMyLoan Guide`,
    description: post.description,
    activeNav: 'blog',
    breadcrumbs: [
      { name: 'Financial Education', url: '/blog' },
      { name: post.categoryName, url: `/blog/${post.category}` },
      { name: post.title, url: `/blog/${post.slug}` }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.description,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "ClickMyLoan",
        "url": BASE_URL
      },
      "datePublished": post.publishedDate,
      "dateModified": post.lastUpdated,
      "mainEntityOfPage": `${BASE_URL}/blog/${post.slug}`
    },
    bodyContent: getSingleArticleContent(post)
  });
});

// 27-32. Legal Pages
pagesToBuild.push({
  filepath: 'legal/privacy-policy/index.html',
  pathname: '/legal/privacy-policy',
  title: 'Privacy Policy | ClickMyLoan Data Protection Standards',
  description: 'Read how ClickMyLoan collects, uses, stores, and protects customer personal and financial data in accordance with DPDP Act and RBI guidelines.',
  activeNav: 'legal',
  breadcrumbs: [{ name: 'Privacy Policy', url: '/legal/privacy-policy' }],
  bodyContent: getPrivacyPolicyContent()
});

pagesToBuild.push({
  filepath: 'legal/terms-and-conditions/index.html',
  pathname: '/legal/terms-and-conditions',
  title: 'Terms and Conditions | ClickMyLoan Platform Terms',
  description: 'Terms governing the use of ClickMyLoan website and digital lending intermediary services.',
  activeNav: 'legal',
  breadcrumbs: [{ name: 'Terms & Conditions', url: '/legal/terms-and-conditions' }],
  bodyContent: getTermsContent()
});

pagesToBuild.push({
  filepath: 'legal/disclaimer/index.html',
  pathname: '/legal/disclaimer',
  title: 'Financial Disclaimer & Regulatory Status | ClickMyLoan',
  description: 'Important disclosures regarding ClickMyLoan\'s role as a Lending Service Provider (LSP) and illustrative financial representations.',
  activeNav: 'legal',
  breadcrumbs: [{ name: 'Disclaimer', url: '/legal/disclaimer' }],
  bodyContent: getDisclaimerContent()
});

pagesToBuild.push({
  filepath: 'legal/fair-practice-code/index.html',
  pathname: '/legal/fair-practice-code',
  title: 'Fair Practice Code | ClickMyLoan Ethical Lending Commitment',
  description: 'Our commitment to transparent pricing, ethical recovery standards, non-coercive communications, and customer dignity.',
  activeNav: 'legal',
  breadcrumbs: [{ name: 'Fair Practice Code', url: '/legal/fair-practice-code' }],
  bodyContent: getFairPracticeCodeContent()
});

pagesToBuild.push({
  filepath: 'legal/cancellation-refund/index.html',
  pathname: '/legal/cancellation-refund',
  title: 'Loan Cancellation & Look-Up Period Policy | ClickMyLoan',
  description: 'Details on the statutory look-up / cooling-off period allowing borrowers to exit approved loans without penal charges as per RBI directives.',
  activeNav: 'legal',
  breadcrumbs: [{ name: 'Cancellation & Refund', url: '/legal/cancellation-refund' }],
  bodyContent: getCancellationRefundContent()
});

pagesToBuild.push({
  filepath: 'legal/communication-preferences/index.html',
  pathname: '/legal/communication-preferences',
  title: 'Communication Preferences & DND Policy | ClickMyLoan',
  description: 'Manage your contact preferences, unsubscribe from promotional messages, and view our strict National Do Not Call (NDNC) compliance.',
  activeNav: 'legal',
  breadcrumbs: [{ name: 'Communication Preferences', url: '/legal/communication-preferences' }],
  bodyContent: getCommunicationPreferencesContent()
});

// 33. Dedicated 9-Step Application Flow
pagesToBuild.push({
  filepath: 'apply/index.html',
  pathname: '/apply',
  title: 'Apply for a Digital Loan Online | ClickMyLoan Application',
  description: 'Simple 9-step digital loan application. Verify your mobile number, submit profile details, view indicative offers, and complete digital KYC.',
  activeNav: 'apply',
  breadcrumbs: [{ name: 'Digital Application', url: '/apply' }],
  hasMobileCta: false, // Dedicated wizard doesn't need sticky CTA
  bodyContent: getApplyPageContent()
});

// 34. 404 Page
pagesToBuild.push({
  filepath: '404.html',
  pathname: '/404',
  title: 'Page Not Found (404) | ClickMyLoan',
  description: 'The page you are looking for does not exist. Browse our loan products or calculate your EMI with ClickMyLoan.',
  is404: true,
  hasMobileCta: false,
  bodyContent: get404Content()
});

// Build HTML Pages
let count = 0;
pagesToBuild.forEach(page => {
  const fullOutPath = path.join(DIST_DIR, page.filepath);
  ensureDir(path.dirname(fullOutPath));

  const html = renderPage({
    pathname: page.pathname,
    title: page.title,
    description: page.description,
    schema: page.schema,
    activeNav: page.activeNav,
    breadcrumbs: page.breadcrumbs,
    bodyContent: page.bodyContent,
    hasMobileCta: page.hasMobileCta !== false,
    is404: page.is404 === true
  });

  fs.writeFileSync(fullOutPath, html, 'utf8');
  count++;
  console.log(`✓ Generated [${page.pathname}] -> ${page.filepath}`);
});

// Generate robots.txt
const robotsTxt = `# ClickMyLoan Robots.txt
# Technical SEO compliance - Disallows private application states

User-agent: *
Allow: /
Disallow: /apply?*
Disallow: /api/

Sitemap: ${BASE_URL}/sitemap.xml
`;
fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsTxt, 'utf8');
console.log('✓ Generated robots.txt');

// Generate sitemap.xml
const sitemapUrls = pagesToBuild
  .filter(p => !p.is404)
  .map(p => {
    const loc = `${BASE_URL}${p.pathname === '/' ? '' : p.pathname}`;
    const priority = p.pathname === '/' ? '1.0' : p.pathname.startsWith('/blog/') ? '0.7' : '0.8';
    const changefreq = p.pathname === '/' ? 'daily' : 'weekly';
    const lastmod = new Date().toISOString().split('T')[0];

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>
`;
fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
console.log('✓ Generated sitemap.xml');

console.log(`\n🎉 ClickMyLoan site generation completed successfully! Total ${count} pages built.`);
