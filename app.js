const express = require('express');
const authRouter = require('./routes/authRoutes');

const app = express();

app.use('/api/v1/auth', authRouter);

module.exports = app;