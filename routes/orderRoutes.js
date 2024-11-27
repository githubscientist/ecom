// conver the above require to import
import { Router } from 'express';
import orderController from '../controllers/orderController.js';
import auth from '../middlewares/auth.js';
const orderRouter = Router();

orderRouter.post('/', auth.checkAuth, orderController.createOrder);

orderRouter.get('/', auth.checkAuth, auth.allowRoles(['admin']), orderController.getAllOrders);
orderRouter.get('/:id', auth.checkAuth, auth.allowRoles(['admin']), orderController.getOrderByID);
orderRouter.put('/:id', auth.checkAuth, auth.allowRoles(['admin']), orderController.updateOrder);
orderRouter.delete('/:id', auth.checkAuth, auth.allowRoles(['admin']), orderController.deleteOrder);

export default orderRouter;