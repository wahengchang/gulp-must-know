
/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running ..... by Peter')
});


gulp.task('copyHtml', function() {
  // copy any html files in source/ to public/
  console.log('going to copy ...')
  gulp.src('source/*.html').pipe(gulp.dest('public'));
});

//updated whatever file in source/, then run task copyHtml
gulp.task('watch', function () {
  gulp.watch('source/*', ['copyHtml']);
});