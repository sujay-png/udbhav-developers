const fs = require('fs');

const filePath = 'src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro';
let content = fs.readFileSync(filePath, 'utf-8');

const oldChunk1 = `              } else if (entry.target.dataset.animate === 'fade-in') {`;
const newChunk1 = `              } else if (entry.target instanceof HTMLElement && entry.target.dataset.animate === 'fade-in') {`;
content = content.replace(oldChunk1, newChunk1);

const oldChunk2 = `          trigger.addEventListener('click', () => {
            const row = trigger.closest('.faq-row');
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            const wrapper = document.getElementById(trigger.getAttribute('aria-controls'));`;
const newChunk2 = `          trigger.addEventListener('click', () => {
            const row = trigger.closest('.faq-row');
            if (!row) return;

            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            const controlsId = trigger.getAttribute('aria-controls');
            const wrapper = controlsId ? document.getElementById(controlsId) : null;`;
content = content.replace(oldChunk2, newChunk2);

const oldChunk3 = `                const panel = openRow.querySelector('.faq-answer-wrapper');
                if (panel) panel.style.gridTemplateRows = '0fr';`;
const newChunk3 = `                const panel = openRow.querySelector('.faq-answer-wrapper') as HTMLElement | null;
                if (panel) panel.style.gridTemplateRows = '0fr';`;
content = content.replace(oldChunk3, newChunk3);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('done');
