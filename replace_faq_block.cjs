const fs = require('fs');
const filePath = 'src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro';
let content = fs.readFileSync(filePath, 'utf-8');

const regex = /<div class="faq-accordion mt-10">[\s\S]*?{faqs\.map\(\(faq, index\) => \{[\s\S]*?}\)}[\s\S]*?<\/div>/;

const newBlock = `<div class="faq-accordion mt-10">
          {faqs.map((faq, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            const isOpen = index === 0;
            return (
              <div 
                class="group/row faq-row border-t border-[var(--line)] last:border-b border-l-[3px] border-l-transparent data-[state=open]:border-l-[var(--red)] transition-colors duration-300"
                data-state={isOpen ? "open" : "closed"}
              >
                <button 
                  class="faq-trigger w-full flex items-start sm:items-center justify-between py-5 sm:py-6 text-left group focus:outline-none min-h-[48px]"
                  aria-expanded={isOpen ? "true" : "false"}
                  aria-controls={\`faq-answer-\${index}\`}
                  id={\`faq-title-\${index}\`}
                >
                  <div class="flex items-start gap-4 sm:gap-6 pr-4">
                    <span class="faq-num font-display font-semibold text-[1.05rem] text-[var(--ink-soft)] group-hover:text-[var(--red)] transition-colors">
                      {num}
                    </span>
                    <h2 class="faq-q-text m-0 font-semibold text-[16px] sm:text-[17.5px] text-ink group-hover:text-[var(--red)] transition-colors">
                      {faq.q}
                    </h2>
                  </div>
                  <div class="faq-icon w-8 h-8 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--ink)] group-hover:border-[var(--red)] group-hover:text-[var(--red)] transition-colors shrink-0 group-data-[state=open]:border-[var(--red)] group-data-[state=open]:text-[var(--red)]">
                    <!-- Plus Icon (Visible when closed) -->
                    <svg class="w-4 h-4 transition-transform duration-300 group-data-[state=open]:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <!-- Minus Icon (Visible when open) -->
                    <svg class="w-4 h-4 transition-transform duration-300 hidden group-data-[state=open]:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
                    </svg>
                  </div>
                </button>
                <div 
                  class="faq-answer-wrapper grid transition-all duration-300 ease-in-out" 
                  style={isOpen ? "grid-template-rows: 1fr;" : "grid-template-rows: 0fr;"}
                  id={\`faq-answer-\${index}\`}
                >
                  <div class="overflow-hidden">
                    <div class="pl-10 sm:pl-14 pr-4 pb-6 pt-1">
                      <p class="text-[16px] leading-[1.7] text-[#5b5349] max-w-[65ch] m-0">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>`;

content = content.replace(regex, newBlock);
fs.writeFileSync(filePath, content, 'utf-8');
console.log('Replaced FAQ Accordion');
