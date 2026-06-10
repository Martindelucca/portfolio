// --- Navbar ---
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuOpen.classList.toggle('hidden');
  menuClose.classList.toggle('hidden');
});

document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    mobileMenu.classList.add('hidden');
    menuOpen.classList.remove('hidden');
    menuClose.classList.add('hidden');
  });
});

// --- Contact form ---
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        formStatus.textContent = 'Mensaje enviado con exito! Te respondere pronto.';
        formStatus.className = 'text-sm text-center text-green-600 dark:text-green-400';
        contactForm.reset();
      } else {
        throw new Error('Error al enviar');
      }
    } catch (err) {
      formStatus.textContent = 'Hubo un error. Intenta de nuevo o escribime por WhatsApp.';
      formStatus.className = 'text-sm text-center text-red-600 dark:text-red-400';
    }
    formStatus.classList.remove('hidden');
  });
}
