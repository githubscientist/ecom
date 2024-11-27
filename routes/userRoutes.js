import express from 'express';
import userController from '../controllers/userController.js';
import auth from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.get('/', auth.checkAuth, auth.allowRoles(['admin']), userController.getAllUsers);
userRouter.get('/:id', auth.checkAuth, auth.allowRoles(['admin']), userController.getUserById);
userRouter.post('/', auth.checkAuth, auth.allowRoles(['admin']), userController.createUser);
userRouter.put('/:id', auth.checkAuth, auth.allowRoles(['admin']), userController.updateUser);
userRouter.delete('/:id', auth.checkAuth, auth.allowRoles(['admin']), userController.deleteUser);

export default userRouter;