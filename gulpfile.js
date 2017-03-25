'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('serve', ['sass'], function () {

  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("./sass/*.scss", ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);