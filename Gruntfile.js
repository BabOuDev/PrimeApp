'use strict';

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);
  
  // Define the configuration for all the tasks
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
    // Make sure there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          'app/scripts/*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/*.js']
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });
  
  grunt.loadNpmTasks('jshint');
  grunt.loadNpmTasks('karma');
	

  grunt.registerTask('default', [
    'jshint',
    'karma'
  ]);
};
