const express = require('express');

const {Op} = require('sequelize')
const { check, validationResult } = require('express-validator')
const { asyncHandler, csrfProtection } = require('./utils');
const { Movie, Review, Rating, User } = require('../db/models');

const { isModuleSpecifier } = require('babel-types');
const { requireAuth } = require('../auth');

const router = express.Router()

router.get('/',
  asyncHandler(async (req, res) => {
    const movies = await Movie.findAll({
      order: [['movie_title', 'ASC']]
    });
    return res.render('movies-all', { title: 'All Movies', movies })
  }))


router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const movie = await Movie.findByPk(movieId)
  const user_id = req.session.auth.userId

  const reviews = await Review.findAll({
    where: {
      movie_id: movieId
    },
    include: User
  })
  const user = reviews.User;
  const ratings = await Rating.findOne({
      where:
          { movie_id: movieId },
    })

  res.render('movie-detail', { title: 'Movie Detail', movie, reviews, ratings, csrfToken: req.csrfToken(), movieId, user_id })
}))

const reviewValidator = [
check('review_title')
    .exists({ checkFalsy: true })
    .withMessage("Please provide value for a title for review.")
    .isLength({ max: 50 })
    .withMessage("Review must not be more that 50 characters long."),
check('summary')
    .exists({ checkFalsy: true })
    .withMessage("Please provide value for a review.")
]


router.post('/:id(\\d+)', csrfProtection, reviewValidator, asyncHandler(async (req,res) => {
  const movie_id = parseInt(req.params.id, 10);
  const user_id = req.session.auth.userId

  const {
    review_title,
    summary,
  } = req.body;

  const reviews = Review.build({
      user_id,
      movie_id,
      review_title,
      summary,
  });
const validatorErrors = validationResult(req)
  if (validatorErrors.isEmpty()) {

    await reviews.save()
    res.redirect(`/movies/${movie_id}`)
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('movie-detail', {
      reviews,
      errors,
      csrfToken: req.csrfToken()
    })
  }
}))


// router.get('/delete/:id(\\d+)', csrfProtection, asyncHandler(async (req,res) => {
//   const movieId = parseInt(req.params.id, 10);
//   const movie = await Movie.findByPk(movieId)
//   const reviews = await Review.findAll({
//     where: {
//       movie_id: movieId
//     }
//   });
// }))


// router.post('/:id(\\d+)', csrfProtection, asyncHandler(async (req,res) => {
//   const movieId = req.session.movieId


//   const reviews = await Review.findAll({
//     where: {
//       movie_id: movieId
//     },
//     include: User
//   })
//   reviews.forEach(review => {
//     const reviewId = review.id
//     reviewId.destroy();
//     res.redirect(`/movies/${movieId}`)
// })

// }))
module.exports = router;
