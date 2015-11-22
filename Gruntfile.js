module.exports = function(grunt) {
    grunt.initConfig({

      // Read default package
      pkg: grunt.file.readJSON('package.json'),

      // JShint the src files
      jshint: {
        files:{
          src: ['./src/**/*.js']
        }
      },

      // Browserify `src/index.js`
      browserify: {
        dist: {
          files: {
            './dist/dataTree.js': ['./src/index.js'],
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
          files: ['./src/**/*.js'],
          tasks: ['build'],
          options: {
            spawn: false,
          },
        },
      },

      // JSDoc to Github markdown
      jsdoc2md: {
        separateOutputFilePerInput: {
          files: [
            { src: "src/tree.js", dest: "docs/tree.md" },
            { src: "src/tree-node.js", dest: "docs/tree-node.md" },
            { src: "src/traverser.js", dest: "docs/traverser.md" },
          ]
        },
        allInOne: {
          src: "src/*.js",
          dest: "docs/README.md",
        },
      }

    });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-jsdoc-to-markdown');

  // Default task(s).
  grunt.registerTask('build', ['jshint', 'browserify', 'uglify:min', 'jsdoc2md']);
  grunt.registerTask('default', ['build']);

};
