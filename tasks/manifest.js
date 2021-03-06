import gulp from 'gulp'
import manifest from '../app/manifest.json'
import { mkdir, writeFile } from 'fs'
import { version } from '../package.json'
import { resolve, join } from 'path'

gulp.task('manifest:dev', (done) => {
  gulp.watch('app/manifest.json', ['manifest:dev'])

  // Allow eval() for livereactload
  let policy = "script-src 'self' 'unsafe-eval'; object-src 'self'"
  build(done, { content_security_policy: policy })
})

gulp.task('manifest:prod', (done) => build(done))

function build(done, extra = {}) {
  let mani = { ...manifest, version, ...extra }
    , json = JSON.stringify(mani, null, ' ')
    , dist = resolve(__dirname, '..', 'dist')
    , file = join(dist, 'manifest.json')

  mkdir(dist, (err) => {
    if (err && err.code !== 'EEXIST') done(err)
    else writeFile(file, json, done)
  })
}
