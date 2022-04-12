const express = require('express');

const { check, validationResult } = require('express-validator')
const { asyncHandler, csrfProtection } = require('./utils');
const { Shelf, User } = require('../db/models');
const { requireAuth } = require('../auth');

const router = express.Router();

router.get('/ratings/new',
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {

  })
);
