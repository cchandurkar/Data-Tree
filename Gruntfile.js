module.exports = function(grunt) {
    grunt.initConfig({

      // Read default package
      pkg: grunt.file.readJSON('package.json'),

      // JShint the src files
      jshint: {
        options:{
          loopfunc: true
        },
        files:{
          src: ['./src/**/*.js']
        },
      },

      // Browserify `src/index.js`
      browserify: {
        dist: {
          files: {
            './dist/dataTree.js': ['./index.js'],
          },
        }
      },

      // Minify the `dist/trails.js`
      uglify:{
        min:{
          files: {
            './dist/dataTree.min.js': ['./dist/dataTree.js'],
          }
        },
      },

      // Watch srcFiles for change
      watch: {
        scripts: {
          files: ['./src/**/*.js', './index.js', './README.md'],
          tasks: ['build'],
          options: {
            spawn: false,
          },
        },
      },

      // JSDoc to Github markdown
      jsdoc2md: {
        oneOutputFile: {
            src: "src/*.js",
            dest: "docs/README.md"
        },
      },

      jsdoc : {
        dist : {
          src: ['src/**/*.js', 'README.md'],
          options: {
              destination : 'docs',
              template : "node_modules/minami",
          }
      }
    }

    });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-jsdoc-to-markdown');
  grunt.loadNpmTasks('grunt-jsdoc');

  // Default task(s).
  grunt.registerTask('build', ['jshint', 'browserify', 'uglify:min', 'jsdoc2md', 'jsdoc']);
  grunt.registerTask('default', ['build']);
  grunt.registerTask('dev-server', ['build', 'watch']);

};
