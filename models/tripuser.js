'use strict';
module.exports = (sequelize, DataTypes) => {
  const TripUser = sequelize.define('TripUser', {
    user_id: DataTypes.INTEGER,
    trip_id: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  TripUser.associate = function(models) {
    // associations can be defined here
  };
  return TripUser;
};