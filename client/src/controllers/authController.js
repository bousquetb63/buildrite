module.exports = {
  register () {
    res.send({
      message: `Hello ${req.body.email}`
    })
  }
}
