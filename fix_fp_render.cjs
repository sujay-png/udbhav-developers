const fs = require('fs');

const filePath = 'src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro';
let content = fs.readFileSync(filePath, 'utf-8');

const oldChunk1 = `              <h3 style="font-size: 1.8rem; margin-top: 0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                <span id="fp-title-text">{floorPlans[0].shortTitle || floorPlans[0].title}</span>
                <span id="fp-top-view-badge" style="font-size: 0.9rem; font-weight: 600; padding: 4px 10px; background: var(--red-tint); color: var(--red); border-radius: 4px; display: none;">Top View</span>
              </h3>`;

const newChunk1 = `              <h3 style="font-size: 1.8rem; margin-top: 0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                <span id="fp-title-text">{floorPlans[0].shortTitle || floorPlans[0].title}</span>
                <span id="fp-top-view-badge" style={\`font-size: 0.9rem; font-weight: 600; padding: 4px 10px; background: var(--red-tint); color: var(--red); border-radius: 4px; display: \${floorPlans[0].title.toLowerCase().includes('top view') ? 'inline-block' : 'none'};\`}>Top View</span>
              </h3>`;

content = content.replace(oldChunk1, newChunk1);

const oldChunk2 = `                  <span>Configuration</span><strong id="fp-config-text"
                    >{floorPlans[0].config}</strong
                  >`;

const newChunk2 = `                  <span>Configuration</span><strong id="fp-config-text"
                    >{floorPlans[0].config.replace(/\\s*\\(Top View\\)\\.?/i, "")}</strong
                  >`;

content = content.replace(oldChunk2, newChunk2);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('done');
