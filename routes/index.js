var express = require('express');

const { asyncHandler, csrfProtection } = require('./utils');

var router = express.Router();

/* GET home page. */
router.get('/',
  csrfProtection,
  function (req, res, next) {
    res.render('index', { title: "Good Movies", csrfToken: req.csrfToken() });
  });

module.exports = router;
