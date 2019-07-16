const expect = require('chai').expect;
const assert = require('assert');
const fps = require('../fileParserScript.js');

describe('fps tests', () => {

  it('getCurrWorkingDirectory should return cwd', ()=> {
      const currDirectory = "/Users/AngYang/gitHub_Projects/FileParserScript"
      expect(fps.getCurrWorkingDirectory()).to.equal(currDirectory)
  })

  it('readFilesInDir result should have more than one entry', ()=> {
      var currDirectory = fps.getCurrWorkingDirectory();
      var testDirectory = currDirectory + '/test_dir';

      fps.readFilesInDir(testDirectory, function(err, results) {
        if (err) throw err;
        expect(results.length>1).to.equal(true);
      });
  })

  it('promised readFile should return true for somefile.js', (done)=> {
      var currDirectory = fps.getCurrWorkingDirectory();
      var somefileDirectory = currDirectory + "/test_dir/somedir/somemodule/somefile.js"

      fps.checkIfFileContainsString(somefileDirectory, 'TODO').then(function(res) {
          console.log('this is the result: ',res);
          assert.equal(res, true);
          done();
      })
  })

  it('promised readFile should return false for someotherfile.js', (done)=> {
      var currDirectory = fps.getCurrWorkingDirectory();
      var somefileDirectory = currDirectory + "/test_dir/somedir/somemodule/someotherfile.js"

      fps.checkIfFileContainsString(somefileDirectory, 'TODO').then(function(res) {
          console.log('this is the result: ',res);
          assert.equal(res, false);
          done();
      })
  })

})
