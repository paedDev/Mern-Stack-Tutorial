import React, { useContext, useEffect } from 'react';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { BASE_URL } from '../../utils/apiPaths';
import { GlobalContext } from '../../context';
const ProductCard = ({ productItem, fetchListsOfProducts }) => {
    const { theme } = useContext(GlobalContext);
    const usdFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const exchangeRate = 56.245; // ideally fetched dynamically

    const priceInUsd = productItem.price / exchangeRate;
    const handleDeleteProduct = async (getCurrentId) => {
        try {
            const response = await axios.delete(`${BASE_URL}/api/products/delete/${getCurrentId}`);
            const result = await response.data;
            if (result) {
                fetchListsOfProducts();
            }
            toast.success("Successfully Deleted");
        } catch (error) {
            console.log(error, "Delete Failed");
            toast.error("Could not delete product.Try again ");

        }

    };

    return (
        <div key={productItem._id} className={`w-full rounded-xl overflow-hidden shadow-lg h-100% ${theme === "dark" ? "bg-gray-800" : "bg-white"}  `}>
            <div className='flex flex-col h-80 space-y-2 m-5 rounded-xl max-w-[400px]'>
                <img src={productItem.image} alt={productItem.name} className='w-full h-48 object-cover rounded-t-xl' />
                <div className='px-2 mt-2 '>
                    <h2 className='font-semibold'>{productItem.name}</h2>
                    <p>{usdFormatter.format(priceInUsd)}</p>
                </div>
                {/* Icons here delete and update(edit) */}
                <div className='px-2 flex space-x-2 justify-start items-center text-center'>
                    <FaRegEdit className='bg-blue-200 text-blue-800 rounded-sm p-2' size={36} />
                    <AiFillDelete className='bg-red-200 text-gray-800 rounded-sm p-2 ' size={36}
                        onClick={() => handleDeleteProduct(productItem._id)} />

                </div>
            </div>
        </div>
    );
};

export default ProductCard;