/*
* Dependencias
*/
var gulp = require('gulp'),
  	concat = require('gulp-concat'),
    svgSprite = require("gulp-svg-sprites"),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

/*
* Configuration of 'js' code
*/
gulp.task('jquery', function () {
  	gulp.src(['js/source/*.js', 'foundation/bower_components/foundation/js/vendor/jquery.js'])
  	.pipe(concat('app.js'))
  	.pipe(uglify())
  	.pipe(gulp.dest('js/build/'))
});


gulp.task('styles', function() {
  return sass('css/src/_global.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('css/build'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css/build'))
    .pipe(livereload())
    .pipe(notify({ message: 'Styles task complete' }));
});
 
gulp.task('sprites', function () {
    return gulp.src('assets/svg/*.svg')
      .pipe(svgSprite())
      .pipe(gulp.dest("assets"))
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('css/src/*.scss', ['styles']);
});
 
// Default task
gulp.task('default', function() {
    gulp.start('styles', 'sprites', 'jquery');
});


