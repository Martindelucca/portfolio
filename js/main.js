(function () {
  'use strict';

  function safe(fn) {
    try { fn(); } catch (e) { /* noop */ }
  }

  // --- Dark mode toggle ---
  function initTheme() {
    var themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    var html = document.documentElement;

    function setTheme(theme) {
      if (theme === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
      try { localStorage.setItem('theme', theme); } catch (e) { /* noop */ }
    }

    themeToggle.addEventListener('click', function () {
      setTheme(html.classList.contains('dark') ? 'light' : 'dark');
    });
  }

  // --- Navbar scroll + mobile menu ---
  function initNavbar() {
    var navbar = document.getElementById('navbar');
    var menuToggle = document.getElementById('menu-toggle');
    var mobileMenu = document.getElementById('mobile-menu');
    var menuOpen = document.getElementById('menu-open');
    var menuClose = document.getElementById('menu-close');

    if (navbar) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }

    if (menuToggle && mobileMenu && menuOpen && menuClose) {
      menuToggle.addEventListener('click', function () {
        var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !expanded);
        mobileMenu.classList.toggle('hidden');
        menuOpen.classList.toggle('hidden');
        menuClose.classList.toggle('hidden');
      });
    }

    // Smooth scroll + close mobile menu
    document.querySelectorAll('.nav-link, .mobile-link').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        if (mobileMenu) {
          mobileMenu.classList.add('hidden');
        }
        if (menuOpen) menuOpen.classList.remove('hidden');
        if (menuClose) menuClose.classList.add('hidden');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Contact form ---
  function initContactForm() {
    var contactForm = document.getElementById('contact-form');
    var formStatus = document.getElementById('form-status');
    if (!contactForm || !formStatus) return;

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var formData = new FormData(contactForm);
      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          formStatus.textContent = 'Mensaje enviado con éxito. Te responderé pronto.';
          formStatus.className = 'text-sm text-center text-green-600 dark:text-green-400';
          contactForm.reset();
        } else {
          throw new Error('Error al enviar');
        }
      }).catch(function () {
        formStatus.textContent = 'Hubo un error. Intentá de nuevo o escribime por WhatsApp.';
        formStatus.className = 'text-sm text-center text-red-600 dark:text-red-400';
      }).finally(function () {
        formStatus.classList.remove('hidden');
      });
    });
  }

  // --- Footer year ---
  function initCurrentYear() {
    var yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // --- Scroll reveal (progressive enhancement) ---
  function initScrollReveal() {
    var html = document.documentElement;
    html.classList.add('js-enabled');

    var revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      revealElements.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(function (el) { observer.observe(el); });
  }

  // --- Initialize all ---
  safe(initTheme);
  safe(initNavbar);
  safe(initContactForm);
  safe(initCurrentYear);
  safe(initScrollReveal);
})();
