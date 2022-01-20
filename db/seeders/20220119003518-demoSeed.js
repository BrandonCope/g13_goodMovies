'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Users', [
      {
        firstName: "Demo",
        lastName: "User",
        email: "demo@user.com",
        hashed_password: '$2a$10$A6ViZvc7R5/DvyccyI80w.e9aTwNBpvQ2T0OKrAyQuXlhTFNmWlIG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        email: "jdoe@user.com",
        hashed_password: '$2a$10$WOHBiaHtuDlKb6a5JH0faumg.yy.Jg21A8vS8dxXxUNgi5FsUj/ci',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Jack",
        lastName: "Hill",
        email: "jack@hill.com",
        hashed_password: '$2a$10$A9/QCrpFc4qdr67HeNtYausA8BwNDGCRXJsDZUBxbGBzBmQJ3Pwum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Jill",
        lastName: "Hill",
        email: "jill@hill.com",
        hashed_password: '$2a$10$KPNEKZu6iq.MuLSkXs4/NuL4l1QAJbFF9CzW6vd6WWMyWkrS/OjnK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Mary",
        lastName: "Poppins",
        email: "mcpoppins@lamb.com",
        hashed_password: '$2a$10$ueRDCkiDID9kuIZYNUZ/OOzNJ4q693u119lmYlJJ8UZo4pJRST7o2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
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
