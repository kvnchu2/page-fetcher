const argv = process.argv.slice(2);


const request = require('request');
request(argv[0], (error, response, body) => {
  fs = require('fs');
  fs.writeFile(argv[1], body, function (err) {
    if (err) return console.log(err);
    console.log('Downloaded and saved 3261 bytes to ./index.html');
  });
});

