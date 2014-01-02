module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compact',
          lineNumbers: true
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },
    
    concat: {
      app: {
        src: ['bower_components/jquery/jquery.min.js', 'bower_components/foundation/js/foundation.min.js', 'js/app.js'],
        dest: 'js/app-concat.js'
      },
    },
    
    copy: {
      main: {
        expand: true,
        flatten: true,
        src: ['bower_components/modernizr/modernizr.js', 'bower_components/jquery/jquery.min.map'],
        dest: 'js/' 
      }
    },
    
    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },
      
      concat: {
        files: 'js/app.js',
        tasks: ['concat']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass', 'concat', 'copy']);
  grunt.registerTask('default', ['build','watch']);
}