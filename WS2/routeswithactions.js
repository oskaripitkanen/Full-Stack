var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){
    if(req.url === '/'){
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end('Nothing here to see\n');
    } 


    //reading html file
    else if (req.url === '/frontpage'){
        fs.readFile('frontpage.html', function (err, data){
            if (err){
                res.writeHead(404, {'Content-type': 'text/plain'});
                res.write("Error: file not found");
                
            } else {
                res.writeHead(200, {'Content-type': 'text/html'});
                res.write(data);
            }
            res.end();
        });
     }
     else if (req.url === '/contact'){
        fs.readFile('contact.html', function (err, data){
            if (err){
                res.writeHead(404, {'Content-type': 'text/plain'});
                res.write("Error: file not found");
                
            } else {
                res.writeHead(200, {'Content-type': 'text/html'});
                res.write(data);
            }
            res.end();
        });
     }
     else if (req.url === '/plaintext'){
     var data = fs.readFileSync('file_1.txt');
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        console.log(data.toString());
        res.end();
     } 
     else if (req.url === '/json'){
        fs.readFile('sampledata.json', function (err, jsondata){
            if (err){
                res.writeHead(404, {'Content-type': 'text/plain'});
                res.end("Error: file not found");
            } else {
                res.writeHead(200, {'Content-type': 'text/json'});
                res.end(jsondata);
            }
        });
     }
 
    
}).listen(3000);
console.log('Server running at http://localhost:3000/');