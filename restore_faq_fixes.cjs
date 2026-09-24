const fs = require('fs');

const filePath = 'src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro';
let content = fs.readFileSync(filePath, 'utf-8');

// 3. FAQ SECTION CHANGES
content = content.replace(
  'Frequently Ask Questions About 3 BHK Flats In Kadri, Mangalore',
  'FAQ'
);

content = content.replace(
  /<span class="faq-q-text([^>]*)>/g,
  '<h2 class="faq-q-text m-0$1>'
).replace(
  /<\/span>\s*<\/div>\s*<div class="faq-icon-wrapper/g,
  '</h2>\n                </div>\n                <div class="faq-icon-wrapper'
);

content = content.replace(
  'zero shared common walls, ',
  ''
);

// 4. 3BHK FLOOR PLAN IMAGE PREVIEW (if not already replaced)
if (!content.includes('openLightbox(this.src)')) {
    content = content.replace(
      '<img src={plan.image} alt={plan.title} />',
      '<img src={plan.image} alt={plan.title} onclick="openLightbox(this.src)" class="cursor-pointer" />'
    );
}

// 5. Add Lightbox HTML before <Footer /> (if not already there)
if (!content.includes('id="plan-lightbox"')) {
    const lightboxHTML = `
  <!-- Lightbox -->
  <div id="plan-lightbox" class="fixed inset-0 z-[100] bg-black/80 hidden items-center justify-center p-4 md:p-10 backdrop-blur-sm opacity-0 transition-opacity duration-300">
    <button id="close-lightbox" class="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-[#c32828] transition-colors z-50 p-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
    <div class="relative w-full max-w-5xl max-h-full flex items-center justify-center overflow-hidden rounded-lg">
      <img id="lightbox-img" src="" alt="Floor Plan Preview" class="max-w-full max-h-[90vh] object-contain shadow-2xl scale-95 transition-transform duration-300" />
    </div>
  </div>
`;
    content = content.replace('<Footer />', lightboxHTML + '\n    <Footer />');
}

// Add Lightbox script (if not already there)
if (!content.includes('window.openLightbox')) {
    const lightboxScript = `
        // Lightbox logic
        const lightbox = document.getElementById('plan-lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const closeBtn = document.getElementById('close-lightbox');
        
        window.openLightbox = (imgSrc) => {
          if(!lightboxImg || !lightbox) return;
          lightboxImg.src = imgSrc;
          lightbox.classList.remove('hidden');
          lightbox.classList.add('flex');
          // small delay for transition
          setTimeout(() => {
            lightbox.classList.remove('opacity-0');
            lightboxImg.classList.remove('scale-95');
            lightboxImg.classList.add('scale-100');
          }, 10);
          document.body.style.overflow = 'hidden';
        };
        
        const closeLightboxFn = () => {
          if(!lightbox || !lightboxImg) return;
          lightbox.classList.add('opacity-0');
          lightboxImg.classList.remove('scale-100');
          lightboxImg.classList.add('scale-95');
          setTimeout(() => {
            lightbox.classList.remove('flex');
            lightbox.classList.add('hidden');
            document.body.style.overflow = '';
          }, 300);
        };
        
        if(closeBtn) closeBtn.addEventListener('click', closeLightboxFn);
        
        if(lightbox) {
          lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
              closeLightboxFn();
            }
          });
        }
        
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && lightbox && !lightbox.classList.contains('hidden')) {
            closeLightboxFn();
          }
        });
`;
    // Insert into the first `<script is:inline>` block
    // Wait, the user has a <script> block at the end of the file.
    content = content.replace('<script>', '<script>\n' + lightboxScript);
    content = content.replace('<script is:inline>', '<script is:inline>\n' + lightboxScript);
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Restored FAQ updates and Lightbox');
