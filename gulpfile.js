// Gulp.js configuration
var
  // modules
  gulp = require('gulp'),
  // must install plug-ins before referencing these modules
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),
  htmlclean = require('gulp-htmlclean'),
  concat = require('gulp-concat'),
  deporder = require('gulp-deporder'),
  stripdebug = require('gulp-strip-debug'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),

  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  folder = {
    src: 'src/',
    build: 'build/'
  }
;

//image processing
gulp.task('images', function() {
  var out = folder.build + 'images/';
  return gulp.src(folder.src + 'images/**/*')
    .pipe(newer(out))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(out));
});

// HTML processing
// ['images'] makes sure to run images before html
gulp.task('html', ['images'], function() {
  var
    out = folder.build + 'html/',
    page = gulp.src(folder.src + 'html/**/*')
      .pipe(newer(out));

  // minify production code
  if (!devBuild) {
    page = page.pipe(htmlclean());
  }

  return page.pipe(gulp.dest(out));
});

// JavaScript processing
// deporder needs requires comments in each js modules
gulp.task('js', function() {

  var jsbuild = gulp.src(folder.src + 'js/**/*')
    .pipe(deporder())
    .pipe(concat('main.js'));

  if (!devBuild) {
    jsbuild = jsbuild
      .pipe(stripdebug())
      .pipe(uglify());
  }

  return jsbuild.pipe(gulp.dest(folder.build + 'js/'));
});

//css
gulp.task('css', function() {

	return gulp.src(folder.src + 'sass/**/*')
		.pipe(sass({
		  outputStyle: 'compressed'
		}))
		.pipe(concat("main.css"))
		.pipe(gulp.dest(folder.build + 'css/'));
});

//bootstrap-font
gulp.task('bootstrap-font', function() {

  return gulp.src(folder.src + 'node_modules/bootstrap-sass/assets/fonts/bootstrap')
    .pipe(gulp.dest(folder.build + 'fonts/bootstrap/'));
});

// watch for changes
gulp.task('watch', function() {
  // image changes
  gulp.watch(folder.src + 'images/**/*', ['images']);
  // html changes
  gulp.watch(folder.src + 'html/**/*', ['html']);
  // javascript changes
  gulp.watch(folder.src + 'js/**/*', ['js']);
  // css changes
  gulp.watch(folder.src + 'sass/**/*', ['css']);
});

// run all tasks
gulp.task('run', ['html', 'css', 'bootstrap-font', 'js']);

// default task
gulp.task('default', ['run', 'watch']);
