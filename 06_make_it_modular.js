var module = require('./06_module.js');

module(process.argv[2], process.argv[3], function(err, data){
  if (err) console.error("error:", err);
  else {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
    };
  }
})
