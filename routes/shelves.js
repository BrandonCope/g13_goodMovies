const express = require('express');

const { check, validationResult } = require('express-validator')
const { asyncHandler, csrfProtection } = require('./utils');
const { Shelf, Movie, Movie_Shelf, User } = require('../db/models');
const { requireAuth } = require('../auth');

const router = express.Router();

const shelfValidators = [
  check('shelf_title')
    .exists({ checkFalsy: true })
    .withMessage("Please provide value for shelf title.")
    .isLength({ max: 30 })
    .withMessage("Title may not be more that 30 characters long.")
]

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

router.post('/',
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {
    const user_id = req.session.auth.userId;

    const {
      shelf_id,
      movie_id,
    } = req.body

    const addToShelf = await Movie_Shelf.create({
      movie_id,
      shelf_id
    })

    const shelves = await Shelf.findAll({
      where: { user_id },
      order: [['shelf_title', 'ASC']]
    });

    res.render('shelves', {
      title: "Shelves",
      addToShelf,
      shelves,
      csrfToken: req.csrfToken()
    })
  })
);


router.get('/:shelfId',
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {
    const shelf_id = parseInt(req.params.shelfId, 10);

    const shelf = await Shelf.findByPk(shelf_id)

    const movies = await Movie.findAll({
      include: [{
        model: Shelf,
        where: { id: shelf_id }
      }],
    })

    const shelfMovies = await Movie_Shelf.findAll({
      where: { shelf_id }
    })

    res.render('shelf-detail', { title: "Shelf", shelf, movies, shelfMovies, csrfToken: req.csrfToken() })
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
  shelfValidators,
  asyncHandler(async (req, res) => {

    const shelfId = parseInt(req.params.shelfId, 10);
    const shelf = await Shelf.findByPk(shelfId)

    shelf.shelf_title = req.body.shelf_title;

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await shelf.save();
      res.redirect(`/shelves/${shelf.id}`)
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('shelf-edit', {
        title: "shelf",
        shelf,
        errors,
        csrfToken: req.csrfToken()
      })
    }
  })
);

router.post('/:shelfId/delete',
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {
    const shelfId = parseInt(req.params.shelfId, 10);
    const shelf = await Shelf.findByPk(shelfId)
    const shelfMovie = await Movie_Shelf.findAll({
      where: { shelf_id: shelfId },
    })

    for (let movie of shelfMovie) {
      await movie.destroy()
    }

    await shelf.destroy();


    const user_id = req.session.auth.userId;

    const shelves = await Shelf.findAll({
      where: { user_id },
      order: [['shelf_title', 'ASC']]
    });

    res.render('shelves', {
      shelves,
      csrfToken: req.csrfToken()
    })
  })
);


module.exports = router
