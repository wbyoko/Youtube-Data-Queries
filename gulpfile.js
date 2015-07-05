var gulp = require('gulp');
var protractor = require('gulp-protractor').protractor;

// Downloads the selenium webdriver
gulp.task('webdriver_update', protractor.webdriver_update);

gulp.task('default', ['webdriver_update'], function() {
	gulp.src(["./test/*_spec.js"])
    .pipe(protractor({
        configFile: "test/protractor.conf.js"
    }))
    .on('error', function(e) { console.trace(e); });
});