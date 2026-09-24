const fs = require('fs');

const filePath = 'src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro';
let content = fs.readFileSync(filePath, 'utf-8');

// Chunk 2
const regex2 = /const row = trigger\.closest\('\.faq-row'\);[\s\S]*?const wrapper = document\.getElementById\(trigger\.getAttribute\('aria-controls'\)\);/;
const newChunk2 = `const row = trigger.closest('.faq-row');
            if (!row) return;

            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            const controlsId = trigger.getAttribute('aria-controls');
            const wrapper = controlsId ? document.getElementById(controlsId) : null;`;
content = content.replace(regex2, newChunk2);

// Chunk 3
const regex3 = /const panel = openRow\.querySelector\('\.faq-answer-wrapper'\);(\s*)if \(panel\) panel\.style\.gridTemplateRows = '0fr';/;
content = content.replace(regex3, "const panel = openRow.querySelector('.faq-answer-wrapper') as HTMLElement | null;$1if (panel) panel.style.gridTemplateRows = '0fr';");

fs.writeFileSync(filePath, content, 'utf-8');
console.log('done');
