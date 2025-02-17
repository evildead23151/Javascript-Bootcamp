// Import the built-in 'http' module
const http = require('http');

// Create a server that listens for requests
const server = http.createServer((req, res) => {
  res.statusCode = 200;  // Status code 200 means OK
  res.setHeader('Content-Type', 'text/plain');  // Set the content type of the response
  res.end('Hello, Node.js!\n');  // Send a response
});

// Listen on port 3000
server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
