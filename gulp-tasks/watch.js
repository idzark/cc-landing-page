const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();
const config = require('./config');

gulp.task('cssInject', ['styles'], () => {
  return gulp.src(config.paths.tmp.css)
  .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], () => {
  browserSync.reload();
});

gulp.task('watch', () => {

  browserSync.init({
    notify: false,
    server: {
      baseDir: 'src'
    },
    browser: 'chrome'
  });

  watch(config.paths.src.index, () => {
    browserSync.reload();
  });

  watch(config.paths.src.styles, () => {
    gulp.start('cssInject');
  });

  watch(config.paths.src.scripts, () => {
    gulp.start('scriptsRefresh');
  });

})