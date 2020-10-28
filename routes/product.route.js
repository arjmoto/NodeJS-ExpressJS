const express = require('express');
const router = express.Router();

const validate = require('../validate/user.validate')
const controller = require('../controllers/product.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', controller.index);

module.exports = router;