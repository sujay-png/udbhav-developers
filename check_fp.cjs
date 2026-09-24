const fs = require('fs');
const current = fs.readFileSync('src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro', 'utf-8');

const fpStart = current.indexOf('<section class="floorplan"');
const fpEnd = current.indexOf('</section>', fpStart);
console.log(current.substring(fpStart, fpEnd + 10));

const scriptStart = current.lastIndexOf('<script is:inline>');
console.log('\n--- Script ---');
console.log(current.substring(scriptStart, scriptStart + 2000));
