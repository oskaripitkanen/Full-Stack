const { table } = require('console');
var http = require('http');

http.createServer(function (req, res){
    if(req.url === '/'){
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end('Hello world\n');
    }
    if(req.url === '/helloworld'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end('<h1>Hello world in HTML</h1>');
        }
        else if(req.url === '/homepage'){
            res.writeHead(200, {'Content-type': 'text/html'});
            res.end('<h1>THIS IS THE HOMEPAGE</h1>');
        }    
    }


).listen(3000);
