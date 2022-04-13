const express = require('express');

const { check, validationResult } = require('express-validator')
const { asyncHandler, csrfProtection } = require('./utils');
const { Shelf, Movie, Movie_Shelf, User } = require('../db/models');
const { requireAuth } = require('../auth');

const router = express.Router();

const shelfValidators = [
  check('shelf_title')
    .exists({ checkFalsy: true })
    .withMessage("Please provide value for shelf title.")
    .isLength({ max: 50 })
    .withMessage("Title may not be more that 50 characters long.")
]

router.post('/',
  csrfProtection,
  requireAuth,
  shelfValidators,
  asyncHandler(async (req, res) => {
    const user_id = req.session.auth.userId;

    const {
      shelf_title
    } = req.body

    const user = await User.findByPk(user_id);

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const shelf = await Shelf.create({
        user_id,
        shelf_title
      })

      res.json({
        message: "Success",
        shelf,
        csrfToken: req.csrfToken()
      })

    } else {
      const errors = validatorErrors.array().map((error) => error.msg);

      res.json({
        message: "fail",
        errors
      })
    }
  })
);

router.delete('/:shelfId',
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {

  })
);

module.exports = router
