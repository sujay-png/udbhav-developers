const fs = require('fs');
const lines = fs.readFileSync('src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro', 'utf-8').split('\n');
for (let i = 0; i < lines.length; i++) {
   if (lines[i].includes('class="brand')) {
      console.log('Brand at:', i);
      console.log(lines.slice(i - 10, i + 25).join('\n'));
      break;
   }
}
