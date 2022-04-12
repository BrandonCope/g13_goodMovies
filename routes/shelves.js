const express = require('express');

const { check, validationResult } = require('express-validator')
const { asyncHandler, csrfProtection } = require('./utils');
const { Shelf, User } = require('../db/models');
const { requireAuth } = require('../auth');

const router = express.Router();

router.get('/',
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {
    const user_id = req.session.auth.userId;

    const shelves = await Shelf.findAll({
      where: { user_id },
      order: [['shelf_title', 'ASC']]
    });
    res.render('shelves', { title: "Shelves", shelves, csrfToken: req.csrfToken() })
  })
);


router.get('/:shelfId',
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {
    const user_id = req.session.auth.userId;

    const shelfId = parseInt(req.params.shelfId, 10);

    const shelf = await Shelf.findByPk(shelfId)

    res.render('shelf-edit', { title: "Shelf", shelf, csrfToken: req.csrfToken() })
  })
);


router.post('/new',
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {

  })
);


router.get('/:shelfId/edit',
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {
    const shelfId = parseInt(req.params.shelfId, 10);

    const shelf = await Shelf.findByPk(shelfId)

    res.render('shelf-edit', { title: "Shelf", shelf, csrfToken: req.csrfToken() })
  })
);

router.post('/:shelfId/edit',
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {

  })
);

router.delete('/:shelfId',
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {

  })
);

module.exports = router
