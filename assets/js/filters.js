/**
 * LEXVANGUARD — Filters & Live Search
 * Instant client-side filtering for Services and Blog articles.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initCategoryFilters('.service-filter-btn', '.service-item', '#service-search', '#service-empty-msg');
    initCategoryFilters('.blog-filter-btn', '.blog-item', '#blog-search', '#blog-empty-msg');
  });

  function initCategoryFilters(btnSelector, itemSelector, searchSelector, emptyMsgSelector) {
    const filterButtons = document.querySelectorAll(btnSelector);
    const items = document.querySelectorAll(itemSelector);
    const searchInput = document.querySelector(searchSelector);
    const emptyMsg = document.querySelector(emptyMsgSelector);

    if (!items.length) return;

    let currentCategory = 'all';
    let currentSearchTerm = '';

    function filterItems() {
      let visibleCount = 0;

      items.forEach(item => {
        const itemCategory = item.getAttribute('data-category') || '';
        const itemText = item.textContent.toLowerCase();

        const matchesCategory = (currentCategory === 'all' || itemCategory === currentCategory);
        const matchesSearch = (!currentSearchTerm || itemText.includes(currentSearchTerm));

        if (matchesCategory && matchesSearch) {
          item.style.display = '';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });

      if (emptyMsg) {
        emptyMsg.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    }

    // Category button click
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-filter') || 'all';
        filterItems();
      });
    });

    // Search input typing
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.trim().toLowerCase();
        filterItems();
      });
    }
  }

})();
