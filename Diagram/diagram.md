Table Users {
    id int [pk]
    firstName varchar(20) [not null]
    lastName varchar(20) [not null]
    hashed_password varchar(20) [not null]
    email varchar(20) [not null, unique]
}

Table Movies {
    id int [pk]
    movie_title varchar(50)
    genre varchar(20)
    director varchar(50)
    main_actors varchar(255)
    release_year int
    cover text
    summary text
}

Table Reviews {
    id int [pk]
    user_id int
    movie_id int
    review_title varchar(50) [not null]
    summary text [not null]
}

Ref: Reviews.user_id > Users.id
Ref: Reviews.movie_id > Movies.id

Table Ratings {
    id int [pk]
    user_id int
    movie_id int
    rating int
}
Ref: Ratings.user_id > Users.id
Ref: Ratings.movie_id > Movies.id

Table Shelves {
    id int [pk]
    shelf_title varchar(30) [not null]
    user_id int
}
Ref: Shelves.user_id > Users.id


Table Watched {
    id int [pk]
    user_id int
    movie_id int
}
Ref: Watched.user_id > Users.id
Ref: Watched.movie_id > Movies.id

Table Movie_shelves {
  id int [pk]
  movie_id int
  shelf_id int
}
Ref: Movie_shelves.movie_id > Movies.id
Ref: Movie_shelves.shelf_id > Shelves.id
