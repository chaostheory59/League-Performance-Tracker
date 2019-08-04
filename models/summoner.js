module.exports = function(sequelize, DataTypes) {
    var Summoner = sequelize.define("Summoners", {
        summonerName: DataTypes.STRING,
        champion: DataTypes.INTEGER,
        lane: DataTypes.STRING
    });
    return Summoner;
};