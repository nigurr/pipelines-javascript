var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul')
var fs = require('fs');

gulp.task('default', function () {
    gulp.src('tests/**/*.js);
});
