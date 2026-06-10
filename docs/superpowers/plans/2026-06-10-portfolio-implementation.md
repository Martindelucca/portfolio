# Portfolio Web - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page portfolio website with HTML, Tailwind CDN, and vanilla JS.

**Architecture:** Single `index.html` with all content, Tailwind CSS via play CDN for styling, `main.js` for interactivity (dark mode, navbar, scroll reveal, menu), and `style.css` for minimal custom overrides (timeline, reveal animations).

**Tech Stack:** HTML5, Tailwind CSS (play CDN), vanilla JavaScript ES6+, Formspree (form endpoint)

---

## File Structure

```
C:\Users\Usuario\portfolio\
├── index.html          — all page content + Tailwind CDN config
├── css/
│   └── style.css       — custom overrides (timeline, reveal animations, hamburger)
├── js/
│   └── main.js         — dark mode, navbar, scroll reveal, menu, footer year
└── assets/
    └── images/         — foto de perfil y screenshots (placeholders)
```

---

### Task 1: Project Scaffold — HTML Shell + Tailwind CDN

**Files:**
- Create: `index.html`
- Create: `css/style.css`
- Create: `js/main.js`

- [ ] **Step 1: Write index.html shell with Tailwind CDN and dark mode config**

```html
<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Portfolio de [Tu Nombre] - Desarrollador Fullstack">
  <title>[Tu Nombre] | Fullstack Developer</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {}
      }
    }
  </script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body class="bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Write empty style.css**

```css
/* Custom styles — minimal overrides */
```

- [ ] **Step 3: Write empty main.js**

```js
// Portfolio interactivity
```

- [ ] **Step 4: Verify and commit**

Open `index.html` in browser — should show blank page with correct title, no console errors.

```bash
git -C "C:\Users\Usuario\portfolio" add index.html css/style.css js/main.js
git -C "C:\Users\Usuario\portfolio" commit -m "scaffold: HTML shell with Tailwind CDN"
```

---

### Task 2: Navbar — Sticky Header + Mobile Menu + Smooth Scroll

**Files:**
- Modify: `index.html` (add navbar HTML before `<script src="js/main.js">`)
- Modify: `css/style.css` (hamburger menu styles)
- Modify: `js/main.js` (navbar scroll effect, hamburger toggle, smooth scroll)

- [ ] **Step 1: Add navbar HTML to index.html**

Insert this right after `<body class="...">`:

```html
<header id="navbar" class="fixed top-0 w-full z-50 transition-all duration-300">
  <nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    <a href="#inicio" class="text-xl font-bold text-indigo-600 dark:text-indigo-400">[TuNombre]</a>

    <!-- Desktop links -->
    <div class="hidden md:flex gap-8 text-sm font-medium">
      <a href="#inicio" class="nav-link hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Inicio</a>
      <a href="#sobre-mi" class="nav-link hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Sobre Mí</a>
      <a href="#skills" class="nav-link hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a>
      <a href="#proyectos" class="nav-link hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Proyectos</a>
      <a href="#contacto" class="nav-link hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contacto</a>
    </div>

    <div class="flex items-center gap-4">
      <!-- Dark mode toggle -->
      <button id="theme-toggle" class="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" aria-label="Cambiar tema">
        <svg id="sun-icon" class="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
        <svg id="moon-icon" class="w-5 h-5 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
        </svg>
      </button>

      <!-- Hamburger (mobile) -->
      <button id="menu-toggle" class="md:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" aria-label="Menú">
        <svg id="menu-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg id="menu-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  </nav>

  <!-- Mobile menu -->
  <div id="mobile-menu" class="md:hidden hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-t border-slate-200 dark:border-slate-700">
    <div class="px-6 py-4 flex flex-col gap-3 text-sm font-medium">
      <a href="#inicio" class="mobile-link hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Inicio</a>
      <a href="#sobre-mi" class="mobile-link hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Sobre Mí</a>
      <a href="#skills" class="mobile-link hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a>
      <a href="#proyectos" class="mobile-link hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Proyectos</a>
      <a href="#contacto" class="mobile-link hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contacto</a>
    </div>
  </div>
