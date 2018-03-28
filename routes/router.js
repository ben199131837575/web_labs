


//point to expess package
var expressServer = require('express');

var router = expressServer.Router();

// create a simple request response!!
router.get('/', function(req, res){
  // send this on request
  res.send('Sup Earth');
});

// do this for a post request
router.post('/', function(req, res){
  // do something?
  res.sendStatus(405);
});


module.exports = router;
