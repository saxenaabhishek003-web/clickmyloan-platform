/**
 * ClickMyLoan — 9-Step Digital Application Journey Generator
 * Complete, transparent, mobile-first conversion flow
 */

import { ICONS } from './templates.js';

export function getApplyPageContent() {
  return `
    <section class="section-tight" style="background:linear-gradient(135deg, #FF5E00 0%, #EA580C 50%, #C2410C 100%); color:#fff; text-align:center; padding:40px 0 48px;">
      <div class="container">
        <span class="section-pill" style="background:rgba(255,255,255,0.2); color:#FFFFFF;">Digital Application Portal</span>
        <h1 style="color:#fff; margin:8px 0 12px; font-size:clamp(1.8rem, 3vw, 2.5rem);">Instant Loan Application</h1>
        <p style="color:#FFF4ED; font-size:1rem; max-width:600px; margin:0 auto;">
          Complete our paperless digital application in 9 simple steps. Transparent terms, zero advance fees, and instant indicative offers.
        </p>
      </div>
    </section>

    <div class="container">
      <div class="apply-container" id="apply-wizard">
        <!-- Progress Stepper Header -->
        <div class="apply-stepper-header">
          <div class="apply-step-counter" id="apply-step-counter">Phase 1 of 9</div>
          <h2 class="apply-step-title" id="apply-step-title" style="color:#fff; font-size:1.35rem; margin-bottom:12px;">Step 1 of 9: Mobile Verification</h2>
          <div class="apply-progress-track">
            <div class="apply-progress-fill" id="apply-progress-fill" style="width:11%;"></div>
          </div>
        </div>

        <div class="apply-step-body">
          <!-- ==================== STEP 1: MOBILE VERIFICATION ==================== -->
          <div class="step-pane is-active" id="step-pane-1">
            <div class="data-purpose-badge">
              <strong>Data Notice:</strong> We collect your mobile number to establish a secure user session, verify identity via OTP, and transmit mandatory application status updates under RBI guidelines.
            </div>

            <div class="form-group" style="margin-bottom:18px;">
              <label for="app-mobile" class="form-label">Enter Your 10-Digit Mobile Number</label>
              <div class="form-phone-wrapper">
                <span class="form-phone-prefix">+91</span>
                <input type="tel" id="app-mobile" class="form-phone-input" placeholder="e.g. 9876543210" maxlength="10" required>
              </div>
            </div>

            <button type="button" class="btn btn-primary btn-block btn-lg" id="btn-send-otp">
              Send Verification Code (OTP)
            </button>

            <!-- Simulated OTP Section -->
            <div id="otp-verify-section" style="margin-top:24px; padding-top:20px; border-top:1px solid var(--c-border);" hidden>
              <p style="font-size:0.9rem; color:var(--c-text-muted); text-align:center;">
                Verification code sent to <strong id="otp-sent-to-num">+91 98******10</strong>
              </p>

              <div class="otp-inputs">
                <input type="text" class="otp-digit" maxlength="1" value="4">
                <input type="text" class="otp-digit" maxlength="1" value="8">
                <input type="text" class="otp-digit" maxlength="1" value="2">
                <input type="text" class="otp-digit" maxlength="1" value="1">
              </div>

              <button type="button" class="btn btn-primary btn-block btn-lg" id="btn-verify-otp">
                Verify & Continue
              </button>
            </div>
          </div>

          <!-- ==================== STEP 2: BASIC DETAILS ==================== -->
          <div class="step-pane" id="step-pane-2">
            <div class="data-purpose-badge">
              <strong>Data Notice:</strong> Required by RBI KYC Directions to establish legal identity and assess geographical lending availability under PMLA rules.
            </div>

            <form id="form-step-2" style="display:flex; flex-direction:column; gap:16px;">
              <div class="form-group">
                <label for="app-fullname" class="form-label">Full Legal Name (as per PAN Card) *</label>
                <input type="text" id="app-fullname" class="form-control" placeholder="e.g. Rahul Sharma" required value="Rahul Sharma">
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
                <div class="form-group">
                  <label for="app-dob" class="form-label">Date of Birth *</label>
                  <input type="date" id="app-dob" class="form-control" required value="1996-05-15">
                </div>

                <div class="form-group">
                  <label for="app-gender" class="form-label">Gender</label>
                  <select id="app-gender" class="form-control">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
                <div class="form-group">
                  <label for="app-pincode" class="form-label">Current PIN Code *</label>
                  <input type="text" id="app-pincode" class="form-control" placeholder="e.g. 110001" maxlength="6" required value="110001">
                </div>

                <div class="form-group">
                  <label for="app-city" class="form-label">Current City *</label>
                  <input type="text" id="app-city" class="form-control" placeholder="e.g. New Delhi" required value="New Delhi">
                </div>
              </div>

              <div style="display:flex; gap:12px; margin-top:8px;">
                <button type="button" class="btn btn-secondary btn-back-step" data-target-step="1">Back</button>
                <button type="submit" class="btn btn-primary" style="flex:1;">Continue to Employment</button>
              </div>
            </form>
          </div>

          <!-- ==================== STEP 3: EMPLOYMENT & INCOME ==================== -->
          <div class="step-pane" id="step-pane-3">
            <div class="data-purpose-badge">
              <strong>Data Notice:</strong> Income data is used strictly to assess repayment capacity and compute your Fixed Obligation to Income Ratio (FOIR).
            </div>

            <form id="form-step-3" style="display:flex; flex-direction:column; gap:16px;">
              <div class="form-group">
                <label for="app-emp-type" class="form-label">Employment Type *</label>
                <select id="app-emp-type" class="form-control" required>
                  <option value="salaried">Salaried Employee</option>
                  <option value="self-employed">Self-Employed Professional</option>
                  <option value="business">Business Owner / MSME</option>
                </select>
              </div>

              <div class="form-group">
                <label for="app-employer" class="form-label">Employer Name / Registered Firm Name *</label>
                <input type="text" id="app-employer" class="form-control" placeholder="e.g. Infosys Ltd." required value="Tata Consultancy Services">
              </div>

              <div class="form-group">
                <label for="app-income" class="form-label">Net Monthly Take-Home Salary (₹) *</label>
                <input type="number" id="app-income" class="form-control" placeholder="e.g. 60000" min="15000" step="1000" required value="75000">
              </div>

              <div class="form-group">
                <label for="app-salary-mode" class="form-label">Mode of Salary Credit</label>
                <select id="app-salary-mode" class="form-control">
                  <option value="bank">Direct Bank Account Credit (NEFT/IMPS)</option>
                  <option value="cheque">Cheque</option>
                </select>
              </div>

              <div style="display:flex; gap:12px; margin-top:8px;">
                <button type="button" class="btn btn-secondary btn-back-step" data-target-step="2">Back</button>
                <button type="submit" class="btn btn-primary" style="flex:1;">Continue to Loan Details</button>
              </div>
            </form>
          </div>

          <!-- ==================== STEP 4: LOAN REQUIREMENT ==================== -->
          <div class="step-pane" id="step-pane-4">
            <div class="data-purpose-badge">
              <strong>Data Notice:</strong> Specifies loan parameters to match you with compatible regulated lending facilities.
            </div>

            <form id="form-step-4" style="display:flex; flex-direction:column; gap:16px;">
              <div class="form-group">
                <label for="app-loan-amount" class="form-label">Desired Loan Amount (₹) *</label>
                <input type="number" id="app-loan-amount" class="form-control" placeholder="e.g. 200000" min="25000" max="1500000" step="5000" required value="200000">
              </div>

              <div class="form-group">
                <label for="app-loan-tenure" class="form-label">Preferred Tenure (Months) *</label>
                <select id="app-loan-tenure" class="form-control" required>
                  <option value="12">12 Months (1 Year)</option>
                  <option value="24" selected>24 Months (2 Years)</option>
                  <option value="36">36 Months (3 Years)</option>
                  <option value="48">48 Months (4 Years)</option>
                  <option value="60">60 Months (5 Years)</option>
                </select>
              </div>

              <div class="form-group">
                <label for="app-loan-purpose" class="form-label">Primary Loan Purpose *</label>
                <select id="app-loan-purpose" class="form-control" required>
                  <option value="personal">Personal / Medical Emergency</option>
                  <option value="debt-consolidation">Debt Consolidation</option>
                  <option value="home-renovation">Home Renovation</option>
                  <option value="travel">Travel & Vacation</option>
                  <option value="business">Business Expansion / Working Capital</option>
                </select>
              </div>

              <div style="display:flex; gap:12px; margin-top:8px;">
                <button type="button" class="btn btn-secondary btn-back-step" data-target-step="3">Back</button>
                <button type="submit" class="btn btn-primary" style="flex:1;">Continue to Documents</button>
              </div>
            </form>
          </div>

          <!-- ==================== STEP 5: DOCUMENT PREVIEW SIMULATION ==================== -->
          <div class="step-pane" id="step-pane-5">
            <div class="data-purpose-badge">
              <strong>Data Notice:</strong> Documents are used solely for credit underwriting by regulated partner lenders in accordance with RBI KYC master directions.
            </div>

            <div style="display:flex; flex-direction:column; gap:16px;">
              <div style="border:1px dashed var(--c-border-strong); border-radius:12px; padding:20px; text-align:center; background:var(--c-bg-subtle);">
                <div style="color:var(--c-accent); margin-bottom:8px;">${ICONS.fileText}</div>
                <h4 style="font-size:1rem; margin-bottom:4px;">PAN Card Verification</h4>
                <p style="font-size:0.8rem; color:var(--c-text-muted);">Uploaded: pan_card_rahul_sharma.pdf (Verified via NSDL)</p>
                <span style="font-size:0.75rem; color:var(--c-success-dark); font-weight:600;">&#10003; Document Authenticated</span>
              </div>

              <div style="border:1px dashed var(--c-border-strong); border-radius:12px; padding:20px; text-align:center; background:var(--c-bg-subtle);">
                <div style="color:var(--c-accent); margin-bottom:8px;">${ICONS.shield}</div>
                <h4 style="font-size:1rem; margin-bottom:4px;">Aadhaar Identity & Address Proof</h4>
                <p style="font-size:0.8rem; color:var(--c-text-muted);">Instant OTP e-KYC Verification Completed</p>
                <span style="font-size:0.75rem; color:var(--c-success-dark); font-weight:600;">&#10003; UIDAI e-KYC Verified</span>
              </div>

              <div style="border:1px dashed var(--c-border-strong); border-radius:12px; padding:20px; text-align:center; background:var(--c-bg-subtle);">
                <div style="color:var(--c-accent); margin-bottom:8px;">${ICONS.checkCircle}</div>
                <h4 style="font-size:1rem; margin-bottom:4px;">Salary Slips & Banking Statement</h4>
                <p style="font-size:0.8rem; color:var(--c-text-muted);">Connected via RBI-Regulated Account Aggregator (AA)</p>
                <span style="font-size:0.75rem; color:var(--c-success-dark); font-weight:600;">&#10003; 6 Months Bank Statement Verified</span>
              </div>
            </div>

            <div style="display:flex; gap:12px; margin-top:24px;">
              <button type="button" class="btn btn-secondary btn-back-step" data-target-step="4">Back</button>
              <button type="button" class="btn btn-primary" id="btn-step-5" style="flex:1;">Proceed to Regulatory Consent</button>
            </div>
          </div>

          <!-- ==================== STEP 6: REGULATORY CONSENT ==================== -->
          <div class="step-pane" id="step-pane-6">
            <div class="data-purpose-badge">
              <strong>Mandatory Compliance:</strong> Explicit consent is required by the Reserve Bank of India (RBI) and Credit Information Companies (Regulation) Act.
            </div>

            <form id="form-step-6" style="display:flex; flex-direction:column; gap:16px;">
              <div style="background:#fff; border:1px solid var(--c-border); border-radius:12px; padding:20px; display:flex; flex-direction:column; gap:14px;">
                <div style="display:flex; gap:12px; align-items:flex-start;">
                  <input type="checkbox" id="consent-bureau" required checked style="width:18px; height:18px; margin-top:2px;">
                  <label for="consent-bureau" style="font-size:0.85rem; color:var(--c-text-main); line-height:1.5;">
                    <strong>Credit Bureau Pull Authorization:</strong> I hereby authorize ClickMyLoan and its regulated lending partners to access and pull my Credit Information Report from CIBIL, Experian, Equifax, or CRIF High Mark to evaluate loan eligibility.
                  </label>
                </div>

                <div style="display:flex; gap:12px; align-items:flex-start;">
                  <input type="checkbox" id="consent-lending" required checked style="width:18px; height:18px; margin-top:2px;">
                  <label for="consent-lending" style="font-size:0.85rem; color:var(--c-text-main); line-height:1.5;">
                    <strong>LSP Data Sharing & Terms Consent:</strong> I understand that ClickMyLoan acts strictly as a Lending Service Provider (LSP). I consent to sharing my verified data with institutional partner NBFCs/Banks: <strong>[VERIFY WITH CLICKMYLOAN: Regulated NBFC Partners]</strong>.
                  </label>
                </div>

                <div style="display:flex; gap:12px; align-items:flex-start;">
                  <input type="checkbox" id="consent-promotional" checked style="width:18px; height:18px; margin-top:2px;">
                  <label for="consent-promotional" style="font-size:0.85rem; color:var(--c-text-muted); line-height:1.5;">
                    (Optional) I agree to receive transactional and promotional updates via WhatsApp and SMS from ClickMyLoan.
                  </label>
                </div>
              </div>

              <div style="display:flex; gap:12px; margin-top:8px;">
                <button type="button" class="btn btn-secondary btn-back-step" data-target-step="5">Back</button>
                <button type="submit" class="btn btn-primary" style="flex:1;">Submit & View Indicative Offers</button>
              </div>
            </form>
          </div>

          <!-- ==================== STEP 7: INDICATIVE OFFERS REVIEW ==================== -->
          <div class="step-pane" id="step-pane-7">
            <span class="section-pill section-pill-emerald">Indicative Approval Match</span>
            <h3 style="font-size:1.35rem; margin:10px 0 16px;">Available Loan Facilities</h3>

            <div style="background:#fff; border:2px solid var(--c-accent); border-radius:16px; padding:28px; box-shadow:var(--shadow-sm); margin-bottom:20px;">
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--c-border); padding-bottom:14px; margin-bottom:16px;">
                <div>
                  <h4 style="font-size:1.2rem; color:var(--c-primary);">Pre-Qualified Digital Facility</h4>
                  <p style="font-size:0.85rem; color:var(--c-text-muted);">Partner NBFC: [VERIFY WITH CLICKMYLOAN: Regulated NBFC Partner]</p>
                </div>
                <div style="text-align:right;">
                  <span style="font-size:0.8rem; color:var(--c-text-subtle);">Approved Limit</span>
                  <p style="font-size:1.4rem; font-weight:800; color:var(--c-accent);" id="offer-amount-display">₹2,00,000</p>
                </div>
              </div>

              <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; text-align:center; margin-bottom:20px;">
                <div style="background:var(--c-bg-subtle); padding:12px; border-radius:8px;">
                  <span style="font-size:0.75rem; color:var(--c-text-subtle);">Indicative APR</span>
                  <p style="font-weight:700; color:var(--c-text-main); margin-top:2px;">13.5% p.a.</p>
                </div>
                <div style="background:var(--c-bg-subtle); padding:12px; border-radius:8px;">
                  <span style="font-size:0.75rem; color:var(--c-text-subtle);">Tenure</span>
                  <p style="font-weight:700; color:var(--c-text-main); margin-top:2px;">24 Months</p>
                </div>
                <div style="background:var(--c-bg-subtle); padding:12px; border-radius:8px;">
                  <span style="font-size:0.75rem; color:var(--c-text-subtle);">Monthly EMI</span>
                  <p style="font-weight:700; color:var(--c-accent); margin-top:2px;">₹9,553</p>
                </div>
              </div>

              <button type="button" class="btn btn-primary btn-block btn-lg" id="btn-select-offer">
                Select This Facility & Review KFS
              </button>
            </div>

            <div style="display:flex; gap:12px;">
              <button type="button" class="btn btn-secondary btn-back-step" data-target-step="6">Back</button>
            </div>
          </div>

          <!-- ==================== STEP 8: KEY FACT STATEMENT (KFS) REVIEW ==================== -->
          <div class="step-pane" id="step-pane-8">
            <div class="kfs-banner">
              ${ICONS.shield}
              <div>
                <strong>Mandatory Key Fact Statement (KFS):</strong> Review all annualized costs, fees, and statutory cooling-off look-up period terms before final execution.
              </div>
            </div>

            <div style="background:#fff; border:1px solid var(--c-border); border-radius:12px; overflow:hidden; margin-bottom:24px;">
              <table class="fin-table">
                <tbody>
                  <tr>
                    <td><strong>Sanctioned Loan Amount</strong></td>
                    <td id="kfs-amount">₹2,00,000</td>
                  </tr>
                  <tr>
                    <td><strong>Tenure</strong></td>
                    <td id="kfs-tenure">24 Months</td>
                  </tr>
                  <tr>
                    <td><strong>Nominal Interest Rate</strong></td>
                    <td>13.5% p.a. (Reducing Balance)</td>
                  </tr>
                  <tr>
                    <td><strong>Processing Fee</strong></td>
                    <td>₹4,000 + 18% GST (₹4,720)</td>
                  </tr>
                  <tr>
                    <td><strong>Net Disbursed Amount</strong></td>
                    <td>₹1,95,280</td>
                  </tr>
                  <tr>
                    <td><strong>Annual Percentage Rate (APR)</strong></td>
                    <td><strong>16.20%</strong></td>
                  </tr>
                  <tr>
                    <td><strong>Statutory Look-Up Period</strong></td>
                    <td>3 Calendar Days (Zero prepayment penalty to exit)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="display:flex; gap:12px;">
              <button type="button" class="btn btn-secondary btn-back-step" data-target-step="7">Back</button>
              <button type="button" class="btn btn-primary btn-lg" id="btn-final-submit" style="flex:1;">
                Accept Terms & Finalize Application
              </button>
            </div>
          </div>

          <!-- ==================== STEP 9: APPLICATION SUBMITTED ==================== -->
          <div class="step-pane" id="step-pane-9">
            <div style="text-align:center; padding:20px 0;">
              <div style="width:64px; height:64px; border-radius:50%; background:#10B981; color:#fff; display:flex; align-items:center; justify-content:center; margin:0 auto 16px;">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>

              <span class="section-pill section-pill-emerald">Application Registered</span>
              <h3 style="font-size:1.75rem; color:var(--c-primary); margin:8px 0 12px;">Application Submitted Successfully!</h3>
              <p style="font-size:1rem; color:var(--c-text-muted); max-width:520px; margin:0 auto 24px;">
                Your loan dossier has been routed to our regulated partner institution for final sanction and digital disbursal.
              </p>

              <div style="background:var(--c-bg-subtle); border:1px solid var(--c-border); border-radius:12px; padding:20px; max-width:440px; margin:0 auto 28px;">
                <span style="font-size:0.8rem; color:var(--c-text-subtle); text-transform:uppercase; font-weight:600;">Application Tracking Reference</span>
                <p style="font-size:1.4rem; font-weight:800; color:var(--c-accent); margin-top:4px;" id="app-ref-id">CML-2026-894125</p>
                <span style="font-size:0.75rem; color:var(--c-text-subtle);">Please save this reference ID for future communication</span>
              </div>

              <div style="text-align:left; max-width:520px; margin:0 auto 28px; background:#fff; border:1px solid var(--c-border); border-radius:12px; padding:20px;">
                <h4 style="font-size:0.95rem; margin-bottom:8px; color:var(--c-text-main);">What Happens Next?</h4>
                <ol style="font-size:0.875rem; color:var(--c-text-muted); padding-left:20px; line-height:1.7;">
                  <li>Our regulated lending partner completes final automated underwriting.</li>
                  <li>You will receive an SMS and email notification with the digital loan agreement for Aadhaar e-Sign.</li>
                  <li>Upon e-signing and NACH setup, funds will be disbursed directly into your bank account.</li>
                </ol>
              </div>

              <div style="display:flex; justify-content:center; gap:16px;">
                <a href="/" class="btn btn-secondary">Return to Homepage</a>
                <a href="/faq" class="btn btn-primary">Browse FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
