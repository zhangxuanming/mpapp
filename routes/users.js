var express = require('express');
var router = express.Router();
var userController = require('../Controller/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/a', function(req, res, next) {
  res.send('respond with a resource with a');
});

router.get('/hi',function(req,res,next){
  var msg = userController.sayHi('bruce');
  res.send(msg);
});

module.exports = router;
