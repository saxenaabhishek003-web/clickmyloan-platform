/**
 * ClickMyLoan — Smart Interactive Loan & EMI Calculator Engine
 * Compliant, Transparent, and Mobile-First
 * Features: Daily ROI short-term calculation & Monthly reducing balance EMI
 */

(function () {
  'use strict';

  // Currency Formatter (Indian Rupee Format)
  function formatINR(amount) {
    if (isNaN(amount) || amount === null) return '₹0';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(Math.round(amount));
  }

  // Presets by loan product
  const PRODUCT_PRESETS = {
    'short-term': {
      mode: 'daily',
      amount: 50000,
      minAmount: 10000,
      maxAmount: 500000,
      stepAmount: 5000,
      rate: 0.5,
      minRate: 0.2,
      maxRate: 1.0,
      stepRate: 0.05,
      rateUnit: '%/day',
      rateLabel: 'Applicable Interest Rate (% per day)',
      tenure: 30,
      minTenure: 15,
      maxTenure: 180,
      stepTenure: 5,
      tenureUnit: 'Days',
      tenureLabel: 'Repayment Tenure (Days)',
      badgeTitle: 'Estimated Daily Repayment'
    },
    'personal': {
      mode: 'monthly',
      amount: 150000,
      minAmount: 25000,
      maxAmount: 500000,
      stepAmount: 5000,
      rate: 14.0,
      minRate: 10.5,
      maxRate: 26.0,
      stepRate: 0.25,
      rateUnit: '% p.a.',
      rateLabel: 'Indicative Annual Interest Rate (% p.a.)',
      tenure: 12,
      minTenure: 3,
      maxTenure: 36,
      stepTenure: 1,
      tenureUnit: 'Mo',
      tenureLabel: 'Repayment Tenure (Months)',
      badgeTitle: 'Monthly Estimated Installment'
    }
  };

  let currentProduct = 'short-term';

  function initCalculator() {
    const calcContainer = document.getElementById('emi-calculator');
    if (!calcContainer) return;

    // Inputs
    const amountSlider = document.getElementById('calc-amount-slider');
    const amountInput = document.getElementById('calc-amount-input');
    const rateSlider = document.getElementById('calc-rate-slider');
    const rateInput = document.getElementById('calc-rate-input');
    const tenureSlider = document.getElementById('calc-tenure-slider');
    const tenureInput = document.getElementById('calc-tenure-input');

    // Labels & Units
    const rateLabel = document.getElementById('calc-rate-label');
    const rateUnit = document.getElementById('calc-rate-unit');
    const rateMinSpan = document.getElementById('calc-rate-min');
    const rateMaxSpan = document.getElementById('calc-rate-max');

    const tenureLabel = document.getElementById('calc-tenure-label');
    const tenureUnit = document.getElementById('calc-tenure-unit');
    const tenureMinSpan = document.getElementById('calc-tenure-min');
    const tenureMaxSpan = document.getElementById('calc-tenure-max');

    const amountMinSpan = document.getElementById('calc-amount-min');
    const amountMaxSpan = document.getElementById('calc-amount-max');

    // Outputs
    const emiDisplay = document.getElementById('calc-monthly-emi');
    const badgeTitle = document.getElementById('calc-badge-title');
    const repaySub = document.getElementById('calc-repay-sub');
    const principalDisplay = document.getElementById('calc-principal-display');
    const interestDisplay = document.getElementById('calc-interest-display');
    const pfDisplay = document.getElementById('calc-pf-display');
    const gstDisplay = document.getElementById('calc-gst-display');
    const disbursedDisplay = document.getElementById('calc-disbursed-display');
    const totalDisplay = document.getElementById('calc-total-display');

    // Chart
    const donutPrincipal = document.getElementById('donut-segment-principal');
    const donutInterest = document.getElementById('donut-segment-interest');

    // Amortization
    const amortizationBtn = document.getElementById('toggle-amortization-btn');
    const amortizationWrap = document.getElementById('amortization-schedule-wrap');
    const amortizationBody = document.getElementById('amortization-tbody');

    // Product tabs
    const productTabs = document.querySelectorAll('.calc-tab-btn');

    // Daily ROI Loan Calculation Formula
    // Interest = Principal * (Rate / 100) * TenureDays
    // Processing Fee = 8.99% of Principal
    // GST = 18% of Processing Fee
    function calculateDailyLoan(principal, dailyRate, tenureDays) {
      if (principal <= 0 || tenureDays <= 0) {
        return {
          installment: 0,
          totalInterest: 0,
          processingFee: 0,
          gstProcessingFee: 0,
          totalRepayment: 0
        };
      }

      const totalInterest = Math.round(principal * (dailyRate / 100) * tenureDays);
      const processingFee = Math.round(principal * 0.0899);
      const gstProcessingFee = Math.round(processingFee * 0.18);
      const totalRepayment = principal + totalInterest;
      const disbursedAmount = Math.max(0, principal - (processingFee + gstProcessingFee));

      return {
        installment: dailyInstallment,
        totalInterest,
        processingFee,
        gstProcessingFee,
        disbursedAmount,
        totalRepayment
      };
    }

    // Monthly Reducing Balance Formula
    // EMI = [P x r x (1+r)^n] / [(1+r)^n - 1]
    function calculateMonthlyEMI(principal, annualRate, tenureMonths) {
      if (principal <= 0 || tenureMonths <= 0) {
        return {
          installment: 0,
          totalInterest: 0,
          processingFee: 0,
          gstProcessingFee: 0,
          totalRepayment: 0
        };
      }

      const r = (annualRate / 12) / 100;
      let emi = 0;
      if (r === 0) {
        emi = principal / tenureMonths;
      } else {
        const factor = Math.pow(1 + r, tenureMonths);
        emi = (principal * r * factor) / (factor - 1);
      }

      const totalRepayment = Math.round(emi * tenureMonths);
      const totalInterest = Math.max(0, totalRepayment - principal);
      const processingFee = Math.round(principal * 0.0899);
      const gstProcessingFee = Math.round(processingFee * 0.18);
      const disbursedAmount = Math.max(0, principal - (processingFee + gstProcessingFee));

      return {
        installment: Math.round(emi),
        totalInterest,
        processingFee,
        gstProcessingFee,
        disbursedAmount,
        totalRepayment
      };
    }

    function updateDonutChart(principal, totalInterest) {
      if (!donutPrincipal || !donutInterest) return;
      const total = principal + totalInterest;
      if (total <= 0) return;

      const circumference = 2 * Math.PI * 70; // r=70 in SVG
      const principalRatio = principal / total;
      const interestRatio = totalInterest / total;

      const principalDash = principalRatio * circumference;
      const interestDash = interestRatio * circumference;

      donutPrincipal.style.strokeDasharray = `${principalDash} ${circumference}`;
      donutInterest.style.strokeDasharray = `${interestDash} ${circumference}`;
      donutInterest.style.strokeDashoffset = `-${principalDash}`;
    }

    function updateScheduleTable(principal, rate, tenure, installment, isDaily) {
      if (!amortizationBody) return;
      amortizationBody.innerHTML = '';

      if (isDaily) {
        // Render 5 milestone periods or weekly intervals for daily loans
        const periods = tenure <= 30 ? Math.min(tenure, 6) : 6;
        const daysPerPeriod = Math.round(tenure / periods);
        let remBalance = principal;
        const totalInterest = Math.round(principal * (rate / 100) * tenure);
        const interestPerPeriod = Math.round(totalInterest / periods);
        const principalPerPeriod = Math.round(principal / periods);

        for (let i = 1; i <= periods; i++) {
          const isLast = i === periods;
          const paidPrin = isLast ? remBalance : principalPerPeriod;
          remBalance = isLast ? 0 : Math.max(0, remBalance - paidPrin);
          const periodDays = isLast ? tenure : (i * daysPerPeriod);

          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td><strong>Day 1 – ${periodDays}</strong></td>
            <td>${formatINR(paidPrin)}</td>
            <td>${formatINR(interestPerPeriod)}</td>
            <td>${formatINR(paidPrin + interestPerPeriod)}</td>
            <td>${formatINR(remBalance)}</td>
          `;
          amortizationBody.appendChild(tr);
        }
      } else {
        // Monthly amortization schedule
        const r = (rate / 12) / 100;
        let balance = principal;

        for (let month = 1; month <= tenure; month++) {
          const interestForMonth = Math.round(balance * r);
          const principalForMonth = Math.min(balance, installment - interestForMonth);
          balance = Math.max(0, balance - principalForMonth);

          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td><strong>Month ${month}</strong></td>
            <td>${formatINR(principalForMonth)}</td>
            <td>${formatINR(interestForMonth)}</td>
            <td>${formatINR(principalForMonth + interestForMonth)}</td>
            <td>${formatINR(balance)}</td>
          `;
          amortizationBody.appendChild(tr);
        }
      }
    }

    function syncAndCalculate() {
      const principal = parseFloat(amountSlider ? amountSlider.value : 50000) || 0;
      const rate = parseFloat(rateSlider ? rateSlider.value : 0.5) || 0;
      const tenure = parseInt(tenureSlider ? tenureSlider.value : 30, 10) || 0;

      if (amountInput) amountInput.value = principal;
      if (rateInput) rateInput.value = rate;
      if (tenureInput) tenureInput.value = tenure;

      const isDaily = currentProduct === 'short-term';
      const result = isDaily
        ? calculateDailyLoan(principal, rate, tenure)
        : calculateMonthlyEMI(principal, rate, tenure);

      if (emiDisplay) emiDisplay.textContent = formatINR(result.installment);
      if (principalDisplay) principalDisplay.textContent = formatINR(principal);
      if (interestDisplay) interestDisplay.textContent = formatINR(result.totalInterest);
      if (pfDisplay) pfDisplay.textContent = formatINR(result.processingFee);
      if (gstDisplay) gstDisplay.textContent = formatINR(result.gstProcessingFee);
      if (disbursedDisplay) disbursedDisplay.textContent = formatINR(result.disbursedAmount);
      if (totalDisplay) totalDisplay.textContent = formatINR(result.totalRepayment);

      if (repaySub) {
        if (isDaily) {
          repaySub.innerHTML = `per day for <strong>${tenure}</strong> days`;
        } else {
          repaySub.innerHTML = `per month for <strong>${tenure}</strong> months`;
        }
      }

      updateDonutChart(principal, result.totalInterest);

      if (amortizationWrap && !amortizationWrap.hasAttribute('hidden')) {
        updateScheduleTable(principal, rate, tenure, result.installment, isDaily);
      }

      if (window.ClickMyLoanAnalytics) {
        window.ClickMyLoanAnalytics.trackEvent('calculator_used', {
          product: currentProduct,
          amount_tier: principal > 200000 ? 'high' : 'standard',
          tenure: tenure
        });
      }
    }

    // Input listeners
    if (amountSlider) {
      amountSlider.addEventListener('input', () => {
        if (amountInput) amountInput.value = amountSlider.value;
        syncAndCalculate();
      });
    }
    if (amountInput) {
      amountInput.addEventListener('change', () => {
        if (amountSlider) amountSlider.value = amountInput.value;
        syncAndCalculate();
      });
    }

    if (rateSlider) {
      rateSlider.addEventListener('input', () => {
        if (rateInput) rateInput.value = rateSlider.value;
        syncAndCalculate();
      });
    }
    if (rateInput) {
      rateInput.addEventListener('change', () => {
        if (rateSlider) rateSlider.value = rateInput.value;
        syncAndCalculate();
      });
    }

    if (tenureSlider) {
      tenureSlider.addEventListener('input', () => {
        if (tenureInput) tenureInput.value = tenureSlider.value;
        syncAndCalculate();
      });
    }
    if (tenureInput) {
      tenureInput.addEventListener('change', () => {
        if (tenureSlider) tenureSlider.value = tenureInput.value;
        syncAndCalculate();
      });
    }

    // Product Tab Switching
    productTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        productTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const product = tab.getAttribute('data-product') || 'short-term';
        currentProduct = product;
        const config = PRODUCT_PRESETS[product] || PRODUCT_PRESETS['short-term'];

        // Update Slider Limits & Defaults
        if (amountSlider) {
          amountSlider.min = config.minAmount;
          amountSlider.max = config.maxAmount;
          amountSlider.step = config.stepAmount;
          amountSlider.value = config.amount;
        }
        if (amountInput) {
          amountInput.min = config.minAmount;
          amountInput.max = config.maxAmount;
          amountInput.step = config.stepAmount;
          amountInput.value = config.amount;
        }

        if (rateSlider) {
          rateSlider.min = config.minRate;
          rateSlider.max = config.maxRate;
          rateSlider.step = config.stepRate;
          rateSlider.value = config.rate;
        }
        if (rateInput) {
          rateInput.min = config.minRate;
          rateInput.max = config.maxRate;
          rateInput.step = config.stepRate;
          rateInput.value = config.rate;
        }

        if (tenureSlider) {
          tenureSlider.min = config.minTenure;
          tenureSlider.max = config.maxTenure;
          tenureSlider.step = config.stepTenure;
          tenureSlider.value = config.tenure;
        }
        if (tenureInput) {
          tenureInput.min = config.minTenure;
          tenureInput.max = config.maxTenure;
          tenureInput.step = config.stepTenure;
          tenureInput.value = config.tenure;
        }

        // Update UI Labels
        if (rateLabel) rateLabel.textContent = config.rateLabel;
        if (rateUnit) rateUnit.textContent = config.rateUnit;
        if (rateMinSpan) rateMinSpan.textContent = `${config.minRate}${config.rateUnit}`;
        if (rateMaxSpan) rateMaxSpan.textContent = `${config.maxRate}${config.rateUnit}`;

        if (tenureLabel) tenureLabel.textContent = config.tenureLabel;
        if (tenureUnit) tenureUnit.textContent = config.tenureUnit;
        if (tenureMinSpan) tenureMinSpan.textContent = `${config.minTenure} ${config.tenureUnit}`;
        if (tenureMaxSpan) tenureMaxSpan.textContent = `${config.maxTenure} ${config.tenureUnit}`;

        if (amountMinSpan) amountMinSpan.textContent = formatINR(config.minAmount);
        if (amountMaxSpan) amountMaxSpan.textContent = formatINR(config.maxAmount);

        if (badgeTitle) badgeTitle.textContent = config.badgeTitle;

        syncAndCalculate();
      });
    });

    // Schedule Toggle
    if (amortizationBtn && amortizationWrap) {
      amortizationBtn.addEventListener('click', () => {
        const isHidden = amortizationWrap.hasAttribute('hidden');
        if (isHidden) {
          amortizationWrap.removeAttribute('hidden');
          amortizationBtn.textContent = 'Hide Schedule Breakdown';
          const principal = parseFloat(amountSlider ? amountSlider.value : 50000) || 0;
          const rate = parseFloat(rateSlider ? rateSlider.value : 0.5) || 0;
          const tenure = parseInt(tenureSlider ? tenureSlider.value : 30, 10) || 0;
          const isDaily = currentProduct === 'short-term';
          const res = isDaily
            ? calculateDailyLoan(principal, rate, tenure)
            : calculateMonthlyEMI(principal, rate, tenure);
          updateScheduleTable(principal, rate, tenure, res.installment, isDaily);
        } else {
          amortizationWrap.setAttribute('hidden', '');
          amortizationBtn.textContent = 'View Schedule Breakdown';
        }
      });
    }

    // Run Initial Calculation
    syncAndCalculate();
  }

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCalculator);
  } else {
    initCalculator();
  }

  window.ClickMyLoanCalculator = {
    calculateDailyLoan,
    formatINR
  };
})();
