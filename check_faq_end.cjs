const fs = require('fs');
const current = fs.readFileSync('src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro', 'utf-8');
const faqEnd = current.indexOf('</section>', current.indexOf('<section class="faq">'));
console.log(current.substring(faqEnd, faqEnd + 200));
