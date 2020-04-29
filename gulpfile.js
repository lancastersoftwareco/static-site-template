const gulp = require('gulp')
const postcss = require('gulp-postcss')
const browserSync = require('browser-sync').create()

gulp.task('html', () => {
    return gulp.src('src/*.html').pipe(gulp.dest('dist/'))
})

gulp.task('css', () => {
    return gulp.src('src/*.css')
        .pipe(postcss())
        .pipe(gulp.dest('./dist'));
})

gulp.task('build', gulp.series('html', 'css'))

gulp.task('serve', gulp.series(['build', () => {
    browserSync.init({
        server: "./dist"
    })

    gulp.watch('src/*.html').on('change', gulp.series('html', () => {
        browserSync.reload()
    }))
}]))

