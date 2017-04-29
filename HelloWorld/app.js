var http = require ('http');
var fs = require ('fs');
/*
//Simple Hello World
function onRequest(request,response){
	response.writeHead(200,{'Content-Type':"text/plain"});
	response.write("HELLO and WELCOME");
	response.end("\nThis is another message");

}

http.createServer(onRequest).listen(8888);
console.log("Server is running");

*/

//Extended Hello world
http.createServer(function(request,response){
	var name = require('url').parse(request.url, true).query.name;
	//Parse the request URL where name = some var and put it into 'name' variable. 
	
	if (name === undefined) 
		name = 'world';
	
	if (name == 'burningbird'){
		var file = 'test.png';
		fs.stat(file,function(err, stat){ //fs.stat(path, callback)
			if(err){ //if img not found
				console.error(err); //sends error into the console
				response.writeHead(200,{'Content-Type':'text/plain'});
				response.end("Sorry, no hot grill for you");
			}
			else{  //get img and post
				var img = fs.readFileSync(file); //read img Sync
				response.contentType = 'image/png';
				response.contentLenght = stat.size;
				response.end(img, 'binary');
			}
		});
		
	}
	else{	//name is undefined
		response.writeHead(200,{'Content-type':'text/plain'});
		response.end('Hello ' + name + '\n');
	}
	
}).listen(8888);

console.log("Server is running");
