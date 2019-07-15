var fs = require('fs');
var path = require('path');

var getCurrWorkingDirectory = function() {
    var currCWD = process.cwd();
    return currCWD;
}

module.exports.getCurrWorkingDirectory = getCurrWorkingDirectory;
