import express from 'express';
import authRouter from './routes/authRoutes.js';
import logger from './utils/logger.js';
import cookieParser from 'cookie-parser';
import productRouter from './routes/productRoutes.js';
import { unknownEndpoint } from './utils/Error.js';
import orderRouter from './routes/orderRoutes.js';
import userRouter from './routes/userRoutes.js';
// const cors = require('cors');
import cartRouter from './routes/cartRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// app.use(cors({
//     origin: 'http://localhost:5173',
//     credentials: true
// }));

// use the client build of the frontend
app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

app.use(express.json());
app.use(cookieParser());
app.use(logger);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/cart', cartRouter);

app.use(unknownEndpoint);

export default app;