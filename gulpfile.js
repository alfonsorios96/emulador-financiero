const gulp = require('gulp');

const template = require('gulp-template');
const data = require('gulp-data');
const argv = require('yargs').argv;
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const exec = require('child_process').exec;

const tagName = (argv.tag === undefined) ? 'custom-view' : argv.tag;
const env = (argv.env === undefined) ? 'dev' : argv.env;

const capitalizeFirstLetter = (string) => {
    'use strict';
    return string.charAt(0).toUpperCase() + string.slice(1);
};
const dashCaseToUpperCase = (string) => {
    'use strict';
    let splitString = string.split('-');
    let capitalizeString = splitString.map((word) => {
        return capitalizeFirstLetter(word);
    });
    return capitalizeString.join('');
};

// Begins create styles file

gulp.task('view-styles', () => {
    'use strict';
    gulp.src('template/custom-element-template-styles.html')
        .pipe(data(() => ({name: tagName})))
        .pipe(template())
        .pipe(rename(`${tagName}-styles.html`))
        .pipe(gulp.dest(`src/views/${tagName}`));
});

// Ends create styles file

// Begins create html file

gulp.task('view-html', () => {
    'use strict';
    gulp.src('template/custom-element-template.html')
        .pipe(data(() => ({name: tagName})))
        .pipe(template())
        .pipe(rename(`${tagName}.html`))
        .pipe(gulp.dest(`src/views/${tagName}`));
});

// Ends create html file

// Begins create js file

gulp.task('view-js', () => {
    'use strict';
    gulp.src('template/custom-element-template.js')
        .pipe(data(() => ({
            className: dashCaseToUpperCase(tagName),
            tagName: tagName,
        })))
        .pipe(template())
        .pipe(rename(`${tagName}.js`))
        .pipe(gulp.dest(`src/views/${tagName}`));
});

// Ends create js file

// Begins create service worker file

gulp.task('generate-service-worker', (callback) => {
    const path = require('path');
    const swPrecache = require('sw-precache');
    const rootDir = 'build/es6-unbundled';

    swPrecache.write(path.join(rootDir + '/service-worker.js'), {
        staticFileGlobs: [rootDir + '/**/*.*'],
        stripPrefix: rootDir
    }, callback);
});

// Ends create service worker file

gulp.task('view', ['view-styles', 'view-html', 'view-js']);

// Begins enviroment config

gulp.task('config', ['generate-service-worker'], () => {
    'use strict';
    gulp.src(`env/${env}.config`)
        .pipe(template())
        .pipe(rename('.env'))
        .pipe(gulp.dest(''));
});

// Ends enviroment config

// Begins BrowserSync

gulp.task('server-watch', ['config'], (done) => {
    'use strict';
    browserSync.reload();
    done();
});

gulp.task('default', ['config'], () => {
    'use strict';
    browserSync.init({
        server: {
            baseDir: './',
        }
    });
});

gulp.watch('src/**/*.*', ['server-watch']);

// Ends BrowserSync
