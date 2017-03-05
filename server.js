// var express = require('express');
// var app = express();
// app.get('/getSomething', function(req,res){
// res.send('{"id": 1,"name":"Matt", "band":"BBQ Brawlers"}');
// })
// app.get('/getSomethingAgain',function(req,res){
//     res.send('[{"firstname":"Syed","lastname":"Abiddin","ssn":"002-00-0202"},{"firstname":"Shareef","lastname":"Syed","ssn":"002-00-0203"}]');
// })
// app.get('/getSomeJson',function(req,res){
//     var myJson=[{"firstname":"Syed","lastname":"Abiddin","ssn":"002-00-0202"},{"firstname":"Shareef","lastname":"Syed","ssn":"002-00-0203"}];
//     res.send(JSON.stringify(myJson));
// })
// var server= app.listen(8081,function(){
// var host = server.address().address;
// var port = server.address().port;
// console.log("The Server is listening at %s %s",server,port);
// })

var express = require('express'),
mongoose = require('mongoose'),
fs = require('fs');
var bodyParser = require('body-parser');
var mongoUri = 'mongodb://localhost/noderest';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});
process.env.NODE_ENV = 'dev'
var app = express();
app.use(bodyParser.json());
//app.use(express.bodyParser());


// if(process.env.NODE_ENV === 'dev') {
//  app.use(express.bodyParser());
//   // additional prod environemtn configuration
// }

// app.configure(function(){
//   app.use(express.bodyParser());
// });

require('./models/musician');

require('./routes')(app);

app.listen(3001);
console.log('Listening on port 3001...');