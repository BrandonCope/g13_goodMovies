'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Ratings', [
     {
     user_id: 1,
     movie_id: 1,
     rating: 5,
     createdAt: new Date(),
     updatedAt: new Date(),
     },
     {
      user_id: 2,
      movie_id: 2,
      rating: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      user_id: 3,
      movie_id: 3,
      rating: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      user_id: 4,
      movie_id: 4,
      rating: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      user_id: 5,
      movie_id: 5,
      rating: 5,
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
   return queryInterface.bulkDelete('Ratings', null, {});
  }
};
