'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movie_title: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      genre: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      director: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      main_actors: {
        allowNull: false,
        type: Sequelize.STRING
      },
      release_year: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      cover: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      summary: {
        allowNull: false,
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('Movies');
  }
};
