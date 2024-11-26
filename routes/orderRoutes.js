const express = require('express');
const orderController = require('../controllers/orderController');
const orderRouter = express.Router();
const auth = require('../middlewares/auth');


orderRouter.post('/', auth.checkAuth, orderController.createOrder);

orderRouter.get('/', auth.checkAuth, auth.allowRoles(['admin']), orderController.getAllOrders);
orderRouter.get('/:id', auth.checkAuth, auth.allowRoles(['admin']), orderController.getOrderByID);
orderRouter.put('/:id', auth.checkAuth, auth.allowRoles(['admin']), orderController.updateOrder);
orderRouter.delete('/:id', auth.checkAuth, auth.allowRoles(['admin']), orderController.deleteOrder);

module.exports = orderRouter;