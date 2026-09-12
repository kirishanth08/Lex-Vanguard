/**
 * LEXVANGUARD — Theme Manager (Dark / Light Mode)
 * Vanilla JavaScript with localStorage persistence
 */
(function () {
  'use strict';

  const THEME_STORAGE_KEY = 'lexvanguard_theme';
  const htmlElement = document.documentElement;

  // Initialize theme before DOM renders fully to avoid flashing
  function getSavedTheme() {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved) return saved;
    // Check OS preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      htmlElement.setAttribute('data-theme', 'dark');
      htmlElement.setAttribute('data-bs-theme', 'dark');
    } else {
      htmlElement.removeAttribute('data-theme');
      htmlElement.setAttribute('data-bs-theme', 'light');
    }
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    updateToggleButtons(theme);
  }

  function updateToggleButtons(theme) {
    const toggles = document.querySelectorAll('.btn-theme-toggle');
    toggles.forEach(btn => {
      const icon = btn.querySelector('i');
      if (theme === 'dark') {
        if (icon) icon.className = 'bi bi-sun-fill';
        btn.setAttribute('aria-label', 'Switch to Light Mode');
        btn.setAttribute('title', 'Switch to Light Mode');
      } else {
        if (icon) icon.className = 'bi bi-moon-stars-fill';
        btn.setAttribute('aria-label', 'Switch to Dark Mode');
        btn.setAttribute('title', 'Switch to Dark Mode');
      }
    });
  }

  // Initial load
  const initialTheme = getSavedTheme();
  applyTheme(initialTheme);

  document.addEventListener('DOMContentLoaded', () => {
    updateToggleButtons(getSavedTheme());

    document.querySelectorAll('.btn-theme-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
      });
    });
  });
})();
