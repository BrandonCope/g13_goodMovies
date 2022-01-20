'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Movies', [
      {
        movie_title: "Star Wars: Episode IV - A New Hope",
        genre: "Sci-Fi",
        director: "George Lucas",
        main_actors: "Mark Hamill, Carrie Fisher, Harrison Ford",
        release_year: "1977",
        cover: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        summary: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_title: 'The Matrix',
        genre: 'Sci-Fi',
        director: 'Lana Wachowski, Lilly Wachowski',
        main_actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
        release_year: 1999,
        cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MOU9bwdtLj5bMlHioRxzkr2HEyll3bm1qab6D71WulrKJrtY',
        summary: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Star Wars: Episode VI - Return of the Jedi",
        genre: "Sci-Fi",
        director: "George Lucas",
        main_actors: "Mark Hamill, Carrie Fisher, Harrison Ford",
        release_year: "1983",
        cover: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/f38cb38707f05dc86f483b07c215c7dd_a1fb33f9-f075-438f-bc49-2e8c2a2e2d02_500x.jpg?v=1573653657",
        summary: "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_title: "Star Wars: Episode V - The Empire Strikes Back",
        genre: "Sci-Fi",
        director: "George Lucas",
        main_actors: "Mark Hamill, Carrie Fisher, Harrison Ford",
        release_year: "1980",
        cover: "https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg",
        summary: "Star Wars: Episode V - The Empire Strikes BAfter the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_title: "Star Wars: Episode I - The Phantom Menace",
        genre: "Sci-Fi",
        director: "George Lucas",
        main_actors: "Mark Hamill, Carrie Fisher, Harrison Ford",
        release_year: "1999",
        cover: "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
        summary: "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_title: "Star Wars: Episode II - Attack of the Clones",
        genre: "Sci-Fi",
        director: "George Lucas",
        main_actors: "Mark Hamill, Carrie Fisher, Harrison Ford",
        release_year: "2002",
        cover: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ab770742e03f7cdeebe9e81aec488af8_98143a98-2c08-4d9e-9956-38dce70c738d_400x.jpg?v=1573591438",
        summary: "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi investigates an assassination attempt on the senator and discovers a secret clone army crafted for the Jedi.",
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
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
