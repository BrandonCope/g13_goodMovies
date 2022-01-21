var express = require('express');
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')

const { User } = require('../db/models');
const { loginUser, logoutUser } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils');
const { rest } = require('lodash');
const session = require('express-session');


const router = express.Router();

/* GET users listing. */
router.get('/signup', csrfProtection, (async (req, res) => {
  const user = await User.build();
  res.render('user-signup', { title: "signup", user, csrfToken: req.csrfToken(), })
}));

const userValidators = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage("Please provide value for First Name.")
    .isLength({ max: 20 })
    .withMessage("First Name must not be more that 20 characters long."),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage("Please provide value for Last Name.")
    .isLength({ max: 20 })
    .withMessage("Last Name must not be more that 20 characters long."),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage("Please provide value for Email.")
    .isLength({ max: 255 })
    .withMessage("Email Address must not be more that 255 characters long.")
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage("Please provide value for First Name.")
    .isLength({ max: 20 })
    .withMessage("First Name must not be more that 20 characters long.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least one lowercase letter, one uppercase letter, and one special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage("Please provide value for Confirm Password.")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password.');
      }
      return true;
    })
]

router.post('/signup',
  csrfProtection,
  userValidators,
  asyncHandler(async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password
    } = req.body

    const user = User.build(
      {
        email,
        firstName,
        lastName
      }
    )

    const validatorErrors = validationResult(req)
    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashed_password = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      res.redirect('/movies');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('user-signup', {
        title: 'Sign-Up',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

router.get('/login', csrfProtection, (req, res) => {
  res.render('user-login', {
    title: "Login",
    csrfToken: req.csrfToken(),
  })
})

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];


router.post('/login',
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    const {
      email,
      password,
    } = req.body

    let errors = []
    const validatorErrors = validationResult(req)

    if (validatorErrors.isEmpty()) {
      const user = await User.findOne({
        where: { email }
      })
      if (user !== null) {
        const passwordMatch = await bcrypt.compare(password, user.hashed_password.toString())
        if (passwordMatch) {
          loginUser(req, res, user);
          return res.redirect('/movies')

        }
        errors.push('Login failed for provided email, and password!')
      } else {
        errors = validatorErrors.array().map((error) => error.msg)
      }

      errors.push('Login failed for provided email, and password!')
    } else {
      errors = validatorErrors.array().map((error) => error.msg)
    }

    res.render("user-login", {
      title: "Login",
      email,
      errors,
      csrfToken: req.csrfToken(),
    })
  })
);

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  req.session.cookie.originalMaxAge = 0;
  res.redirect('/')
});

router.post('/', csrfProtection, asyncHandler(async (req, res) => {
  const user = await User.findOne({
    where: { email: "demo@user.com" }
  })

  loginUser(req, res, user);
  return res.redirect('/movies')
}));


module.exports = router;
