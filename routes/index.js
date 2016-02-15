var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  var myArt = [];
  var myArtists = [];
  myArtists = appdata.speakers;
  appdata.speakers.forEach(function(item){
    myArt = myArt.concat(item.artwork);
  });
  res.render('index', {
    title: 'Home',
    artwork: myArt,
    artists: myArtists,
    page: 'home'
  });
});

router.get('/speakers', function(req, res, next) {
  var myArt = [];
  var myArtists = [];
  myArtists = appdata.speakers;
  appdata.speakers.forEach(function(item){
    myArt = myArt.concat(item.artwork);
  });
  res.render('speakers', {
    title: 'Speakers',
    artwork: myArt,
    artists: myArtists,
    page: 'artistList'
  });
});

router.get('/speakers/:speaker_id', function(req, res, next) {
  var myArt = [];
  var myArtists = [];
  appdata.speakers.forEach(function(item){
    if(item.shortname == req.params.speaker_id){
      myArt = myArt.concat(item.artwork);
      myArtists.push(item);
    }
  });
  res.render('speakers', {
    title: 'Speakers',
    artwork: myArt,
    artists: myArtists,
    page: 'artistDetail'
  });
});

module.exports = router;
