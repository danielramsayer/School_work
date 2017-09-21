var fs = require('fs');

//var contents = fs.readFileSync('01_app.js').toString();
//console.log(contents);

fs.readFile('01_app.js', function (err, buf) {
  console.log(buf.toString());
});
