const path = require('path');
const fs = require('fs');
// const fse = require('fs-extra');
const archiver = require('archiver');

const cwd = process.cwd();
const pkg = require(path.join(cwd, './package.json'));
const name = pkg.name.split('/')[1];
const archive = archiver('zip');

const output = fs.createWriteStream(path.join(cwd, `./${name}.zip`));

output.on('close', () => {

});

output.on('end', () => {
  console.log('upload demo ok');
});

// archive.on('warning', function (err) {
//   console.error(err);
// })

// archive.on('err', function (err) {
//   console.error(err);
// })

archive.pipe(output);
archive.file(path.join(cwd, './package.json'), { name: 'info.json' });
archive.directory(path.join(cwd, './demo'), { name: 'demo' });
archive.file(path.join(cwd, './doc/QuickStart.md'), { name: 'start.md' });
archive.finalize();

