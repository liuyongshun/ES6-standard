// var express = require('express');
// var app = express();
// var port = process.env.PORT || 3000;
// var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
// var Task = require('./models/models'); // created model loading here
// var bodyParser = require('body-parser');
var DB_URL = 'mongodb://liu:0902@127.0.0.1:27017/es6';

var insertData = function (db, callback) {
  // connected the collection of site
  var collection = db.collection('es6');
  // insert data
  var data = [{'name': 'liu', 'url': 'www.cheatlys.info'}, {'name': 'yong', 'url': 'www.cheatlys.info'}];
  collection.insert(data, function (err, result) {
    if (err) {
      console.log('Error:' + err);
      return;
    }
    callback(result);
  });
};

// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect(DB_URL);
MongoClient.connect(DB_URL, function (err, db) {
  if (err) {
    console.log('Error:' + err);
    return;
  }
  insertData(db, function (result) {
    console.log(result);
    db.close();
  });
});

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var routes = require('./routes/routes'); // importing route
// routes(app); // register the route

// app.listen(port);

// console.log('todo list RESTful API server started on: ' + port);
