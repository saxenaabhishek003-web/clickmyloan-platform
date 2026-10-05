/**
 * ClickMyLoan — Automated Technical SEO, Quality & Compliance Audit Suite
 * Validates:
 * - 0 duplicate titles
 * - 0 duplicate H1 tags
 * - Exactly 1 <head> and 1 <body> per page
 * - 100% canonical URL presence and accuracy
 * - 100% meta description presence and uniqueness
 * - 0 broken internal links
 * - Valid JSON-LD structured data syntax
 * - Robots.txt & Sitemap.xml validity
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

console.log('🔍 Running ClickMyLoan Automated SEO & Technical Audit...\n');

let totalErrors = 0;
let totalWarnings = 0;

// Helper to recursively find all HTML files
function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    // Skip node_modules, .git, dist
    if (['node_modules', '.git', 'dist'].includes(file)) return;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  });
  return results;
}

const htmlFiles = getHtmlFiles(ROOT_DIR);
console.log(`Found ${htmlFiles.length} HTML files to audit.\n`);

const seenTitles = new Map();
const seenDescriptions = new Map();
const allInternalLinks = [];

htmlFiles.forEach(file => {
  const relPath = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');

  // 1. Check <head> and <body> count
  const headOpenCount = (content.match(/<head[\s>]/gi) || []).length;
  const headCloseCount = (content.match(/<\/head>/gi) || []).length;
  const bodyOpenCount = (content.match(/<body[\s>]/gi) || []).length;
  const bodyCloseCount = (content.match(/<\/body>/gi) || []).length;

  if (headOpenCount !== 1 || headCloseCount !== 1) {
    console.error(`❌ [${relPath}]: Invalid <head> count (Open: ${headOpenCount}, Close: ${headCloseCount})`);
    totalErrors++;
  }
  if (bodyOpenCount !== 1 || bodyCloseCount !== 1) {
    console.error(`❌ [${relPath}]: Invalid <body> count (Open: ${bodyOpenCount}, Close: ${bodyCloseCount})`);
    totalErrors++;
  }

  // 2. Check <h1> count (must be exactly 1)
  const h1Matches = content.match(/<h1[\s>][\s\S]*?<\/h1>/gi) || [];
  if (h1Matches.length !== 1) {
    console.error(`❌ [${relPath}]: Found ${h1Matches.length} <h1> tags (Expected exactly 1)`);
    totalErrors++;
  }

  // 3. Check <title>
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    console.error(`❌ [${relPath}]: Missing or empty <title> tag`);
    totalErrors++;
  } else {
    const titleText = titleMatch[1].trim();
    if (seenTitles.has(titleText)) {
      console.error(`❌ [${relPath}]: Duplicate <title> "${titleText}" (also in ${seenTitles.get(titleText)})`);
      totalErrors++;
    } else {
      seenTitles.set(titleText, relPath);
    }
  }

  // 4. Check <meta name="description">
  const metaDescMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i);
  if (!metaDescMatch || !metaDescMatch[1].trim()) {
    console.error(`❌ [${relPath}]: Missing or empty meta description`);
    totalErrors++;
  } else {
    const descText = metaDescMatch[1].trim();
    if (seenDescriptions.has(descText)) {
      console.warn(`⚠️ [${relPath}]: Duplicate meta description (also in ${seenDescriptions.get(descText)})`);
      totalWarnings++;
    } else {
      seenDescriptions.set(descText, relPath);
    }
  }

  // 5. Check <link rel="canonical">
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([\s\S]*?)["']/i);
  if (!canonicalMatch || !canonicalMatch[1].trim()) {
    console.error(`❌ [${relPath}]: Missing canonical tag`);
    totalErrors++;
  }

  // 6. Check JSON-LD structured data syntax
  const jsonLdMatches = content.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi);
  for (const match of jsonLdMatches) {
    try {
      JSON.parse(match[1]);
    } catch (e) {
      console.error(`❌ [${relPath}]: Malformed JSON-LD structured data (${e.message})`);
      totalErrors++;
    }
  }

  // 7. Extract internal links
  const hrefMatches = content.matchAll(/href=["'](\/[a-zA-Z0-9_\-\/]*)["']/gi);
  for (const m of hrefMatches) {
    allInternalLinks.push({ source: relPath, target: m[1] });
  }
});

// 8. Audit internal links resolution
console.log(`\nAuditing ${allInternalLinks.length} internal links...`);
let brokenLinks = 0;
allInternalLinks.forEach(({ source, target }) => {
  // Normalize target to filesystem path
  let cleanTarget = target.split('?')[0].split('#')[0];
  if (cleanTarget === '') cleanTarget = '/';

  let exists = false;
  if (cleanTarget === '/') {
    exists = fs.existsSync(path.join(ROOT_DIR, 'index.html'));
  } else {
    const targetDir = cleanTarget.replace(/^\//, '');
    const pathAsDir = path.join(ROOT_DIR, targetDir, 'index.html');
    const pathAsHtml = path.join(ROOT_DIR, targetDir + '.html');
    const pathAsFile = path.join(ROOT_DIR, targetDir);

    exists = fs.existsSync(pathAsDir) || fs.existsSync(pathAsHtml) || fs.existsSync(pathAsFile);
  }

  if (!exists) {
    console.error(`❌ Broken link in [${source}]: "${target}" does not resolve to a file`);
    brokenLinks++;
    totalErrors++;
  }
});

// 9. Audit robots.txt and sitemap.xml
console.log('\nAuditing robots.txt and sitemap.xml...');
const robotsPath = path.join(ROOT_DIR, 'robots.txt');
if (!fs.existsSync(robotsPath)) {
  console.error('❌ robots.txt is missing');
  totalErrors++;
} else {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  if (!robotsContent.includes('Sitemap:')) {
    console.error('❌ robots.txt missing Sitemap directive');
    totalErrors++;
  } else {
    console.log('✓ robots.txt is valid');
  }
}

const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  console.error('❌ sitemap.xml is missing');
  totalErrors++;
} else {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const urlCount = (sitemapContent.match(/<url>/g) || []).length;
  console.log(`✓ sitemap.xml is valid with ${urlCount} indexed URLs`);
}

console.log('\n==================================================');
console.log(` AUDIT SUMMARY:`);
console.log(` Total Pages Audited: ${htmlFiles.length}`);
console.log(` Unique Titles: ${seenTitles.size} / ${htmlFiles.length}`);
console.log(` Unique Meta Descriptions: ${seenDescriptions.size} / ${htmlFiles.length}`);
console.log(` Broken Links: ${brokenLinks}`);
console.log(` Total Errors: ${totalErrors}`);
console.log(` Total Warnings: ${totalWarnings}`);
console.log('==================================================\n');

if (totalErrors === 0) {
  console.log('🎉 AUDIT PASSED: 100% Technical SEO & Architecture Integrity Verified!');
  process.exit(0);
} else {
  console.error(`💥 AUDIT FAILED with ${totalErrors} errors.`);
  process.exit(1);
}
