import Product from '../models/product.js';

const productController = {
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find();
            return res.status(200).json(products);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    getProductById: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findById(id).select('-__v');

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    createProduct: async (req, res) => {
        try {
            const { name, description, price, image, category, stock } = req.body;

            if (!name || !description || !price || !image || !category || !stock) {
                return res.status(400).json({ message: 'All fields are required' });
            }

            const newProduct = new Product({
                name,
                description,
                price,
                image,
                category,
                stock
            });

            await newProduct.save();

            return res.status(201).json({ message: 'Product created successfully' });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;
            // get the updated values from request body
            const { name, description, price, image, category, stock } = req.body;

            // check if product exists
            const product = await Product.findById(id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            // update the product
            await Product.findByIdAndUpdate(id, {
                name,
                description,
                price,
                image,
                category,
                stock,
                updatedAt: Date.now()
            });

            return res.status(200).json({ message: 'Product updated successfully' });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;

            // check if product exists
            const product = await Product.findById(id);

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            // delete the product
            await Product.findByIdAndDelete(id);

            return res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export default productController;