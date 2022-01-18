var express = require('express');
const bcrypt = require('bcryptjs')
const { User } = require('../db/models');
const { getUserToken } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils')


var router = express.Router();


/* GET users listing. */
router.get('/signup', csrfProtection, (async(req, res) => {
  const user = await User.build();
  res.render('sign-up', { title: "signup", user, body: {}, csrfToken: req.csrfToken(), })
  // res.send('respond with a resource');
}));

// router.post('/signup', async(req, res) => {

// });

module.exports = router;
