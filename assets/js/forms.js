/**
 * LEXVANGUARD — Form Validation & Interactions
 * Vanilla JavaScript client-side validation, error states, and submission feedback.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initConsultationForms();
    initNewsletterForms();
    initEarlyAccessForm();
    initFeeEstimator();
  });

  /* --------------------------------------------------------------------------
     1. CONSULTATION BOOKING FORMS
     -------------------------------------------------------------------------- */
  function initConsultationForms() {
    const consultationForms = document.querySelectorAll('.js-consultation-form');

    consultationForms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();

        let isValid = true;
        const requiredInputs = form.querySelectorAll('[required]');

        requiredInputs.forEach(input => {
          if (!validateField(input)) {
            isValid = false;
          }
        });

        if (isValid) {
          const submitBtn = form.querySelector('button[type="submit"]');
          const originalText = submitBtn ? submitBtn.innerHTML : '';
          if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Submitting...';
          }

          setTimeout(() => {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalText;
            }
            form.reset();
            form.classList.remove('was-validated');
            // Remove any valid/invalid classes
            form.querySelectorAll('.is-invalid, .is-valid').forEach(el => {
              el.classList.remove('is-invalid', 'is-valid');
            });

            // Trigger global success toast
            if (window.showLexToast) {
              window.showLexToast(
                'Consultation Requested',
                'Your request has been securely logged. An IP attorney will contact you within 24 business hours.'
              );
            }

            // Close modal if form was inside one
            const modalEl = form.closest('.modal');
            if (modalEl && window.bootstrap) {
              const modal = bootstrap.Modal.getInstance(modalEl);
              if (modal) modal.hide();
            }
          }, 800);
        } else {
          form.classList.add('was-validated');
          const firstInvalid = form.querySelector('.is-invalid');
          if (firstInvalid) firstInvalid.focus();
        }
      });

      // Realtime validation on blur/input
      form.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
          if (input.classList.contains('is-invalid')) {
            validateField(input);
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
     2. FIELD VALIDATION HELPER
     -------------------------------------------------------------------------- */
  function validateField(input) {
    const val = input.value.trim();
    let valid = true;

    if (input.hasAttribute('required') && val === '') {
      valid = false;
    } else if (input.type === 'email' && val !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      valid = emailRegex.test(val);
    } else if (input.type === 'tel' && val !== '') {
      const phoneRegex = /^[\d\+\-\s\(\)]{7,20}$/;
      valid = phoneRegex.test(val);
    }

    if (!valid) {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
    } else {
      input.classList.remove('is-invalid');
      if (val !== '') {
        input.classList.add('is-valid');
      }
    }
    return valid;
  }

  /* --------------------------------------------------------------------------
     3. NEWSLETTER FORMS
     -------------------------------------------------------------------------- */
  function initNewsletterForms() {
    const newsForms = document.querySelectorAll('.js-newsletter-form');
    newsForms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        if (!emailInput) return;

        if (validateField(emailInput)) {
          form.reset();
          emailInput.classList.remove('is-valid');
          if (window.showLexToast) {
            window.showLexToast(
              'Subscription Confirmed',
              'You are now subscribed to LexVanguard IP Regulatory Updates.'
            );
          }
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     4. EARLY ACCESS FORM (Coming Soon Page)
     -------------------------------------------------------------------------- */
  function initEarlyAccessForm() {
    const earlyForm = document.querySelector('.js-early-access-form');
    if (!earlyForm) return;

    earlyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = earlyForm.querySelector('input[type="email"]');
      if (email && validateField(email)) {
        earlyForm.reset();
        email.classList.remove('is-valid');
        if (window.showLexToast) {
          window.showLexToast(
            'VIP Access Granted',
            'You are on the priority whitelist for our automated docketing portal.'
          );
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
     5. FEE ESTIMATOR WIDGET (Fees Page)
     -------------------------------------------------------------------------- */
  function initFeeEstimator() {
    const serviceSelect = document.getElementById('calc-service');
    const classesInput = document.getElementById('calc-classes');
    const jurisdictionSelect = document.getElementById('calc-jurisdiction');
    const priorityCheck = document.getElementById('calc-priority');

    const totalDisplay = document.getElementById('calc-total');
    const profFeeDisplay = document.getElementById('calc-prof-fee');
    const officialFeeDisplay = document.getElementById('calc-official-fee');

    if (!serviceSelect || !totalDisplay) return;

    function calculate() {
      const service = serviceSelect.value;
      const numClasses = parseInt(classesInput ? classesInput.value : 1, 10) || 1;
      const jurisdiction = jurisdictionSelect ? jurisdictionSelect.value : 'us';
      const isPriority = priorityCheck ? priorityCheck.checked : false;

      let baseProf = 450;
      let baseOfficial = 250;

      if (service === 'trademark') {
        baseProf = 450 + (numClasses - 1) * 200;
        baseOfficial = 250 * numClasses;
      } else if (service === 'patent-provisional') {
        baseProf = 1400;
        baseOfficial = 320;
      } else if (service === 'patent-nonprovisional') {
        baseProf = 3800;
        baseOfficial = 850;
      } else if (service === 'copyright') {
        baseProf = 350;
        baseOfficial = 65;
      } else if (service === 'design') {
        baseProf = 950;
        baseOfficial = 400;
      }

      // Jurisdiction multiplier
      if (jurisdiction === 'wipo') {
        baseOfficial = Math.round(baseOfficial * 1.8);
      } else if (jurisdiction === 'eu') {
        baseOfficial = Math.round(baseOfficial * 1.3);
      }

      if (isPriority) {
        baseProf += 300;
      }

      const total = baseProf + baseOfficial;

      if (profFeeDisplay) profFeeDisplay.textContent = `$${baseProf.toLocaleString()}`;
      if (officialFeeDisplay) officialFeeDisplay.textContent = `$${baseOfficial.toLocaleString()}*`;
      totalDisplay.textContent = `$${total.toLocaleString()}`;
    }

    [serviceSelect, classesInput, jurisdictionSelect, priorityCheck].forEach(el => {
      if (el) {
        el.addEventListener('change', calculate);
        el.addEventListener('input', calculate);
      }
    });

    calculate();
  }

})();
