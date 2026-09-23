document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  function closeMenu() {
    if (!menuToggle || !navLinks) return;
    navLinks.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('is-open');
      menuToggle.classList.toggle('is-open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMenu();
    });
  }

  document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const item = trigger.closest('.accordion-item');
      const panel = document.getElementById(trigger.getAttribute('aria-controls'));
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!isOpen));
      item.classList.toggle('is-open', !isOpen);
      panel.hidden = isOpen;
    });
  });

  const quoteForm = document.querySelector('.quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = quoteForm.elements.name.value.trim();
      const phone = quoteForm.elements.phone.value.trim();
      const service = quoteForm.elements.service.value;
      const message = quoteForm.elements.message.value.trim();
      const feedback = quoteForm.querySelector('.form-feedback');

      if (!name || !phone) {
        feedback.textContent = 'Informe seu nome e telefone para continuar.';
        (!name ? quoteForm.elements.name : quoteForm.elements.phone).focus();
        return;
      }

      if (phone.replace(/\D/g, '').length < 10) {
        feedback.textContent = 'Informe um telefone válido com DDD.';
        quoteForm.elements.phone.focus();
        return;
      }

      const text = [
        'Olá, Sul Minas! Gostaria de solicitar um orçamento.',
        `Nome: ${name}`,
        `Telefone: ${phone}`,
        service ? `Necessidade: ${service}` : '',
        message ? `Detalhes: ${message}` : ''
      ].filter(Boolean).join('\n');

      feedback.textContent = 'Abrindo o WhatsApp com as informações preenchidas.';
      window.open(`https://wa.me/5535997735025?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    });
  }
});