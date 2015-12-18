/**
 * @version 1.0.0
 * @author Rathes Sachchithananthan (sachchi@rathes.de)
 */

// gulp
var gulp = require('gulp');

// gulp plugins
var sass = require('gulp-sass');
var rename = require('gulp-rename');



// Sass task
gulp.task('sass', function () {
    return gulp.src('./src/sass/style.scss')
        .pipe(rename("style.css"))
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest('./dist/css'));
});


// Watch task
gulp.task('watch', function() {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});



// Default Task
gulp.task('default', ['sass', 'watch']);