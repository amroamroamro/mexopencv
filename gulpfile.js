var gulp = require('gulp');
var merge = require('merge-stream');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var del = require('del');
var pkg = require('./package.json');

var paths = {
    html: '*.html',
    css: ['css/*.css', '!css/*.min.css'],
    js: ['js/*.js', '!js/*.min.js'],
    jquery: 'node_modules/jquery/dist/jquery.slim.min.js',
    bootstrap: [
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
    ],
    fontawesome: [
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/font-awesome/fonts/fontawesome-webfont.*'
    ],
    prettify: [
        'node_modules/code-prettify/loader/prettify.css',
        'node_modules/code-prettify/loader/prettify.js',
        'node_modules/prettify-matlab/dist/css/matlab.min.css',
        'node_modules/prettify-matlab/dist/js/lite/lang-matlab.min.js'
    ]
};

// clean task
gulp.task('clean', function() {
    return del(['vendor/', 'css/*.min.css', 'js/*.min.js']);
});

// copy vendor files from /node_modules into /vendor,
// require running "npm install" first
gulp.task('copy', function() {
    return merge(
        gulp.src(paths.jquery)
            .pipe(gulp.dest('vendor/jquery')),
        gulp.src(paths.bootstrap, {base: 'node_modules/bootstrap/dist/'})
            .pipe(gulp.dest('vendor/bootstrap')),
        gulp.src(paths.fontawesome, {base: 'node_modules/font-awesome/'})
            .pipe(gulp.dest('vendor/font-awesome')),
        gulp.src(paths.prettify)
            .pipe(gulp.dest('vendor/code-prettify'))
    );
});

// minify tasks CSS/JS
gulp.task('minify:css', function() {
    return gulp.src(paths.css)
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream());
});
gulp.task('minify:js', function() {
    return gulp.src(paths.js)
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js/'))
        .pipe(browserSync.stream());
});

// default task
gulp.task('default', ['minify:css', 'minify:js', 'copy']);

// dev task: static server + watching files
gulp.task('serve', ['default'], function() {
    // serve files from project root
    browserSync.init({
        server: {
            baseDir: './'
        },
        notify: false
    });

    // reload browser whenever HTML/CSS/JS files change
    gulp.watch(paths.html).on('change', browserSync.reload);
    gulp.watch(paths.css, ['minify:css']);
    gulp.watch(paths.js, ['minify:js']);
});
