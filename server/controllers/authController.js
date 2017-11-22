var User = require('../models/users')
const jwt = require('jsonwebtoken')
var settings = require('../settings');
function jwtSignUser (user) {
  const ONE_WEEK = 60* 60 * 24 * 7
  return jwt.sign(user, settings.private.auth.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  register (req, res) {
      var newUser = User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      });

      newUser.save(function(err) {
        if (err) {
          res.status(400).send({
            error: `Email or Username is already in use!`
          })
        } else {
          const userJson = newUser.toJSON()
          res.status(200).send({
            user: userJson,
            token: jwtSignUser(userJson)
          })
        }
      })
  },
  login (req, res) {
    if (req.body.username === '') {
      return res.status(403).send({
        error: `Please enter a username`
      })
    }
    if (req.body.password === '') {
      return res.status(403).send({
        error: `Please enter a password`
      })
    }
    User.find({ username: req.body.username }, function(err, user) {
      if (err) {
        console.log(err)
        return res.status(403).send({
          error: `The login information is incorrect`
        })
      }
      const isPasswordValid = req.body.password === user[0].password
      if(!isPasswordValid) {
        return res.status(403).send({
          error: `The login information is incorrect`
        })
      }
      const userJson = user[0].toJSON()
      res.status(200).send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    })
  }
}
