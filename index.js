const http = require('http');
const fs = require('fs');
const app = http.createServer();
const port = 3000;

const colors = require('colors');

app.on('request', function(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (req.method === 'GET' && req.url === '/') {
    fs.readFile('src/index.html', 'utf-8', function(err, data) {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile('src/404.html', 'utf-8', function(err, data) {
      if (err) throw err;
      res.statusCode = 404;
      res.write(data);
      res.end();
    });
  }
});

app.listen(port, function() {
  console.log(`Server is running on port ${port}`.green);
});