</header>
```

- [ ] **Step 2: Add navbar CSS to style.css**

```css
/* --- Navbar --- */
#navbar.scrolled {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.dark #navbar.scrolled {
  background: rgba(15, 23, 42, 0.9);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

/* --- Hamburger transition --- */
#mobile-menu {
  transition: opacity 0.2s ease;
}

#mobile-menu:not(.hidden) {
  display: block;
}
```

- [ ] **Step 3: Add navbar JS to main.js**

```js
// --- Navbar ---
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');

// Scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuOpen.classList.toggle('hidden');
  menuClose.classList.toggle('hidden');
});

// Smooth scroll for all nav links
document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    mobileMenu.classList.add('hidden');
    menuOpen.classList.remove('hidden');
    menuClose.classList.add('hidden');
  });
});
```

- [ ] **Step 4: Verify and commit**

Open `index.html` in browser — navbar should appear at top, links should scroll smoothly, hamburger should toggle mobile menu, background should change on scroll past 50px.

```bash
git -C "C:\Users\Usuario\portfolio" add index.html css/style.css js/main.js
git -C "C:\Users\Usuario\portfolio" commit -m "feat: add navbar with sticky scroll, mobile menu, and smooth scroll"
```

---

### Task 3: Hero Section

**Files:**
- Modify: `index.html` (add hero after header)

- [ ] **Step 1: Add hero section HTML**

Insert after `</header>`:

```html
<section id="inicio" class="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-indigo-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950">
  <div class="max-w-3xl mx-auto text-center space-y-6">
    <div class="w-32 h-32 mx-auto rounded-full bg-indigo-200 dark:bg-indigo-800 flex items-center justify-center text-4xl overflow-hidden">
      <!-- Replace with <img> when you have a photo -->
      <span class="text-indigo-600 dark:text-indigo-300 font-bold text-5xl">TU</span>
    </div>
    <p class="text-indigo-600 dark:text-indigo-400 font-mono text-sm tracking-wider uppercase">Fullstack Developer</p>
    <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
      Hola, soy <span class="text-indigo-600 dark:text-indigo-400">[Tu Nombre]</span>
    </h1>
    <p class="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
      Construyo aplicaciones web completas, del backend al frontend. Me apasiona crear soluciones limpias, eficientes y escalables.
    </p>
    <div class="flex flex-wrap gap-4 justify-center pt-4">
      <a href="#proyectos" class="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/25">
        Ver proyectos
      </a>
      <a href="#contacto" class="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg font-medium hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-colors">
        Contactarme
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify and commit**

```bash
git -C "C:\Users\Usuario\portfolio" add index.html
git -C "C:\Users\Usuario\portfolio" commit -m "feat: add hero section with gradient background and CTAs"
```

---

### Task 4: Sobre Mí Section with Timeline

**Files:**
- Modify: `index.html` (add section after hero)
- Modify: `css/style.css` (timeline styles)

- [ ] **Step 1: Add sobre mí section HTML**

Insert after hero `</section>`:

