import { useLoaderData } from "react-router-dom";

const Products = () => {
    const products = useLoaderData();

    return (
        // show products as tailwind cards as per the screensize
        <div className="flex flex-wrap">
            {products.map((product) => (
                <div key={product._id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                    <div className="bg-white rounded-lg shadow-md">
                        <img src={product.image} alt={product.name} className="w-full h-32 object-cover object-center" />
                        <div className="p-4">
                            <span className="font-semibold text-gray-800">{product.name}</span>
                            <span className="block text-gray-500 text-sm">{product.price}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;