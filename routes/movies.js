const express = require('express');

const { Op } = require('sequelize')
const { check, validationResult } = require('express-validator')
const { asyncHandler, csrfProtection } = require('./utils');
const { Movie, Review, Rating, User, Shelf } = require('../db/models');
const { requireAuth } = require('../auth');

const router = express.Router()

router.get('/',
  asyncHandler(async (req, res) => {
    const aniMovies = await Movie.findAll({
      where: {
        genre: "Animation"
      },
      order: [['movie_title', 'ASC']]
    });
    const actionMovies = await Movie.findAll({
      where: {
        genre: "Action"
      },
      order: [['movie_title', 'ASC']]
    });
    const romComMovies = await Movie.findAll({
      where: {
        genre: "Rom-Com"
      },
      order: [['movie_title', 'ASC']]
    });
    const sciFiMovies = await Movie.findAll({
      where: {
        genre: "Sci-Fi"
      },
      order: [['movie_title', 'ASC']]
    });
    const topMovies = await Movie.findAll({
      where: {
        genre: "Top Movies"
      },
      order: [['movie_title', 'ASC']]
    });
    return res.render('movies-all', { title: 'All Movies', aniMovies, actionMovies, sciFiMovies, romComMovies, topMovies })
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
      {
        movie_id: movieId,
        user_id
      }
    })

    const ratings = await Rating.findAll({
      where:
        { movie_id: movieId },
      include: User
    })

    let ratingId;
    if (!rating) {
      ratingId = 0
    } else {
      ratingId = rating.id
    }

    let sumRating = 0;
    let count = 0;
    let avgRating = 0;

    ratings.forEach((el) => {
      let rate = el.rating
      sumRating += rate;
      count++;
      avgRating = (sumRating / count).toFixed(1)
    })

    const shelves = await Shelf.findAll({
      where: { user_id },
      order: [['shelf_title', 'ASC']]
    });

    res.render('movie-detail', { title: 'Movie Detail', movie, reviews, avgRating, rating, ratingId, csrfToken: req.csrfToken(), movieId, user_id, shelves })
  })
)

module.exports = router;
