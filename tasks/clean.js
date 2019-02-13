const del = require("del");
const { dest } = require("./build-config");
const gulp = require("gulp");
const { isProd } = require("./helpers/env-helpers");

/**
 * Clean dist, tmp folders
 */
module.exports = gulp.task("clean", cb => {
  let dirs = [dest.distPath];
  if (isProd) {
    dirs.push(dest.tmp);
  }
  return del(dirs, cb);
});
