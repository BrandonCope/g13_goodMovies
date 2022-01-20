const express = require('express');

const { asyncHandler } = require('./utils');
const { Movie } = require('../db/models');
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

  router.get('/:id(\\d+)', asyncHandler(async (req,res) => {
    const movieId = parseInt(req.params.id, 10);
    const movie = await Movie.findByPk(movieId)
    console.log(movie.movie_title)
    res.render('movie-detail', { title: 'Movie Detail', movie})
}))


module.exports = router;
