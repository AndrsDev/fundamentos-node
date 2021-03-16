const http = require('http')


const router = (req, res) => {
  console.log('New request!')
  switch (req.url) {
    case '/hello':
      res.writeHead(200, { 'Content-Type': 'text/plain'});
      res.write('Hello world from Node.js')
      res.end();
      break;
  
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain'});
      res.write('Resource not found.')
      res.end();
      break;
  }
}


http.createServer(router).listen(3000)
console.log('Listenting on http://localhost:3000')