var express = require('express');

//var app = express.createServer(express.logger());
var app=express();
/* Change requires because createServer() is obsolete*/
var fs=require('fs');
var textBuffer=fs.readFileSync("index.html");
var text=textBuffer.toString();
app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
