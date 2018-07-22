const gulp = require('gulp');

const htmlComb = require('gulp-htmlcomb');
const cssComb = require('gulp-csscomb');
const eslint = require('gulp-eslint');
const imageOptim = require('gulp-imageoptim');

gulp.task('comb-html', () => {
    const options = {
        removeNewlines: false
    };

    return gulp.src('**/*.html')
        .pipe(htmlComb(options))
        .pipe(gulp.dest('./'));
});

gulp.task('comb-css', () => {
    return gulp.src('assets/css/*.css')
        .pipe(cssComb())
        .pipe(gulp.dest('assets/css'));
});

gulp.task('comb-js', () => {
    const options = {
        fix: true
    };

    return gulp.src(['gulpfile.js', 'assets/js/countdown.js'])
        .pipe(eslint(options))
        .pipe(eslint.formatEach('compact', process.stderr));
});

gulp.task('optimize-images', () => {
    return gulp.src('assets/images/**/*')
        .pipe(imageOptim.optimize())
        .pipe(gulp.dest('assets/images'));
});

const tasks = [
    'comb-html',
    'comb-css',
    'comb-js',
    'optimize-images'
]

gulp.task('watch', () => {
    gulp.watch('./', tasks);
});

gulp.task('default', tasks);
