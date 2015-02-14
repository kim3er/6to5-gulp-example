// Pull in required modules
var gulp = require('gulp'),
	to5 = require('gulp-6to5');

// A task for transpiling ES6 into ES5
gulp.task('javascripts', function() {
	// Get source from app directory
	gulp.src([ './app/javascripts/*.js' ])
		// parse through 6to5
		.pipe(to5())
		// write to build directory
		.pipe(gulp.dest('./build/javascripts'));
});

// This task watches for changes
gulp.task('watch', function () {
	gulp.watch([ './app/javascripts/*.js' ], [ 'javascripts' ]);
});

// This task will be picked up if no arguments are given
gulp.task('default', [ 'javascripts', 'watch' ]);

// now type in 'gulp'
