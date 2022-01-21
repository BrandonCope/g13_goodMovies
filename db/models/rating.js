'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    user_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {});
  Rating.associate = function (models) {
    // associations can be defined here
    Rating.belongsTo(models.User, { foreignKey: 'user_id' });
    Rating.belongsTo(models.Movie, { foreignKey: 'movie_id' });
  };
  return Rating;
};
