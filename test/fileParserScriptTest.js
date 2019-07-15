var fileParser = require('../fileParserScript.js');
var expect = require('chai').expect;
var assert = require('assert');

describe('fileParserScript tests', function() {

    it('getCurrWorkingDirectory should return cwd', function() {
        var currDirectory = "/Users/AngYang/gitHub_Projects/FileParserScript"
        expect(fileParser.getCurrWorkingDirectory()).to.equal(currDirectory)
    })

})
