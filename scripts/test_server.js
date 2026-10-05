/**
 * ClickMyLoan — Server Route & API Verification Suite
 * Tests HTTP status codes, security headers, clean URLs, and mock APIs.
 */

import http from 'http';
import { spawn } from 'child_process';

const TEST_PORT = 3005;
process.env.PORT = String(TEST_PORT);

console.log(`Starting test server on port ${TEST_PORT}...\n`);

const serverProcess = spawn('node', ['server.js'], {
  env: { ...process.env, PORT: String(TEST_PORT) },
  stdio: 'inherit'
});

// Wait for server to start
await new Promise(r => setTimeout(r, 1200));

const routesToTest = [
  { path: '/', expectedStatus: 200, label: 'Homepage' },
  { path: '/personal-loan', expectedStatus: 200, label: 'Personal Loan Clean URL' },
  { path: '/business-loan', expectedStatus: 200, label: 'Business Loan Clean URL' },
  { path: '/travel-loan', expectedStatus: 200, label: 'Travel Loan Clean URL' },
  { path: '/calculator', expectedStatus: 200, label: 'EMI Calculator Clean URL' },
  { path: '/eligibility', expectedStatus: 200, label: 'Eligibility Clean URL' },
  { path: '/documents', expectedStatus: 200, label: 'Documents Clean URL' },
  { path: '/fees-and-charges', expectedStatus: 200, label: 'Fees & Charges Clean URL' },
  { path: '/how-it-works', expectedStatus: 200, label: 'How It Works Clean URL' },
  { path: '/faq', expectedStatus: 200, label: 'FAQs Clean URL' },
  { path: '/about-us', expectedStatus: 200, label: 'About Us Clean URL' },
  { path: '/contact-us', expectedStatus: 200, label: 'Contact Us Clean URL' },
  { path: '/security', expectedStatus: 200, label: 'Security Clean URL' },
  { path: '/grievance-redressal', expectedStatus: 200, label: 'Grievance Redressal Clean URL' },
  { path: '/blog', expectedStatus: 200, label: 'Blog Index Clean URL' },
  { path: '/blog/personal-loans', expectedStatus: 200, label: 'Blog Category Clean URL' },
  { path: '/blog/how-personal-loan-eligibility-is-calculated', expectedStatus: 200, label: 'Blog Post Clean URL' },
  { path: '/legal/privacy-policy', expectedStatus: 200, label: 'Privacy Policy Clean URL' },
  { path: '/legal/fair-practice-code', expectedStatus: 200, label: 'Fair Practice Code Clean URL' },
  { path: '/apply', expectedStatus: 200, label: 'Apply Portal Clean URL' },
  { path: '/robots.txt', expectedStatus: 200, label: 'Robots.txt' },
  { path: '/sitemap.xml', expectedStatus: 200, label: 'Sitemap.xml' },
  { path: '/non-existent-route-xyz', expectedStatus: 404, label: 'Custom 404 Handler' }
];

let failed = 0;

for (const route of routesToTest) {
  try {
    const res = await fetch(`http://localhost:${TEST_PORT}${route.path}`);
    if (res.status === route.expectedStatus) {
      console.log(`✓ [${route.label}] http://localhost:${TEST_PORT}${route.path} -> ${res.status}`);
      // Check security headers
      if (route.path === '/') {
        const csp = res.headers.get('content-security-policy');
        const xContentType = res.headers.get('x-content-type-options');
        if (csp && xContentType === 'nosniff') {
          console.log(`  ✓ Security headers verified (CSP & X-Content-Type-Options)`);
        } else {
          console.error(`  ❌ Missing security headers`);
          failed++;
        }
      }
    } else {
      console.error(`❌ [${route.label}] Expected ${route.expectedStatus}, got ${res.status}`);
      failed++;
    }
  } catch (err) {
    console.error(`❌ [${route.label}] Request failed: ${err.message}`);
    failed++;
  }
}

// Test API Endpoints
console.log('\nTesting API Endpoints...');

// 1. Contact API
try {
  const contactRes = await fetch(`http://localhost:${TEST_PORT}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Aditya Mehta',
      email: 'aditya@example.com',
      subject: 'General Inquiry',
      message: 'Testing ClickMyLoan contact API'
    })
  });
  const contactJson = await contactRes.json();
  if (contactRes.status === 200 && contactJson.success) {
    console.log('✓ POST /api/contact -> 200 OK');
  } else {
    console.error('❌ POST /api/contact failed');
    failed++;
  }
} catch (e) {
  console.error('❌ POST /api/contact error:', e.message);
  failed++;
}

// 2. Application Submission API
try {
  const applyRes = await fetch(`http://localhost:${TEST_PORT}/api/apply/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      referenceId: 'CML-2026-TEST12',
      loanAmount: 200000,
      tenure: 24,
      employmentType: 'salaried'
    })
  });
  const applyJson = await applyRes.json();
  if (applyRes.status === 200 && applyJson.success) {
    console.log('✓ POST /api/apply/submit -> 200 OK');
  } else {
    console.error('❌ POST /api/apply/submit failed');
    failed++;
  }
} catch (e) {
  console.error('❌ POST /api/apply/submit error:', e.message);
  failed++;
}

// 3. Grievance Submission API
try {
  const grvRes = await fetch(`http://localhost:${TEST_PORT}/api/grievance/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ticketId: 'GRV-2026-TEST99',
      name: 'Rahul Sharma',
      mobile: '9876543210',
      category: 'Application Processing Delay',
      details: 'Testing grievance API endpoint'
    })
  });
  const grvJson = await grvRes.json();
  if (grvRes.status === 200 && grvJson.success) {
    console.log('✓ POST /api/grievance/submit -> 200 OK');
  } else {
    console.error('❌ POST /api/grievance/submit failed');
    failed++;
  }
} catch (e) {
  console.error('❌ POST /api/grievance/submit error:', e.message);
  failed++;
}

// Kill test server
serverProcess.kill('SIGINT');

console.log('\n==================================================');
if (failed === 0) {
  console.log('🎉 ALL SERVER ROUTES & APIS PASSED VERIFICATION!');
  process.exit(0);
} else {
  console.error(`💥 ${failed} ROUTE/API CHECKS FAILED.`);
  process.exit(1);
}
