/**
 * ClickMyLoan — Legal & Regulatory Compliance Pages Generator
 * Compliant with RBI Digital Lending Directions & DPDP Act, 2023
 */

function getLegalSidebarHtml(activeSlug) {
  const links = [
    { slug: 'privacy-policy', label: 'Privacy Policy' },
    { slug: 'terms-and-conditions', label: 'Terms & Conditions' },
    { slug: 'disclaimer', label: 'Financial Disclaimer' },
    { slug: 'fair-practice-code', label: 'Fair Practice Code' },
    { slug: 'cancellation-refund', label: 'Cancellation & Look-Up' },
    { slug: 'communication-preferences', label: 'Communication & DND' }
  ];

  const itemsHtml = links.map(link => `
    <li>
      <a href="/legal/${link.slug}" class="legal-nav-link ${activeSlug === link.slug ? 'active' : ''}">
        ${link.label}
      </a>
    </li>
  `).join('\n');

  return `
    <aside class="legal-sidebar" aria-label="Legal Documents Navigation">
      <h3 style="font-size:1.05rem; margin-bottom:12px; color:var(--c-primary);">Compliance Suite</h3>
      <ul class="legal-nav-list">
        ${itemsHtml}
      </ul>
      <div style="margin-top:24px; padding-top:16px; border-top:1px solid var(--c-border); font-size:0.8rem; color:var(--c-text-subtle);">
        Questions regarding legal terms? Email <a href="mailto:legal@clickmyloan.com">legal@clickmyloan.com</a>
      </div>
    </aside>
  `;
}

export function getLegalPageLayout(slug, title, bodyHtml) {
  return `
    <section class="section-tight" style="background:linear-gradient(135deg, #FF5E00 0%, #EA580C 50%, #C2410C 100%); color:#fff; padding:48px 0;">
      <div class="container">
        <span class="section-pill" style="background:rgba(255,255,255,0.2); color:#FFFFFF;">Regulatory & Legal Disclosures</span>
        <h1 style="color:#fff; margin-top:8px; font-size:clamp(1.8rem, 3vw, 2.5rem);">${title}</h1>
        <p style="color:#FFF4ED; font-size:0.95rem; margin-top:6px;">Last Revised: September 2026 &bull; ClickMyLoan Financial Technologies Pvt. Ltd.</p>
      </div>
    </section>

    <div class="container">
      <div class="legal-layout">
        ${getLegalSidebarHtml(slug)}
        <div class="legal-content">
          ${bodyHtml}
        </div>
      </div>
    </div>
  `;
}

// 1. Privacy Policy
export function getPrivacyPolicyContent() {
  const body = `
    <h2>1. Introduction & Statutory Context</h2>
    <p>
      ClickMyLoan Financial Technologies Pvt. Ltd. ("ClickMyLoan", "Company", "we", "us", or "our") operates as a digital Lending Service Provider (LSP) in adherence to the Reserve Bank of India (RBI) Guidelines on Digital Lending and India's Digital Personal Data Protection (DPDP) Act, 2023. This Privacy Policy governs the collection, processing, transmission, storage, and erasure of personal data obtained through our website and digital platforms.
    </p>

    <h2>2. Purpose-Bound Data Collection</h2>
    <p>We collect only such personal information as is strictly necessary for customer authentication, indicative eligibility evaluation, and compliance with statutory KYC guidelines:</p>
    <ul>
      <li><strong>Identity Data:</strong> Full Name, Date of Birth, Gender, PAN Card, and Aadhaar (via masked e-KYC or DigiLocker authentication).</li>
      <li><strong>Contact Data:</strong> Mobile Number, Email Address, and Current Residential Address.</li>
      <li><strong>Financial & Employment Data:</strong> Employment category, employer name, net monthly income, bank account statements, and declared debt obligations.</li>
      <li><strong>Technical Data:</strong> IP address, device operating system, browser type, and transaction timestamp logs for cybersecurity integrity.</li>
    </ul>

    <h2>3. Strict Prohibition on Device Access (RBI Digital Lending Mandate)</h2>
    <p>
      In accordance with Section 4 of the RBI Digital Lending Directions, ClickMyLoan explicitly affirms:
    </p>
    <ul>
      <li>We do <strong>NOT</strong> access, read, or store your mobile contacts, phone book, or address book.</li>
      <li>We do <strong>NOT</strong> scan, access, or harvest your media gallery, personal photos, or device storage files.</li>
      <li>We do <strong>NOT</strong> track your call logs, SMS logs, or social media activity.</li>
      <li>One-time device permissions (such as camera access) are strictly requested on an ephemeral basis with explicit consent solely for live selfie capture during digital KYC.</li>
    </ul>

    <h2>4. How We Use and Share Information</h2>
    <p>
      Your data is processed exclusively to: (a) evaluate your indicative borrowing capacity; (b) transmit loan application dossiers to our regulated institutional lending partners; and (c) satisfy statutory reporting requirements.
    </p>
    <p>
      We share personal data exclusively with regulated Scheduled Commercial Banks and RBI-registered NBFCs with whom we have executed formal Lending Service Provider contracts: <strong>[VERIFY WITH CLICKMYLOAN: Regulated NBFC Partners]</strong>. We never sell, rent, or commercialize your personal information to third-party telemarketers.
    </p>

    <h2>5. Data Storage, Retention & Security</h2>
    <p>
      All applicant personal and financial data is stored within certified secure data servers located physically within the territory of India. We implement end-to-end TLS encryption in transit and AES encryption at rest. Personal data is retained for the statutory period required under the Prevention of Money Laundering Act (PMLA) and RBI directions, after which it is securely anonymized or destroyed.
    </p>

    <h2>6. Your Rights Under the DPDP Act</h2>
    <p>You possess the statutory right to:</p>
    <ul>
      <li>Access a summary of your personal data processed by ClickMyLoan.</li>
      <li>Request correction of inaccurate or outdated information.</li>
      <li>Withdraw consent for optional promotional communications at any time.</li>
      <li>Lodge a grievance with our Data Protection Officer / Principal Grievance Officer.</li>
    </ul>

    <h2>7. Grievance Officer Contact</h2>
    <p>
      For privacy or data handling queries, contact our Data Protection Officer at: <strong>grievance@clickmyloan.com</strong>.
    </p>
  `;
  return getLegalPageLayout('privacy-policy', 'Privacy Policy & Data Protection Standards', body);
}

