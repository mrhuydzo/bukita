var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;
var sass = require('gulp-sass');
var bs = require('browser-sync').create();

gulp.task('serve', [], function () {
    browserSync({
        notify: false,
        server: {
            baseDir: '.'
        }
    });

    gulp.watch(['*.html'], reload);
    gulp.watch(['js/*.js'], reload);
    gulp.watch(['css/*.css'], reload);
});

gulp.task('sass', function(){
    return gulp.src('sass/**/*.scss') // cấu hình gulp địa chỉ của tập tin nguồn sass
        .pipe(sass()) // chuyển tập tin nguồn sass thành tập tin css
        .pipe(gulp.dest('css')) // địa chỉ tập tin css sẽ được lưu lại
        .pipe(bs.reload({stream: true}));
});

gulp.task('watch', function(){
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch("*.html").on('change', bs.reload);
    // Other watchers
});

/*gulp.task('default', [], function () {
    console.log("Command:\n   serve - run live reload server");
});*/
// Default Task
gulp.task('default', ['sass', 'watch', 'serve']);