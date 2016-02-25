var gulp = require('gulp');
var uglify = require('gulp-uglify');

var path = {
    JS: {
		src: 	'./src/',
		dist: 	'./dist/'
    }
}

gulp.task('default', ['uglify' ] );

gulp.task('uglify', function () {
	return gulp.src( path.JS.src + '*.js' )
    	.pipe(uglify())
    	.pipe(gulp.dest( path.JS.dist ));
});
