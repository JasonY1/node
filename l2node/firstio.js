var fs = require('fs');
var fileName = process.argv[2];

file = fs.readFileSync(fileName);
contents = file.toString();

console.log(contents.split('\n').length -1 );