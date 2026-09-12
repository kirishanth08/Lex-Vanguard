/**
 * LEXVANGUARD — RTL (Right-to-Left) Manager
 * Handles direction switching between LTR and RTL with localStorage persistence.
 */
(function () {
  'use strict';

  const RTL_STORAGE_KEY = 'lexvanguard_dir';
  const htmlElement = document.documentElement;

  function getSavedDirection() {
    return localStorage.getItem(RTL_STORAGE_KEY) || 'ltr';
  }

  function applyDirection(dir) {
    if (dir === 'rtl') {
      htmlElement.setAttribute('dir', 'rtl');
    } else {
      htmlElement.removeAttribute('dir');
    }
    localStorage.setItem(RTL_STORAGE_KEY, dir);
    updateRTLButtons(dir);
  }

  function updateRTLButtons(dir) {
    const toggles = document.querySelectorAll('.btn-rtl-toggle');
    toggles.forEach(btn => {
      const textSpan = btn.querySelector('.rtl-text');
      if (dir === 'rtl') {
        if (textSpan) textSpan.textContent = 'LTR';
        btn.setAttribute('aria-label', 'Switch to Left-to-Right layout');
      } else {
        if (textSpan) textSpan.textContent = 'RTL';
        btn.setAttribute('aria-label', 'Switch to Right-to-Left layout');
      }
    });
  }

  // Initial load
  const initialDir = getSavedDirection();
  applyDirection(initialDir);

  document.addEventListener('DOMContentLoaded', () => {
    updateRTLButtons(getSavedDirection());

    document.querySelectorAll('.btn-rtl-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentDir = htmlElement.getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr';
        const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        applyDirection(newDir);
      });
    });
  });
})();
