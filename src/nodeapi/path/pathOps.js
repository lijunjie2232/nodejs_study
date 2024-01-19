const path = require('path');

// __dirname always store abs path of current js file
console.log(__dirname);
// __dirname always store filename of current js file
// only the first param would be a abs path
console.log(path.resolve(__dirname, 'pathOps.js'));

// return path seperator in current os
console.log(path.sep);

// return a file object, path of file should be valid
console.log(path.parse('F:\\code\\node\\nodejs_study\\src\\nodeapi\\path\\pathOps.js'));

// get filename from a path
console.log(path.basename(__filename));

// get dir abs path from a path
console.log(path.dirname(__filename));

// get suffix of file, return null if not has
console.log(path.extname(__filename));
