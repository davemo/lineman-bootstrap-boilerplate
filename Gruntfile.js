/*global module:false*/
module.exports = function(grunt) {

  // STOCK LINEMAN
  require(process.env['LINEMAN_MAIN']).config.grunt.run(grunt);
};
