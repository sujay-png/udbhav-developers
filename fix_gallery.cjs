const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace CSS
const cssPattern = /\.gallery-scroll img \{([\s\S]*?)\}\s*@media \(min-width: 768px\) \{\s*\.gallery-scroll img \{([\s\S]*?)\}\s*\}/g;
content = content.replace(cssPattern, (match, g1, g2) => {
    return `.gallery-scroll .slider-card {${g1}}\n      @media (min-width: 768px) {\n        .gallery-scroll .slider-card {${g2}}\n      }`;
});

// Add py-3 to gallery-scroll
content = content.replace('<div class="gallery-scroll">', '<div class="gallery-scroll py-3">');

const startIdx = content.indexOf('<div class="gallery-scroll py-3">');
if (startIdx !== -1) {
    const endIdx = content.indexOf('</div>\r\n        <button class="gallery-arrow right-arrow"', startIdx);
    const endIdxAlt = content.indexOf('</div>\n        <button class="gallery-arrow right-arrow"', startIdx);
    
    let actualEndIdx = -1;
    if (endIdx !== -1) actualEndIdx = endIdx;
    else if (endIdxAlt !== -1) actualEndIdx = endIdxAlt;
    
    if (actualEndIdx !== -1) {
        let galleryBlock = content.substring(startIdx, actualEndIdx);
        
        const imgPattern = /<img[\s\S]*?\/>/g;
        galleryBlock = galleryBlock.replace(imgPattern, (match) => {
            // make sure we don't double wrap
            if (match.includes('slider-card')) return match;
            
            // extract attributes
            const srcMatch = match.match(/src="([^"]+)"/);
            const altMatch = match.match(/alt="([^"]+)"/);
            const loadingMatch = match.match(/loading="([^"]+)"/);
            const decodingMatch = match.match(/decoding="([^"]+)"/);
            
            const src = srcMatch ? srcMatch[1] : '';
            const alt = altMatch ? altMatch[1] : '';
            const loading = loadingMatch ? loadingMatch[1] : 'lazy';
            const decoding = decodingMatch ? decodingMatch[1] : 'async';
            
            return `<div class="slider-card group overflow-hidden rounded-[12px] transition-all duration-300 [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:shadow-xl motion-reduce:transition-none motion-reduce:transform-none">
            <img
              src="${src}"
              alt="${alt}"
              loading="${loading}"
              decoding="${decoding}"
              class="w-full h-full object-cover transition-transform duration-500 ease-out [@media(hover:hover)]:group-hover:scale-105 will-change-transform motion-reduce:transition-none motion-reduce:transform-none"
            />
          </div>`;
        });
        
        content = content.substring(0, startIdx) + galleryBlock + content.substring(actualEndIdx);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log("Success");
    } else {
        console.log("Failed to find end of gallery block. Looking for string near: " + content.substring(startIdx + 500, startIdx + 600));
    }
} else {
    console.log("Failed to find gallery-scroll py-3");
}
