var express = require('express');
var router = express.Router();
var testm = require('../Controller/testmodule');
var path = require('path');
var appSettings = require('../env');
var mpAPI = require('../Module/skus');


router.use(function(req,res,next){
  console.log('middleware');
  next();
});
router.use(function(req,res,next){
  console.log('middleware1');
  next();
});
router.use(function(req,res,next){
  console.log('middleware2');
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',name:'Bruce' });
});

var mpFunction = function(req,res){
    var request = require('request');
    var options = {
        url: 'https://api.mysalemarketplace-sandbox.com/v1/merchant-skus/',
        headers: appSettings.apiHeader
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            // console.log(info);
            res.send(info);
        }else{
            console.log(error);
        }
    } 
    request(options, callback);
}

// router.use(express.static('public'));
router.get('/mp',function(req,res,next){
  // mpFunction(req,res);
  var n = mpAPI.getAllSkus(req,res);
});

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
};

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

router.get('/example/c', [cb0, cb1, mpFunction]);
router.get('/h',function(req,res){
  var nstr = testm.hello("bruce is the best");
  console.log(testm.test());
  res.send(nstr);
})

router.get('/test',function(req,res){
  res.render('test',{});
})


module.exports = router;
