const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Welcome to our home page!</h1>');
    }

    if (req.url === '/about') {
        res.end('Here is oir history');
    }
    res.end(`<h1>Oops!</h><p>We can\'t seem to find page you are looking for...</p><a href=' / '>back home</a>`)

})

server.listen(5000);