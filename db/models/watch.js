'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watch = sequelize.define('Watch', {
    user_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER
  }, {});
  Watch.associate = function (models) {
    // associations can be defined here
  };
  return Watch;
};
