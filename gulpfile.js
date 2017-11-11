const gulp = require('gulp');

const template = require('gulp-template');
const data = require('gulp-data');
const argv = require('yargs').argv;
const rename = require('gulp-rename');

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

gulp.task('view-styles', () => {
    'use strict';
    gulp.src('template/custom-element-template-styles.html')
        .pipe(data(() => ({name: tagName})))
        .pipe(template())
        .pipe(rename(`${tagName}-styles.html`))
        .pipe(gulp.dest(`src/views/${tagName}`));
});

gulp.task('view-html', () => {
    'use strict';
    gulp.src('template/custom-element-template.html')
        .pipe(data(() => ({name: tagName})))
        .pipe(template())
        .pipe(rename(`${tagName}.html`))
        .pipe(gulp.dest(`src/views/${tagName}`));
});

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

gulp.task('view', ['view-styles', 'view-html', 'view-js']);

gulp.task('config', () => {
    'use strict';
    gulp.src(`env/${env}.config`)
        .pipe(template())
        .pipe(rename('.env'))
        .pipe(gulp.dest(''));
});