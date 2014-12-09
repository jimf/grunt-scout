/*
 * grunt-scout
 * https://github.com/jimf/grunt-scout
 *
 * Copyright (c) 2014 Jim Fitzpatrick
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path'),
    chalk = require('chalk');

module.exports = function(grunt) {
    grunt.registerMultiTask('scout', function() {
        var options = this.options({}),
            templatePath = path.join(__dirname, '..', 'templates', 'scout.template.js'),
            data = {
                baseUrl: options.baseUrl,
                buildNumber: options.buildNumber,
                jsPath: options.jsPath,
                cssPath: options.cssPath
            };

        this.files.forEach(function(file) {
            var processed = grunt.template.process(
                grunt.file.read(templatePath), { data: data }
            );

            grunt.file.write(file.dest, processed);
            grunt.verbose.writeln('File ' + chalk.cyan(file.dest) + ' created.');
        });
    });
};
