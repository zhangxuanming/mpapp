var appSettings = require('../env');

// var request = require('request');

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

var forExport = {
    getAllSkus:mpFunction
}

module.exports = forExport;