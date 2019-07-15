var fs = require('fs');
var path = require('path');

var getCurrWorkingDirectory = function() {
    var currCWD = process.cwd();
    return currCWD;
}

var readFilesInDir = function(directory, arrayResults) {
    fs.readdir(directory, function (err, files) {
      if (err) return arrayResults(error);
      var i = 0;
      (function next() {
          var file = files[i++];
          if(!file) return arrayResults(null);

          file = directory + '/' + file;
          fs.stat(file, function (error, stat) {
            if (error) {
              console.error("Error stating file.", error);
              return;
            }

            else if (stat && stat.isDirectory()) {
                readFilesInDir(file, function (error) {
                    next();
                });
            } else {
                // if file is a file
                // TODO: readFile function to check if it contains todo
                arrayResults.push(file)
                next();
            }
        });
    })();
});
}

var containsSearchString = false;
var checkIfFileContainsString = function(filePath, searchString) {
    fs.readFile(filePath, "utf8", function (err, data) {
      if (err) throw err;

      if(data.includes(searchString)){
          containsSearchString = true;
      }
      else containsSearchString = false;

      return containsSearchString;
  });
}

module.exports.getCurrWorkingDirectory = getCurrWorkingDirectory;
module.exports.readFilesInDir = readFilesInDir;
module.exports.checkIfFileContainsString = checkIfFileContainsString;
