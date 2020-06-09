var express = require('express');
var brokerSF = require('./server/brokers/salesforcebroker');
var brokerBS = require('./server/brokers/blobstoragebroker');
var brokerDS = require('./server/brokers/sqlserverbroker');


var sf,bs,ds = '';

var app = express();

app.get('/', function (req, res) {
   res.send('Salesforce: ' + sf + ',Blob Storage: ' + bs + ',SQL-Server:' + ds);
})

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port

   console.log('Setting up listener now on port ', port);
   
   console.log("Example app listening at http://%s:%s", host, port)

   
   bs = brokerBS.connect2BS();
   
   sf = brokerSF.connect2SF();

   ds = brokerDS.connect2SQLServer();

})





  

 






 
