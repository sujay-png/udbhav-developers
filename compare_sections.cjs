const fs = require('fs');
const diff = fs.readFileSync('temp_backup.astro', 'utf16le');
const lines = diff.split('\n');
console.log('Total original lines:', lines.length);

const current = fs.readFileSync('src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro', 'utf-8');
const curLines = current.split('\n');
console.log('Total current lines:', curLines.length);

// Compare what's missing
const sections = ['<section class="hero', '<section class="facts', '<section class="floorplan', '<section class="amenities', '<section class="testimonials', '<section class="journey', '<section class="faq', '<section class="location', '<section class="advantages', '<section class="heritage', '<section class="exclusive', '<section class="split-text', '<section class="specs', '<section class="updates'];

console.log('Original sections:');
sections.forEach(s => {
    if (diff.includes(s)) console.log('  ', s);
});

console.log('Current sections:');
sections.forEach(s => {
    if (current.includes(s)) console.log('  ', s);
});
