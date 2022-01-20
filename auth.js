// const { jwtConfig } = require('./config');
// const { secret, expiresIn } = jwtConfig;
const { User } = require('./db/models')
// const jwt = require('jsonwebtoken');
// const bearerToken = require('express-bearer-token');

// const getUserToken = (user) => {
//     const userDataForToken = {
//         id: user.id,
//         email: user.email,
//     }

//     const token = jwt.sign(
//         { data: userDataForToken },
//         secret,
//         { expiresIn: parseInt(expiresIn, 10) }
//     )

//     return token;
// }
const loginUser = (req, res, user) => {
    req.session.auth = {
      userId: user.id,
    };
  };

const restoreUser = async (req, res, next) => {
    if (req.session.auth) {
      const { userId } = req.session.auth;

      try {
        const user = await User.findByPk(userId);

        if (user) {
          res.locals.authenticated = true;
          res.locals.user = user;
          next();
        }
      } catch (err) {
        res.locals.authenticated = false;
        next(err);
      }
    } else {
      res.locals.authenticated = false;
      next();
    }
};

  const logoutUser = (req, res) => {
    delete req.session.auth;
  };

//   const requireAuth = [bearerToken(), restoreUser]

module.exports = {
    // getUserToken,
    loginUser,
    restoreUser,
    logoutUser,
    // requireAuth
}
