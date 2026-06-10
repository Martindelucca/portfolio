# Portfolio Web - Design Spec

## Resumen

Portfolio personal single-page para mostrar trabajo como desarrollador Fullstack, captar clientes y servir de carta de presentación profesional.

## Tecnologías

- **HTML5** semántico
- **Tailwind CSS** via CDN (play CDN, sin build step)
- **JavaScript vanilla (ES6+)** para toda la interactividad
- **CSS custom** solo para overrides mínimos (archivo style.css)
- Hosting: GitHub Pages

## Secciones

### 1. Hero
- Nombre + título "Fullstack Developer" + frase de presentación corta
- Foto/avatar placeholder
- Dos CTAs: "Ver proyectos" (scroll a proyectos) y "Contactarme" (scroll a contacto)
- Fondo con gradiente sutil

### 2. Sobre Mí
- Bio breve (quién es, qué hace, qué le apasiona)
- Timeline visual con experiencia laboral y/o estudios
- Sin dependencias externas (CSS puro para la línea de timeline)

### 3. Skills / Tecnologías
- Grid de cards con iconos SVG o emoji
- Backend: Java, C#, SQL Server, MongoDB
- Frontend: HTML, CSS, JavaScript, Tailwind, Angular (etiquetado como "aprendiendo")
- Badges tipo tag con nombre de cada tecnología

### 4. Proyectos
- Grid responsive (1 col mobile, 2 en tablet, 3 en desktop)
- Cards con: imagen/screenshot placeholder, título, descripción corta, tags de tecnologías usadas, links a GitHub y/o demo
- Estado inicial: cards con datos de ejemplo/placeholder, se completan cuando haya proyectos reales

### 5. Contacto
- Formulario con Formspree (name, email, message)
- Botón flotante de WhatsApp con ícono (esquina inferior derecha, link a wa.me/número)
- Links a LinkedIn y GitHub

## Navegación

- Navbar sticky en el top, cambia de estilo al scrollear (fondo sólido)
- Links internos: Inicio · Sobre Mí · Skills · Proyectos · Contacto
- Menú hamburguesa en mobile (animación CSS + JS vanilla)
- Smooth scroll al hacer click en links

## Modo Oscuro / Claro

- Toggle en navbar: ícono sol/luna
- Clase `dark` en `<html>` activa el modo oscuro via Tailwind
- Preferencia guardada en `localStorage`
- Respeta `prefers-color-scheme` del sistema como default

## Animaciones

- Scroll reveal: fade-in + slide-up suave al entrar al viewport (Intersection Observer)
- Hover effects en cards y botones (transiciones CSS)
- Transición del menú mobile

## Footer

- Nombre + año actual dinámico (JS)
- Links a GitHub, LinkedIn

## Estructura de archivos

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── images/
```

- `index.html`: todo el contenido, Tailwind CDN en `<head>`, `<script>` al final
- `style.css`: overrides mínimos (timeline, animaciones, fuentes custom si las hay)
- `main.js`: navbar, dark mode toggle, scroll reveal, formulario, año dinámico, menú mobile, smooth scroll

## Dependencias externas

- Tailwind CSS (play CDN) — sin build step
- Formspree (endpoint de formulario por email)
- Ninguna librería JS

## Referencia de colores (modo claro/oscuro)

Usar la paleta de Tailwind. Colores base sugeridos:
- Fondo claro: `slate-50` / Oscuro: `slate-900`
- Cards claro: `white` / Oscuro: `slate-800`
- Acentos: `indigo-600` para CTAs y links
- Texto principal claro: `slate-900` / Oscuro: `slate-100`
