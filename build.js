const fs = require('fs');
const path = require('path');
const { renderPublicationsHtml, publications } = require('./publications.js');

const indexPath = path.join(__dirname, 'index.html');
const index = fs.readFileSync(indexPath, 'utf8');
const start = '<!-- PUBLICATIONS START -->';
const end = '<!-- PUBLICATIONS END -->';
const startIdx = index.indexOf(start);
const endIdx = index.indexOf(end);

if (startIdx === -1 || endIdx === -1) {
  console.error('Could not find publication markers in index.html');
  process.exit(1);
}

const html = renderPublicationsHtml();
const updated =
  index.slice(0, startIdx + start.length) +
  '\n' +
  html +
  '\n        ' +
  index.slice(endIdx);

fs.writeFileSync(indexPath, updated);
console.log('Updated index.html with ' + publications.length + ' publications.');
