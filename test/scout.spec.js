'use strict';

var grunt = require('grunt');

function compare(inputFile, expectedOutputFile, description, test) {
    var actual = grunt.file.read(inputFile),
        expected = grunt.file.read(expectedOutputFile);
    test.equal(actual, expected, description);
    test.done();
}

exports.scout = {
    test1: function(test) {
        compare(
            'tmp/test1-scout.js',
            'test/expected/test1-scout.js',
            'Scout with JS and CSS',
            test
        );
    },
    test2: function(test) {
        compare(
            'tmp/test2-scout.js',
            'test/expected/test2-scout.js',
            'Scout with JS only',
            test
        );
    }
};
