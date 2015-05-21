/*
* Dependencias
*/
var gulp = require('gulp'),
  	concat = require('gulp-concat'),
  	uglify = require('gulp-uglify'),
  	sass = require('gulp-sass');

/*
* Configuration of 'js' code
*/
gulp.task('javascript', function () {
  	gulp.src(['js/source/*.js', 'foundation/bower_components/foundation/js/vendor/jquery.js', ])
  	.pipe(concat('app.js'))
  	.pipe(uglify())
  	.pipe(gulp.dest('js/build/'))
});

/*
* Configuration of css code
*/
gulp.task('sass', function () {
	gulp.src('css/src/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('main.css'))
		.pipe(uglify())
	.pipe(gulp.dest('css/build/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('css/src/*.scss', ['sass']);
});

gulp.task('default', ['javascript', 'sass']);

