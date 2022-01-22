const express = require('express');

const { check, validationResult } = require('express-validator')
const { asyncHandler, csrfProtection } = require('./utils');
const { Movie, Review, Rating, User } = require('../db/models');
const { requireAuth } = require('../auth');

const router = express.Router();

router.get('/ratings/new',
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {
  
  })
);

router.get(`/ratings/:ratingId/edit`,
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {
    const ratingId = parseInt(req.params.ratingId, 10);

    const rating = await Rating.findByPk(ratingId)

    res.render('rating-edit', { title: "Rating", rating, csrfToken: req.csrfToken() })
  })
)

router.post(`/ratings/:ratingId/edit`,
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {
    // console.log("above ratingId")
    const ratingId = parseInt(req.params.ratingId, 10);

    const rating = await Rating.findByPk(ratingId);

    rating.rating = req.body.rating
    // console.log("!!!!!!!!!!!")
    await rating.save();

    res.redirect(`/movies/${rating.movie_id}`)
  })
)


module.exports = router;
