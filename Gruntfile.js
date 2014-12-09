'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: require('./package.json'),

        clean: {
            tmp: ['tmp']
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                'test/*.js'
            ]
        },

        scout: {
            test1: {
                options: {
                    baseUrl: '//s3.amazon.com/mysite/mybucket',
                    buildNumber: '<%= pkg.version %>',
                    jsPath: '/js/<%= pkg.name %>.js',
                    cssPath: '/css/<%= pkg.name %>.css'
                },
                dest: 'tmp/test1-scout.js'
            },
            test2: {
                options: {
                    baseUrl: '//s3.amazon.com/mysite/mybucket',
                    buildNumber: '<%= pkg.version %>',
                    jsPath: '/js/<%= pkg.name %>.js'
                },
                dest: 'tmp/test2-scout.js'
            }
        },

        nodeunit: {
            tests: ['test/scout.spec.js']
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('test', ['jshint', 'clean', 'scout', 'nodeunit']);
    grunt.registerTask('default', ['test']);
};
