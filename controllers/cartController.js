import User from '../models/user.js';

const cartController = {
    addToCart: async (req, res) => {
        // get the product id from the request body
        const { productId, quantity } = req.body;

        // get the user from the request object
        const userId = req.userId;

        // get the user from the database
        const user = await User.findById(userId);

        // check if the product is already in the cart
        const productIndex = user.cart.findIndex(item => item.product == productId);

        // if the product is not in the cart
        if (productIndex === -1) {
            user.cart.push({ product: productId, quantity });
        } else {
            // if the product is already in the cart
            user.cart[productIndex].quantity += quantity;
        }

        // save the user
        await user.save();

        // send a response
        res.json({ message: 'Product added to cart' });
    }
}

export default cartController;