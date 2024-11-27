import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Products = () => {
    const { products, total } = useLoaderData();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);

    const updatePage = (e) => {
        const newPage = parseInt(e.target.textContent);
        setPage(newPage);
        navigate(`/products/pages/${newPage}`);
    }

    const previousPage = () => {
        if (page > 1) {
            const newPage = page - 1;
            setPage(newPage);
            navigate(`/products/pages/${newPage}`);
        }
    }

    const nextPage = () => {
        if (page < Math.ceil(total / 5)) {
            const newPage = page + 1;
            setPage(newPage);
            navigate(`/products/pages/${newPage}`);
        }
    }

    return (
        // show products without image as tailwind cards as per the screensize
        <div className="flex flex-wrap">
            {products.map((product, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                    <div className="bg-white rounded-lg shadow-lg">
                        <div className="p-2">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-sm text-gray-600">{product.description}</p>
                            <p className="text-lg font-semibold text-gray-800">${product.price}</p>
                        </div>
                    </div>
                </div>
            ))}

            {/* pagination */}
            <div className="w-full p-2">
                <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
                        onClick={previousPage}
                    >
                        Prev
                    </button>

                    {
                        // check if total is a valid number
                        Number.isFinite(total) && Array.from({ length: Math.ceil(total / 5) }, (_, i) => i + 1).map((page) => (
                            <button key={page} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                                onClick={updatePage}
                            >
                                {page}
                            </button>
                        ))
                    }

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                        onClick={nextPage}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Products;