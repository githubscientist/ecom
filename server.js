const mongoose = require('mongoose');
const { MONGODB_URI } = require('./utils/config');

mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));