const express = require('express');
const router = express.Router();
// const { v4: uuidv4 } = require('uuid');
// const db = require('../db');
const validate = require('../validate/user.validate')
const controller = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// router.get('/',authMiddleware.requireAuth, controller.index)
router.get('/', controller.index)
// router.get('/cookie', (req, res, next) =>{
//     res.cookie('user-id', 12314);
//     res.send('hello')
// })
router.get('/search',controller.search)

router.get('/create', controller.create)
router.get('/:id', controller.get)

router.post('/create', validate.postCreate, controller.postCreate)

module.exports = router;