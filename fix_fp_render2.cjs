const fs = require('fs');

const filePath = 'src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace the badge hardcoded display: none
const badgeRegex = /<span id="fp-top-view-badge" style="font-size: 0\.9rem; font-weight: 600; padding: 4px 10px; background: var\(--red-tint\); color: var\(--red\); border-radius: 4px; display: none;">Top View<\/span>/;
const newBadge = `<span id="fp-top-view-badge" style={\`font-size: 0.9rem; font-weight: 600; padding: 4px 10px; background: var(--red-tint); color: var(--red); border-radius: 4px; display: \${floorPlans[0].title.toLowerCase().includes('top view') ? 'inline-block' : 'none'};\`}>Top View</span>`;
content = content.replace(badgeRegex, newBadge);

// Replace the config text
const configRegex = /<span>Configuration<\/span><strong id="fp-config-text"\s*>\s*\{floorPlans\[0\]\.config\}\s*<\/strong\s*>/;
const newConfig = `<span>Configuration</span><strong id="fp-config-text"\n                    >{floorPlans[0].config.replace(/\\s*\\(Top View\\)\\.?/i, "")}</strong\n                  >`;
content = content.replace(configRegex, newConfig);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Done replacement');
