const gulp = require('gulp');

const clean = require('./tasks/clean');
const mergeLocales = require('./tasks/locales');
const bundle = require('./tasks/bundle');
const test = require('./tasks/tests');
const connect = require('./tasks/connect');

gulp.task('clean', clean);
gulp.task('merge-locales', mergeLocales);
gulp.task('build', gulp.series(['clean', 'merge-locales'], bundle));
gulp.task('test', gulp.series('merge-locales', test));
gulp.task('serve', gulp.series('merge-locales', connect));
