import productServices from "../../services/productServices";

const productsLoader = async () => {
    try {
        const response = await productServices.getProducts();

        return response.data;
    } catch (error) {
        return null;
    }
}

export default productsLoader;