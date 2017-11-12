var express = require('express');
var router = express.Router();
var passport = require('passport');
var fs = require('fs');

router.get('/', function(req, res){
    res.render('index', { user: req.user });
});

fs.readdirSync(__dirname + '/models').forEach(function(filename){
  if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
})

mongoose.model('guides', {title:String,  champion:String, aboutyou:String, guide:String, playstyle:String});

router.get('/guides', fucntion (req, res) {
  mongoose.model('guides').find(function(err, users) {
      // console.log(users)
    res.send(guides);
  });
});

router.get('/guides/:title/:champion/:aboutyou/:guide/:playstyle', function(req, res) {
  mongoose.model('guides').find({user: req.params.userId}, function(err, posts) {
    mongoose.model('guides').populate(guides, {path: 'user'}, function(err, posts) {
      res.send(posts);
    });
  });
});

router.get('/auth/steam',
  passport.authenticate('steam', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/auth/steam/return',
  passport.authenticate('steam', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user });
  console.log(req.user);
});

router.get('/tierlist', function(req, res) {
  res.render('tierlist', { user: req.user });
});

router.get('/guides', function(req, res) {
  res.render('guides', {user: req.user});
});

router.get('/createguide', function(req, res) {
  res.render('createguide', {user: req.user});
});



function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}

module.exports = router;
