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
		  node: true,
		  jasmine: true,
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/*.js']
      }
    },
    // Test settings
	jasmine: {
      js: {
        src: 'app/prime.js',
        options: {
          specs: 'test/prime.test.js',
          helpers: 'tests/helpers/*',
          vendor: 'vendor/*',
          template: require('grunt-template-jasmine-requirejs')
        }
      }
    },
  });
	

  grunt.registerTask('check', [
    'jshint'
  ]);
  grunt.registerTask('test', [
    'jasmine'
  ]);
  grunt.registerTask('default', [
    'jshint',
    'jasmine'
  ]);
};
