const fs = require('fs');
const filePath = 'src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro';
let content = fs.readFileSync(filePath, 'utf-8');

// The nav-links UL is likely matching something else or there are no newlines correctly formatted.
const startIndex = content.indexOf('<ul class="nav-links">');
const endIndex = content.indexOf('</ul>', startIndex) + 5;
if (startIndex !== -1) {
  const newNavLinks = `<ul class="nav-links flex items-center gap-9 m-0 p-0 list-none">
          <li><a href="#floor-plan" class="text-[13px] font-medium uppercase tracking-[0.08em] whitespace-nowrap transition-colors text-ink/75 hover:text-clay" style="text-decoration:none;">3BHK Floor Plan</a></li>
          <li><a href="#testimonials" class="text-[13px] font-medium uppercase tracking-[0.08em] whitespace-nowrap transition-colors text-ink/75 hover:text-clay" style="text-decoration:none;">Testimonials</a></li>
          <li><a href="#our-process" class="text-[13px] font-medium uppercase tracking-[0.08em] whitespace-nowrap transition-colors text-ink/75 hover:text-clay" style="text-decoration:none;">Our Process</a></li>
          <li><a href="#virtual-360" class="text-[13px] font-medium uppercase tracking-[0.08em] whitespace-nowrap transition-colors text-ink/75 hover:text-clay" style="text-decoration:none;">Virtual 360°</a></li>
          <li><a href="#faq" class="text-[13px] font-medium uppercase tracking-[0.08em] whitespace-nowrap transition-colors text-ink/75 hover:text-clay" style="text-decoration:none;">FAQ</a></li>
        </ul>`;
  content = content.substring(0, startIndex) + newNavLinks + content.substring(endIndex);
}

const rightDivStart = content.indexOf('<div style="display: flex; align-items: center; gap: 32px; margin-left: auto;">');
if (rightDivStart !== -1) {
    const rightDivEnd = content.indexOf('</div>', rightDivStart) + 6;
    const newRightDiv = `<div class="flex items-center ml-auto gap-6 shrink-0">
          <a href="/contact/" class="btn btn-primary whitespace-nowrap" style="padding: 10px 20px; text-decoration:none;">Enquiry</a>
          <img src="/images/credai-mangalore-logo.webp" alt="CREDAI Mangalore" class="h-[35px] w-auto ml-auto block" />
        </div>`;
    content = content.substring(0, rightDivStart) + newRightDiv + content.substring(rightDivEnd);
}

// Brand fix - replace text-[var(--ink)] with text-ink (which is standard Tailwind config in this project)
// Wait, the brand is already replaced in the previous run. Let's fix the text-[var(--ink)] to text-ink
content = content.replace('text-[var(--ink)]', 'text-ink');

// Clean up any remaining .nav-links css
content = content.replace(/\.nav-links \{[\s\S]*?\}/, '');
content = content.replace(/\.nav-links a \{[\s\S]*?\}/, '');
content = content.replace(/\.brand \{[\s\S]*?\}/, '');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed nav HTML');
