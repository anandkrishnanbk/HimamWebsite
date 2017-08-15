const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default',() =>
  gulp.src('./images/Vishuimages-2017-org/*')
  .pipe(imagemin([imagemin.jpegtran({progressive: true})]))
  .pipe(gulp.dest('./images/Vishuimages-2017'))
)
