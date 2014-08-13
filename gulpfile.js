var gulp = require('gulp');
var connect = require('gulp-connect');
var path = require('path');
var open = require('gulp-open');
var root = 'app', port = 9000;

gulp.task('connect', function() {
    connect.server({
        root: root,
        livereload: true,
        port: port
    })
})

gulp.task('reload', function() {
    gulp.src(root).pipe(connect.reload());
})

gulp.task('watch', function() {
    gulp.watch(path.join(root, '**/*'), ['reload'])
})

gulp.task('open', function() {
    gulp.src(path.join(root, 'starter/index.html'))
        .pipe(open('', { url: 'http://localhost:'+ port +'/starter/' }));
})

gulp.task('default', ['connect', 'open', 'watch']);
