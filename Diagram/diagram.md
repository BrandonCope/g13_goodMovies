Table Users {
    id int [pk]
    firstName varchar(20) [not null]
    lastName varchar(20) [not null]
    password varchar(20) [not null]
    email varchar(20) [not null, unique]
}

Table Movies {
    id int [pk]
    movie_title varchar(50) 
    genre varchar(20) 
    director varchar(50) 
    main_actors varchar(50) 
    release_year int
    cover image
}

Table Reviews {
    id int [pk]
    user_id int 
    movies_id int 
    review_title varchar(50) [not null]
    summary varchar(255) [not null]
    rating int
}
Ref: Reviews.user_id > Users.id
Ref: Reviews.movies_id > Movies.id

Table Shelves {
    id int [pk]
    shelf_title varchar(30) [not null]
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
