'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.DATE,
    meet_point: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    max: DataTypes.INTEGER,
    user_id: DataTypes.STRING
  }, {});
  Trip.associate = function(models) {
    Trip.hasMany(models.TripUser, { foreignKey : 'user_id'})
    
    Trip.belongsToMany(models.User, {
      through: 'TripUser',
      foreignKey : 'user_id'
    })

  };
  return Trip;
};