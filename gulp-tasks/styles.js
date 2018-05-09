const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const config = require('./config');

gulp.task('styles', () => {
  return gulp
  .src(config.paths.src.sass)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(config.paths.tmp.styles))
});
