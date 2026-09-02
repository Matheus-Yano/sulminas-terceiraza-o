document.addEventListener('DOMContentLoaded', function () {

  // ---------- Menu mobile ----------
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Accordion de serviços ----------
  // Diferente das abas do primeiro rascunho: aqui cada item abre/fecha
  // de forma independente, e mais de um pode ficar aberto ao mesmo tempo.
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(function (item) {
    const trigger = item.querySelector('.accordion-trigger');

    trigger.addEventListener('click', function () {
      item.classList.toggle('is-open');
    });
  });

});
