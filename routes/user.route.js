const express = require('express');
const router = express.Router();


const validate = require('../validate/user.validate')
const controller = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/',authMiddleware.requireAuth, controller.index)

router.get('/search',controller.search)

router.get('/create', controller.create)
router.get('/:id', controller.get)

router.post('/create', validate.postCreate, controller.postCreate)

module.exports = router;