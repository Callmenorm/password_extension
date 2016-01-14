import gulp from 'gulp'
import sequence from 'run-sequence'

gulp.task('build', (done) => {
  sequence( 'config:prompt'
          , 'config:print'
          , 'clean'
        , [ 'browserify', 'assets', 'manifest:prod' ]
          , 'compress'
          ,  done )
})
