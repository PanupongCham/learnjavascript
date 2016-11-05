var express = require('express');
var app 	= express();
var port    = 5555;

app.use(express.static('public'));

function getHomePage(req,res){
	
	res.redirect('/index.html');
	
}
function getJavaScript(req,res){
	res.redirect('/java.html');
}

app.get('/', getHomePage);
app.get('/java',getJavaScript)

var server = app.listen(port,function(){
	console.log('Angular is running on port %d.', port);
});