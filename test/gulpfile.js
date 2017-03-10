var gulp = require('gulp');
var cssUrlQuotes = require('gulp-css-url-quotes');

gulp.task('default', function() {
    return gulp.src('./test.css')
        .pipe(cssUrlQuotes())
        .pipe(gulp.dest('build'));
});