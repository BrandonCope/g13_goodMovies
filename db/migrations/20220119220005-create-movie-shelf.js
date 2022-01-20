'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Movie_Shelves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movie_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Movies" }
      },
      shelf_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Shelves" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movie_Shelves');
  }
};
