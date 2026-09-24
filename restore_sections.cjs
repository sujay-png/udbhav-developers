const fs = require('fs');
const backup = fs.readFileSync('temp_backup.astro', 'utf16le');
let current = fs.readFileSync('src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro', 'utf-8');

// Helper to extract a block from backup
function getBlock(startMarker, endMarker) {
    const start = backup.indexOf(startMarker);
    const end = backup.indexOf(endMarker, start);
    if (start === -1 || end === -1) {
        console.error('Could not find', startMarker);
        return '';
    }
    return backup.substring(start, end);
}

// 1. Get location to split-text
const chunk1 = getBlock('<section class="location">', '<section class="testimonials">');
console.log('Chunk 1 length:', chunk1.length);

// 2. Get specs to updates
const chunk2 = getBlock('<section class="specs">', '<section class="faq">');
console.log('Chunk 2 length:', chunk2.length);

// Now we insert chunk 1 before testimonials in current
const testimonialsMarker = '<section class="testimonials"';
const testIndex = current.indexOf(testimonialsMarker);
if (testIndex !== -1) {
    current = current.substring(0, testIndex) + chunk1 + '\n' + current.substring(testIndex);
    console.log('Inserted chunk 1');
} else {
    console.log('Could not find testimonials');
}

// Now we insert chunk 2 before faq in current
const faqMarker = '<section class="faq';
const faqIndex = current.indexOf(faqMarker);
if (faqIndex !== -1) {
    current = current.substring(0, faqIndex) + chunk2 + '\n' + current.substring(faqIndex);
    console.log('Inserted chunk 2');
} else {
    console.log('Could not find faq');
}

fs.writeFileSync('src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro', current, 'utf-8');
console.log('Restored deleted sections!');
