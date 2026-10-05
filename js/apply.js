/**
 * ClickMyLoan — 9-Step Digital Loan Application Engine
 * Transparent, Compliant, Mobile-First Conversion Journey
 */

(function () {
  'use strict';

  function initApplication() {
    const container = document.getElementById('apply-wizard');
    if (!container) return;

    let currentStep = 1;
    const totalSteps = 9;

    // State object (strictly client-side mock for user experience)
    const appState = {
      mobile: '',
      fullName: '',
      dob: '',
      gender: '',
      pinCode: '',
      city: '',
      employmentType: 'salaried',
      employer: '',
      monthlyIncome: '',
      loanAmount: 150000,
      tenure: 24,
      purpose: 'personal',
      referenceId: ''
    };

    const stepCounterEl = document.getElementById('apply-step-counter');
    const stepTitleEl = document.getElementById('apply-step-title');
    const progressFillEl = document.getElementById('apply-progress-fill');

    const stepTitles = [
      'Step 1 of 9: Mobile Verification',
      'Step 2 of 9: Basic Identity Details',
      'Step 3 of 9: Employment & Income',
      'Step 4 of 9: Loan Requirement',
      'Step 5 of 9: Document Upload Simulation',
      'Step 6 of 9: Regulatory Consent & Bureau Authorization',
      'Step 7 of 9: Indicative Lender Offers',
      'Step 8 of 9: Key Fact Statement (KFS) Review',
      'Step 9 of 9: Application Submitted Successfully'
    ];

    function updateStepHeader(step) {
      if (stepCounterEl) stepCounterEl.textContent = `Phase ${step} of ${totalSteps}`;
      if (stepTitleEl) stepTitleEl.textContent = stepTitles[step - 1];
      if (progressFillEl) {
        const percent = ((step - 1) / (totalSteps - 1)) * 100;
        progressFillEl.style.width = `${Math.max(10, percent)}%`;
      }
    }

    function showStep(step) {
      document.querySelectorAll('.step-pane').forEach(el => el.classList.remove('is-active'));
      const activePane = document.getElementById(`step-pane-${step}`);
      if (activePane) {
        activePane.classList.add('is-active');
        activePane.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      currentStep = step;
      updateStepHeader(step);

      if (window.ClickMyLoanAnalytics) {
        window.ClickMyLoanAnalytics.trackEvent('application_step', { step_number: step });
      }
    }

    // Step 1: Mobile & Simulated OTP
    const btnSendOtp = document.getElementById('btn-send-otp');
    const otpSection = document.getElementById('otp-verify-section');
    const btnVerifyOtp = document.getElementById('btn-verify-otp');
    const mobileInput = document.getElementById('app-mobile');

    if (btnSendOtp && mobileInput) {
      btnSendOtp.addEventListener('click', () => {
        const val = mobileInput.value.trim();
        if (!/^[6-9]\d{9}$/.test(val)) {
          alert('Please enter a valid 10-digit Indian mobile number.');
          mobileInput.focus();
          return;
        }
        appState.mobile = val;
        btnSendOtp.style.display = 'none';
        otpSection.removeAttribute('hidden');
        document.getElementById('otp-sent-to-num').textContent = `+91 ${val.slice(0, 2)}******${val.slice(8)}`;
        
        // Auto-fill demo OTP 4 8 2 1 for easy UX
        const digits = document.querySelectorAll('.otp-digit');
        const demoOtp = ['4', '8', '2', '1'];
        setTimeout(() => {
          digits.forEach((d, idx) => {
            d.value = demoOtp[idx];
          });
        }, 600);
      });
    }

    if (btnVerifyOtp) {
      btnVerifyOtp.addEventListener('click', () => {
        showStep(2);
      });
    }

    // Step 2: Basic Details
    const formStep2 = document.getElementById('form-step-2');
    if (formStep2) {
      formStep2.addEventListener('submit', (e) => {
        e.preventDefault();
        appState.fullName = document.getElementById('app-fullname').value;
        appState.dob = document.getElementById('app-dob').value;
        appState.pinCode = document.getElementById('app-pincode').value;
        appState.city = document.getElementById('app-city').value;
        showStep(3);
      });
    }

    // Step 3: Employment
    const formStep3 = document.getElementById('form-step-3');
    if (formStep3) {
      formStep3.addEventListener('submit', (e) => {
        e.preventDefault();
        appState.employmentType = document.getElementById('app-emp-type').value;
        appState.employer = document.getElementById('app-employer').value;
        appState.monthlyIncome = document.getElementById('app-income').value;
        showStep(4);
      });
    }

    // Step 4: Loan Requirement
    const formStep4 = document.getElementById('form-step-4');
    if (formStep4) {
      formStep4.addEventListener('submit', (e) => {
        e.preventDefault();
        appState.loanAmount = document.getElementById('app-loan-amount').value;
        appState.tenure = document.getElementById('app-loan-tenure').value;
        appState.purpose = document.getElementById('app-loan-purpose').value;
        showStep(5);
      });
    }

    // Step 5: Document Upload Simulation
    const btnStep5 = document.getElementById('btn-step-5');
    if (btnStep5) {
      btnStep5.addEventListener('click', () => {
        showStep(6);
      });
    }

    // Step 6: Consent
    const formStep6 = document.getElementById('form-step-6');
    if (formStep6) {
      formStep6.addEventListener('submit', (e) => {
        e.preventDefault();
        const consentBureau = document.getElementById('consent-bureau').checked;
        const consentLending = document.getElementById('consent-lending').checked;
        if (!consentBureau || !consentLending) {
          alert('Please review and check the mandatory regulatory consent authorizations.');
          return;
        }
        // Update Step 7 offer display with user's requested amount
        const offerAmountEl = document.getElementById('offer-amount-display');
        if (offerAmountEl) {
          offerAmountEl.textContent = `₹${parseInt(appState.loanAmount, 10).toLocaleString('en-IN')}`;
        }
        showStep(7);
      });
    }

    // Step 7: Select Offer
    const btnSelectOffer = document.getElementById('btn-select-offer');
    if (btnSelectOffer) {
      btnSelectOffer.addEventListener('click', () => {
        // Populate Step 8 KFS Summary
        document.getElementById('kfs-amount').textContent = `₹${parseInt(appState.loanAmount, 10).toLocaleString('en-IN')}`;
        document.getElementById('kfs-tenure').textContent = `${appState.tenure} Months`;
        showStep(8);
      });
    }

    // Step 8: Accept KFS and Submit
    const btnFinalSubmit = document.getElementById('btn-final-submit');
    if (btnFinalSubmit) {
      btnFinalSubmit.addEventListener('click', () => {
        const randId = 'CML-' + new Date().getFullYear() + '-' + Math.floor(100000 + Math.random() * 900000);
        appState.referenceId = randId;
        const refDisplay = document.getElementById('app-ref-id');
        if (refDisplay) refDisplay.textContent = randId;

        // Post to mock server API
        try {
          fetch('/api/apply/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              referenceId: randId,
              loanAmount: appState.loanAmount,
              tenure: appState.tenure,
              employmentType: appState.employmentType,
              timestamp: new Date().toISOString()
            })
          }).catch(() => {});
        } catch (_) {}

        if (window.ClickMyLoanAnalytics) {
          window.ClickMyLoanAnalytics.trackEvent('application_completed', {
            reference_id: randId
          });
        }

        showStep(9);
      });
    }

    // Handle Back Buttons
    document.querySelectorAll('.btn-back-step').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetStep = parseInt(btn.getAttribute('data-target-step'), 10);
        if (targetStep >= 1 && targetStep <= totalSteps) {
          showStep(targetStep);
        }
      });
    });

    // Initialize & Read Query Parameters
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('mobile') && mobileInput) {
      mobileInput.value = urlParams.get('mobile');
      appState.mobile = urlParams.get('mobile');
    }
    if (urlParams.get('amount')) {
      const amt = Number(urlParams.get('amount'));
      if (amt >= 10000 && amt <= 500000) {
        appState.loanAmount = amt;
        const amtInput = document.getElementById('app-loan-amount');
        if (amtInput) amtInput.value = amt;
      }
    }
    if (urlParams.get('purpose')) {
      appState.purpose = urlParams.get('purpose');
      const purpInput = document.getElementById('app-loan-purpose');
      if (purpInput) purpInput.value = urlParams.get('purpose');
    }
    updateStepHeader(1);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApplication);
  } else {
    initApplication();
  }
})();
