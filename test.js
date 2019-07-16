
//
//FileParser Script for command line input
//
var fileDirectoryPath;
readline.question('Please paste the pathname of the file directory you want to search in here:', (directoryPath) => {
  console.log('This is your file directory path: ${directoryPath}!');
  fileDirectoryPath = directoryPath;
  readline.close();
});

var filePathsWithSearchString;
readFilesInDir(fileDirectoryPath, function(err, results) {
  if (err) throw err;
  filePathsWithSearchString = results;
});

filePathsWithSearchString.forEach(function(filePath) {
    console.log(filePath);
});
