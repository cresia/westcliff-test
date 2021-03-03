var http = require('http');

//---- use this if there is another file path need to connect to the server such as home.html ---
var url = require('url');
var fs = require('fs');


const server = http.createServer((req, res) => {
  if (req.url == '/home') {
    fs.readFile('home.html', function(err, data){
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    })
  }
  else if (req.url == "/about") {
    fs.readFile('about.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    })
  } else if (req.url == "/contact") {
    fs.readFile('contact.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    })
  }
});

server.listen(5000);
