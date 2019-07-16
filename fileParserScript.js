const fs = require('fs');
const path = require('path');

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


//
//FileParser Script for command line input
//
var standard_input = process.stdin;
standard_input.setEncoding('utf-8');
console.log("\n========================================\nPlease input data as follows:\n1. Paste pathname of file directory to search in\n2. Input 'exit' to end the script.\n========================================");

// When user input data and click enter key.
standard_input.on('data', function (data) {
    if(data === 'exit\n'){
        console.log("\nScript terminated, thank you for using this script coded by AkaHitsuji :)");
        process.exit();
    }else
    {
        var fileDirectoryPath = data.replace(/\r?\n|\r/g, "");
        var filePathsWithSearchString;
        readFilesInDir(fileDirectoryPath, function(err, results) {
          if (err) throw err;
          filePathsWithSearchString = results;

          console.log("\n\nSearch Completed!!!\nThese are the files that contain the search string 'TODO':");
          filePathsWithSearchString.forEach(function(filePath) {
              console.log(filePath);
          });

          console.log("\n========================================\nPlease input data as follows:\n1. Paste pathname of file directory to search in\n2. Input 'exit' to end the script.\n========================================");
        });

    }
});


module.exports.getCurrWorkingDirectory = getCurrWorkingDirectory;
module.exports.readFilesInDir = readFilesInDir;
module.exports.checkIfFileContainsString = checkIfFileContainsString;
