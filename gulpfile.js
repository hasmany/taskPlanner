/* File: gulpfile.js */
'use strict';
// grap our gulp packages

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create(); // create a browser sync instance


gulp.task('sass', function() {
	return gulp.src("./src/scss/**/*.scss")
		.pipe(sass())
		.pipe(gulp.dest('./build/css'));
});

gulp.task('browser-sync', function(){
	browserSync.init({
		server: {
			baseDir: "./src"
		}
	});
});


// create a default task and just log a message
gulp.task("default", function() {
	return gutil.log("Gulp is running!");
});