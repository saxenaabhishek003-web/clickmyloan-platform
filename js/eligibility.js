/**
 * ClickMyLoan — Loan Eligibility Evaluator Engine
 * Compliant, Non-Misleading Indicative Eligibility Estimation
 */

(function () {
  'use strict';

  function formatINR(amount) {
    if (isNaN(amount) || amount === null) return '₹0';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(Math.round(amount));
  }

  function initEligibility() {
    const form = document.getElementById('eligibility-form');
    const resultBox = document.getElementById('eligibility-result-box');
    if (!form || !resultBox) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const age = parseInt(document.getElementById('el-age').value, 10);
      const empType = document.getElementById('el-emp-type').value;
      const income = parseFloat(document.getElementById('el-income').value) || 0;
      const existingEmi = parseFloat(document.getElementById('el-obligations').value) || 0;
      const creditScore = document.getElementById('el-credit-score').value;
      const desiredAmount = parseFloat(document.getElementById('el-desired-amount').value) || 0;

      // Age validation check (Standard Indian lending norm: 21 to 58 for salaried, 65 for business)
      const maxAge = empType === 'salaried' ? 58 : 65;
      if (age < 21 || age > maxAge) {
        showEligibilityError(`Applicants must typically be between 21 and ${maxAge} years of age for this category.`);
        return;
      }

      // Minimum Income Criteria (Standard baseline: ₹20,000 for salaried, ₹30,000 for self-employed)
      const minIncome = empType === 'salaried' ? 20000 : 30000;
      if (income < minIncome) {
        showEligibilityError(`Minimum monthly take-home income required is ${formatINR(minIncome)} for ${empType === 'salaried' ? 'salaried individuals' : 'business applicants'}.`);
        return;
      }

      // FOIR (Fixed Obligation to Income Ratio) calculation
      // Standard Indian lending rule: Max 50% of monthly net income can go toward all loan EMIs
      const maxPermissibleEmi = income * 0.50;
      const availableEmiCapacity = maxPermissibleEmi - existingEmi;

      if (availableEmiCapacity <= 1000) {
        showEligibilityError(`Your current existing EMIs (${formatINR(existingEmi)}) account for over 50% of your declared net income. In accordance with responsible lending guidelines, debt-to-income obligations must be within manageable limits.`);
        return;
      }

      // Credit tier multiplier
      let creditFactor = 1.0;
      let creditRemark = 'Excellent Credit Tier';
      if (creditScore === '750_plus') {
        creditFactor = 1.0;
        creditRemark = 'Prime Credit Profile (750+)';
      } else if (creditScore === '700_749') {
        creditFactor = 0.85;
        creditRemark = 'Good Credit Profile (700-749)';
      } else if (creditScore === '650_699') {
        creditFactor = 0.70;
        creditRemark = 'Fair Credit Profile (650-699)';
      } else {
        creditFactor = 0.55;
        creditRemark = 'New to Credit / Unscored';
      }

      // Indicative Loan Estimation using standard 36-month tenure at 13.5% indicative APR
      // P = EMI * [(1+r)^n - 1] / [r * (1+r)^n]
      const r = (13.5 / 12) / 100;
      const n = 36;
      const factor = Math.pow(1 + r, n);
      const rawEligiblePrincipal = (availableEmiCapacity * (factor - 1)) / (r * factor);
      
      let eligibleAmount = Math.round(rawEligiblePrincipal * creditFactor);
      // Cap at reasonable product ceilings
      const maxCeiling = empType === 'business' ? 2500000 : 1500000;
      eligibleAmount = Math.min(eligibleAmount, maxCeiling);

      // Render Results
      renderResults({
        eligibleAmount,
        availableEmiCapacity: Math.round(availableEmiCapacity),
        desiredAmount,
        empType,
        creditRemark
      });

      if (window.ClickMyLoanAnalytics) {
        window.ClickMyLoanAnalytics.trackEvent('eligibility_completed', {
          emp_type: empType,
          credit_tier: creditScore,
          indicative_amount: eligibleAmount > 500000 ? 'high' : 'standard'
        });
      }
    });

    function showEligibilityError(msg) {
      resultBox.removeAttribute('hidden');
      resultBox.innerHTML = `
        <div style="background:#FEF2F2; border:1px solid #FCA5A5; border-radius:12px; padding:24px; color:#991B1B;">
          <h4 style="margin-bottom:8px; display:flex; align-items:center; gap:8px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Eligibility Assessment Notice
          </h4>
          <p style="font-size:0.925rem; color:#7F1D1D; line-height:1.6; margin-bottom:16px;">${msg}</p>
          <p style="font-size:0.8rem; color:#991B1B;">Tip: You can re-check by adjusting existing obligations or applying with a co-applicant to increase eligible capacity.</p>
        </div>
      `;
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function renderResults(data) {
      resultBox.removeAttribute('hidden');
      
      const docList = data.empType === 'salaried' 
        ? `<li>Last 3 months salary slips</li><li>Last 6 months bank statement showing salary credits</li><li>PAN Card & Aadhaar KYC</li>`
        : `<li>Last 2 years Income Tax Returns with computation</li><li>Last 6-12 months active current account statement</li><li>Business proof (GST certificate / Udyam registration)</li>`;

      resultBox.innerHTML = `
        <div style="background:#FFFFFF; border:2px solid var(--c-primary, #FF5E00); border-radius:16px; padding:32px; box-shadow:0 10px 25px -5px rgba(255,94,0,0.18);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; border-bottom:1px solid #FED7AA; padding-bottom:16px;">
            <div>
              <span class="section-pill section-pill-emerald">Indicative Eligibility Calculated</span>
              <h3 style="font-size:1.6rem; color:#18181B; margin-top:6px;">Indicative Loan Amount: <span style="color:#FF5E00;">${formatINR(data.eligibleAmount)}</span></h3>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:16px; margin-bottom:24px;">
            <div style="background:#F8FAFC; padding:16px; border-radius:10px; border:1px solid #E2E8F0;">
              <span style="font-size:0.75rem; color:#64748B; text-transform:uppercase; font-weight:600;">Max Monthly Capacity</span>
              <p style="font-size:1.2rem; font-weight:700; color:#0F172A; margin-top:4px;">${formatINR(data.availableEmiCapacity)} / mo</p>
            </div>
            <div style="background:#F8FAFC; padding:16px; border-radius:10px; border:1px solid #E2E8F0;">
              <span style="font-size:0.75rem; color:#64748B; text-transform:uppercase; font-weight:600;">Profile Assessment</span>
              <p style="font-size:1.05rem; font-weight:700; color:#0F172A; margin-top:4px;">${data.creditRemark}</p>
            </div>
            <div style="background:#F8FAFC; padding:16px; border-radius:10px; border:1px solid #E2E8F0;">
              <span style="font-size:0.75rem; color:#64748B; text-transform:uppercase; font-weight:600;">Indicative Tenure</span>
              <p style="font-size:1.2rem; font-weight:700; color:#0F172A; margin-top:4px;">12 - 48 Months</p>
            </div>
          </div>

          <div style="margin-bottom:24px;">
            <h4 style="font-size:0.95rem; margin-bottom:8px; color:#1E293B;">Recommended Checklist for Application:</h4>
            <ul style="font-size:0.875rem; color:#475569; padding-left:20px; line-height:1.6;">
              ${docList}
            </ul>
          </div>

          <div class="kfs-banner" style="margin-bottom:24px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <div>
              <strong>Compliance Notice:</strong> Eligibility is indicative only. Final eligibility and loan terms depend on lender assessment, credit bureau verification, and underwriting criteria of our regulated lending partners. We never guarantee approval.
            </div>
          </div>

          <div style="display:flex; flex-wrap:wrap; gap:12px;">
            <a href="/apply" class="btn btn-primary btn-lg" style="flex:1;">Proceed to Digital Application</a>
            <a href="/calculator" class="btn btn-secondary btn-lg">Fine-tune in Calculator</a>
          </div>
        </div>
      `;

      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEligibility);
  } else {
    initEligibility();
  }
})();