// 2. Terms and Conditions
export function getTermsContent() {
  const body = `
    <h2>1. Acceptance of Terms</h2>
    <p>
      By accessing or using the ClickMyLoan website or digital services, you agree to be legally bound by these Terms and Conditions. If you disagree with any provision herein, you must immediately discontinue use of the platform.
    </p>

    <h2>2. Platform & Intermediary Role</h2>
    <p>
      ClickMyLoan operates strictly as a digital lending technology interface and Lending Service Provider (LSP). ClickMyLoan is neither a bank nor a deposit-taking financial institution. All loan underwriting decisions, interest rate pricing, credit line limits, and fund disbursements remain at the sole discretion of our regulated partner Banks and RBI-registered NBFCs.
    </p>

    <h2>3. Eligibility to Use Services</h2>
    <p>
      To access loan facilitation services on ClickMyLoan, you represent and warrant that:
    </p>
    <ul>
      <li>You are an Indian citizen residing in India, aged 18 years or above.</li>
      <li>All information, financial data, and documentation provided by you is authentic, complete, and accurate.</li>
      <li>You possess legal capacity to enter into a binding financial agreement.</li>
    </ul>

    <h2>4. Accurate Representations</h2>
    <p>
      Submitting forged KYC documents, false salary figures, or invalid identity credentials constitutes fraud under applicable Indian penal laws. ClickMyLoan reserves the right to reject applications, terminate access, and report fraud to relevant authorities.
    </p>

    <h2>5. Intellectual Property</h2>
    <p>
      All content, design systems, logos, calculators, code, and trade dress on ClickMyLoan are the exclusive proprietary property of ClickMyLoan Financial Technologies Pvt. Ltd. Unauthorized reproduction, scraping, or commercial distribution is prohibited.
    </p>

    <h2>6. Governing Law & Jurisdiction</h2>
    <p>
      These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any legal dispute shall be subject to the exclusive jurisdiction of the competent courts in India.
    </p>
  `;
  return getLegalPageLayout('terms-and-conditions', 'Terms and Conditions of Use', body);
}

// 3. Disclaimer
export function getDisclaimerContent() {
  const body = `
    <h2>1. Non-Lender Status & LSP Role</h2>
    <p>
      ClickMyLoan is a digital Lending Service Provider (LSP) providing technology tools, loan discovery calculators, and customer support. ClickMyLoan does not directly grant loans, hold public deposits, or issue credit lines. Sanctions are governed exclusively by regulated partner institutions: <strong>[VERIFY WITH CLICKMYLOAN: Regulated Partner Details]</strong>.
    </p>

    <h2>2. Illustrative Nature of Calculations</h2>
    <p>
      Calculations generated by our EMI calculator, eligibility evaluator, or amortization tables are purely illustrative in nature. They do not constitute a formal loan offer or guarantee of sanction. The final loan terms, interest rates, processing fees, and repayment schedules will be specified in the formal Key Fact Statement (KFS) issued by the approving lender.
    </p>

    <h2>3. Zero Approval Guarantees</h2>
    <p>
      ClickMyLoan never promises or guarantees loan approval. Sanction is determined by credit risk assessment, verification of income, debt-to-income ratio (FOIR), and underwriting criteria established by our regulated partner institutions.
    </p>

    <h2>4. Zero Advance Fee Caution</h2>
    <p>
      Neither ClickMyLoan nor our partner lenders will ever ask you to pay advance approval fees, processing security deposits, or file opening charges into personal accounts. Legitimate processing fees are deducted directly from the sanctioned loan disbursement.
    </p>
  `;
  return getLegalPageLayout('disclaimer', 'Financial Disclaimer & Regulatory Status', body);
}

