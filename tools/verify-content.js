const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

const requiredSnippets = [
  'https://formspree.io/f/xzdqaevb',
  'Páginas web y sistemas simples para negocios que quieren vender mejor',
  'Consultar por mi negocio',
  'id="servicios"',
  'id="ejemplos"',
  'De solo Instagram a una web que convierte',
  'Presencia online',
  'Sistema para ventas, stock y caja',
  'assets/landing-sinbrujula.png',
  'assets/sistemadeventas.png',
  'https://sinbrujulaviajes.com.ar/',
  'Contame qué necesita tu negocio',
  'Quiero una landing',
  'Necesito un sistema de ventas / stock',
  'No estoy seguro, quiero orientación',
  'Stack: HTML, CSS, JavaScript, Tailwind, C#, .NET, Java, SQL Server',
  'id="diagnostico"',
  'id="como-trabajo"',
  'id="faq"',
  'id="sobre-mi"',
  'assets/og-image.png',
  'Presupuesto cerrado según alcance',
  'Revisión gratis',
  'Diagnóstico rápido',
  'Señales de que tu negocio necesita ordenar su presencia digital',
  'Tres formas concretas de ayudarte',
  'mantenimiento mensual que cubre soporte',
  'Soluciones digitales para negocios locales',
];

var whatsappOk =
  html.includes('id="whatsapp"') &&
  html.includes('name="whatsapp"') &&
  html.includes('required') &&
  html.includes('Tu número con código de área');

const forbiddenSnippets = [
  'https://formspree.io/f/TU_FORM_ID',
  'C#, Java, SQL Server, MongoDB',
  '<span>MongoDB</span>',
  'production-ready',
  'production-ready logic',
  'Stock critico',
  'Ventas del dia',
  'sistemas de gestion',
  'mas profesional',
  'una pagina',
  'logica de negocio',
  'separacion de responsabilidades',
  'Tambien',
  'Portfolio personal.',
  'Demo POS para comercio',
  'Demo funcional con lógica preparada',
  'Sistema simple para ventas, stock y caja',
  'Instagram + WhatsApp listo para vender',
  'No reemplaza un ERP complejo',
  'Consultar por WhatsApp'
];

var missing = requiredSnippets.filter(function (snippet) { return !html.includes(snippet); });
var forbidden = forbiddenSnippets.filter(function (snippet) { return html.includes(snippet); });

var errors = [];

// Social image must be the rendered card, not a blank fallback screenshot.
var ogImagePath = path.join(__dirname, '..', 'assets', 'og-image.png');
var ogImageSize = fs.existsSync(ogImagePath) ? fs.statSync(ogImagePath).size : 0;
if (ogImageSize < 10000) {
  errors.push('assets/og-image.png must exist and be larger than 10KB. Current size: ' + ogImageSize + ' bytes');
}

// Package.json validations
var pkgRaw = fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8');
var pkg = JSON.parse(pkgRaw);
var homepageMatches = pkgRaw.match(/"homepage"\s*:/g) || [];

if (homepageMatches.length !== 1) {
  errors.push('package.json must contain exactly one homepage field (found ' + homepageMatches.length + ')');
}
if (pkg.author !== 'Martín De Lucca') {
  errors.push('package.json author must be "Martín De Lucca"');
}
if (pkg.homepage !== 'https://martindelucca.github.io/portfolio/') {
  errors.push('package.json homepage must be "https://martindelucca.github.io/portfolio/"');
}
if (!Array.isArray(pkg.keywords) || pkg.keywords.length === 0) {
  errors.push('package.json keywords must be a non-empty array');
}

if (missing.length || forbidden.length || !whatsappOk || errors.length) {
  console.error('Content verification failed.');
  if (missing.length) {
    console.error('Missing snippets:');
    missing.forEach(function (snippet) { console.error('- ' + snippet); });
  }
  if (forbidden.length) {
    console.error('Forbidden snippets still present:');
    forbidden.forEach(function (snippet) { console.error('- ' + snippet); });
  }
  if (!whatsappOk) {
    console.error('WhatsApp field must be required with the correct placeholder.');
  }
  if (errors.length) {
    errors.forEach(function (e) { console.error(e); });
  }
  process.exit(1);
}

console.log('Content verification passed.');
