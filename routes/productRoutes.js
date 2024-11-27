

// convert the above require to import
import { Router } from 'express';
import productController from '../controllers/productController.js';
import auth from '../middlewares/auth.js';

const productRouter = Router();

// public routes
productRouter.get('/', productController.getAllProducts);
productRouter.get('/:id', productController.getProductById);

// protected routes
// allowed: ['admin']

productRouter.post('/', auth.checkAuth, auth.allowRoles(['admin']), productController.createProduct);
productRouter.put('/:id', auth.checkAuth, auth.allowRoles(['admin']), productController.updateProduct);
productRouter.delete('/:id', auth.checkAuth, auth.allowRoles(['admin']), productController.deleteProduct);

export default productRouter;