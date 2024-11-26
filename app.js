const express = require('express');
const authRouter = require('./routes/authRoutes');
const logger = require('./utils/logger');
const cookieParser = require('cookie-parser');
const productRouter = require('./routes/productRoutes');
const unknownEndpoint = require('./utils/Error');
const orderRouter = require('./routes/orderRoutes');
const userRouter = require('./routes/userRoutes');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(logger);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/users', userRouter);

app.use(unknownEndpoint);

module.exports = app;