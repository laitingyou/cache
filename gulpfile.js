var plumber = require('gulp-plumber');
var gulp = require('gulp')
var coffee = require('gulp-coffee');

gulp.task('default', function () {
  return gulp.src('./src/*.js')
    .pipe(plumber())
    .pipe(coffee())
    .pipe(gulp.dest('./dist'));
})
