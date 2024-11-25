const mongoose = require('mongoose');
const { MONGODB_URI } = require('./utils/config');
const app = require('./app');

mongoose.connect(MONGODB_URI)
    .then(
        () => {
            console.log('Connected to MongoDB...');
            app.listen(3001, () => {
                console.log(`Server running @ http://localhost:3001`);
            });
        }
    )
    .catch(err => console.error('Could not connect to MongoDB...', err));