```html
<section id="sobre-mi" class="py-24 px-4 reveal">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">Sobre Mí</h2>
    <div class="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-12 rounded-full"></div>

    <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-center mb-16 leading-relaxed">
      Soy un desarrollador fullstack con experiencia en Java, C#, SQL Server y MongoDB.
      Me encanta resolver problemas complejos y transformar ideas en productos funcionales.
      Actualmente estoy expandiendo mis habilidades hacia el frontend moderno.
    </p>

    <h3 class="text-2xl font-bold text-center mb-10">Experiencia & Formacion</h3>
    <div class="timeline space-y-8">
      <div class="timeline-item relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
        <div class="timeline-content md:text-right md:pr-8">
          <span class="text-sm text-indigo-600 dark:text-indigo-400 font-mono">2024 - Presente</span>
          <h4 class="font-bold text-lg">Backend Developer</h4>
          <p class="text-slate-600 dark:text-slate-400 text-sm">Descripcion breve de tu rol actual o mas reciente</p>
        </div>
        <div class="hidden md:block"></div>
      </div>
      <div class="timeline-item relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
        <div class="hidden md:block"></div>
        <div class="timeline-content md:pl-8">
          <span class="text-sm text-indigo-600 dark:text-indigo-400 font-mono">2022 - 2024</span>
          <h4 class="font-bold text-lg">Junior Developer</h4>
          <p class="text-slate-600 dark:text-slate-400 text-sm">Experiencia previa, practicas o primer trabajo</p>
        </div>
      </div>
      <div class="timeline-item relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
        <div class="timeline-content md:text-right md:pr-8">
          <span class="text-sm text-indigo-600 dark:text-indigo-400 font-mono">2020 - 2022</span>
          <h4 class="font-bold text-lg">Estudios</h4>
          <p class="text-slate-600 dark:text-slate-400 text-sm">Tu formacion academica o cursos relevantes</p>
        </div>
        <div class="hidden md:block"></div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add timeline CSS to style.css**

```css
/* --- Timeline --- */
.timeline {
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #6366f1;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -4px;
  top: 8px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #6366f1;
  border: 2px solid #f8fafc;
}

.dark .timeline-item::before {
  border-color: #0f172a;
}

@media (min-width: 768px) {
  .timeline::before {
    left: 50%;
    transform: translateX(-50%);
  }
  .timeline-item::before {
    left: 50%;
    transform: translateX(-50%);
  }
}
```

- [ ] **Step 3: Verify and commit**

```bash
git -C "C:\Users\Usuario\portfolio" add index.html css/style.css
git -C "C:\Users\Usuario\portfolio" commit -m "feat: add about section with responsive timeline"
```

---

### Task 5: Skills Section

**Files:**
- Modify: `index.html` (add skills section)

- [ ] **Step 1: Add skills section HTML**

Insert after sobre mí `</section>`:

```html
<section id="skills" class="py-24 px-4 bg-white dark:bg-slate-800 reveal">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">Skills</h2>
    <div class="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-12 rounded-full"></div>

    <div class="mb-12">
      <h3 class="text-xl font-semibold text-center mb-6 text-indigo-600 dark:text-indigo-400">Backend</h3>
      <div class="flex flex-wrap justify-center gap-3">
        <span class="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium">Java</span>
        <span class="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium">C#</span>
        <span class="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium">SQL Server</span>
        <span class="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium">MongoDB</span>
      </div>
    </div>

    <div>
      <h3 class="text-xl font-semibold text-center mb-6 text-indigo-600 dark:text-indigo-400">Frontend</h3>
      <div class="flex flex-wrap justify-center gap-3">
        <span class="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium">HTML5</span>
        <span class="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium">CSS3</span>
        <span class="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium">JavaScript</span>
        <span class="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">Tailwind CSS</span>
        <span class="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium relative">
          Angular
          <span class="absolute -top-2 -right-2 text-[10px] bg-amber-400 text-amber-900 px-1.5 py-0.5 rounded-full font-bold">aprendiendo</span>
        </span>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify and commit**

```bash
git -C "C:\Users\Usuario\portfolio" add index.html
git -C "C:\Users\Usuario\portfolio" commit -m "feat: add skills section with tech tags"
```

---

### Task 6: Proyectos Section with Placeholder Cards

**Files:**
- Modify: `index.html` (add projects section)

- [ ] **Step 1: Add proyectos section HTML**

Insert after skills `</section>`:

