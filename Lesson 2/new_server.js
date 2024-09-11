var http = require('http');

var server = http.createServer(function (req, res){
    if(req.url === '/'){
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end('This is my nodemon trial\n');
    }
    if(req.url === '/blog'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end();
    }
}
);

var port = process.env.PORT || 3000;
server.listen(port);

console.log('Server running at http://localhost:3000/');