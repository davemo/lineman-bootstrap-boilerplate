/*global module:false*/
module.exports = function(grunt) {
  
  // STOCK LINEMAN
  
  var _ = grunt.utils._,
      server = require(process.cwd() + '/config/server.js'),
      appTasks = require(process.cwd() + '/config/application.js').appTasks;

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('lineman');

  grunt.registerTask('default', _.union(appTasks.common, appTasks.dist).join(' '));
  grunt.registerTask('run', _.union(appTasks.common, appTasks.watch).join(' '));

  grunt.task.run('configure');

  // MY LINEMAN CUSTOMIZATIONS
  
  // I like to use a custom express server for stubbing server actions
  grunt.registerTask('server', 'Custom Express Server', function() {
    grunt.log.writeln('Starting express web server in "./generated" on port 3000');
    server.listen(3000);
  });
  
  // I like to use testem separately from lineman, so i override this here.
  grunt.registerTask('spec', 'run specs', function() {});
};
