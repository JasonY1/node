var modu = require('./modu');

var dirname = process.argv[2];
var ext = process.argv[3];

modu(dirname, ext, function(err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});