// 4. Fair Practice Code
export function getFairPracticeCodeContent() {
  const body = `
    <h2>1. Objective & Philosophy</h2>
    <p>
      ClickMyLoan is dedicated to maintaining the highest ethical standards across digital credit delivery. Our Fair Practice Code adopts the core principles established by the Reserve Bank of India, emphasizing transparency, borrower dignity, and ethical customer engagement.
    </p>

    <h2>2. Upfront Disclosure of Loan Terms</h2>
    <ul>
      <li>Borrowers are provided a clear Key Fact Statement (KFS) itemizing the Annual Percentage Rate (APR), processing fees, and all applicable terms prior to loan execution.</li>
      <li>All communications are conducted in clear, unambiguous language.</li>
      <li>No hidden charges or unannounced administrative levies will be charged to any applicant.</li>
    </ul>

    <h2>3. Ethical Debt Recovery Commitment</h2>
    <p>
      ClickMyLoan strictly adheres to RBI directives regarding loan collection and debt service engagement:
    </p>
    <ul>
      <li><strong>Hours of Contact:</strong> Debt collection communications and customer calls are strictly restricted between <strong>8:00 AM and 7:00 PM</strong>.</li>
      <li><strong>No Harassment or Intimidation:</strong> We enforce zero tolerance for threatening language, public embarrassment, or harassment of borrowers or their families.</li>
      <li><strong>Contact Privacy:</strong> We never contact your employers, colleagues, or acquaintances regarding your debt obligations.</li>
      <li><strong>Professionalism:</strong> Every recovery specialist is trained to treat borrowers with empathy, respect, and professionalism.</li>
    </ul>

    <h2>4. Look-Up / Cooling-Off Period</h2>
    <p>
      Every borrower is provided a statutory cooling-off / look-up period during which they can exit the loan without prepayment penalties by repaying the principal and proportionate interest as per RBI guidelines.
    </p>
  `;
  return getLegalPageLayout('fair-practice-code', 'Fair Practice Code & Ethical Lending', body);
}

// 5. Cancellation & Refund Policy
export function getCancellationRefundContent() {
  const body = `
    <h2>1. Statutory Look-Up / Cooling-Off Period</h2>
    <p>
      In compliance with the Reserve Bank of India (RBI) Digital Lending Directions, ClickMyLoan provides every borrower a statutory look-up / cooling-off window immediately upon loan disbursal:
    </p>
    <ul>
      <li><strong>Loans with tenure of 1 year or more:</strong> 3 calendar days cooling-off period.</li>
      <li><strong>Loans with tenure less than 1 year:</strong> 1 calendar day cooling-off period.</li>
    </ul>

    <h2>2. How to Exercise Loan Cancellation</h2>
    <p>
      If you decide to exit your loan within the statutory look-up period:
    </p>
    <ol style="padding-left:24px; line-height:1.7; margin-bottom:16px;">
      <li>Send an official loan cancellation request from your registered email to <strong>care@clickmyloan.com</strong> quoting your loan account number.</li>
      <li>Transfer back the full disbursed principal amount along with proportionate interest for the elapsed days directly to the partner lender's designated account.</li>
      <li>No prepayment penalty or foreclosure fee will be charged during this period.</li>
    </ol>

    <h2>3. Refund of Processing Fees</h2>
    <p>
      One-time processing fees incurred toward statutory third-party verification expenses (such as credit bureau pulls, stamp duty, or e-Sign fees) may be adjusted per the terms specified in the Key Fact Statement (KFS).
    </p>

    <h2>4. Zero Advance Fee Refund Assurance</h2>
    <p>
      Since ClickMyLoan never charges upfront fees, deposits, or registration charges, there are no advance fees held by the platform.
    </p>
  `;
  return getLegalPageLayout('cancellation-refund', 'Loan Cancellation & Look-Up Period Policy', body);
}

// 6. Communication Preferences & DND
export function getCommunicationPreferencesContent() {
  const body = `
    <h2>1. National Do Not Call (NDNC) & TRAI Compliance</h2>
    <p>
      ClickMyLoan respects your communication choices and adheres to Telecom Regulatory Authority of India (TRAI) regulations regarding commercial communications.
    </p>

    <h2>2. Transactional vs Promotional Communications</h2>
    <ul>
      <li><strong>Transactional Messages:</strong> Mandatory updates regarding your active application status, OTP verifications, repayment reminders, and statutory disclosures. These messages cannot be opted out of as they are critical to servicing your loan.</li>
      <li><strong>Promotional Messages:</strong> Information on new credit products, educational webinars, or special partner offers. You may opt out of promotional messages at any time.</li>
    </ul>

    <h2>3. How to Update Preferences / Opt Out</h2>
    <p>You can manage your contact preferences at any time by:</p>
    <ul>
      <li>Replying "STOP" to any promotional SMS or WhatsApp notification.</li>
      <li>Clicking the "Unsubscribe" link situated at the bottom of promotional emails.</li>
      <li>Sending an email with the subject "DND Preference" to <strong>care@clickmyloan.com</strong> stating your registered 10-digit mobile number.</li>
    </ul>
    <p>
      Your opt-out request will be updated across our notification systems within 48 business hours.
    </p>
  `;
  return getLegalPageLayout('communication-preferences', 'Communication Preferences & DND Policy', body);
}
