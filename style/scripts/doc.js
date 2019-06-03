const path = require('path');
const fse = require('fs-extra');

const root = path.join(__dirname, '..');
const summaryFile = path.join(root, 'SUMMARY.md');
const docPath = path.join(root, 'doc');

const summaryContent = [];
const dir = fse.readdirSync(docPath);

summaryContent.push('# 目录');
summaryContent.push('* [主页](/README.md)');
summaryContent.push('* [使用说明](/doc/index.md)');

dir.filter(d => { 
  try {
    return fse.statSync(path.join(docPath, d)).isDirectory();
  } catch (e) {
    return false;
  }
}).forEach(d => {
  summaryContent.push(`* [${d}](/doc/${d}/README.md)`);
})

fse.outputFileSync(summaryFile, summaryContent.join('\n'));
console.log('Output summary file successfully');
