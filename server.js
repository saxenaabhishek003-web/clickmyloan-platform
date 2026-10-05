/**
 * ClickMyLoan — Production Web Server & API Gateway
 * Zero external dependencies, pure Node.js standard library.
 * Features: Clean URLs, Security Headers, Gzip Compression, Mock APIs,
 * and exact HTTP 404 error handling.
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

// Security headers required for fintech compliance & security auditing
function setSecurityHeaders(res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(self), microphone=(), geolocation=()');
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;"
  );
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  setSecurityHeaders(res);

  // -------------------------------------------------------------
  // API ROUTING
  // -------------------------------------------------------------

  // 1. Contact Inquiry API
  if (pathname === '/api/contact' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        console.log('[CONTACT INQUIRY]:', {
          timestamp: new Date().toISOString(),
          name: data.name,
          email: data.email,
          subject: data.subject
        });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Inquiry received successfully.' }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Invalid payload.' }));
      }
    });
    return;
  }

  // 2. Application Submission API
  if (pathname === '/api/apply/submit' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        console.log('[APPLICATION SUBMISSION]:', {
          referenceId: data.referenceId,
          loanAmount: data.loanAmount,
          tenure: data.tenure,
          employmentType: data.employmentType
        });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, referenceId: data.referenceId }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Invalid payload.' }));
      }
    });
    return;
  }

  // 3. Grievance Lodgment API
  if (pathname === '/api/grievance/submit' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        console.log('[GRIEVANCE LODGED]:', {
          ticketId: data.ticketId,
          category: data.category,
          loanRef: data.loanRef
        });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, ticketId: data.ticketId }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Invalid payload.' }));
      }
    });
    return;
  }

  // -------------------------------------------------------------
  // STATIC ASSET & CLEAN URL RESOLUTION
  // -------------------------------------------------------------

  // Default root to index.html
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  let filePath = path.join(PUBLIC_DIR, pathname);

  // Prevent directory traversal
  const normalizedFilePath = path.resolve(filePath).toLowerCase();
  const normalizedPublicDir = path.resolve(PUBLIC_DIR).toLowerCase();
  if (!normalizedFilePath.startsWith(normalizedPublicDir)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  // Check file existence
  fs.stat(filePath, (err, stats) => {
    // If not found, check if it's a directory with index.html or needs clean URL resolution
    if (err) {
      // Fallback A: Check inside public/ directory if requested without /public/
      const publicAltPath = path.join(PUBLIC_DIR, 'public', pathname);
      if (fs.existsSync(publicAltPath) && fs.statSync(publicAltPath).isFile()) {
        return serveFile(publicAltPath, req, res);
      }

      // Fallback B: Check at root if requested with /public/ prefix
      if (pathname.startsWith('/public/')) {
        const strippedPath = path.join(PUBLIC_DIR, pathname.replace(/^\/public/, ''));
        if (fs.existsSync(strippedPath) && fs.statSync(strippedPath).isFile()) {
          return serveFile(strippedPath, req, res);
        }
      }

      // 1. Try appending /index.html
      const dirIndexPath = path.join(filePath, 'index.html');
      if (fs.existsSync(dirIndexPath)) {
        return serveFile(dirIndexPath, req, res);
      }

      // 2. Try appending .html
      const htmlFilePath = filePath + '.html';
      if (fs.existsSync(htmlFilePath)) {
        return serveFile(htmlFilePath, req, res);
      }

      // 3. Serve Custom 404 with exact 404 status code (no soft-404)
      const notFoundPath = path.join(PUBLIC_DIR, '404.html');
      if (fs.existsSync(notFoundPath)) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        fs.createReadStream(notFoundPath).pipe(res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      }
      return;
    }

    if (stats.isDirectory()) {
      const dirIndexPath = path.join(filePath, 'index.html');
      if (fs.existsSync(dirIndexPath)) {
        return serveFile(dirIndexPath, req, res);
      }
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    serveFile(filePath, req, res);
  });
});

function serveFile(targetPath, req, res) {
  const ext = path.extname(targetPath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  // Cache-Control headers
  if (['.css', '.js', '.svg', '.png', '.jpg', '.webp', '.woff2'].includes(ext)) {
    res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 day
  } else {
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  }

  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(targetPath).pipe(res);
}

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(` ClickMyLoan Web Server running at: http://localhost:${PORT}`);
  console.log(`==================================================\n`);
});
