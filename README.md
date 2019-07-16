# FileParserScript
File Parser that will take in a directory and search through all files in that directory for the provided keyword

# Usage Instructions
- Clone this project onto your machine.
- Navigate to the root directory where this project is stored and run the following command to install all dependencies for this project:
```
npm install
```
- In the root of the cloned project, run the following command to execute the script:
```
node fileParserScript.js
```
- Follow the instructions as stated here:

========================================

Please input data as follows:
1. Paste pathname of file directory to search in
2. Input 'exit' to end the script.

========================================

- Input 'exit' to end the script. Otherwise copy and paste the pathname of the directory to search in.
- The script should return you a list of paths to the files containing 'TODO'

# Tests
Tests are stored in the test folder. Mocha was used for tests. To run the tests, cd to the root directory and run the following command to run the tests:
```
npm tests
```

# Things to note
- There is a test_dir in this project which contains two files which have 'TODOs' in them:
1. /somedir2/anotherdir/index.js
2. /somedir/somemodule/somefile.js

You may run the code to compare results by passing in the test_dir pathname to the script.
