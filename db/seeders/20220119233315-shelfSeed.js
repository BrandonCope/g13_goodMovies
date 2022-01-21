'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Shelves', [
      {
        shelf_title: 'Favorite Star Wars Films',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shelf_title: 'Favorite Matrix Films',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shelf_title: 'My Favorite Films',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shelf_title: 'Favorite Sci-Fi Films',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shelf_title: 'My Films',
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shelf_title: 'Films',
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Shelves', null, {});
  }
};
