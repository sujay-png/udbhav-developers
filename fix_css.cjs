const fs = require('fs');
let content = fs.readFileSync('src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro', 'utf-8');
content = content.replace(
  /\.gallery-scroll \.slider-card \{[\s\S]*?box-shadow:[^\}]+\}/,
  `.gallery-scroll .slider-card {
        flex: 0 0 85%;
        max-width: 400px;
        height: 250px;
        border-radius: 12px;
        scroll-snap-align: center;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }
      .gallery-scroll .slider-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }`
);
fs.writeFileSync('src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro', content);
console.log('done');
