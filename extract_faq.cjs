const fs = require('fs');
const content = fs.readFileSync('temp_backup.astro', 'utf-8');
const lines = content.split('\n');
const faqIndex = lines.findIndex(l => l.includes('<section class="faq'));
console.log('FAQ is at line:', faqIndex);
// extract everything from faqIndex to the end of the file.
const extracted = lines.slice(faqIndex).join('\n');
fs.writeFileSync('faq_extracted.txt', extracted, 'utf-8');
console.log('Extracted FAQ to faq_extracted.txt');
