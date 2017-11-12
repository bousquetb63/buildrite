var express = require('express');
var router = express.Router();
var passport = require('passport');
var Guide = require('../models/guides.js')
// var mongoose = require('mongoose')

router.get('/', function (req, res) {
  res.render('index', {
    user: req.user
  });
});

// fs.readdirSync(__dirname + '/models').forEach(function(filename){
//   if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
// })

// mongoose.model('guides', {title:String,  champion:String, aboutyou:String, guide:String, playstyle:String});

router.get('/guides/:title/:champion/:aboutyou/:guide/:playstyle', function (req, res) {
  // mongoose.model('guides').find({user: req.params.userId}, function(err, posts) {
  //   mongoose.model('guides').populate(guides, {path: 'user'}, function(err, posts) {
  //     res.send(posts);
  //   });
  // });

});

router.get('/auth/steam',
  passport.authenticate('steam', {
    failureRedirect: '/'
  }),
  function (req, res) {
    res.redirect('/');
  });

router.get('/auth/steam/return',
  passport.authenticate('steam', {
    failureRedirect: '/'
  }),
  function (req, res) {
    res.redirect('/');
  });

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/account', ensureAuthenticated, function (req, res) {
  res.render('account', {
    user: req.user
  });
  console.log(req.user);
});

router.get('/tierlist', function (req, res) {
  res.render('tierlist', {
    user: req.user
  });
});

router.get('/guides', function (req, res) {
  res.render('guides', {
    user: req.user
  });
});

router.get('/createguide', function (req, res) {
  res.render('createguide', {
    user: req.user
  });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

router.post('/createguide', function (req, res) {
  // console logging your result of your post by name in a object. You will utilize this route to add mongodb route and post to t he database.

//  console.log(req.body);

  var newGuide = Guide({
    title: req.body.title,
    champion: req.body.champion,
    aboutyou: req.body.about,
    guide: req.body.guide,
    playstyle: req.body.guide,
    steamID: req.body.steamID
  });

  newGuide.save(function(err) {
    if (err) throw err;
    console.log(newGuide)
    console.log('Guide Made')
    res.redirect(304, '/guides');
  })
})

module.exports = router;
