var gulp = require('gulp');
var less = require('gulp-less');

var paths = {
	less: './private/less/*.less'
};

gulp.task('build:less', function () {
	gulp.src(paths.less)
		.pipe(less())
		.pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function () {
	gulp.watch(paths.less, ['build:less']);
})