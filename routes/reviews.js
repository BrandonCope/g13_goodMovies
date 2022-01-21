const express = require('express');

const {Op} = require('sequelize')
const { check, validationResult } = require('express-validator')
const { asyncHandler, csrfProtection } = require('./utils');
const { Movie, Review, Rating, User } = require('../db/models');


const { requireAuth } = require('../auth');

const router = express.Router()


router.delete('/:reviewId(\\d+)', asyncHandler(async (req,res) => {
  const reviewId = parseInt(req.params.reviewId, 10);
  console.log(reviewId)
  const review = await Review.findByPk(reviewId)
  await review.destroy()
  res.json({ message: "Success" })
}))

module.exports = router;
