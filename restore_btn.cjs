const fs = require('fs');
const filePath = 'src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace the HTML
content = content.replace(
  '<a href="/contact/" class="nav-enquiry-link">Enquiry</a>',
  '<a href="/contact/" class="btn btn-primary" style="padding: 10px 22px;">Enquiry</a>'
);

// Remove the CSS block for .nav-enquiry-link
const cssRegex = /\.nav-enquiry-link \{[\s\S]*?\}\s*\.nav-enquiry-link:hover \{[\s\S]*?\}/;
content = content.replace(cssRegex, '');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Restored Enquiry Button');
