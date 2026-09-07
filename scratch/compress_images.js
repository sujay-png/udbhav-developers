import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.resolve(__dirname, '../public/images/udbahv-chinmaya');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(webp|jpg|jpeg|png)$/i.test(file)) {
      if (stat.size > 250 * 1024) { // larger than 250 KB
        console.log(`Optimizing: ${fullPath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
        
        const tempPath = fullPath + '.tmp';
        try {
          await sharp(fullPath)
            .resize({ width: 800, withoutEnlargement: true })
            .webp({ quality: 70 })
            .toFile(tempPath);
            
          fs.renameSync(tempPath, fullPath);
          const newStat = fs.statSync(fullPath);
          console.log(`  -> New size: ${(newStat.size / 1024).toFixed(2)} KB`);
        } catch (e) {
          console.error(`Error processing ${fullPath}`, e);
          if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        }
      }
    }
  }
}

async function run() {
  console.log("Starting image compression...");
  await processDirectory(targetDir);
  console.log("Done.");
}

run();
