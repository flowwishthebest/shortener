const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Hello, World!');
});

server.listen(3001, () => {
    console.log('The server running on http://localhost:3001');
});