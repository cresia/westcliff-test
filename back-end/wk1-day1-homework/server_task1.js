const http = require('http');

//no need this when using server.listen(port number)
// const hostname = 'localhost';
// const port = 5000;

//---- use this if there is another file path need to connect to the server such as home.html ---
// const path = require('path');
// const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><h2>Home Page.</h2></body></html>');
    res.end();
  }
  else if (req.url == "/about") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h2>About Page.</h2></body></html>');
    res.end();

  } else if (req.url == "/contact") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h2>Contact Page.</h2></body></html>');
    res.end();
  } else {
    res.end("Invalid Request!")
  }
});

server.listen(5000);
