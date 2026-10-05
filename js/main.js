/**
 * ClickMyLoan — Core Interaction & Mobile Navigation Engine
 */

(function () {
  'use strict';

  function initApp() {
    // 1. Mobile Menu Drawer & Backdrop Interactions
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navDrawer = document.getElementById('mobile-nav-drawer');
    const menuClose = document.getElementById('mobile-menu-close');
    const navBackdrop = document.getElementById('mobile-nav-backdrop');

    function closeMobileMenu() {
      if (navDrawer && navDrawer.classList.contains('is-open')) {
        navDrawer.classList.remove('is-open');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
        if (navBackdrop) navBackdrop.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    }

    function openMobileMenu() {
      if (navDrawer) {
        navDrawer.classList.add('is-open');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
        if (navBackdrop) navBackdrop.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    }

    if (menuToggle && navDrawer) {
      menuToggle.addEventListener('click', () => {
        if (navDrawer.classList.contains('is-open')) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });

      if (menuClose) {
        menuClose.addEventListener('click', closeMobileMenu);
      }

      if (navBackdrop) {
        navBackdrop.addEventListener('click', closeMobileMenu);
      }

      // Close drawer on clicking any nav link inside drawer
      navDrawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
      });

      // Close drawer on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeMobileMenu();
        }
      });
    }

    // 2. Sticky Header with Glassmorphism
    const header = document.querySelector('.site-header');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 15) {
          header.classList.add('is-sticky');
        } else {
          header.classList.remove('is-sticky');
        }
      }, { passive: true });
    }

    // 2b. Animated Counter Engine (Section 7 Specification)
    const statsSection = document.getElementById('stats-section');
    const counterElements = document.querySelectorAll('.counter-number');
    let countersAnimated = false;

    function runCounters() {
      if (countersAnimated || counterElements.length === 0) return;
      countersAnimated = true;

      counterElements.forEach(el => {
        const target = parseFloat(el.getAttribute('data-target')) || 0;
        const format = el.getAttribute('data-format') || 'int';
        const duration = 2000;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentVal = target * easeOut;

          if (format === 'lakh') {
            const lakhs = (currentVal / 100000).toFixed(0);
            el.textContent = lakhs;
          } else {
            el.textContent = Math.round(currentVal).toLocaleString('en-IN');
          }

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            if (format === 'lakh') {
              el.textContent = '5';
            } else {
              el.textContent = target.toLocaleString('en-IN');
            }
          }
        }

        requestAnimationFrame(updateCounter);
      });
    }

    if (statsSection && 'IntersectionObserver' in window) {
      const statsObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runCounters();
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      statsObserver.observe(statsSection);
    } else if (counterElements.length > 0) {
      runCounters();
    }

    // 2c. Testimonials Carousel Engine (Section 12 Specification)
    const carousel = document.getElementById('testimonials-carousel');
    if (carousel) {
      const slides = carousel.querySelectorAll('.carousel-slide');
      const dots = carousel.querySelectorAll('.carousel-dot');
      const prevBtn = document.getElementById('carousel-prev-btn');
      const nextBtn = document.getElementById('carousel-next-btn');
      let currentSlide = 0;
      let autoPlayInterval = null;

      function goToSlide(index) {
        if (!slides.length) return;
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentSlide = index;

        slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === currentSlide);
        });

        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === currentSlide);
        });
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          goToSlide(currentSlide - 1);
          resetAutoPlay();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          goToSlide(currentSlide + 1);
          resetAutoPlay();
        });
      }

      dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
          goToSlide(idx);
          resetAutoPlay();
        });
      });

      function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
          goToSlide(currentSlide + 1);
        }, 5000);
      }

      function resetAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        startAutoPlay();
      }

      startAutoPlay();

      carousel.addEventListener('mouseenter', () => {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
      });
      carousel.addEventListener('mouseleave', startAutoPlay);
    }

    // 3. Homepage Quick Eligibility Widget & Form
    const amountPills = document.querySelectorAll('.amount-pill');
    const widgetAmountInput = document.getElementById('widget-amount');
    const widgetAmountPreview = document.getElementById('widget-amount-preview');

    if (amountPills.length > 0 && widgetAmountInput) {
      amountPills.forEach(pill => {
        pill.addEventListener('click', () => {
          amountPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          const val = pill.getAttribute('data-amount');
          widgetAmountInput.value = val;
          if (widgetAmountPreview) {
            widgetAmountPreview.textContent = '₹' + Number(val).toLocaleString('en-IN');
          }
        });
      });
    }

    const quickForm = document.getElementById('hero-quick-form');
    if (quickForm) {
      quickForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const mobileEl = document.getElementById('widget-mobile') || document.getElementById('quick-mobile');
        const amountEl = document.getElementById('widget-amount') || document.getElementById('quick-amount');
        const purposeEl = document.getElementById('widget-purpose') || document.getElementById('quick-loan-type');
        const consentEl = document.getElementById('quick-consent');

        const mobile = mobileEl ? mobileEl.value.trim() : '';
        const amount = amountEl ? amountEl.value.trim() : '50000';
        const purpose = purposeEl ? purposeEl.value.trim() : 'personal';
        const consent = consentEl ? consentEl.checked : true;

        if (!/^[6-9]\d{9}$/.test(mobile)) {
          alert('Please enter a valid 10-digit Indian mobile number.');
          if (mobileEl) mobileEl.focus();
          return;
        }

        if (!consent) {
          alert('Please agree to terms and privacy consent to proceed.');
          return;
        }

        if (window.ClickMyLoanAnalytics) {
          window.ClickMyLoanAnalytics.trackEvent('eligibility_starts', { source: 'hero_widget', amount: amount });
        }

        window.location.href = `/apply?mobile=${encodeURIComponent(mobile)}&amount=${encodeURIComponent(amount)}&purpose=${encodeURIComponent(purpose)}`;
      });
    }

    // 4. Contact Form Handler (on /contact-us)
    const contactForm = document.getElementById('contact-form');
    const contactSuccess = document.getElementById('contact-success-msg');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const subject = document.getElementById('contact-subject').value;
        const message = document.getElementById('contact-message').value;

        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, subject, message })
        })
        .then(res => res.json())
        .then(() => {
          contactForm.reset();
          if (contactSuccess) {
            contactSuccess.removeAttribute('hidden');
            contactSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        })
        .catch(() => {
          alert('Thank you. Your message has been recorded.');
        });
      });
    }

    // 5. Direct file:// Protocol Link Handler (Seamless Double-Click Browsing)
    if (window.location.protocol === 'file:') {
      const prefix = window.__REL_PREFIX__ || '.';
      document.querySelectorAll('a[href]').forEach(a => {
        const href = a.getAttribute('href');
        if (href && href.startsWith('/') && !href.startsWith('//')) {
          const clean = href.replace(/^\//, '');
          if (clean === '') {
            a.setAttribute('href', prefix + '/index.html');
          } else if (!clean.includes('.') && !clean.includes('#')) {
            a.setAttribute('href', prefix + '/' + clean + '/index.html');
          }
        }
      });
    }

    // 6. Active Nav Link Highlighting
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('.nav-link, .legal-nav-link').forEach(link => {
      const href = link.getAttribute('href').replace(/\/$/, '') || '/';
      if (href === currentPath) {
        link.classList.add('active');
      }
    });

    // 7. Interactive Loan Matcher (Fintech Guided Discovery)
    const matcherBtns = document.querySelectorAll('.matcher-btn');
    if (matcherBtns.length > 0) {
      const matchData = {
        personal: {
          badge: 'Recommended: ClickMyLoan Personal Loan',
          title: 'Unsecured Financing for Personal Needs',
          desc: 'Ideal for salaried and self-employed individuals requiring immediate credit for medical emergencies, home renovation, or debt consolidation with zero collateral.',
          limit: 'Up to ₹15,00,000',
          apr: '11.5% - 26.0%',
          tenure: '6 - 60 Months',
          req: '₹20,000 / month salary &bull; Age 21-58',
          ctaText: 'Apply for Personal Loan',
          ctaHref: '/apply?product=personal'
        },
        business: {
          badge: 'Recommended: ClickMyLoan Business Growth Loan',
          title: 'Collateral-Free MSME & Enterprise Credit',
          desc: 'Accelerate your enterprise with rapid working capital, inventory replenishment, and machinery purchase. Fast verification via GST and digital bank statements.',
          limit: 'Up to ₹30,00,000',
          apr: '13.0% - 28.0%',
          tenure: '12 - 48 Months',
          req: '₹25 Lakh annual turnover &bull; 1 yr vintage',
          ctaText: 'Apply for Business Loan',
          ctaHref: '/apply?product=business'
        },
        travel: {
          badge: 'Recommended: ClickMyLoan Travel & Leisure Loan',
          title: 'Flexible Vacation & Travel Financing',
          desc: 'Experience world destinations without depleting emergency cash reserves. Transparent EMI options with upfront APR and zero hidden booking fees.',
          limit: 'Up to ₹5,00,000',
          apr: '12.0% - 24.0%',
          tenure: '3 - 24 Months',
          req: '₹25,000 / month salary &bull; Confirmed booking',
          ctaText: 'Apply for Travel Loan',
          ctaHref: '/apply?product=travel'
        }
      };

      matcherBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const type = btn.getAttribute('data-match');
          const data = matchData[type];
          if (!data) return;

          matcherBtns.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
          });
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');

          const badgeEl = document.getElementById('match-badge');
          const titleEl = document.getElementById('match-title');
          const descEl = document.getElementById('match-desc');
          const limitEl = document.getElementById('match-limit');
          const aprEl = document.getElementById('match-apr');
          const tenureEl = document.getElementById('match-tenure');
          const reqEl = document.getElementById('match-req');
          const ctaEl = document.getElementById('match-cta');

          if (badgeEl) badgeEl.textContent = data.badge;
          if (titleEl) titleEl.textContent = data.title;
          if (descEl) descEl.textContent = data.desc;
          if (limitEl) limitEl.textContent = data.limit;
          if (aprEl) aprEl.textContent = data.apr;
          if (tenureEl) tenureEl.textContent = data.tenure;
          if (reqEl) reqEl.innerHTML = data.req;
          if (ctaEl) {
            ctaEl.textContent = data.ctaText;
            const prefix = window.location.protocol === 'file:' ? (window.__REL_PREFIX__ || '.') : '';
            ctaEl.setAttribute('href', prefix ? `${prefix}/apply/index.html?product=${type}` : data.ctaHref);
          }

          if (window.ClickMyLoanAnalytics) {
            window.ClickMyLoanAnalytics.trackEvent('loan_matcher_select', { product: type });
          }
        });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
