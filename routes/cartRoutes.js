const express = require('express');
const cartController = require('../controllers/cartController');
const cartRouter = express.Router();
const auth = require('../middlewares/auth');

cartRouter.post('/add', auth.checkAuth, cartController.addToCart);

module.exports = cartRouter;