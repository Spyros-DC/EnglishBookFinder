module.exports = function(grunt) {
   grunt.initConfig({
      jshint: {
         some: ['public/js/main.js', 'server.js', 'func/**', 'public/js/app/views/**', 'public/js/app/globals.js']
         }
      });

   grunt.loadNpmTasks('grunt-contrib-jshint');
};
