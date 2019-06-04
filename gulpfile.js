<<<<<<< HEAD
var plumber = require('gulp-plumber');
var gulp = require('gulp')
var coffee = require('gulp-coffee');

gulp.task('default', function () {
  return gulp.src('./src/*.js')
    .pipe(plumber())
    .pipe(coffee())
    .pipe(gulp.dest('./dist'));
})
=======
var plumber = require('gulp-plumber');
var gulp = require('gulp')
var coffee = require('gulp-coffee');

gulp.task('default', function () {
  return gulp.src('./src/*.js')
    .pipe(plumber())
    .pipe(coffee())
    .pipe(gulp.dest('./dist'));
})
>>>>>>> 6bfe6053d1ab5e3c4ccfd3d76811a2a19d95351d
