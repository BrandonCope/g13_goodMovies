'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define('Shelf', {
    shelf_title: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Shelf.associate = function (models) {
    const columnMapping = {
      through: "Movie_Shelf",
      otherKey: 'movie_id',
      foreignKey: 'shelf_id'
    }
    Shelf.belongsToMany(models.Movie, columnMapping);
  };
  return Shelf;
};
