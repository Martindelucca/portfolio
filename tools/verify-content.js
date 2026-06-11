const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

const requiredSnippets = [
  'https://formspree.io/f/xzdqaevb',
  'Ayudo a negocios a ordenar ventas, stock y presencia online.',
  'id="servicios"',
  'Sistemas de gestion / POS',
  'Landing profesional',
  'Presencia online inicial',
  'Para el negocio',
  'Para quien quiera mirar lo tecnico',
  '<span>C#</span><span>.NET</span><span>Java</span><span>Spring Boot</span><span>SQL Server</span>',
  'Quiero una landing',
  'Necesito un sistema',
  'Quiero mejorar mi presencia online'
];

const forbiddenSnippets = [
  'https://formspree.io/f/TU_FORM_ID',
  'C#, Java, SQL Server, MongoDB',
  '<span>MongoDB</span>',
  'Software de gestion que trabaja como tu negocio.'
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
