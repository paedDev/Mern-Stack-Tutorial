import React from 'react';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
const Product = ({ productItem }) => {
    return (
        <div key={productItem._id} className='gap-4 w-full'>
            <div className='flex flex-col h-40 space-y-2'>
                <img src={productItem.image} alt={productItem.name} className='h-64 rounded-t-xl' />
                <h2>{productItem.name}</h2>
                <p>{productItem.price.toLocaleString(`en-us`, {
                    style: 'currency', currency: "USD"
                })}</p>
                {/* Icons here delete and update(edit) */}
                <div>

                </div>
            </div>
        </div>
    );
};

export default Product;