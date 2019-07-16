const fs = require('fs');
const path = require('path');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

var getCurrWorkingDirectory = function() {
    return __dirname;
}

var checkIfFileContainsString = (filePath, searchString)=> {
   return new Promise(function(resolve, reject) {
       var containsSearchString = false;
       fs.readFile(filePath, "utf8", function(err,data) {
           if (data.includes(searchString)) {
               containsSearchString = true;
           }
           resolve(containsSearchString);
       })
   })
}

var readFilesInDir = function(directory, finished) {
    var results = [];
    fs.readdir(directory, function (err, files) {
        if (err) return finished(err)

        var lengthOfFiles = files.length;
        if(!lengthOfFiles) return finished(null,results);
        files.forEach(function(file) {
            file = path.resolve(directory, file);
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    readFilesInDir(file, function(err, res) {
                        results = results.concat(res);
                        lengthOfFiles--;
                        if(!lengthOfFiles) finished(null,results);
                    });
                } else {
                    checkIfFileContainsString(file, 'TODO').then(function(res) {
                        if (res) results.push(file);
                        lengthOfFiles--;
                        if(!lengthOfFiles) finished(null,results);
                    })
                }
            });
        });
    });
};

module.exports.getCurrWorkingDirectory = getCurrWorkingDirectory;
module.exports.readFilesInDir = readFilesInDir;
module.exports.checkIfFileContainsString = checkIfFileContainsString;
