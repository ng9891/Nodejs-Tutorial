var http = require ('http');
var fs = require ('fs');
/*
function onRequest(request,response){
	response.writeHead(200,{'Content-Type':"text/plain"});
	response.write("HELLO and WELCOME");
	response.end("\nThis is another message");

}

http.createServer(onRequest).listen(8888);
console.log("Server is running");

*/

http.createServer(function(request,response){
	var name = require('url').parse(request.url, true).query.name;
	
	if (name === undefined) 
		name = 'world';
	
	if (name == 'burningbird'){
		var file = 'test.png';
		fs.stat(file,function(err, stat){
			if(err){
				console.error(err);
				response.writeHead(200,{'Content-Type':'text/plain'});
				response.end("Sorry, no hot grill for you");
			}
			else{
				var img = fs.readFileSync(file);
				response.contentType = 'image/png';
				response.contentLenght = stat.size;
				response.end(img, 'binary');
			}
		});
		
	}
	else{
		response.writeHead(200,{'Content-type':'text/plain'});
		response.end('Hello ' + name + '\n');
	}
	
	
}).listen(8888);

console.log("Server is running");
