module.exports = function(sequelize, DataTypes) {
  var Summoner = sequelize.define("summoners", {
    summonerName: DataTypes.STRING,
    summonerLevel: DataTypes.Integer,
    role: DataTypes.STRING,
    lane: DataTypes.STRING
  });
  return Summoner;
};
