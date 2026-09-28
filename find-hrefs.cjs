const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const pattern = /href=[\"'](\/[^\/\"'][^\"']*)[\"']/g;
const templatePattern = /href=\{`(\/[^`]+)`\}/g;

walkDir('./src', (filePath) => {
  if (!filePath.match(/\.(astro|tsx|ts|jsx)$/)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  let match;
  while ((match = pattern.exec(content)) !== null) {
    let url = match[1];
    if (!url.endsWith('/')) {
      console.log(filePath + ' -> ' + url);
    }
  }
  while ((match = templatePattern.exec(content)) !== null) {
    let url = match[1];
    if (!url.endsWith('/')) {
      console.log(filePath + ' -> ' + url);
    }
  }
});
