'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    movie_title: DataTypes.STRING,
    genre: DataTypes.STRING,
    director: DataTypes.STRING,
    main_actors: DataTypes.STRING,
    release_year: DataTypes.INTEGER,
    cover: DataTypes.TEXT
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};