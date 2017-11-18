module.exports = {
  createGuide (req, res) {
    var newGuide = Guide({
      email: req.body.title,
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
  }
}
