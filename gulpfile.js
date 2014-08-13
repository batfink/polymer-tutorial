var gulp = require('gulp');
var connect = require('gulp-connect');
var path = require('path');
var root = 'starter';

gulp.task('connect', function() {
    connect.server({
        root: root,
        livereload: true,
        port: 9000
    })
})

gulp.task('reload', function() {
    gulp.src(root).pipe(connect.reload());
})

gulp.task('watch', function() {
    gulp.watch([path.join(root, '*')], ['reload'])
})

gulp.task('default', ['connect', 'watch']);
