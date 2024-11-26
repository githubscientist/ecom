const express = require('express');
const productController = require('../controllers/productController');
const auth = require('../middlewares/auth');
const productRouter = express.Router();

// public routes
productRouter.get('/', productController.getAllProducts);
productRouter.get('/:id', productController.getProductById);

// protected routes
// allowed: ['admin']

productRouter.post('/', auth.checkAuth, auth.allowRoles(['admin']), productController.createProduct);
productRouter.put('/:id', auth.checkAuth, auth.allowRoles(['admin']), productController.updateProduct);
productRouter.delete('/:id', auth.checkAuth, auth.allowRoles(['admin']), productController.deleteProduct);

module.exports = productRouter;