const express = require('express');
const authController = require('../controllers/authController');
const auth = require('../middlewares/auth');

const authRouter = express.Router();

// public routes
authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);

// protected routes
authRouter.post('/logout', authController.logout);
authRouter.get('/me', auth.checkAuth, authController.me);

module.exports = authRouter;