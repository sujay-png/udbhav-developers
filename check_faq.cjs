const fs = require('fs');
const filePath = 'src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro';
const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');
const start = lines.findIndex(l => l.includes('<div class="faq-accordion mt-10">'));
console.log(lines.slice(start, start + 30).join('\n'));
