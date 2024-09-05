const { table } = require('console');
var http = require('http');

http.createServer(function (req, res){
    if(req.url === '/'){
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end('Hello world\n');
    }
    if(req.url === '/blog'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(`
            <html>
            
            
        <table border="1">
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
            </tr>
            <tr>
                <td>Matti meikäläinen</td>
                <td>Timotie 1, as 10</td>
                <td>Tampere</td>
            </tr>
            <tr>
                <td>Maija Virtanen</td>
                <td>Asematie 12</td>
                <td>kiljava</td>
            </tr>
        </table>
        </html>
        

         `);
        } 
}
).listen(3000);

console.log('Server running at http://localhost:3000/');