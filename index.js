const http = require('http');
const app = http.createServer();
const port = 3000;

const colors = require('colors');

app.on('request', function(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (req.method === 'GET' && req.url === '/') {
    res.write('Hello World!');
    res.end();
  } else {
    res.statusCode = 404;
    res.write('Page not found...');
    res.end();
  }
});

app.listen(port, function() {
  console.log(`Server is running on port ${port}`.green);
});
