import Order from '../models/Order.js';

const orderController = {
    getAllOrders: async (req, res) => {
        try {
            const orders = await Order.find();
            return res.status(200).json(orders);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    createOrder: async (req, res) => {
        try {
            const userId = req.userId;
            const { products, total } = req.body;
            const order = new Order({
                user: userId,
                products,
                total,
                status: 'completed'
            });

            await order.save();
            return res.status(201).json(order);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    getOrderByID: async (req, res) => {
        try {
            const { id } = req.params;
            const order = await Order.findById(id);
            return res.status(200).json(order);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    updateOrder: async (req, res) => {
        try {
            const { id } = req.params;
            const { products, total, status } = req.body;

            const order = await Order.findById(id);

            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }

            await Order.findByIdAndUpdate(id, { products, total, status });
            return res.status(200).json({ message: 'Order updated successfully' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    deleteOrder: async (req, res) => {
        try {
            const { id } = req.params;
            const order = await Order.findById(id);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }

            await Order.findByIdAndDelete(id);
            return res.status(200).json({ message: 'Order deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
}

export default orderController;