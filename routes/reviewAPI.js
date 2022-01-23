const express = require('express');

const { check, validationResult } = require('express-validator')
const { asyncHandler, csrfProtection } = require('./utils');
const { Movie, Review, Rating, User } = require('../db/models');
const { requireAuth } = require('../auth');

const router = express.Router();

const reviewValidators = [
  check('review_title')
    .exists({ checkFalsy: true })
    .withMessage("Please provide value for a title for review.")
    .isLength({ max: 50 })
    .withMessage("Review must not be more that 50 characters long."),
  check('summary')
    .exists({ checkFalsy: true })
    .withMessage("Please provide value for a review.")
]

router.post('/',
  csrfProtection,
  requireAuth,
  reviewValidators,
  asyncHandler(async (req, res) => {

    const userId = req.session.auth.userId;

    const {
      movieId,
      review_title,
      summary
    } = req.body

    const user = await User.findByPk(userId)

    const review = await Review.create({
      user_id: userId,
      movie_id: movieId,
      review_title,
      summary,
    })

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      res.json({
        message: "Success",
        review,
        firstName: user.firstName,
        csrfToken: req.csrfToken()
      })
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('movie-detail', {
        review,
        errors,
        userId,
        csrfToken: req.csrfToken()
      })
    }
  })
);


router.delete('/:reviewId(\\d+)',
  asyncHandler(async (req, res) => {
    const reviewId = parseInt(req.params.reviewId, 10);
    const review = await Review.findByPk(reviewId)
    await review.destroy()
    res.json({ message: "Success" })
  })
)


module.exports = router;
