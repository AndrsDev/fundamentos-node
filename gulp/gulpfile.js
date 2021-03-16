const gulp = require('gulp');
const server = require('gulp-server-livereload')

gulp.task('build', function(callback) {
  console.log('Building site...');
  callback()
})

gulp.task('serve', function(callback) {
  gulp.src('src')
    .pipe(server({
      livereload:true,
      open: true,
    }))
  callback()
})

gulp.task('default', gulp.series('build', 'serve'))