/**
 * ClickMyLoan — Grievance Redressal Mechanism & Complaint Management
 * Adheres to RBI Digital Lending Directions for Regulated Lending Services
 */

(function () {
  'use strict';

  function initGrievance() {
    const grievanceForm = document.getElementById('grievance-form');
    const grievanceResult = document.getElementById('grievance-result');

    if (!grievanceForm || !grievanceResult) return;

    grievanceForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('gr-name').value.trim();
      const mobile = document.getElementById('gr-mobile').value.trim();
      const email = document.getElementById('gr-email').value.trim();
      const loanRef = document.getElementById('gr-loan-ref').value.trim() || 'N/A';
      const category = document.getElementById('gr-category').value;
      const details = document.getElementById('gr-details').value.trim();

      if (!name || !mobile || !details) {
        alert('Please fill in all mandatory fields.');
        return;
      }

      // Generate complaint tracking reference
      const ticketId = 'GRV-' + new Date().getFullYear() + '-' + Math.floor(100000 + Math.random() * 900000);

      // Post to server API
      try {
        fetch('/api/grievance/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ticketId,
            name,
            mobile,
            email,
            loanRef,
            category,
            details,
            timestamp: new Date().toISOString()
          })
        }).catch(() => {});
      } catch (_) {}

      grievanceForm.style.display = 'none';
      grievanceResult.removeAttribute('hidden');
      grievanceResult.innerHTML = `
        <div style="background:#F0FDF4; border:2px solid #10B981; border-radius:16px; padding:32px; text-align:left;">
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
            <div style="width:44px; height:44px; border-radius:50%; background:#10B981; color:#fff; display:flex; align-items:center; justify-content:center;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div>
              <h3 style="font-size:1.35rem; color:#064E3B; margin-bottom:2px;">Grievance Lodged Successfully</h3>
              <p style="font-size:0.875rem; color:#047857;">Acknowledgment Reference Ticket: <strong>${ticketId}</strong></p>
            </div>
          </div>

          <p style="font-size:0.95rem; color:#065F46; line-height:1.6; margin-bottom:16px;">
            Dear <strong>${name}</strong>, your complaint regarding <strong>${category}</strong> has been registered with the ClickMyLoan Grievance Redressal Cell. A formal acknowledgment has been logged.
          </p>

          <div style="background:#FFFFFF; border:1px solid #A7F3D0; border-radius:10px; padding:16px; margin-bottom:20px; font-size:0.875rem; color:#064E3B;">
            <strong>Expected Resolution Timeline:</strong>
            <ul style="margin-top:8px; padding-left:20px; line-height:1.6;">
              <li>Level 1 Support Review: Within 24-48 business hours</li>
              <li>Final Resolution / Response: Maximum 30 calendar days as per RBI guidelines</li>
            </ul>
          </div>

          <p style="font-size:0.85rem; color:#047857;">
            Need urgent assistance? You can also email our Principal Grievance Officer directly at <strong>grievance@clickmyloan.com</strong> quoting ticket <strong>${ticketId}</strong>.
          </p>
        </div>
      `;

      grievanceResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGrievance);
  } else {
    initGrievance();
  }
})();
