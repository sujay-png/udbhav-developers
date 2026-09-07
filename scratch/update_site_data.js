import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteDataPath = path.resolve(__dirname, '../src/lib/site-data.ts');
let content = fs.readFileSync(siteDataPath, 'utf-8');

// Replace only image file extensions, so PDFs like the brochure stay in /images/ (served statically)
content = content.replace(/\/images\/udbahv-chinmaya\/(.+?\.(?:jpg|jpeg|png|webp))/gi, '/src/assets/images/udbahv-chinmaya/$1');

fs.writeFileSync(siteDataPath, content);
console.log('Successfully updated site-data.ts');
