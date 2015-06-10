// Requires
var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var postcss = require('gulp-postcss');
var processors = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-nested'),
  function(css) { /* Function to change some .pure classes to base elements */
    css.eachRule(function (rule){
        rule.selector = rule.selector.replace(/\.pure-table(\s+|-striped|$)/g,'table ');
        rule.selector = rule.selector.replace(/\.pure-img/,'img');
      });
  },
  require('cssnext')({
    browsers: ['last 1 version', '> 5%'],
    import: false,
    compress: true
  }),
  require('csswring')({
    removeAllComments: true
  })
];

var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Configuration
var config = {
  'cssDir': 'css',
  'jsDir': 'js',
  'distDir': 'dist'
};

gulp.task('default', function(callback) {
  return runSequence('clean',
    ['css', 'js'],
    callback);
});

gulp.task('clean', function() {
  del([config.distDir+'/**/*']);
});

gulp.task('css', function() {
  return gulp.src([config.cssDir+'/app.css'])
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .on('error', function (error) {
      console.log(error);
    })
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.distDir));
});

gulp.task('js', function() {
  return gulp.src([config.jsDir+'/*.js'])
    .pipe(concat('app.js'))
    .pipe(sourcemaps.init())
    .pipe(uglify({mangle: false}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.distDir));
});
