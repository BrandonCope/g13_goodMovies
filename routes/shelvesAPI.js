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
    .isLength({ max: 30 })
    .withMessage("Title may not be more that 30 characters long.")
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

router.delete('/:shelfMovieId(\\d+)',
  csrfProtection,
  asyncHandler(async (req, res) => {
    const movie_id = parseInt(req.params.shelfMovieId, 10);
    const { shelf_id } = req.body

    const shelfMovie = await Movie_Shelf.findOne({
      where: { movie_id, shelf_id }
    })

    await shelfMovie.destroy()
    res.json({ message: "Success", csrfToken: req.csrfToken() })
    // res.render('shelf-detail', { message: "Success", movies, csrfToken: req.csrfToken() })
  })
);

module.exports = router
