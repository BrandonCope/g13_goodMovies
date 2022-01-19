'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Users', [{
      firstName: "Demo",
      lastName: "User",
      email: "demo@user.com",
      hashed_password: '$2a$10$A6ViZvc7R5/DvyccyI80w.e9aTwNBpvQ2T0OKrAyQuXlhTFNmWlIG',
      createdAt: new Date(),
      updatedAt: new Date(),
        }],
      {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
