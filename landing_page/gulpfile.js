var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    multiDest = require('gulp-multi-dest'),
    sourcemaps = require('gulp-sourcemaps'),
    pump = require('pump');

gulp.task('build-img', function () {
    console.log('Compilando IMAGENS. . .');
    gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('build-html', function () {
	console.log('\n\n---------------------------\n------Gulp Compilador------\n---Landing Page Nextsoft---\n---------------------------\n*Este processo leva em torno de 30 segundos. . .\n\n');
    console.log('Compilando HTML. . .');
    gulp.src('src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-css', function () {
    console.log('Compilando SCSS e Minificando. . .');
    gulp.src('src/css/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(multiDest(['dist/css', 'src/css']));
})

gulp.task('build-js', function (cb) {
    console.log('Compilando JS. . .');
    pump([
        
        gulp.src(['src/js/plugins/jquery-3.2.1.min.js',
                  'src/js/plugins/jquery.slimscroll.min.js',
                  'src/js/plugins/jquery.fullpage.js',
                  'src/js/slider.js',
                  'src/js/fullpage.js',
                  'src/js/firework.js',
                  'src/js/browserContact.js']),
        //sourcemaps.init(),
        concat('main.js'),
        uglify(),
        //sourcemaps.write(),
        multiDest(['dist/js', 'src/js'])
    ],
        cb
    );
});

gulp.task('watch-css-js', function () {
    console.log('Assistindo Mudanças em Arquivos CSS/JS');
    gulp.watch('src/css/*.scss', ['build-css']);
    gulp.watch(['src/js/firework.js', 'src/js/fullpage.js', 'src/js/slider.js', 'src/js/browserContact.js'], ['build-js']);
	
})

gulp.task('default', ['build-html', 'build-img', 'build-css', 'build-js', 'watch-css-js']);


