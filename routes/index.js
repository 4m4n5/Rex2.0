var express = require('express');
var router = express.Router();

// Requiring Mongo Client
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/testRex2';

/* GET home page. */
router.get('/', function(req, res, next) {
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    Rooms = db.collection('Rooms').find().toArray(function(err, data) {
      res.render('index', {
        title: 'Express',
        rooms: data,
      });
    });
    // Rooms.insert({
    //   RoomNo: "B319",
    //   Issue: "",
    //   Preference: "",
    //   Contact: {
    //     Email: "",
    //     Mobile: ""
    //   }
    // }, function() {
    //   // Do Something
    // });
  });
});



module.exports = router;