```html
<section id="proyectos" class="py-24 px-4 reveal">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">Proyectos</h2>
    <div class="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-12 rounded-full"></div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
        <div class="h-48 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800 flex items-center justify-center">
          <span class="text-indigo-400 dark:text-indigo-500 text-6xl">&lt;/&gt;</span>
        </div>
        <div class="p-6 space-y-3">
          <h3 class="font-bold text-lg">Proyecto de ejemplo</h3>
          <p class="text-sm text-slate-600 dark:text-slate-400">Breve descripcion del proyecto. Que problema resuelve, que tecnologias usaste.</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">Java</span>
            <span class="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">SQL Server</span>
          </div>
          <div class="flex gap-3 pt-2">
            <a href="#" class="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="#" class="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              Demo
            </a>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
        <div class="h-48 bg-gradient-to-br from-emerald-100 to-teal-200 dark:from-emerald-900 dark:to-teal-800 flex items-center justify-center">
          <span class="text-emerald-400 dark:text-emerald-500 text-6xl">{ }</span>
        </div>
        <div class="p-6 space-y-3">
          <h3 class="font-bold text-lg">API REST</h3>
          <p class="text-sm text-slate-600 dark:text-slate-400">API RESTful con autenticacion, CRUD completo y documentacion. Construida para escalar.</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">C#</span>
            <span class="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">MongoDB</span>
            <span class="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">.NET</span>
          </div>
          <div class="flex gap-3 pt-2">
            <a href="#" class="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
        <div class="h-48 bg-gradient-to-br from-purple-100 to-pink-200 dark:from-purple-900 dark:to-pink-800 flex items-center justify-center">
          <span class="text-purple-400 dark:text-purple-500 text-6xl">##</span>
        </div>
        <div class="p-6 space-y-3">
          <h3 class="font-bold text-lg">App de Gestion</h3>
          <p class="text-sm text-slate-600 dark:text-slate-400">Sistema de gestion empresarial con dashboard, reportes y control de usuarios.</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">Java</span>
            <span class="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">Spring Boot</span>
            <span class="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">SQL Server</span>
          </div>
          <div class="flex gap-3 pt-2">
            <a href="#" class="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify and commit**

```bash
git -C "C:\Users\Usuario\portfolio" add index.html
git -C "C:\Users\Usuario\portfolio" commit -m "feat: add projects section with placeholder cards"
```

---

### Task 7: Contacto Section — Form + WhatsApp Button + Social Links

**Files:**
- Modify: `index.html` (add contact section and WhatsApp button)
- Modify: `js/main.js` (form handling)

- [ ] **Step 1: Add contact section HTML**

Insert after proyectos `</section>`:

```html
<section id="contacto" class="py-24 px-4 bg-white dark:bg-slate-800 reveal">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">Contacto</h2>
    <div class="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-12 rounded-full"></div>

    <div class="grid md:grid-cols-2 gap-12">
      <div class="space-y-6">
        <h3 class="text-xl font-semibold">Hablemos</h3>
        <p class="text-slate-600 dark:text-slate-300">
          Si tenes un proyecto en mente, una consulta o simplemente queres conectar, no dudes en escribirme.
        </p>
        <div class="space-y-3">
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </div>

      <form id="contact-form" action="https://formspree.io/f/TU_FORM_ID" method="POST" class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium mb-1">Nombre</label>
          <input type="text" id="name" name="name" required class="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="Tu nombre">
        </div>
        <div>
          <label for="email" class="block text-sm font-medium mb-1">Email</label>
          <input type="email" id="email" name="email" required class="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="tu@email.com">
        </div>
        <div>
          <label for="message" class="block text-sm font-medium mb-1">Mensaje</label>
          <textarea id="message" name="message" rows="4" required class="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none" placeholder="Tu mensaje..."></textarea>
        </div>
        <button type="submit" class="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/25">
          Enviar mensaje
        </button>
        <p id="form-status" class="text-sm text-center hidden"></p>
      </form>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add WhatsApp floating button**

Insert before `<script src="js/main.js">`:

```html
<a href="https://wa.me/549TU_NUMERO" target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center transition-all hover:scale-110" aria-label="Contactar por WhatsApp">
  <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>
```

- [ ] **Step 3: Add form JS to main.js**

```js
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
```

- [ ] **Step 4: Verify and commit**

```bash
git -C "C:\Users\Usuario\portfolio" add index.html js/main.js
git -C "C:\Users\Usuario\portfolio" commit -m "feat: add contact section with form, WhatsApp button, and social links"
```

---

