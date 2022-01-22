const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { sequelize } = require('./db/models');
const { restoreUser } = require('./auth');
const { sessionSecret } = require('./config');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const moviesRouter = require('./routes/movies');
const reviewApiRouter = require('./routes/reviewAPI');
const reviewsRouter = require('./routes/reviews')
const ratingApiRouter = require('./routes/ratingAPI');
const ratingRouter = require('./routes/ratings')

const app = express();

// view engine setup
app.set('view engine', 'pug');

// set up session middleware
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const store = new SequelizeStore({ db: sequelize });
app.use(
  session({
    name: 'goodMovies.sid',
    secret: sessionSecret,
    store,
    resave: false,
    saveUninitialized: false,
  })
);
store.sync(); // create Session table if it doesn't already exist

app.use(express.urlencoded({ extended: false }));
app.use(restoreUser);
app.use('/', indexRouter);
app.use(usersRouter);
app.use('/movies', moviesRouter);
app.use('/reviewApi', reviewApiRouter);
app.use(reviewsRouter)
app.use('/ratingApi', ratingApiRouter);
app.use(ratingRouter)


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
