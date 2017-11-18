module.exports = (app, Guide) => {
  app.get('/', function (req, res) {
    res.render('index', {
      user: req.user
    });
  });

  app.get('/account', function (req, res) {
    res.render('account', {
      user: req.user
    });
    console.log(req.user);
  });

  app.get('/tierlist', function (req, res) {
    res.render('tierlist', {
      user: req.user
    });
  });

  app.get('/guides', function (req, res) {
    res.render('guides', {
      user: req.user
    });
  });

  app.get('/createguide', function (req, res) {
    res.render('createguide', {
      user: req.user
    });
  });

  app.post('/register', function (req, res) {
    res.send(`${req.body.email} is registered`);
  });

  app.post('/createguide', function (req, res) {

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
    })
  })
}
