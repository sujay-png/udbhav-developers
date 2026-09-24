const fs = require('fs');
const filePath = 'src/components/layout/Header.astro';
let content = fs.readFileSync(filePath, 'utf-8');

// Change gap-7 to gap-9
content = content.replace('gap-7 lg:flex', 'gap-9 lg:flex');

// Add whitespace-nowrap to links
content = content.replace('tracking-[0.08em] transition-colors', 'tracking-[0.08em] whitespace-nowrap transition-colors');
content = content.replace('tracking-[0.08em] transition-colors', 'tracking-[0.08em] whitespace-nowrap transition-colors');

// Change logo height
content = content.replace('class="h-10 w-auto"', 'class="h-[35px] w-auto"');

// Increase py
content = content.replace('h-[4.5rem]', 'h-[5rem]');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Done header update 2');
