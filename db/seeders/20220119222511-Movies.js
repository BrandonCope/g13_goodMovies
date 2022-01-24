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
        movie_title: "Star Wars: Episode V - The Empire Strikes Back",
        genre: "Sci-Fi",
        director: "George Lucas",
        main_actors: "Mark Hamill, Carrie Fisher, Harrison Ford",
        release_year: "1980",
        cover: "https://i5.walmartimages.com/asr/d6b6bd2d-66f4-4bd1-adad-3157da9fb79f.1d831fd0b7dd9799ad8b79874b3a5682.jpeg",
        summary: "Star Wars: Episode V - The Empire Strikes BAfter the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
        createdAt: new Date(),
        updatedAt: new Date(),
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
        movie_title: "Star Wars: Episode I - The Phantom Menace",
        genre: "Sci-Fi",
        director: "George Lucas",
        main_actors: "Hayden Christensen, Natalie Portman, Ewan McGregor",
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
        main_actors: "Hayden Christensen, Natalie Portman, Ewan McGregor",
        release_year: "2002",
        cover: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ab770742e03f7cdeebe9e81aec488af8_98143a98-2c08-4d9e-9956-38dce70c738d_400x.jpg?v=1573591438",
        summary: "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi investigates an assassination attempt on the senator and discovers a secret clone army crafted for the Jedi.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_title: "Star Wars: Episode III - Revenge of the Sith",
        genre: "Sci-Fi",
        director: "George Lucas",
        main_actors: "Hayden Christensen, Natalie Portman, Ewan McGregor",
        release_year: "2005",
        cover: "https://m.media-amazon.com/images/I/71WgjTKJ00L._AC_SY679_.jpg",
        summary: "Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.",
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
        movie_title: "The Big Sick",
        genre: "Rom-Com",
        director: "Michael Showalter",
        main_actors: "Kumail Nanjiani, Zoe Kazan, Holly Hunter",
        release_year: "2017",
        cover: "https://miro.medium.com/max/480/1*NcLWiFY4b09GCfc_LJJfmg.jpeg",
        summary: "Pakistan-born comedian Kumail Nanjiani and grad student Emily Gardner fall in love but struggle as their cultures clash. When Emily contracts a mysterious illness, Kumail finds himself forced to face her feisty parents, his family's expectations, and his true feelings.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_title: "Valentine's Day",
        genre: "Rom-Com",
        director: "Garry Marshall",
        main_actors: "Julia Roberts, Jamie Foxx, Anne Hathaway, Jessica Alba",
        release_year: "2010",
        cover: "https://m.media-amazon.com/images/M/MV5BMTk3MTIwNDIxNF5BMl5BanBnXkFtZTcwMDMyMzcwMw@@._V1_.jpg",
        summary: "Intertwining couples and singles in Los Angeles break-up and make-up based on the pressures and expectations of Valentine's Day.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "27 Dresses",
        genre: "Rom-Com",
        director: "Anne Fletcher",
        main_actors: "Katherine Heigl, James Marsden, Malin Akerman, Brian Kerwin",
        release_year: "2008",
        cover: "https://img.buzzfeed.com/buzzfeed-static/static/2021-02/16/4/asset/11f80baa7296/sub-buzz-6111-1613450287-1.jpg",
        summary: "After serving as a bridesmaid 27 times, a young woman wrestles with the idea of standing by her sister's side as her sibling marries the man she's secretly in love with.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Sweet Home Alabama",
        genre: "Rom-Com",
        director: "Andy Tennant",
        main_actors: "Reese Witherspoon, Patrick Dempsey, Josh Lucas, Candice Bergen",
        release_year: "2002",
        cover: "https://m.media-amazon.com/images/M/MV5BMjEwMjIwMDQ4OV5BMl5BanBnXkFtZTYwNzc3OTY3._V1_.jpg",
        summary: "A young woman who has reinvented herself as a New York City socialite must return home to Alabama to obtain a divorce from her husband after seven years of separation.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Titanic",
        genre: "Rom-Com",
        director: "James Cameron",
        main_actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
        release_year: "1997",
        cover: "https://upload.wikimedia.org/wikipedia/en/1/19/Titanic_%28Official_Film_Poster%29.png",
        summary: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Love Actually",
        genre: "Rom-Com",
        director: "Richard Curtis",
        main_actors: "Hugh Grant, Martine McCutcheon, Liam Neeson, Laura Linney",
        release_year: "2003",
        cover: "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg",
        summary: "Follow the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "The Proposal",
        genre: "Rom-Com",
        director: "Anne Fletcher",
        main_actors: "Sandra Bullock, Ryan Reynolds, Mary Steenburgen, Craig T. Nelson",
        release_year: "2009",
        cover: "https://m.media-amazon.com/images/M/MV5BOGM5YTNiYzktNmEwZC00ZjE5LWIyNzEtOTUwNDE0NmVkYzE3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        summary: "A pushy boss forces her young assistant to marry her in order to keep her visa status in the U.S. and avoid deportation to Canada.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "When Harry Met Sally",
        genre: "Rom-Com",
        director: "Rob Reiner",
        main_actors: "Billy Crystal, Meg Ryan, Carrie Fisher, Bruno Kirby",
        release_year: "1989",
        cover: "https://m.media-amazon.com/images/M/MV5BMjE0ODEwNjM2NF5BMl5BanBnXkFtZTcwMjU2Mzg3NA@@._V1_.jpg",
        summary: "Harry and Sally have known each other for years, and are very good friends, but they fear sex would ruin the friendship.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "How to Lose a Guy in 10 Days",
        genre: "Rom-Com",
        director: "Donald Petrie",
        main_actors: "Kate Hudson, Matthew McConaughey, Adam Goldberg, Kathryn Hahn",
        release_year: "2003",
        cover: "https://m.media-amazon.com/images/M/MV5BMjE4NTA1NzExN15BMl5BanBnXkFtZTYwNjc3MjM3._V1_FMjpg_UX1000_.jpg",
        summary: "Benjamin Barry is an advertising executive and ladies' man who, to win a big campaign, bets that he can make a woman fall in love with him in 10 days.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "The Notebook",
        genre: "Rom-Com",
        director: "Nick Cassavetes",
        main_actors: "Gena Rowlands, James Garner, Rachel McAdams, Ryan Gosling",
        release_year: "2004",
        cover: "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_FMjpg_UX1000_.jpg",
        summary: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "While You Were Sleeping",
        genre: "Rom-Com",
        director: "Jon Turteltaub",
        main_actors: "Sandra Bullock, Bill Pullman, Peter Gallagher, Peter Boyle",
        release_year: "1995",
        cover: "https://m.media-amazon.com/images/I/71MS-o1X7TL._SL1081_.jpg",
        summary: "A hopelessly romantic Chicago Transit Authority token collector is mistaken for the fiancée of a coma patient.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "A Charlie Brown Christmas",
        genre: "Animation",
        director: "Bill Melendez",
        main_actors: "Ann Altieri, Chris Doran, Sally Dryer, Bill Melendez",
        release_year: "1965",
        cover: "https://m.media-amazon.com/images/M/MV5BMzQ3M2JhNzMtNWQ2NS00N2IxLThmYTctMzkwYzJiMThiMjI4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
        summary: "Depressed at the commercialism he sees around him, Charlie Brown tries to find a deeper meaning to Christmas.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Winnie the Pooh",
        genre: "Animation",
        director: "Stephen J Anderson",
        main_actors: "Jim Cummings, Craig Ferguson, John Cleese, Bud Luckey",
        release_year: "2011",
        cover: "https://m.media-amazon.com/images/M/MV5BYzBlYTJkMGQtYzQ4MS00Zjk3LTk4MmEtYTZiNTEzNmRlMjUxXkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_UY209_CR0,0,140,209_AL_.jpg",
        summary: "While searching for honey, Pooh and his friends embark on an adventure to find Eeyore's missing tail and rescue Christopher Robin from an unknown monster called The Backson.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Horton Hears a Who!",
        genre: "Animation",
        director: "Jimmy Hayward",
        main_actors: "Jim Carrey, Steve Carell, Carol Burnett, Will Arnett",
        release_year: "2008",
        cover: "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_UY209_CR0,0,140,209_AL_.jpg",
        summary: "Horton the Elephant struggles to protect a microscopic community from his neighbors who refuse to believe it exists.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Peter Rabbit",
        genre: "Animation",
        director: "Will Gluck",
        main_actors: "James Corden, Fayssal Bazzi, Domhnall Gleeson, Sia",
        release_year: "2018",
        cover: "https://m.media-amazon.com/images/M/MV5BMzI5MzZmZjItOGQzZC00NjNiLWFjMjQtMGNhY2NmNDMyNGM1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg",
        summary: "Feature adaptation of Beatrix Potter's classic tale of a rebellious rabbit trying to sneak into a farmer's vegetable garden.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "The Aristocats",
        genre: "Animation",
        director: "Wolfgang Reitherman",
        main_actors: "Phil Harris, Eva Gabor, Sterling Holloway, Scatman Crothers",
        release_year: "1970",
        cover: "https://m.media-amazon.com/images/M/MV5BMTU1MzM0MjcxMF5BMl5BanBnXkFtZTgwODQ0MzcxMTE@._V1_UY209_CR0,0,140,209_AL_.jpg",
        summary: "With the help of a smooth-talking tomcat, a family of Parisian felines set to inherit a fortune from their owner try to make it back home after a jealous butler kidnaps them and leaves them in the country.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "The Emperor's New Groove",
        genre: "Animation",
        director: "Mark Dindal",
        main_actors: "David Spade, John Goodman, Eartha Kitt, Patrick Warburton",
        release_year: "2000",
        cover: "https://m.media-amazon.com/images/M/MV5BZGQwNmFhNjctNzQ0Yy00ZmE5LWIyMTEtYTZhZWQ4OTFmNDI2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UX140_CR0,0,140,209_AL_.jpg",
        summary: "Emperor Kuzco is turned into a llama by his ex-administrator Yzma, and must now regain his throne with the help of Pacha, the gentle llama herder.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Oliver & Company",
        genre: "Animation",
        director: "George Scribner",
        main_actors: "Joey Lawrence, Billy Joel, Cheech Marin, Richard Mulligan",
        release_year: "1988",
        cover: "https://m.media-amazon.com/images/M/MV5BMTI5NTE2OTQtN2YyZi00OTI5LTljMmEtMDZlMTk0MzNmZmY5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg",
        summary: "A lost and alone kitten joins a gang of dogs engaged in petty larceny in New York City.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Cinderella",
        genre: "Animation",
        director: "Clyde Geronimi",
        main_actors: "Ilene Woods, James MacDonald, Eleanor Audley, Verna Felton",
        release_year: "1950",
        cover: "https://m.media-amazon.com/images/M/MV5BMTgwMjU2NzY2NF5BMl5BanBnXkFtZTgwODYyNTM3MjE@._V1_UY209_CR0,0,140,209_AL_.jpg",
        summary: "When Cinderella's cruel stepmother prevents her from attending the Royal Ball, she gets some unexpected help from the lovable mice Gus and Jaq, and from her Fairy Godmother.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Finding Nemo",
        genre: "Animation",
        director: "Andrew Stanton",
        main_actors: "Albert Brooks, Ellen DeGeneres, Alexander Gould, Willem Dafoe",
        release_year: "2003",
        cover: "https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR0,0,140,209_AL_.jpg",
        summary: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "The Accountant",
        genre: "Action",
        director: "Bill Dubuque",
        main_actors: "Ben Affleck, Anna Kendrick, J.K. Simmons",
        release_year: "2016",
        cover: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5709/5709412_so.jpg",
        summary: "As a math savant uncooks the books for a new client, the Treasury Department closes in on his activities, and the body count starts to rise.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Tenet",
        genre: "Action",
        director: "Christopher Nolan",
        main_actors: "John David Washington, Robert Pattinson, Elizabeth Debicki",
        release_year: "2020",
        cover: "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
        summary: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Venom",
        genre: "Action",
        director: "Ruben Fleischer",
        main_actors: "Tom Hardy, Michelle Williams, Riz Ahmed",
        release_year: "2020",
        cover: "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_.jpg",
        summary: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "The Dark Knight",
        genre: "Action",
        director: "Christopher Nolan",
        main_actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        release_year: "2008",
        cover: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        summary: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Inception",
        genre: "Action",
        director: "Christopher Nolan",
        main_actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Ken Watanabe",
        release_year: "2010",
        cover: "https://cdn.shopify.com/s/files/1/1416/8662/products/inception_2010_advance_uk_original_film_art_1200x.jpg?v=1612332302",
        summary: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "The Lord of the Rings: The Return of the King",
        genre: "Action",
        director: "Peter Jackson",
        main_actors: "Elijah Wood, Viggo Mortensen, Ian McKellen, Orlando Bloom",
        release_year: "2003",
        cover: "https://m.media-amazon.com/images/I/71X6YzwV0gL._AC_SL1024_.jpg",
        summary: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "The Lord of the Rings: The Fellowship of the Ring",
        genre: "Action",
        director: "Peter Jackson",
        main_actors: "Elijah Wood, Ian McKellen, Orlando Bloom, Sean Bean",
        release_year: "2001",
        cover: "https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_SY741_.jpg",
        summary: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "The Lord of the Rings: The Two Towers",
        genre: "Action",
        director: "Peter Jackson",
        main_actors: "Elijah Wood, Ian McKellen, Viggo Mortensen, Orlando Bloom",
        release_year: "2002",
        cover: "https://m.media-amazon.com/images/I/81eqQvveI6L._AC_SY679_.jpg",
        summary: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Gladiator",
        genre: "Action",
        director: "Ridley Scott",
        main_actors: "Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed",
        release_year: "2000",
        cover: "https://play-lh.googleusercontent.com/BFmxSPfvjeuQtqbGn6gNBet8nEm8jc7tQIBKfMMVS4TmstdP1brZIc3Lj0yM-HApGPKVMvv04pYD8bbNgrg=w400-h600-rw",
        summary: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Spider-Man: Into the Spider-Verse",
        genre: "Action",
        director: "Bob Persichetti",
        main_actors: "Shameik Moore, Jake Johnson, Hailee Steinfeld, Mahershala Ali",
        release_year: "2018",
        cover: "https://m.media-amazon.com/images/I/71U93FWDLTS._AC_SY679_.jpg",
        summary: "Teen Miles Morales becomes the Spider- Man of his universe, and must join with five spider - powered individuals from other dimensions to stop a threat for all realities.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Black Panther",
        genre: "Action",
        director: "Ryan Coogler",
        main_actors: "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o",
        release_year: "2018",
        cover: "https://m.media-amazon.com/images/I/A1PaCX4oXjL._AC_SY679_.jpg",
        summary: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Batman Begins",
        genre: "Action",
        director: "Christopher Nolan",
        main_actors: "Christian Bale, Michael Caine, Ken Watanabe, Liam Neeson",
        release_year: "2005",
        cover: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        summary: "After training with his mentor, Batman begins his fight to free crime - ridden Gotham City from corruption.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Die Hard",
        genre: "Action",
        director: "John McTiernan",
        main_actors: "Bruce Willis, Alan Rickman, Bonnie Bedelia, Reginald VelJohnson",
        release_year: "1998",
        cover: "https://upload.wikimedia.org/wikipedia/en/7/7e/Die_hard.jpg",
        summary: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Rush",
        genre: "Action",
        director: "Ron Howard",
        main_actors: "Daniel Brühl, Chris Hemsworth, Olivia Wilde, Alexandra Maria Lara",
        release_year: "2013",
        cover: "https://movieposters2.com/images/1780486-b.jpg",
        summary: "The merciless 1970s rivalry between Formula One rivals James Hunt and Niki Lauda.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Ford v Ferrari",
        genre: "Action",
        director: "James Mangold",
        main_actors: "Matt Damon, Christian Bale, Jon Bernthal, Caitriona Balfe",
        release_year: "2019",
        cover: "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_.jpg",
        summary: "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Mad Max: Fury Road",
        genre: "Action",
        director: "George Miller",
        main_actors: "Tom Hardy, Charlize Theron, Nicholas Hoult, Zoë Kravitz",
        release_year: "2019",
        cover: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
        summary: "In a post - apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "V for Vendetta",
        genre: "Action",
        director: "James McTeigue",
        main_actors: "Hugo Weaving, Natalie Portman, Rupert Graves, Stephen Rea",
        release_year: "2005",
        cover: "https://images.moviesanywhere.com/c2c7c4ce4949e34d671b0c843f7e10d5/ddfa7bb3-ad2a-4d74-9ab4-8cd6cef6b24b.jpg",
        summary: "In a future British tyranny, a shadowy freedom fighter, known only by the alias of 'V,' plots to overthrow it with the help of a young woman.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Hamilton",
        genre: "Top Movies",
        director: "Thomas Kail",
        main_actors: "Lin-Manuel Miranda, Phillipa Soo, Leslie Odom Jr., Renée Elise Goldsberry",
        release_year: "2020",
        cover: "https://upload.wikimedia.org/wikipedia/en/8/83/Hamilton-poster.jpg",
        summary: "The real life of one of America's foremost founding fathers and first Secretary of the Treasury, Alexander Hamilton. Captured live on Broadway from the Richard Rodgers Theater with the original Broadway cast.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Joker",
        genre: "Top Movies",
        director: "Todd Phillips",
        main_actors: "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy",
        release_year: "2019",
        cover: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        summary: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "The Shawshank Redemption",
        genre: "Top Movies",
        director: "Frank Darabont",
        main_actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
        release_year: "1994",
        cover: "https://ae01.alicdn.com/kf/Hc23f6083c0c04635a5b778ebbf50a5a83/The-Shawshank-Redemption-Movie-Propaganda-Vintage-Retro-Kraft-Poster-Decorative-DIY-Wall-Canvas-Sticker-Home-Bar.jpg_Q90.jpg_.webp",
        summary: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Pulp Fiction",
        genre: "Top Movies",
        director: "Quentin Tarantino",
        main_actors: "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
        release_year: "1994",
        cover: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        summary: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Schindler's List",
        genre: "Top Movies",
        director: "Steven Spielberg",
        main_actors: "Liam Neeson, Ralph Fiennes, Ben Kingsley, Caroline Goodall",
        release_year: "1993",
        cover: "https://www.ubuy.co.id/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFPWU1vNjk0K0wuX0FDX1NMMTUwMF8uanBn.jpg",
        summary: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Fight Club",
        genre: "Top Movies",
        director: "David Fincher",
        main_actors: "Brad Pitt, Edward Norton, Meat Loaf, Zach Grenier",
        release_year: "1993",
        cover: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        summary: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Forrest Gump",
        genre: "Top Movies",
        director: "Robert Zemeckis",
        main_actors: "Tom Hanks, Robin Wright, Gary Sinise, Sally Field",
        release_year: "1994",
        cover: "https://m.media-amazon.com/images/I/61oZBKzdPVL._AC_SY679_.jpg",
        summary: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Interstellar",
        genre: "Top Movies",
        director: "Christopher Nolan",
        main_actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Mackenzie Foy",
        release_year: "2014",
        cover: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        summary: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Parasite",
        genre: "Top Movies",
        director: "Bong Joon Ho",
        main_actors: "Kang-ho Song, Sun-kyun Lee, Yeo-jeong Cho, Woo-sik Choi",
        release_year: "2019",
        cover: "https://m.media-amazon.com/images/I/91sustfojBL._AC_SL1500_.jpg",
        summary: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "The Pianist",
        genre: "Top Movies",
        director: "Roman Polanski",
        main_actors: "Kang-ho Song, Sun-kyun Lee, Yeo-jeong Cho, Woo-sik Choi",
        release_year: "2002",
        cover: "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
        summary: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Cinema Paradiso",
        genre: "Top Movies",
        director: "Giuseppe Tornatore",
        main_actors: "Philippe Noiret, Enzo Cannavale, Antonella Attili, Isa Danieli",
        release_year: "1988",
        cover: "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_.jpg",
        summary: "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Back to the Future",
        genre: "Top Movies",
        director: "Robert Zemeckis",
        main_actors: "Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover",
        release_year: "1985",
        cover: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        summary: "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_title: "Memento",
        genre: "Top Movies",
        director: "Christopher Nolan",
        main_actors: "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
        release_year: "2000",
        cover: "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        summary: "A man with short-term memory loss attempts to track down his wife's murderer.",
        createdAt: new Date(),
        updatedAt: new Date()
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
