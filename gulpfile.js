const child = require('child_process');
const gulp = require('gulp');
const log = require('fancy-log');
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const replace = require('gulp-replace');

DST = 'public';
ASSETS_SRC = 'assets';
ASSETS_DST = 'static/assets';

THEME = 'themes/govcert-ch';
THEME_ASSETS_SRC = THEME + '/src';
THEME_ASSETS_DST = THEME + '/static/assets';

gulp.task('hugo', () => {
  log('[+] hugo dev');
  const hugo = child.spawn('hugo', ['--config', 'config.yaml', '--buildDrafts', '--buildFuture']);

  const hugologger = (buffer) => {
    buffer
      .toString()
      .split(/\n/)
      .forEach((message) => log('hugo: ' + message));
  };

  hugo.stdout.on('data', hugologger);
  hugo.stderr.on('data', hugologger);
  return hugo;
});

gulp.task('clean', () => {
  log('[+] cleaning');
  return gulp
    .src([DST, THEME_ASSETS_DST], {
      read: false,
      allowEmpty: true,
    })
    .pipe(clean());
});

gulp.task('js', () => {
  log('[+] js');
  gulp
    .src([
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/jquery-drilldown/dist/jquery.drilldown.min.js',
      'node_modules/jquery/dist/jquery.min.js',
    ])
    .pipe(gulp.dest(THEME_ASSETS_DST + '/js/'));
  gulp
    .src([THEME + '/src/js/highcharts/*.js'])
    .pipe(gulp.dest(THEME_ASSETS_DST + '/js/highcharts/'));
  return gulp
    .src([
      'node_modules/swiss-styleguide/src/assets/js/drilldown.js',
      THEME + '/src/js/subnavigation.js',
    ])
    .pipe(concat('styleguide.js'))
    .pipe(gulp.dest(THEME_ASSETS_DST + '/js/'));
});

gulp.task('css', () => {
  log('[+] css');
  gulp
    .src([THEME_ASSETS_SRC + '/css/opinion.css'])
    .pipe(concat('opinion.css'))
    .pipe(gulp.dest(THEME_ASSETS_DST + '/css/'));
  return gulp
    .src([
      'node_modules/swiss-styleguide/build/css/{admin,print,vendors}.css',
      THEME_ASSETS_SRC + '/css/custom.css',
    ])
    .pipe(concat('main.css'))
    .pipe(replace('font-family:', 'font-display:swap;font-family:'))
    .pipe(gulp.dest(THEME_ASSETS_DST + '/css/'));
});

gulp.task('fonts', () => {
  log('[+] fonts');
  return gulp
    .src(['node_modules/swiss-styleguide/build/fonts/*'])
    .pipe(gulp.dest(THEME_ASSETS_DST + '/fonts'));
});

gulp.task('img', () => {
  log('[+] imgs');
  return gulp
    .src(['node_modules/swiss-styleguide/build/img/*'])
    .pipe(gulp.dest(THEME_ASSETS_DST + '/img'));
});

gulp.task('server', () => {
  log('[+] serving');
  gulp.src(DST).pipe(
    server({
      livereload: true,
      directoryListing: false,
      open: true,
    }),
  );
});

gulp.task('watch', () => {
  log('[+] watching');
  gulp.watch(
    ['content/**/*.html', 'content/**/*.md', 'themes/govcert-ch/**/*'],
    gulp.series('hugo'),
  );
});

gulp.task('build', gulp.series('css', 'fonts', 'img', 'js', 'hugo'));
gulp.task('default', gulp.series('build', gulp.parallel('server', 'watch')));
