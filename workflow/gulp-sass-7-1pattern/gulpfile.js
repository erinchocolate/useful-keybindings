const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

//compile sass
function style() {
  //1. where is my scss file 
  return gulp.src('./src/scss/**/*.scss')
  //2. pass that fil through sass complier
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
  //3.where do I save the complied CSS
    .pipe(gulp.dest('./dist/css'))
  //4.stream changes to all browser
  .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './' 
    }
  });
  gulp.watch('./src/scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./src/js/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;

// //Default
// gulp.task('default', ['serve']);