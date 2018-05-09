const gulp = require('gulp');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync');
const del = require('del');
const imagemin = require('gulp-imagemin');
const config = require('./config');
const gutil = require('gulp-util');

gulp.task('previewDist', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'docs'
    },
    browser: 'chrome'
  });
});

gulp.task('deleteDistFolder', () => {
  return del('./docs');
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], () => {
  var pathsToCopy = [
    './src/**/*',
    '!./src/index.html',
    '!./src/images/**',
    '!./src/styles/**',
    '!./src/scripts/**',
    '!./src/.tmp',
    '!./src/.tmp/**'
  ]

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest(config.paths.dist.main));
});

gulp.task('optimizeImages', ['deleteDistFolder'], () => {
  return gulp.src(config.paths.src.images)
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5})
      ]))
      .pipe(gulp.dest(config.paths.dist.images));
});

gulp.task('usemin', ['styles', 'scripts'], () => {
  return gulp.src(config.paths.src.index)
    .pipe(usemin({
      css: [cssnano(), rev()],
      js: [uglify().on('error', function (err) {
        gutil.log(gutil.colors.red('[Error]'), err.toString());
        this.emit('end');
      }), rev()]
    }))
    .pipe(gulp.dest(config.paths.dist.main))
});

gulp.task('useminStart', ['deleteDistFolder'], () => {
  gulp.start('usemin');
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminStart']);
