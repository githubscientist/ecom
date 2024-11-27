import express from 'express';
import authController from '../controllers/authController.js';
import auth from '../middlewares/auth.js';

const authRouter = express.Router();

// public routes
authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);

// protected routes
authRouter.post('/logout', authController.logout);
authRouter.get('/me', auth.checkAuth, authController.me);

export default authRouter;