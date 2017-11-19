const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      username: Joi.string(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      ),
      repassword:Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    if (req.body.password != req.body.repassword) {
      res.status(400).send({
        error: `Passwords did not match!`
      })
    }
    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch(error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Email address invalid'
          })
          break
        case 'username':
          res.status(400).send({
            error: 'Username invalid'
          })
        case 'password':
          res.status(400).send({
            error: 'Password must contain only: lowercase, uppercase, numbers and must be atleast 8 characters long'
          })
          break
        default:
        res.status(400).send({
          error: 'Invalid registration information'
        })
          break
      }
    } else {
      next()
    }
  }
}
