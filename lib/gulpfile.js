var path = require('path');
var fs = require('fs');
var gulp = require('gulp');
// var less = require('gulp-less');
var base64 = require('gulp-base64');
var scss = require('gulp-sass');
var header = require('gulp-header');
var tap = require('gulp-tap');
var nano = require('gulp-cssnano');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var comments = require('postcss-discard-comments');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var pxtorem = require('postcss-pxtorem');
var division = require('./plugin/postcss-division');
var browserSync = require('browser-sync');
var pkg = require('./package.json');
var yargs = require('yargs').options({
  w: {
    alias: 'watch',
    type: 'boolean'
  },
  s: {
    alias: 'server',
    type: 'boolean'
  },
  p: {
    alias: 'port',
    type: 'number'
  }
}).argv;

var option = { base: 'src' };
var dist = __dirname + '/dist';
var scssOptions = {
  importer: function(url, file, done) {
    if (url.startsWith('~')) {
      const newUrl = path.join(__dirname, 'node_modules', url.substring(1));
      done({ file: newUrl });
    }
    else {
      done({ file: url });
    }
  }
};

var processors = [
  autoprefixer(['iOS >= 7', 'Android >= 4.1']), 
  pxtorem({ 
    rootValue: 100,
    propList: ['*', 
      '!border', 
      '!border-bottom', 
      '!border-top', 
      '!border-left', 
      '!border-right', 
      // '!font-size'
    ],
    minPixelValue: 1,
   }),
  division({ dpr: 2 }),
  comments()
];

gulp.task('build:style', function() {
  var banner = [
    '/*!',
    ' * JybUI v<%= pkg.version %> (<%= pkg.homepage %>)',
    ' */',
    ''
  ].join('\n');
  gulp
    .src('src/style/ui.scss', option)
    .pipe(sourcemaps.init())
    .pipe(
      scss(scssOptions).on('error', function(e) {
        console.error(e.message);
        this.emit('end');
      })
    )
    .pipe(postcss(processors))
    .pipe(base64({
      baseDir: 'src',
      extensions: ['svg', 'png', 'jpg'],
      maxImageSize: 20 * 1024, // bytes       
    }))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dist))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(
      nano({
        zindex: false,
        autoprefixer: false
      })
    )
    .pipe(
      rename(function(path) {
        path.basename += '.min';
      })
    )
    .pipe(gulp.dest(dist));
});

gulp.task('build:style:widget', function() {
  gulp
    .src('src/style/widget/*.scss', option)
    .pipe(sourcemaps.init())
    .pipe(
      scss(scssOptions).on('error', function(e) {
        console.error(e.message);
        this.emit('end');
      })
    )
    .pipe(postcss(processors))
    .pipe(base64({
      baseDir: 'src',
      extensions: ['svg', 'png', 'jpg'],
      maxImageSize: 20 * 1024, // bytes       
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dist))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(
      nano({
        zindex: false,
        autoprefixer: false
      })
    )
    .pipe(
      rename(function(path) {
        path.basename += '.min';
      })
    )
    .pipe(gulp.dest(dist));  
})

gulp.task('build:style:assets', function() {
  gulp
    .src('src/img/**/*.?(png|jpg|gif|js)', option)
    .pipe(gulp.dest(dist))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('build:example:assets', function() {
  gulp
    .src('src/example/**/*.?(png|jpg|gif|js)', option)
    .pipe(gulp.dest(dist))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('build:example:style', function() {
  gulp
    .src('src/example/example.scss', option)
    .pipe(
      scss(scssOptions).on('error', function(e) {
        console.error(e.message);
        this.emit('end');
      })
    )
    .pipe(postcss(processors))
    .pipe(postcss([autoprefixer(['iOS >= 7', 'Android >= 4.1'])]))
    .pipe(
      nano({
        zindex: false,
        autoprefixer: false
      })
    )
    .pipe(gulp.dest(dist))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('build:example:html', function() {
  gulp
    .src('src/example/index.html', option)
    .pipe(
      tap(function(file) {
        var dir = path.dirname(file.path);
        var contents = file.contents.toString();
        contents = contents.replace(
          /<link\s+rel="import"\s+href="(.*)">/gi,
          function(match, $1) {
            var filename = path.join(dir, $1);
            var id = path.basename(filename, '.html');
            var content = fs.readFileSync(filename, 'utf-8');
            return (
              '<script type="text/html" id="tpl_' +
              id +
              '">\n' +
              content +
              '\n</script>'
            );
          }
        );
        file.contents = new Buffer(contents);
      })
    )
    .pipe(gulp.dest(dist))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('build:example', [
  'build:example:assets',
  'build:example:style',
  'build:example:html'
]);

gulp.task('release', ['build:style', 'build:example', 'build:style:assets', 'build:style:widget']);

gulp.task('watch', ['release'], function() {
  gulp.watch('src/style/**/*', ['build:style']);
  gulp.watch('src/example/example.scss', ['build:example:style']);
  gulp.watch('src/example/**/*.?(png|jpg|gif|js)', ['build:example:assets']);
  gulp.watch('src/**/*.html', ['build:example:html']);
  gulp.watch('src/img/**/*.?(png|jpg|gif|js)', ['build:style:assets']);
});

gulp.task('server', function() {
  yargs.p = yargs.p || 8080;
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    ui: {
      port: yargs.p + 1,
      weinre: {
        port: yargs.p + 2
      }
    },
    port: yargs.p,
    startPath: '/example/index.html',
    ghostMode: false
  });
});

// 参数说明
//  -w: 实时监听
//  -s: 启动服务器
//  -p: 服务器启动端口，默认8080
gulp.task('default', ['release'], function() {
  if (yargs.s) {
    gulp.start('server');
  }

  if (yargs.w) {
    gulp.start('watch');
  }
});