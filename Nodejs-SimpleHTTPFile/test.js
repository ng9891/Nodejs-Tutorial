///simple HTTP server with File
var http = require('http');
var fs = require('fs');

//404 Response
function send404Response(response){
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("Error 404: PAGE IS NOT FOUND. GET REKT");
	response.end();
}

//Handle user Request
function onRequest(request, response){
	if( request.method == 'GET' && request.url == '/'){ ///if GET and Homepage
		response.writeHead(200,{"Content-Type":"text/html"});
		fs.createReadStream("./index.html").pipe(response);
		
	}
	else{
		send404Response(response);
	}
	
}

http.createServer(onRequest).listen(8888);//onRequest is func above.
console.log("Server is now Running");
