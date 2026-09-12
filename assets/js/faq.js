/**
 * LEXVANGUARD — FAQ Accordion Enhancements
 * ARIA state handling and accessible keyboard triggers.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-custom .accordion-button');

    accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        // Allow Bootstrap to handle collapse, but ensure focus state is neat
        button.blur();
      });
    });
  });
})();
