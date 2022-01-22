const express = require('express');

const { Op } = require('sequelize')
const { check, validationResult } = require('express-validator')
const { asyncHandler, csrfProtection } = require('./utils');
const { Movie, Review, Rating, User } = require('../db/models');
const { requireAuth } = require('../auth');

const router = express.Router()

router.get('/',
  asyncHandler(async (req, res) => {
    const movies = await Movie.findAll({
      order: [['movie_title', 'ASC']]
    });
    return res.render('movies-all', { title: 'All Movies', movies })
  }))


router.get('/:id(\\d+)',
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
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

    const rating = await Rating.findOne({
      where:
        { movie_id: movieId },
      include: User
    })

    res.render('movie-detail', { title: 'Movie Detail', movie, reviews, rating, csrfToken: req.csrfToken(), movieId, user_id })
  })
)

module.exports = router;
