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

    function updateThemeToggleState() {
      var isDark = html.classList.contains('dark');
      themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      themeToggle.setAttribute('aria-label', isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
    }

    function setTheme(theme) {
      if (theme === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
      try { localStorage.setItem('theme', theme); } catch (e) { /* noop */ }
      updateThemeToggleState();
    }

    updateThemeToggleState();

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
      var navbarTicking = false;
      window.addEventListener('scroll', function () {
        if (!navbarTicking) {
          requestAnimationFrame(function () {
            if (window.scrollY > 50) {
              navbar.classList.add('scrolled');
            } else {
              navbar.classList.remove('scrolled');
            }
            navbarTicking = false;
          });
          navbarTicking = true;
        }
      }, { passive: true });
    }

    function closeMenu() {
      if (mobileMenu) mobileMenu.classList.add('hidden');
      if (menuOpen) menuOpen.classList.remove('hidden');
      if (menuClose) menuClose.classList.add('hidden');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    }

    function openMenu() {
      if (mobileMenu) mobileMenu.classList.remove('hidden');
      if (menuOpen) menuOpen.classList.add('hidden');
      if (menuClose) menuClose.classList.remove('hidden');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
    }

    function isMenuOpen() {
      return mobileMenu && !mobileMenu.classList.contains('hidden');
    }

    if (menuToggle && mobileMenu && menuOpen && menuClose) {
      menuToggle.addEventListener('click', function () {
        if (isMenuOpen()) {
          closeMenu();
        } else {
          openMenu();
        }
      });
    }

    // Close menu with Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isMenuOpen()) {
        closeMenu();
        if (menuToggle) menuToggle.focus();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!isMenuOpen()) return;
      if (menuToggle && menuToggle.contains(e.target)) return;
      if (mobileMenu && mobileMenu.contains(e.target)) return;
      closeMenu();
    });

    var sectionLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link[href^="#"], .mobile-link[href^="#"]'));

    function setActiveLink(hash) {
      sectionLinks.forEach(function (link) {
        var isActive = link.getAttribute('href') === hash;
        link.classList.toggle('active', isActive);
        if (isActive) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }

    function updateActiveLink() {
      var activeHash = '';
      sectionLinks.forEach(function (link) {
        var target = document.querySelector(link.getAttribute('href'));
        if (target && target.getBoundingClientRect().top <= 120) {
          activeHash = link.getAttribute('href');
        }
      });
      setActiveLink(activeHash);
    }

    // Smooth scroll + close mobile menu
    sectionLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var href = link.getAttribute('href');
        var target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          setActiveLink(href);
        }
        closeMenu();
      });
    });

    if (sectionLinks.length) {
      updateActiveLink();
      var ticking = false;
      window.addEventListener('scroll', function () {
        if (!ticking) {
          requestAnimationFrame(function () {
            updateActiveLink();
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    }
  }

  // --- Contact form ---
  function initContactForm() {
    var contactForm = document.getElementById('contact-form');
    var formStatus = document.getElementById('form-status');
    var submitButton = document.getElementById('contact-submit');
    if (!contactForm || !formStatus) return;

    var isSubmitting = false;
    var defaultSubmitText = submitButton ? submitButton.textContent.trim() || 'Enviar' : 'Enviar';
    var whatsappFallbackUrl = 'https://wa.me/5493524401654?text=Hola%20Mart%C3%ADn%2C%20quise%20enviar%20el%20formulario%20pero%20tuve%20un%20problema.';

    function setStatus(type, message, isHtml) {
      if (isHtml) {
        formStatus.innerHTML = message;
      } else {
        formStatus.textContent = message;
      }
      formStatus.className = 'form-status text-sm text-center ' + type;
      formStatus.classList.remove('hidden');
    }

    function setSubmitting(submitting) {
      isSubmitting = submitting;
      if (!submitButton) return;
      submitButton.disabled = submitting;
      submitButton.setAttribute('aria-busy', submitting ? 'true' : 'false');
      submitButton.textContent = submitting ? 'Enviando...' : defaultSubmitText;
    }

    function setFieldsInvalid(isInvalid) {
      contactForm.querySelectorAll('input[required], select[required], textarea[required]').forEach(function (field) {
        field.setAttribute('aria-invalid', isInvalid ? 'true' : 'false');
      });
    }

    contactForm.querySelectorAll('input[required], select[required], textarea[required]').forEach(function (field) {
      field.setAttribute('aria-invalid', 'false');
      field.addEventListener('invalid', function () {
        field.setAttribute('aria-invalid', 'true');
      });
      field.addEventListener('input', function () {
        if (field.checkValidity()) field.setAttribute('aria-invalid', 'false');
      });
      field.addEventListener('change', function () {
        if (field.checkValidity()) field.setAttribute('aria-invalid', 'false');
      });
    });

    function fallbackMessage(prefix) {
      return prefix + ' <a href="' + whatsappFallbackUrl + '" target="_blank" rel="noopener noreferrer">Escribime por WhatsApp</a> y lo vemos por ahí.';
    }

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (isSubmitting) return;

      setFieldsInvalid(false);

      if (navigator && navigator.onLine === false) {
        setStatus('error', fallbackMessage('Parece que estás sin conexión.'), true);
        return;
      }

      setSubmitting(true);
      setStatus('pending', 'Enviando tu consulta...');

      var formData = new FormData(contactForm);
      var controller = window.AbortController ? new AbortController() : null;
      var timeoutId = controller ? window.setTimeout(function () { controller.abort(); }, 12000) : null;
      var fetchOptions = {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      };
      if (controller) fetchOptions.signal = controller.signal;

      fetch(contactForm.action, fetchOptions).then(function (response) {
        if (response.ok) {
          setStatus('success', 'Mensaje enviado con éxito. Te responderé pronto.');
          contactForm.reset();
          setFieldsInvalid(false);
        } else {
          var error = new Error('Error al enviar');
          error.status = response.status;
          throw error;
        }
      }).catch(function (error) {
        if (error && error.name === 'AbortError') {
          setStatus('error', fallbackMessage('La conexión tardó demasiado y frené el envío para evitar duplicados.'), true);
          return;
        }
        if (navigator && navigator.onLine === false) {
          setStatus('error', fallbackMessage('Se cortó la conexión mientras enviabas el formulario.'), true);
          return;
        }
        if (error && error.status === 429) {
          setStatus('error', fallbackMessage('Hubo demasiados intentos seguidos.'), true);
          return;
        }
        setStatus('error', fallbackMessage('No pude enviar el formulario.'), true);
      }).finally(function () {
        if (timeoutId) window.clearTimeout(timeoutId);
        setSubmitting(false);
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
