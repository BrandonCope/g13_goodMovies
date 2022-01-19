'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define('Shelf', {
    shelf_title: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Shelf.associate = function(models) {
    // associations can be defined here
  };
  return Shelf;
};