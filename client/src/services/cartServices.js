import instance from './instance';

const cartServices = {
    addToCart: async (data) => {
        return await instance.post('/cart/add', data);
    }
}

export default cartServices;