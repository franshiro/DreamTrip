'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.TripUser, { foreignKey : 'user_id'})
    
    User.belongsToMany(models.Trip, {
      through: 'TripUser',
      foreignKey : 'user_id'
    })

  };
  return User;
};