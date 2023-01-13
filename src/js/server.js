const http = require('http');
const app = require('./index.js');

const port = 4000;

const server = http.createServer(app);

server.listen(port);