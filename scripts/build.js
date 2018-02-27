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
const fs = require('fs-extra');
const image = require('rollup-plugin-image');
const vue = require('rollup-plugin-vue');
const getLibDefine = require('./get_define');
const dot = require('./plugin/dot');

// const sass = require('rollup-plugin-sass');
// const autoprefixer = require('autoprefixer');
// const postcss = require('postcss');

const cwd = process.cwd();

function copyModuleToDemo(modulePath) {
  const fileName = modulePath.split(path.sep)[modulePath.split(path.sep).length - 1];
  fs.copy(modulePath, path.join(cwd, `demo/${fileName}`))
    .then(() => console.log(`copy module ${fileName} ok`))
    .catch(err => console.error(`copy module ${fileName} err ${err.toString()}`));
}

function extractNodeModule() {
  const file = fs.readFileSync(path.join(cwd, './demo/index.html')).toString();
  const tagRegex = /<(script|link).*?(?:>|\/>)/gi;
  const srcReg = /(src|href)=[\'\"]?([^\'\"]*)[\'\"]?/i;
  const tags = file.match(tagRegex);

  return tags.filter(t => t.indexOf('node_modules') > -1).map((t) => {
    const src = t.match(srcReg);
    return path.join(cwd, './demo', src[2]);
  });
}

if (process.argv.indexOf('--entry') > -1) {
  rollup.rollup({
    entry: path.join(cwd, './index.js'),
    plugins: [
      resolve(),
      commonjs(),
      // uglify(),
    ],
  }).then((bundle) => {
    bundle.write({
      format: 'umd',
      moduleName: 'UI',
      dest: path.join(cwd, './dist/index.js'),
      sourceMap: true,
    });
  });
} else {
// env
  const isProd = process.env.NODE_ENV === 'production';
  const isMin = process.env.NODE_ENV === 'min';

  // 获取package libDefine字段
  const libDefine = getLibDefine();

  if (libDefine) {
    const rollupConfig = {
      entry: path.join(cwd, 'src/index.js'),
      plugins: [
        vue(),
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
      ],
      external: ['vue'],
      globals: {
        vue: 'Vue'
      }
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

      extractNodeModule().forEach(copyModuleToDemo);
    } else {
      rollupWatch(rollup, Object.assign({}, rollupConfig, outputConfig)).on('event', (ev) => {
        console.log(ev);
      });
    }
  }
}
