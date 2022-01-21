'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Reviews', [
      {
        user_id: 1,
        movie_id: 1,
        review_title: "What an amazing movie!",
        summary: "I loved this movie. The story was great!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        movie_id: 2,
        review_title: "It was ok!",
        summary: "I liked other movies from this director better.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        movie_id: 3,
        review_title: "The acting was great!",
        summary: "I think they did a really good job casting this movie. The acting was spectacular!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        movie_id: 4,
        review_title: "I liked it",
        summary: "Definitely enjoyed watching this movie.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        movie_id: 5,
        review_title: "I recommend",
        summary: "I recommend watching this movie. It was lovely.",
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
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
