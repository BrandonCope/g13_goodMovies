# Express Project -- Good Movies

## Access live site:
https://good-movies-13.herokuapp.com/
### Access to wiki docs:  
https://github.com/BrandonCope/g13_goodMovies/wiki

## Features & functionality:  
Good Movies is an online library for films, providing authenticated users with access to the Good Movie users' average rating, user reviews, and other movie details. Application includes customizable "movie shelves" for your own personal sorting, with future functionality of the site to include option to mark movies as "watched."

### Movies List
![image](https://user-images.githubusercontent.com/91270578/163431720-166bd7c3-5afc-490f-805d-6cb01e1eb75e.png)

### Movie Page
![image](https://user-images.githubusercontent.com/91270578/163432791-c7b6939e-b82b-460b-a6c6-f9f4e007ae0c.png)

### Reviews on Movie Page
![image](https://user-images.githubusercontent.com/91270578/163433190-83735aee-ba35-46b2-b0d0-2b738c33ee33.png)

### Movie Shelves
![image](https://user-images.githubusercontent.com/91270578/163432368-ac6f6c63-db60-4e74-87ec-49560901ad52.png)

### Shelf Example
![image](https://user-images.githubusercontent.com/91270578/163432488-bc0445b6-2c8b-4545-9c2a-7b24b46b3e5e.png)

## Getting Started
1. Clone repository:
  * git@github.com:BrandonCope/g13_goodMovies.git

2. Install dependencies from root directory:
  * npm install

3. Create Postgresql user "good_movies_app" in PSQL:
  * CREATE USER good_movies_app with CREATEDB PASSWORD 'your password here';

4. Create an .env file in backend directory based on .env.example.

5. Enter your username and password to the .env file along with database name "good_movies," SECRET_SESSION key, and port number (preferred 8080).
 
6. Create database, migrate models, seed models:
  * npx dotenv sequelize db:create
  * npx dotenv sequelize db:migrate
  * npx dotenv sequelize db:seed:all
 
7. Start server; if this does not automatically open in browser, navigate to http://localhost:8080:
  * npm start

8. Create an account or use Demo login to access GoodMovies features.


## Project details:
* Discussion of technologies used -- 
We used Express with DOM manipulation and CSS styling.
* Discussion of two features that show off the team's technical abilities -- 
Our DOM features illustrate our ability to dynamically update the page. Additionally, our main movies list and forms show our skills at fine-tuning CSS.
* Discussion of both challenges faced and the way the team solved them -- 
We faced challenges with getting our dynamic rating form to populate after deleting a rating. Though we were finally able to get this to appear, we continued to have issues with getting the form to submit before a page refresh. To address this, we ultimately decided to dynamically add a new button that would allow the user to refresh the page. While this is not a smooth as we would like it, it resolves our issue until we can make the dynamically-added form functional. We felt this was a thoughtful work-around.
* Best code --
Brandon: I like our RequireAuth function that prevents site visitors from accessing the movie details page unless they're logged in.
Katerina: I really enjoyed styling the log-in and sign-up pages, as well as the site-routes.
Mia: I like the main movies list page. This originally rendered as a list, but we decided to go with a cover tiles format and I love how it turned out.
