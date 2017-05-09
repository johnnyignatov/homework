'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(concat('css/main.css'))
        .pipe(gulp.dest('./dist/'))
		.pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch('./dist/*.html').on('change', browserSync.reload);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('default', ['sass', 'watch', 'browser-sync']);
