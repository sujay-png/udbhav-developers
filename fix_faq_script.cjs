const fs = require('fs');
const filePath = 'src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro';
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Remove the old FAQ section and stray body/footer that were pasted at the bottom
const badHtmlStart = content.lastIndexOf('<section class="faq">');
if (badHtmlStart !== -1) {
    const scriptStart = content.indexOf('<script is:inline>', badHtmlStart);
    if (scriptStart !== -1) {
        content = content.substring(0, badHtmlStart) + content.substring(scriptStart);
        console.log('Removed duplicate old FAQ section and stray tags');
    }
}

// 2. Add icons to the new FAQ accordion
const iconHtml = `
                  <div class="faq-icon w-8 h-8 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--ink)] group-hover:border-[var(--red)] group-hover:text-[var(--red)] transition-colors shrink-0 group-data-[state=open]:border-[var(--red)] group-data-[state=open]:text-[var(--red)]">
                    <svg class="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>`;

content = content.replace(/<\/h2>\s*<\/div>\s*<\/button>/g, '</h2>\n                  </div>' + iconHtml);

// 3. Add the Accordion JS logic to the <script is:inline> block
if (!content.includes('const faqRows = document.querySelectorAll(')) {
    const accordionJs = `
      // FAQ Accordion logic
      const faqRows = document.querySelectorAll('.faq-row');
      faqRows.forEach(row => {
        const trigger = row.querySelector('.faq-trigger');
        if(!trigger) return;
        trigger.addEventListener('click', () => {
          const isOpen = row.getAttribute('data-state') === 'open';
          
          // Close all other rows
          faqRows.forEach(r => {
            r.setAttribute('data-state', 'closed');
            r.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
            const answer = r.querySelector('.faq-answer-wrapper');
            if(answer) answer.style.gridTemplateRows = '0fr';
          });
          
          // Toggle current row
          if (!isOpen) {
            row.setAttribute('data-state', 'open');
            trigger.setAttribute('aria-expanded', 'true');
            const answer = row.querySelector('.faq-answer-wrapper');
            if(answer) answer.style.gridTemplateRows = '1fr';
          }
        });
      });
`;
    content = content.replace('<script is:inline>', '<script is:inline>\n' + accordionJs);
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed FAQ Accordion');
