console.log("index.js executing");

//point to expess package
var expressServer = require('express');

//create web application using express
var app = expressServer();

var router = require('./routes/router');


app.use('/', router);
// the port we want to listen on
var port = 3000;

app.listen(port, function(){
  console.log('Listening on port ' + port);
});
