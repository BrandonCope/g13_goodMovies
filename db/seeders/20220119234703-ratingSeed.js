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
      {
        user_id: 2,
        movie_id: 6,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        movie_id: 7,
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        movie_id: 8,
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        movie_id: 9,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        movie_id: 10,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        movie_id: 11,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        movie_id: 12,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        movie_id: 13,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        movie_id: 14,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        movie_id: 15,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        movie_id: 16,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        movie_id: 17,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        movie_id: 18,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        movie_id: 19,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        movie_id: 20,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        movie_id: 21,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        movie_id: 22,
        rating: 3,
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
