var fs = require('fs');

var data = fs.readFile(process.argv[2], 'utf8', function(err, fileContents){
  var a = fileContents.split('\n');
  console.log(a.length - 1);
});