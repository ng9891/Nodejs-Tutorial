///simple HTTP server
var http = require('http');

function onRequest(request, resp){
	console.log("User made a Request " + request.url);
	resp.writeHead(200, {"Context-Type": "text/plain"});
	//writeHead(statusCode, reason, obj);
	resp.write("Hello there. Welcome");
	resp.end();
	
	
}

http.createServer(onRequest).listen(8888);//onRequest is func above.
console.log("Server is now Running");
