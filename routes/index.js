var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res){
    res.render('index', { user: req.user });
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
});

router.get('/tierlist', function(req, res) {
  res.render('tierlist', { user: req.user });
});

router.get('/guides', function(req, res) {
  res.render('guides', {user: req.user});
});

router.get('/createguide', function(req, res) {
  res.render('guides', {user: req.user});
});



function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}

module.exports = router;
