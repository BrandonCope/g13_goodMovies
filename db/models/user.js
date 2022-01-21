'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    hashed_password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    const columnMapping = {
      through: "Watch",
      otherKey: 'movie_id',
      foreignKey: 'user_id'
    }
    User.belongsToMany(models.Movie, columnMapping);

    User.hasMany(models.Rating, { foreignKey: 'user_id' });
    User.hasMany(models.Review, { foreignKey: 'user_id' });
  };
  return User;
};
