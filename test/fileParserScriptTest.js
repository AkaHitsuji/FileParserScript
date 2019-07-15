// import {getCurrWorkingDirectory, readFilesInDir, checkIfFileContainsString} from '../fileParserScript';
// import {expect} from 'chai';
// import {assert} from 'assert';

var expect = require('chai').expect;
var assert = require('assert');
var fileParserScript = require('../fileParserScript.js');

describe('fileParserScript tests', () => {

  it('getCurrWorkingDirectory should return cwd', ()=> {
      const currDirectory = "/Users/AngYang/gitHub_Projects/FileParserScript"
      expect(fileParserScript.getCurrWorkingDirectory()).to.equal(currDirectory)
  })

  it('readFilesInDir result should be more than 1', ()=> {
      var currDirectory = fileParserScript.getCurrWorkingDirectory();
      var testDirectory = currDirectory + '/test_dir';
      var arrayResults = [];

      fileParserScript.readFilesInDir(testDirectory, arrayResults, function(err, res) {
          arrayResults = res;
          console.log('these are the array results: ',arrayResults);
          expect(arrayResults.length>1).to.equal(true);
      })
  })

  it('readFile should return true for somefile.js', ()=> {
      var currDirectory = fileParserScript.getCurrWorkingDirectory();
      var somefileDirectory = currDirectory + "/test_dir/somedir/somemodule/somefile.js"

      var containsTodo;

      fileParserScript.checkIfFileContainsString(somefileDirectory, 'TODO', function(err, res) {
          containsTodo = res;
          expect(containsTodo).to.equal(true);
      })
  })

})
