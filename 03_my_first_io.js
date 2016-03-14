var fs = require('fs');

var string = fs.readFileSync(process.argv[2], 'utf8');

// var string = buf.toString();

var array = string.split('\n');

var count = array.length - 1;

console.log(count);