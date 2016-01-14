import gulp from 'gulp'
import zip from 'gulp-zip'

gulp.task('compress', () => {
  let { name, version } = require('../package.json')

  return gulp.src('dist/**/*')
    .pipe(zip(`${name}-${version}.zip`))
    .pipe(gulp.dest('package'))
})
