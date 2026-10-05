/**
 * ClickMyLoan — Accessible FAQ Accordion & Instant Search Engine
 */

(function () {
  'use strict';

  function initFAQ() {
    const searchInput = document.getElementById('faq-search-input');
    const categoryBtns = document.querySelectorAll('.faq-cat-btn');
    const faqItems = document.querySelectorAll('.faq-item');

    if (!faqItems.length) return;

    let activeCategory = 'all';

    // Accordion Toggle
    faqItems.forEach(item => {
      const button = item.querySelector('.faq-question');
      if (!button) return;

      button.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        
        // Close others in the same group if desired, or allow multiple
        item.classList.toggle('is-open');
        button.setAttribute('aria-expanded', !isOpen);
      });
    });

    // Category Filter
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-category') || 'all';
        filterFAQs();
      });
    });

    // Search Filter
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        filterFAQs();
      });
    }

    function filterFAQs() {
      const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

      faqItems.forEach(item => {
        const itemCat = item.getAttribute('data-category') || '';
        const questionText = (item.querySelector('.faq-question') ? item.querySelector('.faq-question').textContent : '').toLowerCase();
        const answerText = (item.querySelector('.faq-answer') ? item.querySelector('.faq-answer').textContent : '').toLowerCase();

        const matchesCat = activeCategory === 'all' || itemCat === activeCategory;
        const matchesQuery = !query || questionText.includes(query) || answerText.includes(query);

        if (matchesCat && matchesQuery) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFAQ);
  } else {
    initFAQ();
  }
})();
