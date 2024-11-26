const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    total: Number,
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    },
});

module.exports = mongoose.model('Order', orderSchema, 'orders');