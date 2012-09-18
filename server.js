var http = require('http');
//var url = require('url');
//var qs = require('querystring');

var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    var method = request.method;
    console.log(method);
    response.write('{"httpMethod":"' + method + '"}');
    response.end();
});

server.listen(process.env.PORT);

console.log('Server is running.');
