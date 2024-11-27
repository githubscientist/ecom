import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../utils/config.js';
import User from '../models/user.js';

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
    },
    allowRoles: (roles) => {
        return async (req, res, next) => {
            try {
                // Get the user role
                const user = await User.findById(req.userId);

                if (!roles.includes(user.role)) {
                    return res.status(403).json({ message: 'Forbidden' });
                }

                next();
            } catch (error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }
}

export default auth;