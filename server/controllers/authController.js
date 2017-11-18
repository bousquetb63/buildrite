var User = require('../models/users')

module.exports = {
  register (req, res) {
      var newUser = User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      });

      newUser.save(function(err) {
        if (err) {
          res.status(400).send({
            error: 'This email account is already in use!'
          })
        } else {
          res.send(newUser.toJSON())
          console.log('User Made!')
        }
      })
  }
}
