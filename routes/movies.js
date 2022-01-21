const express = require('express');
const {Op} = require('sequelize')
const { asyncHandler } = require('./utils');
const { Movie, Review, Rating } = require('../db/models');
const { isModuleSpecifier } = require('babel-types');
// const { requireAuth } = require('../auth');

const router = express.Router()

router.get('/',
  asyncHandler(async (req, res) => {
    const movies = await Movie.findAll({
      order: [['movie_title', 'ASC']]
    });
    return res.render('movies-all', { title: 'All Movies', movies })
  }))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const movie = await Movie.findByPk(movieId)

  const reviews = await Review.findAll({
    where: {
      movie_id: movieId
    }
  })
  const ratings = await Rating.findOne(
    {
      where: {
        [Op.and]:[
          { movie_id: movieId },
          { user_id},
    ]
    }
    })
  // console.log(ratings.rating)
  console.log(reviews.summary)
  res.render('movie-detail', { title: 'Movie Detail', movie, reviews, ratings })
}))


module.exports = router;