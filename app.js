const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const cookieSession = require('cookie-session')
const logger = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const { restoreUser } = require('./auth');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sessionSecret } = require('./config');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const movieRouter = require('./routes/movie')
const app = express();

// view engine setup
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
// app.use(cookieSession({
//   key: "goodMovies.sid",
//   secret: sessionSecret,
// }))

app.use(express.static(path.join(__dirname, 'public')));

// set up session middleware
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

// create Session table if it doesn't already exist
store.sync();

app.use(express.urlencoded({ extended: false }));
app.use(restoreUser);
app.use('/', indexRouter);
app.use(usersRouter);
app.use('/', movieRouter);

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
