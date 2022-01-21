'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie_Shelf = sequelize.define('Movie_Shelf', {
    movie_id: DataTypes.INTEGER,
    shelf_id: DataTypes.INTEGER
  }, {});
  Movie_Shelf.associate = function (models) {
    // associations can be defined here

  };
  return Movie_Shelf;
};
