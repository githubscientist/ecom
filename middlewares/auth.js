const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');

const auth = {
    // Middleware to check if the user is authenticated
    checkAuth: async (req, res, next) => {
        try {
            const token = req.cookies.token;

            if (!token) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            // verify the token
            const decoded = jwt.verify(token, JWT_SECRET);

            req.userId = decoded.userId;

            next();
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

module.exports = auth;