### Task 8: Footer with Dynamic Year

**Files:**
- Modify: `index.html` (add footer before WhatsApp button)
- Modify: `js/main.js` (dynamic year)

- [ ] **Step 1: Add footer HTML**

Insert before the WhatsApp floating button `<a href="https://wa.me/...">`:

```html
<footer class="py-8 px-4 bg-slate-900 dark:bg-slate-950 text-white">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    <p class="text-sm text-slate-400">&copy; <span id="current-year"></span> [Tu Nombre]. Todos los derechos reservados.</p>
    <div class="flex gap-4">
      <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </a>
      <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
    </div>
  </div>
</footer>
```

- [ ] **Step 2: Add dynamic year to main.js**

```js
// --- Footer year ---
document.getElementById('current-year').textContent = new Date().getFullYear();
```

- [ ] **Step 3: Verify and commit**

```bash
git -C "C:\Users\Usuario\portfolio" add index.html js/main.js
git -C "C:\Users\Usuario\portfolio" commit -m "feat: add footer with dynamic year and social links"
```

---

### Task 9: Dark Mode Toggle with localStorage

**Files:**
- Modify: `js/main.js` (dark mode logic)

- [ ] **Step 1: Add dark mode JS to main.js**

```js
// --- Dark mode ---
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function setTheme(theme) {
  if (theme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
}

// Check saved preference or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setTheme('dark');
}

themeToggle.addEventListener('click', () => {
  const isDark = html.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
});
```

- [ ] **Step 2: Verify and commit**

Test: toggle dark mode, reload page — preference should persist.

```bash
git -C "C:\Users\Usuario\portfolio" add js/main.js
git -C "C:\Users\Usuario\portfolio" commit -m "feat: add dark mode toggle with localStorage persistence"
```

---

### Task 10: Scroll Reveal Animations

**Files:**
- Modify: `css/style.css` (reveal animation styles)
- Modify: `js/main.js` (Intersection Observer)

- [ ] **Step 1: Add reveal CSS to style.css**

```css
/* --- Scroll reveal --- */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

- [ ] **Step 2: Add Intersection Observer JS to main.js**

```js
// --- Scroll reveal ---
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => observer.observe(el));
```

- [ ] **Step 3: Verify and commit**

Test: scroll down — sections should fade in. Add `reveal` class to any new section.

```bash
git -C "C:\Users\Usuario\portfolio" add css/style.css js/main.js
git -C "C:\Users\Usuario\portfolio" commit -m "feat: add scroll reveal animations with Intersection Observer"
```

---

### Task 11: Final Polish — Verify and Test

**Files:**
- (No new code, verification only)

- [ ] **Step 1: Open index.html in browser and verify**

Check each feature:
- Navbar sticky + scroll background change
- Mobile hamburger menu toggle
- Smooth scroll on nav links
- Dark mode toggle + persistence
- Scroll reveal on each section
- Form fields and submit (will fail until Formspree ID is set — expected)
- WhatsApp button opens wa.me link
- Footer shows current year
- Responsive layout at mobile, tablet, desktop breakpoints

- [ ] **Step 2: Fix any issues found**

- [ ] **Step 3: Commit**

```bash
git -C "C:\Users\Usuario\portfolio" add -A
git -C "C:\Users\Usuario\portfolio" commit -m "chore: final polish and verification"
```

---

## Post-Implementation: User Customization

After the site is built, update these values:

| Placeholder | Location | Value |
|---|---|---|
| `[Tu Nombre]` | index.html (title, hero, footer) | Tu nombre real |
| `[TuNombre]` | index.html (navbar logo) | Versión sin espacios |
| `TU_FORM_ID` | index.html (form action) | ID de tu formulario Formspree |
| `549TU_NUMERO` | index.html (WhatsApp link) | Tu número con código de país |
| `tuusuario` | index.html (LinkedIn/GitHub links) | Tus usernames reales |
| Timeline entries | index.html (sobre mí) | Tu experiencia real |
| Project cards | index.html (proyectos) | Tus proyectos reales |
