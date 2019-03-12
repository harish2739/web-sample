var http = require('http');
var fs = require('fs');
var path = require('path')
var express = require('express');
var app = express();

app.set('view engine','ejs');
app.use('/assets',express.static('assets')) ;


app.get('/',function(req,res) {
	res.render('index');
	
});
var myFunction = function(request,response) {

	var url = request.url;
	switch(url){
		case '/':
		getStaticFileContent(response,'./index.html','html');
		break;
		default:
		response.writeHead(404,{'content-Type':'text/plain'});
		response.end('404 - Page not found.');
	}
}
http.createServer(myFunction ).listen(9099);
console.log('server running at http://localhost:9099')

function getStaticFileContent(response,filePath,contentType) {

	fs.readFile(filePath,function(error,data) {
		if(error) {
			response.writeHead(500, {'content-Type':'text/plain'});
			response.end('500 - Internal Server Error.');
		}
		if(data) {
			response.writeHead(200, {'content-Type':'text/html'});
			response.end(data);
		}
	});
}

