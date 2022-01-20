var express = require('express');
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')

const { Movie } = require('../db/models');
const { loginUser, logoutUser } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils');
const { rest } = require('lodash');
const session = require('express-session');

const router = express.Router();


router.get('/:id(\\d+)', asyncHandler(async (req,res) => {
    const movieId = parseInt(req.params.id, 10);
    const movie = await Movie.findByPk(movieId)
    console.log(movie.movie_title)
    res.render('movie-detail', { title: 'Movie Detail', movie})
}))

module.exports = router;
