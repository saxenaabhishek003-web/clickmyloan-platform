/**
 * ClickMyLoan — Privacy-Safe Analytics & Event Tracking Engine
 * Strictly Non-PII: Zero transmission of PAN, Aadhaar, Bank Accounts, or OTPs.
 */

(function () {
  'use strict';

  // Sanitize any metadata to strictly strip sensitive PII
  const RESTRICTED_KEYS = ['pan', 'aadhaar', 'otp', 'account', 'bank', 'password', 'dob', 'income', 'name'];

  function sanitizeEventData(data) {
    if (!data || typeof data !== 'object') return {};
    const sanitized = {};
    for (const [key, value] of Object.entries(data)) {
      const lowerKey = key.toLowerCase();
      const isRestricted = RESTRICTED_KEYS.some(rk => lowerKey.includes(rk));
      if (!isRestricted) {
        sanitized[key] = value;
      }
    }
    return sanitized;
  }

  const ClickMyLoanAnalytics = {
    trackEvent: function (eventName, eventParams) {
      const cleanParams = sanitizeEventData(eventParams);
      cleanParams.timestamp = new Date().toISOString();
      cleanParams.page_path = window.location.pathname;

      // 1. Google Analytics 4 (gtag) integration if present
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, cleanParams);
      }

      // 2. Google Tag Manager (dataLayer) integration if present
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: eventName,
          ...cleanParams
        });
      }

      // 3. Meta Pixel (fbq) integration if present
      if (typeof window.fbq === 'function') {
        window.fbq('trackCustom', eventName, cleanParams);
      }

      // 4. Debug logger in non-production environments
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log(`[ANALYTICS EVENT]: ${eventName}`, cleanParams);
      }
    }
  };

  // Auto-bind click tracking to data-track attributes
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-track]').forEach(element => {
      element.addEventListener('click', function () {
        const eventName = element.getAttribute('data-track');
        const ctaLabel = element.getAttribute('data-track-label') || element.textContent.trim().slice(0, 30);
        ClickMyLoanAnalytics.trackEvent(eventName, { label: ctaLabel });
      });
    });

    // Track phone and WhatsApp clicks
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
      link.addEventListener('click', () => {
        ClickMyLoanAnalytics.trackEvent('phone_click', { channel: 'call' });
      });
    });

    document.querySelectorAll('a[href*="whatsapp"]').forEach(link => {
      link.addEventListener('click', () => {
        ClickMyLoanAnalytics.trackEvent('whatsapp_click', { channel: 'chat' });
      });
    });
  });

  window.ClickMyLoanAnalytics = ClickMyLoanAnalytics;
})();
