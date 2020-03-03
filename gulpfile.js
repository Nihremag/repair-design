const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('hello', function(done) {
    console.log('Привет, мир!');
    done();
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('css', function(){
    gulp.src('css/*.css')
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('css'))
});