const fs = require('fs');
const current = fs.readFileSync('src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro', 'utf-8');
const navStart = current.indexOf('<div class="nav-inner"');
console.log(current.substring(navStart, navStart + 1500));
