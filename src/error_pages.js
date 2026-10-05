/**
 * ClickMyLoan — 404 Error Page Content Generator
 */

import { ICONS } from './templates.js';

export function get404Content() {
  return `
    <section class="section" style="padding:80px 0; text-align:center;">
      <div class="container" style="max-width:640px;">
        <span class="section-pill section-pill-emerald">Error 404</span>
        <h1 style="font-size:clamp(2.5rem, 5vw, 4rem); color:var(--c-primary); margin:12px 0;">Page Not Found</h1>
        <p style="color:var(--c-text-muted); font-size:1.15rem; line-height:1.6; margin-bottom:32px;">
          The financial service page or resource you are looking for may have been moved, renamed, or is temporarily unavailable.
        </p>

        <div style="background:#fff; border:1px solid var(--c-border); border-radius:16px; padding:28px; margin-bottom:32px; text-align:left;">
          <h4 style="font-size:1rem; margin-bottom:12px; color:var(--c-text-main);">Popular Destructive Destinations:</h4>
          <ul style="list-style:none; display:flex; flex-direction:column; gap:10px; font-size:0.95rem;">
            <li><a href="/" style="display:flex; align-items:center; gap:8px;">${ICONS.arrowRight} ClickMyLoan Homepage</a></li>
            <li><a href="/calculator" style="display:flex; align-items:center; gap:8px;">${ICONS.calculator} Smart EMI Calculator</a></li>
            <li><a href="/personal-loan" style="display:flex; align-items:center; gap:8px;">${ICONS.user} Instant Personal Loans</a></li>
            <li><a href="/business-loan" style="display:flex; align-items:center; gap:8px;">${ICONS.briefcase} Business Loans for MSMEs</a></li>
            <li><a href="/faq" style="display:flex; align-items:center; gap:8px;">${ICONS.info} Frequently Asked Questions</a></li>
          </ul>
        </div>

        <a href="/" class="btn btn-primary btn-lg">Return to Homepage</a>
      </div>
    </section>
  `;
}
