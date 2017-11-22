var Guide = require('../models/guides')

module.exports = {
  post (req, res) {
    var newGuide = Guide({
      title: req.body.title,
      author: req.body.author,
      champion: req.body.champion,
      aboutYou: req.body.aboutYou,
      guide: req.body.guide,
      advancedGuide: req.body.advancedGuide,
      orbControl: req.body.orbControl,
      difficulty: req.body.difficulty,
      strengths: req.body.strengths,
      weaknesses: req.body.weaknesses,
      playstyle: req.body.playstyle,
    });

    newGuide.save(function(err) {
      if (err) throw err;
      console.log(newGuide)
      console.log('Guide Made')
    })
  },
  index (req, res) {
    // Gets 5, that are not hidden and sorted by create date
    var getTen = Guide.find({hidden: false}).sort({'created_at': -1}).limit(5);
    getTen.exec(function(err, guides) {
      if (err) {
        console.log(err)
        return res.send('Error occured when retrieving guides!');
      }
      // object of all the users
      res.send(guides);
    });
  }
}
