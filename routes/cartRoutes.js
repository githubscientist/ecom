import express from 'express';
import cartController from '../controllers/cartController.js';
import auth from '../middlewares/auth.js';

const cartRouter = express.Router();


cartRouter.post('/add', auth.checkAuth, cartController.addToCart);

export default cartRouter;