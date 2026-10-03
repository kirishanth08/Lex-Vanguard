/**
 * LEXVANGUARD — Main JavaScript Architecture
 * Core interactions, sticky navbar, mobile drawer, counters, back-to-top, toast notifications.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initStickyHeader();
    initActiveNavLinks();
    initMobileNav();
    initBackToTop();
    initCounterAnimation();
    initCountdownTimer();
    initDropdownHover();
    initPricingTablePills();
  });

  /* --------------------------------------------------------------------------
     1. STICKY NAVBAR
     -------------------------------------------------------------------------- */
  function initStickyHeader() {
    const header = document.querySelector('.lv-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  /* --------------------------------------------------------------------------
     2. ACTIVE NAV LINKS DETECTION
     -------------------------------------------------------------------------- */
  function initActiveNavLinks() {
    let currentPath = window.location.pathname;
    if (currentPath.endsWith('/')) currentPath = currentPath.slice(0, -1);
    let pageSlug = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index';
    pageSlug = pageSlug.replace('.html', '').split('#')[0].split('?')[0].toLowerCase();
    if (!pageSlug || pageSlug === '') pageSlug = 'index';

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .dropdown-item');
    let matched = false;

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      
      let linkSlug = href.substring(href.lastIndexOf('/') + 1).replace('.html', '').split('#')[0].split('?')[0].toLowerCase();
      if (!linkSlug || linkSlug === '') linkSlug = 'index';

      const isMatch = (linkSlug === pageSlug) || 
                      (pageSlug === 'index' && (linkSlug === 'index' || linkSlug === 'home-1')) ||
                      (pageSlug.startsWith('service') && linkSlug === 'services') ||
                      (pageSlug.startsWith('blog') && linkSlug === 'blog') ||
                      (pageSlug === 'fees' && linkSlug === 'pricing');

      if (isMatch) {
        link.classList.add('active');
        matched = true;
        const parentDropdown = link.closest('.dropdown');
        if (parentDropdown) {
          const toggle = parentDropdown.querySelector('.dropdown-toggle');
          if (toggle) toggle.classList.add('active');
        }
      } else {
        link.classList.remove('active');
      }
    });

    // Fallback: If on root/index and no link matched, highlight Home dropdown toggle
    if (!matched && (pageSlug === 'index' || pageSlug === '')) {
      const homeToggle = document.querySelector('.navbar-nav .dropdown-toggle');
      if (homeToggle) homeToggle.classList.add('active');
    }
  }

  /* --------------------------------------------------------------------------
     3. MOBILE NAVBAR TOGGLING & ACCESSIBILITY
     -------------------------------------------------------------------------- */
  function initMobileNav() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (!navbarToggler || !navbarCollapse) return;

    // Prevent default jump on dummy # links in dropdown toggles
    document.querySelectorAll('.dropdown-toggle[href="#"]').forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      const isOpen = navbarCollapse.classList.contains('show');
      if (isOpen && !navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
        if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
          const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
        } else {
          navbarCollapse.classList.remove('show');
        }
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navbarCollapse.classList.contains('show')) {
        if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
          const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
            navbarToggler.focus();
          }
        } else {
          navbarCollapse.classList.remove('show');
          navbarToggler.focus();
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
     4. BACK TO TOP BUTTON
     -------------------------------------------------------------------------- */
  function initBackToTop() {
    let btn = document.querySelector('.back-to-top');
    if (!btn) {
      btn = document.createElement('button');
      btn.className = 'back-to-top';
      btn.setAttribute('aria-label', 'Back to top');
      btn.innerHTML = '<i class="bi bi-chevron-up"></i>';
      document.body.appendChild(btn);
    }

    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        btn.classList.add('is-visible');
      } else {
        btn.classList.remove('is-visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     5. STATS NUMBER COUNTER ANIMATION
     -------------------------------------------------------------------------- */
  function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;

    const observerOptions = {
      threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endVal = parseInt(target.getAttribute('data-count'), 10);
          const prefix = target.getAttribute('data-prefix') || '';
          const suffix = target.getAttribute('data-suffix') || '';
          const duration = 2000;
          const startTime = performance.now();

          if (!isNaN(endVal)) {
            const step = (now) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease out quad
              const easeOut = 1 - (1 - progress) * (1 - progress);
              const current = Math.floor(easeOut * endVal);
              target.textContent = `${prefix}${current.toLocaleString()}${suffix}`;

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                target.textContent = `${prefix}${endVal.toLocaleString()}${suffix}`;
              }
            };
            requestAnimationFrame(step);
          }
          observer.unobserve(target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => counterObserver.observe(counter));
  }

  /* --------------------------------------------------------------------------
     6. COUNTDOWN TIMER (Coming Soon Page)
     -------------------------------------------------------------------------- */
  function initCountdownTimer() {
    const daysEl = document.getElementById('count-days');
    const hoursEl = document.getElementById('count-hours');
    const minsEl = document.getElementById('count-mins');
    const secsEl = document.getElementById('count-secs');

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    // Set launch target to 45 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 45);

    function update() {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minsEl.textContent = '00';
        secsEl.textContent = '00';
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minsEl.textContent = String(minutes).padStart(2, '0');
      secsEl.textContent = String(seconds).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }

  /* --------------------------------------------------------------------------
     7. GLOBAL TOAST DISPATCHER
     -------------------------------------------------------------------------- */
  window.showLexToast = function (title, message, iconClass = 'bi-check-circle-fill') {
    let container = document.querySelector('.lv-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'lv-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'lv-toast';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');

    toast.innerHTML = `
      <i class="bi ${iconClass} lv-toast-icon"></i>
      <div class="lv-toast-body">
        <div class="lv-toast-title">${title}</div>
        <p class="lv-toast-message">${message}</p>
      </div>
      <button type="button" class="lv-toast-close" aria-label="Close">
        <i class="bi bi-x-lg"></i>
      </button>
    `;

    container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    const closeBtn = toast.querySelector('.lv-toast-close');
    const dismiss = () => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    };

    closeBtn.addEventListener('click', dismiss);
    setTimeout(dismiss, 5000);
  };

  /* --------------------------------------------------------------------------
     8. DESKTOP DROPDOWN HOVER & CLICK RELIABILITY
     -------------------------------------------------------------------------- */
  function initDropdownHover() {
    const dropdowns = document.querySelectorAll('.navbar-nav .nav-item.dropdown');
    if (!dropdowns.length) return;

    dropdowns.forEach(dropdown => {
      const toggle = dropdown.querySelector('.dropdown-toggle');
      const menu = dropdown.querySelector('.dropdown-menu');
      if (!toggle || !menu) return;

      let closeTimer = null;

      const openDropdown = () => {
        if (window.innerWidth < 1200) return;
        if (closeTimer) {
          clearTimeout(closeTimer);
          closeTimer = null;
        }
        dropdown.classList.add('show', 'is-hovered');
        menu.classList.add('show');
        toggle.setAttribute('aria-expanded', 'true');
      };

      const closeDropdown = () => {
        if (window.innerWidth < 1200) return;
        if (closeTimer) clearTimeout(closeTimer);
        closeTimer = setTimeout(() => {
          dropdown.classList.remove('show', 'is-hovered');
          menu.classList.remove('show');
          toggle.setAttribute('aria-expanded', 'false');
        }, 220); // 220ms grace buffer ensures seamless mouse transit
      };

      // Hover on dropdown container (nav-item)
      dropdown.addEventListener('mouseenter', openDropdown);
      dropdown.addEventListener('mouseleave', closeDropdown);

      // Explicit hover on menu itself to guarantee persistence
      menu.addEventListener('mouseenter', openDropdown);
      menu.addEventListener('mouseleave', closeDropdown);

      // Direct click handler on dropdown items to guarantee navigation
      menu.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
          const href = item.getAttribute('href');
          if (href && href !== '#' && !href.startsWith('javascript:')) {
            dropdown.classList.remove('show', 'is-hovered');
            menu.classList.remove('show');
            window.location.href = href;
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
     8. MOBILE PRICING TABLE TIER SELECTOR
     -------------------------------------------------------------------------- */
  function initPricingTablePills() {
    const pillButtons = document.querySelectorAll('[data-table-tier]');
    const tableWrapper = document.getElementById('comparisonTableWrapper');
    const table = document.getElementById('pricingComparisonTable');
    if (!pillButtons.length || !tableWrapper || !table) return;

    pillButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        pillButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const tier = btn.getAttribute('data-table-tier');
        const targetColHeader = table.querySelector(`th.col-${tier}`);

        if (tier === 'all' || !targetColHeader) {
          tableWrapper.scrollTo({ left: 0, behavior: 'smooth' });
          table.querySelectorAll('th, td').forEach(el => el.classList.remove('table-tier-highlight'));
        } else {
          const firstColWidth = table.querySelector('th:first-child')?.offsetWidth || 115;
          const targetLeft = targetColHeader.offsetLeft - firstColWidth;
          tableWrapper.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });

          table.querySelectorAll('th, td').forEach(el => el.classList.remove('table-tier-highlight'));
          table.querySelectorAll(`.col-${tier}`).forEach(el => el.classList.add('table-tier-highlight'));
        }
      });
    });
  }

})();
