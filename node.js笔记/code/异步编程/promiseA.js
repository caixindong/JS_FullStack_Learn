var Q = require('q');

var promisfy = function(res) {
  var deferred = Q.defer();
  var result = '';
  res.on('data',function(chunk){
    result =+ chunk;
    deferred.process(chunk);
  });
  res.on('end',function(){
    deferred.resolve(result);
  });
  res.on('error',function(err){
    deferred.reject(err);
  });
  return deferred.promise;
};


var http = require('http');

var options = {
  host: 'www.google.com',
  port:80,
  path:'/upload',
  method:'POST'
};

var req = http.request(options,function(res){
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  promisfy(res).then(function(){
    //Done
  },function(err){
    //Error
  },function (chunk) {
    //process
  });
});
