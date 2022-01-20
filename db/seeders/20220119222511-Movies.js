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
    genre: "Sci-Fi" ,
    director: "George Lucas",
    main_actors: "Mark Hamill, Carrie Fisher, Harrison Ford",
    release_year: "1983",
    cover: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FReturn_of_the_Jedi&psig=AOvVaw2f1d6ChJdNJutUw51TvWr1&ust=1642720688604000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJj01c35vvUCFQAAAAAdAAAAABAD",
    summary: "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    movie_title: "Star Wars: Episode V - The Empire Strikes Back",
    genre: "Sci-Fi" ,
    director: "George Lucas",
    main_actors: "Mark Hamill, Carrie Fisher, Harrison Ford",
    release_year: "1980",
    cover: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FThe_Empire_Strikes_Back&psig=AOvVaw0U5W3Du0TdjW2j8vkLJtgP&ust=1642720545782000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiZ4o_5vvUCFQAAAAAdAAAAABAD",
    summary: "Star Wars: Episode V - The Empire Strikes BAfter the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    movie_title: "Star Wars: Episode I - The Phantom Menace",
    genre: "Sci-Fi" ,
    director: "George Lucas",
    main_actors: "Mark Hamill, Carrie Fisher, Harrison Ford",
    release_year: "1999",
    cover: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FStar_Wars%3A_Episode_I_%25E2%2580%2593_The_Phantom_Menace&psig=AOvVaw0mz-GX7EMXPu4spQoi4_ZK&ust=1642720848169000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJD1sZr6vvUCFQAAAAAdAAAAABAD",
    summary: "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    movie_title: "Star Wars: Episode II - Attack of the Clones",
    genre: "Sci-Fi" ,
    director: "George Lucas",
    main_actors: "Mark Hamill, Carrie Fisher, Harrison Ford",
    release_year: "2002",
    cover: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FStar_Wars%3A_Episode_II_%25E2%2580%2593_Attack_of_the_Clones&psig=AOvVaw27B6nV7GYFmPmEubxxy-5O&ust=1642721037121000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjO1_L6vvUCFQAAAAAdAAAAABAD",
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
