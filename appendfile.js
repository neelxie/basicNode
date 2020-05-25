var fs = require('fs');

// the append file

fs.appendFile('mynewfile1.txt', 'Greatest Coder Ever!', function (err) {
  if (err) throw err;
    console.log('File Saved!');
});