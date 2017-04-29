//Using Connect module
var connect = require('connect');
var http = require('http');

var app = connect();

function doFirst(request,response,next){
	console.log("Request is made by USER1");
	next();
	
}

function doSecond(request,response,next){
	console.log("Request is made by USER2");
	next();
}

function profile (request,response){
	console.log("Request profile is made");
	
}

function forum (request,response){
	console.log("Request Forum is made");
	
}

app.use(doFirst);
app.use(doSecond);
app.use('/profile',profile); //when user request profile dir
app.use('/forum',forum);

http.createServer(app).listen(8888);
console.log("server is running...");