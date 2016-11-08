var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
  var queryData = url.parse(request.url, true).query;
  response.writeHead(200, {"Content-Type": "text/plain"});

  var a = (queryData.a) ? parseInt(queryData.a) : 0
  var b = (queryData.b) ? parseInt(queryData.b) : 0
  var result = a + b
  response.end(result.toString());
  
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);