'use strict';

const movie_shelf = require("./movie_shelf");

module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    movie_title: DataTypes.STRING,
    genre: DataTypes.STRING,
    director: DataTypes.STRING,
    main_actors: DataTypes.STRING,
    release_year: DataTypes.INTEGER,
    cover: DataTypes.TEXT,
    summary: DataTypes.TEXT,
  }, {});
  Movie.associate = function (models) {
    // associations can be defined here
    const columnMappingShelf = {
      through: "Movie_Shelf",
      otherKey: 'shelf_id',
      foreignKey: 'movie_id'
    }
    Movie.belongsToMany(models.Shelf, columnMappingShelf);

    const columnMappingWatch = {
      through: "Watch",
      otherKey: 'user_id',
      foreignKey: 'movie_id'
    }
    Movie.belongsToMany(models.User, columnMappingWatch);

    Movie.hasMany(models.Rating, { foreignKey: 'movie_id' });
    Movie.hasMany(models.Review, { foreignKey: 'movie_id' });
  };
  return Movie;
};
