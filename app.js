const http = require('http');

const hostname = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

if (require.main === module) {
    server.listen(port, hostname, () => {
        const returnPort = server.address().port;
        console.log(`Server em http://${hostname}:${returnPort}/`);
    });
}

module.exports = server;
