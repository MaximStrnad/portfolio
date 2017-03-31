import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import pug from 'gulp-pug';

/**
 * Paths
 * @type {{styles: {src: string, dest: string}}}
 */
const paths = {
	styles: {
		src: 'sass/**/*.sass',
		dest: 'css/'
	},
	jade: {
		src: 'jade/**/*.jade',
		dest: './'
	}
};

/**
 * Compile Jade
 * @returns {*}
 */
export function jade() {
	return gulp.src(paths.jade.src)
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(paths.jade.dest))
		.pipe(browserSync.stream());
}

/**
 * Compile Sass
 * @returns {*}
 */
export function styles() {
	return gulp.src(paths.styles.src)
		.pipe(sourcemaps.init())
		.pipe(sass({indentedSyntax: true}).on('error', sass.logError))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.styles.dest))
		.pipe(browserSync.stream());
}

/**
 * Watch for file changes
 */
export function watch() {
	const project = require('path').basename(__dirname);

	//Start browserSync
	browserSync.init({
		injectChanges: true,
		proxy: 'http://localhost/' + project
	});

	gulp.watch(paths.styles.src, styles);
	gulp.watch(paths.jade.src, jade);
}

/**
 * Default task
 */
const start = gulp.series(watch);
export default start;