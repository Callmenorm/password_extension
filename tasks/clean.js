import gulp from 'gulp'
import trash from 'trash'
import pathExists from 'path-exists'

gulp.task('clean', (done) => {
  if (pathExists.sync('./dist')) trash(['./dist'], done)
  else setImmediate(done)
})
