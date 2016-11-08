var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    var queryData = url.parse(request.url, true).query;
    response.writeHead(200, {"Content-Type": "text/plain"});
    if(!queryData.fullname) {
        response.end('fullname :(');
    } else {
        var name = queryData.fullname.split(' ')
        if(name.length > 3 ) return response.end('Invalid fullname');
        var result = ''
        if (name[0]) result += name[0]+' '
        if (name[1]) result += name[1][0]+'. '
        if (name[2]) result += name[2][0]+'.'

        response.end(result);
    }

});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);