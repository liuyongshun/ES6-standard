var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
// var mongoose = require('mongoose');
// var MongoClient = require('mongodb').MongoClient;
// var DB_URL = 'mongodb://liu:0902@127.0.0.1:27017/es6';
// 插入数据库
// var insertData = function (db, callback) {
//   // connected the collection of site
//   var collection = db.collection('es6');
//   // insert data
//   var data = [{'name': 'liu', 'url': 'www.cheatlys.info'}, {'name': 'yong', 'url': 'www.cheatlys.info'}];
//   collection.insert(data, function (err, result) {
//     if (err) {
//       console.log('Error:' + err);
//       return;
//     }
//     callback(result);
//   });
// };
// 查找数据库
// var findDocuments = function (db, callback) {
//   var collection = db.collection('es6');
//   collection.find({}).toArray(function (err, docs) {
//     console.log(docs);
//     callback(docs);
//   });
// };
// MongoClient.connect(DB_URL, function (err, db) {
//   if (err) {
//     console.log('Error:' + err);
//     return;
//   }
//   findDocuments(db, function () {
//     db.close();
//   });
// });
// =============================

// var express = require('express'),
//   app = express(),
//   port = process.env.PORT || 3000,
//   mongoose = require('mongoose'),
//   Task = require('./models/models'), //created model loading here
//   bodyParser = require('body-parser');

// // mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// MongoClient.connect('mongodb://liu:0902@127.0.0.1:27017/es6');


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// var routes = require('./routes/routes'); //importing route
// routes(app); //register the route


// app.listen(port);


// console.log('todo list RESTful API server started on: ' + port);

// ==========================
var mongoose = require('mongoose');
mongoose.connect('mongodb://liu:0902@127.0.0.1:27017/es6', {
  useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('mongoose opened!');
  var userSchema = new mongoose.Schema({
      name: String,
      url: String
    });
  var User = mongoose.model('es6', userSchema);

  // User.findOne({name:"WangEr"}, function(err, doc){
  //   if(err) console.log(err);
  //   else console.log(doc.name + ", password - " + doc.password);
  // });

  // var lisi = new User({
  //   name: 'LiSi',
  //   password: '123456'
  // });
  // lisi.save(function (err, doc) {
  //   if (err) console.log(err);
  //   else console.log(doc.name + 'saved');
  // });
  app.get('/', function (req, res) {
    User.find('liu', function (err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  });

});
app.listen(port);
