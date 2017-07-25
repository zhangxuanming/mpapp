'use strict';

// var testmodule = (function(my){
//     var s = 'hello';
//     my.hello = function(name){
//         console.log(s+' '+name);
//         return s+' '+name;
//     }
//     return my;
// }(testmodule || {}))

var test = function(){
    console.log(123);
}
var s = 'hello';
var testmodule = {
    hello:function hello(name) {
        console.log(s+' '+name);
        return s+' '+name;
    },
    test:function(){
        console.log(123);
    }
}
module.exports = testmodule;
