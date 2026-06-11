const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

const requiredSnippets = [
  'https://formspree.io/f/xzdqaevb',
  'Landings y sistemas simples para negocios',
  'Consultar por WhatsApp',
  'id="servicios"',
  'id="ejemplos"',
  'Landing profesional para recibir consultas por WhatsApp',
  'Instagram + WhatsApp listo para vender',
  'Sistema simple para ventas, stock y caja',
  'Demo POS para comercio',
  'Demo funcional con lógica preparada',
  'Contame qué necesita tu negocio',
  'No reemplaza un ERP complejo',
  'Quiero una landing',
  'Necesito un sistema de ventas / stock',
  'No estoy seguro, quiero orientación',
  '<span>C#</span><span>.NET</span><span>Java</span><span>Spring Boot</span><span>SQL Server</span>',
  'id="como-trabajo"',
  'id="faq"',
  'id="sobre-mi"'
];

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
  'Tambien'
];

const missing = requiredSnippets.filter((snippet) => !html.includes(snippet));
const forbidden = forbiddenSnippets.filter((snippet) => html.includes(snippet));

if (missing.length || forbidden.length) {
  console.error('Content verification failed.');
  if (missing.length) {
    console.error('Missing snippets:');
    missing.forEach((snippet) => console.error(`- ${snippet}`));
  }
  if (forbidden.length) {
    console.error('Forbidden snippets still present:');
    forbidden.forEach((snippet) => console.error(`- ${snippet}`));
  }
  process.exit(1);
}

console.log('Content verification passed.');
