const fs = require('fs');
const filePath = 'src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro';
let content = fs.readFileSync(filePath, 'utf-8');

const regex = /<div class="faq-icon w-8 h-8 rounded-full border border-\[var\(--line\)\] flex items-center justify-center text-\[var\(--ink\)\] group-hover:border-\[var\(--red\)\] group-hover:text-\[var\(--red\)\] transition-colors shrink-0 group-data-\[state=open\]:border-\[var\(--red\)\] group-data-\[state=open\]:text-\[var\(--red\)\]">[\s\S]*?<\/div>/;

const newBlock = `<div class="faq-icon w-8 h-8 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--ink)] group-hover:border-[var(--red)] group-hover:text-[var(--red)] transition-colors shrink-0 group-data-[state=open]/row:border-[var(--red)] group-data-[state=open]/row:text-[var(--red)]">
                    <!-- Plus Icon that rotates 45deg when data-state is open -->
                    <svg class="w-4 h-4 transition-transform duration-300 group-data-[state=open]/row:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>`;

content = content.replace(regex, newBlock);
fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed icon rotation using group-data-[state=open]/row');
