const express = require('express');

const { check, validationResult } = require('express-validator')
const { asyncHandler, csrfProtection } = require('./utils');
const { Movie, Review, Rating, User } = require('../db/models');
const { requireAuth } = require('../auth');

const router = express.Router();

router.post('/',
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {

    const user_id = req.session.auth.userId;
    // const movieId = rating.movie_id

    const {
      movieId,
      rating
    } = req.body

    const user = await User.findByPk(user_id)

    const newRating = await Rating.create({
      user_id,
      movie_id: movieId,
      rating
    })

    res.json({ message: "Success", newRating, user, movieId, user_id, csrfToken: req.csrfToken() })
  })
);


router.delete('/:ratingId(\\d+)',
  asyncHandler(async (req, res) => {
    const ratingId = parseInt(req.params.ratingId, 10);
    const rating = await Rating.findByPk(ratingId)
    const movieId = rating.movie_id;
    await rating.destroy()
    res.json({ message: "Success", movieId })
    // res.redirect(`/movies/${movieId}`)
  })
)


module.exports = router;
