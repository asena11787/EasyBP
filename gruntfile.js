module.exports = function(grunt) {
  grunt.initConfig ({
    // Import the JSON metadata stored in package.json into the grunt config
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'public/css/app.css' : 'public/**/*.scss'
        }
      }
    },

    watch: {
      css: {
        files: ['public/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true // needed to run LiveReload
        }
      },
      html: {
        files: ['**/*.html'],
        options: {
          livereload: true // needed to run LiveReload
        }
      }
    },

    jshint: {
      // when this task is run, lint the Gruntfile and all js files in src
      build: ['public/**/*.js']
    },

    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },

      build: {
        files: {
          'public/js/magic.min.js': 'public/js/magic.js'
        }
      }
    },

    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'public/css/app.min.css': 'public/css/app.css'
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'sass']);
};