/**
 * build
 */

const path = require('path');
const rollup = require('rollup');
const rollupWatch = require('rollup-watch');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const commonjs = require('rollup-plugin-commonjs');
const eslint = require('rollup-plugin-eslint');
// const fs = require('fs-extra');
const image = require('rollup-plugin-image');
const getLibDefine = require('./get_define');
const dot = require('./plugin/dot');
// const sass = require('rollup-plugin-sass');
// const autoprefixer = require('autoprefixer');
// const postcss = require('postcss');

const cwd = process.cwd();

// env
const isProd = process.env.NODE_ENV === 'production';
const isMin = process.env.NODE_ENV === 'min';

// 获取package libDefine字段
const libDefine = getLibDefine();

if (libDefine) {
  const rollupConfig = {
    entry: path.join(cwd, 'src/index.js'),
    plugins: [
      resolve(),
      commonjs(),
      eslint({
        include: path.join(cwd, 'src/**/**.js'),
        exclude: []
      }),
      dot({
        include: ['**/*.dot', '**/*.tpl'],
        exclude: ['**/index.html'],
        templateSettings: { selfcontained: true }
      }),
      image(),
      // sass({
      //   output: 'bundle.css',
      //   processor: css => postcss([autoprefixer])
      //     .process(css)
      //     .then(result => result.css),
      //   options: {
      //     importer: function(url, file, done) {
      //       if (url.startsWith('~')) {
      //         const newUrl = path.join(cwd, 'node_modules', url.substring(1));
      //         done({ file: newUrl });
      //       } else {
      //         done({ file: url });
      //       }
      //     }
      //   }
      // }),
      babel({
        exclude: path.join(cwd, 'node_modules/**')
      }),
      (isMin && uglify())
    ]
  };

  const destFile = {
    production: path.join(cwd, libDefine.prodDest || ''),
    dev: path.join(cwd, libDefine.devDest || ''),
    min: path.join(cwd, libDefine.minDest || '')
  };
  const outputConfig = {
    format: 'umd',
    moduleName: libDefine.moduleName,
    dest: destFile[process.env.NODE_ENV] || path.join(cwd, 'dist/bundle.js'),
    sourceMap: !(isProd || isMin)
  };

  if (isProd || isMin) {
    rollup.rollup(rollupConfig).then((bundle) => {
      bundle.write(outputConfig);
    });

    // fs.copy(path.join(cwd, 'src/index.scss'), path.join(cwd, 'dist/bundle.scss'))
    //   .then(() => console.log('copy scss ok'))
    //   .catch(err => console.error(`copy scss err ${err.toString()}`));
  } else {
    rollupWatch(rollup, Object.assign({}, rollupConfig, outputConfig)).on('event', (ev) => {
      console.log(ev);
    });
  }
}
