'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      all: ['lib/*.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: 'lib/**/*.js',
      options: {
        config: '.jscsrc'
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'jscs']);

  grunt.registerTask('default', ['test']);
};
