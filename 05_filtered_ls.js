var fs = require('fs')
var path = require('path')

var data = fs.readdir(process.argv[2], function(err, list){
  // var regEx = new RegExp("."+process.argv[3]);
  list.forEach(function(i){
    // console.log(i);
    if (path.extname(i) === '.'+process.argv[3]) {
      console.log(i);
    }
  });
});