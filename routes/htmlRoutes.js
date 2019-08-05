var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Summoner.findAll({}).then(function(dbSummoners) {
      res.render("index", {
        summoners: dbSummoners
      });
    });
  });

  app.get("/summoners /:id", function(req, res) {
    db.Summoner.findOne({ where: { id: req.params.id } }).then(function(dbSummoner) {
      res.render("index", {
        summoners: dbSummoner
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
