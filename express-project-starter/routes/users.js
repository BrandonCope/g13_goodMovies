var express = require('express');
const bcrypt = require('bcryptjs')
const { User } = require('../models');
const { getUserToken } = require('../auth');

var router = express.Router();

/* GET users listing. */
router.get('/signup', (req, res) => {
  const user = User.build();
  res.render('sign-up', { title: "signup", user })
  // res.send('respond with a resource');
});

router.post('/signup', async(req, res) => {

});

module.exports = router;
