const fs = require('fs');
const filePath = 'src/components/layout/Header.astro';
let content = fs.readFileSync(filePath, 'utf-8');

// Update max width to match Hero text
content = content.replace('max-w-[1400px] px-5 md:px-10', 'max-w-7xl px-6');

// Add CREDAI logo after Enquiry button
const credaiLogo = '<img src="/images/credai-mangalore-logo.webp" alt="CREDAI Mangalore" class="h-10 w-auto" />';
content = content.replace(
  '<Button asChild size="default">\n        <a href="/contact/">Enquiry</a>\n      </Button>',
  '<Button asChild size="default">\n        <a href="/contact/">Enquiry</a>\n      </Button>\n      ' + credaiLogo
);
content = content.replace(
  '<div class="hidden lg:block">',
  '<div class="hidden lg:flex items-center gap-6">'
);

// Update Announcement bar
// Add right before <header
const announcement = `<div class="w-full bg-primary text-primary-foreground text-center py-3 px-6 text-[0.95rem] font-medium">
  4BHK units sold out. Limited 3BHK residences available. RERA ID: PRK/KA/RERA/1257/334/PR/311225/008371
</div>
`;
content = content.replace('<header ', announcement + '<header ');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Done header update');
