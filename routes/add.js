var express = require('express');
var router = express.Router();
var website_url = 'http://localhost:3000/';

// Requiring Mongo Client
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/testRex2';

/* GET users listing. */
router.post('/', function(req, res) {
  var room_no = req.body.room_no;
  var issue = req.body.issue;
  var preference = req.body.preference;
  var email = req.body.email;
  var mobile = req.body.mobile;
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    Rooms = db.collection('Rooms');
    Rooms.insert({
      RoomNo: room_no,
      Issue: issue,
      Preference: preference,
      Contact: {
        Email: email,
        Mobile: mobile
      }
    }, function() {
      res.redirect(req.get('referer'));
    });
  });
});

module.exports = router;
