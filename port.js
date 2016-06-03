/*var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Server is star.....t\n');
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');*/

var express = require('express');

var app = express();

app.get('/wines', function(req, res) {
    res.send([{name:'Amit'}, {name:'Kumar'}]);
});
app.get('/wines/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});

app.listen(3000);
console.log('Listening on port 3000...');