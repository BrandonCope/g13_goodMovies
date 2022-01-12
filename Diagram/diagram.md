Table Users {
    id int [pk]
    firstName varchar
    lastName varchar
    password varchar
    email varchar
}
Table Movies {
    id int [pk]
    movie_title varchar
    genre varchar
    director varchar
    main_actors varchar
    release_year int
    cover image
}

Table Reviews {
    id int [pk]
    user_id int 
    movies_id int 
    review_title varchar
    summary varchar
    rating int
}
Ref: Reviews.user_id > Users.id
Ref: Reviews.movies_id > Movies.id

Table Shelves {
    id int [pk]
    shelf_title varchar
    movies_id int 
    user_id int 
}
Ref: Shelves.user_id > Users.id
Ref: Shelves.movies_id > Movies.id

Table Watched {
    id int [pk]
    user_id int
    movie_id int
    status boolean
}
Ref: Watched.user_id > Users.id
Ref: Watched.movie_id > Movies.id
