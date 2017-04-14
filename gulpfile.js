//
//  GULP
//––––––––––––––––––––––––––––––––––––––––––––––––––

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
// var sourcemaps = require('gulp-sourcemaps');


//
//  SCSS
//––––––––––––––––––––––––––––––––––––––––––––––––––

// Compile admin SCSS files to CSS
gulp.task('scss', function () {
  gulp.src('src/scss/**/*.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle : 'expanded'}))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('extension/css'));
});


//
//  JAVASCRIPT
//––––––––––––––––––––––––––––––––––––––––––––––––––

gulp.task('js', function() {
  gulp.src('src/js/main.js')
    // .pipe(sourcemaps.init())
    .pipe(uglify())
    // .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('extension/js'));
});


//
//  WATCH
//––––––––––––––––––––––––––––––––––––––––––––––––––

// Watch asset folder for changes
gulp.task('watch', ['scss'], function () {
  gulp.watch('src/scss/**/*', ['scss']);
  gulp.watch('src/js/main.js', ['js']);
});


//
//  DEFAULT
//––––––––––––––––––––––––––––––––––––––––––––––––––

// Set watch as default task
gulp.task('default', ['watch']);
