import instance from './instance';

const productServices = {
    getProducts: async () => {
        return await instance.get('/products');
    }
}

export default productServices;