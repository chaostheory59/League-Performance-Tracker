var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/summoners", function(req, res) {
    db.Summoner.findAll({}).then(function(dbSummoners) {
      res.json(dbSummoners);
    });
  });

  // Create a new example
  app.post("/api/summoners", function(req, res) {
    db.Summoner.create(req.body).then(function(dbSummoner) {
      res.json(dbSummoner);
    });
  });

  // Delete an example by id
  app.delete("/api/summoners/:id", function(req, res) {
    db.Summoner.destroy({ where: { id: req.params.id } }).then(function(dbSummoner) {
      res.json(dbSummoner);
    });
  });
};
