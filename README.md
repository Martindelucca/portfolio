# Portfolio — Martín De Lucca

Sitio personal orientado a servicios digitales para negocios locales.

## Servicios

- Landings profesionales conectadas a WhatsApp
- Sistemas simples de ventas, stock y caja
- Presencia online inicial para comercios

## Stack

- HTML, CSS, JavaScript vanilla
- Tailwind CLI v4
- Formspree (formulario de contacto)

## Scripts

```bash
npm run build:css   # Compilar Tailwind a css/tailwind.css
npm run watch:css   # Modo desarrollo con recarga automática
npm test            # Verificar contenido mínimo del sitio
```

## Estructura

```
index.html           — Contenido principal
css/
  style.css          — Estilos personalizados
  tailwind.css       — CSS compilado por Tailwind CLI (commiteado)
src/
  input.css          — Entrada Tailwind con @theme y fuentes
js/
  main.js            — Interactividad (dark mode, menú, formulario, scroll reveal)
assets/
  og-image.svg       — Imagen para Open Graph / redes sociales
tools/
  verify-content.js  — Test de contenido mínimo
```

## Deploy

GitHub Pages: https://martindelucca.github.io/portfolio/

También funciona en cualquier hosting estático (Vercel, Netlify, etc.).

## Estado

Portfolio en evolución. Las demos mostradas son ejemplos propios o conceptuales, no casos de clientes reales salvo que se indique explícitamente.
