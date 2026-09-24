const fs = require('fs');
const current = fs.readFileSync('src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro', 'utf-8');
const navStart = current.indexOf('<header class="nav">');
const navEnd = current.indexOf('</header>', navStart);
console.log(current.substring(navStart, navEnd + 10));
