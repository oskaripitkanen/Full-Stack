var http = require('http');

var server = http.createServer(function(req, res){
    if (req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/json'});
        var data = require('./persons.json');
        res.write(JSON.stringify(data));
        res.end('this is end of JSON file\n');
    }
});

var port = process.env.PORT || 3000;
server.listen(port);

console.log('server running at http//:localhost:3000/');