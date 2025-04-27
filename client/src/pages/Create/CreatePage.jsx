import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from '../../utils/apiPaths';
import { useNavigate } from 'react-router-dom';
const CreatePage = () => {
    const { newProduct, setNewProduct, theme, isEdit, setIsEdit } = useContext(GlobalContext);
    const navigate = useNavigate();
    const handleAddProduct = async () => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            toast.error("Please fill in all the fields");
        }
        try {
            const response = isEdit
                ? await axios.put(`${BASE_URL}/api/products/${location.state.getCurrentProductItem._id}`, {
                    name: newProduct.name,
                    price: newProduct.price,
                    image: newProduct.image,
                })
                :
                await axios.post(`${BASE_URL}/api/products/add`, {
                    name: newProduct.name,
                    price: newProduct.price,
                    image: newProduct.image,
                });
            const result = await response.data;
            if (result) {
                setNewProduct({
                    name: "",
                    price: "",
                    image: ""
                });
                toast.success("Product created successfully");
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            }
        } catch (err) {
            console.err(`Error saving product:`, err);
            toast.error("Something went wrong, Please try again");
        }

    };
    return (
        <div className='max-w-[80%] mx-auto flex flex-col justify-center items-center p-4 mt-2'>
            <Toaster position='top-center' />
            <div>
                <h1 className='font-bold text-4xl tracking-wider mb-4'>Create New Product</h1>
            </div>
            {/* 3 inputs which is product name, price and then the image URL */}
            <div className={`w-[70%] p-6 rounded-lg  flex  my-10 ${theme === "dark" ? "outline-1 outline-gray-700" : "shadow-xl"}`}>
                <div className='flex w-full mx-auto flex-col items-center justify-center space-y-4'>
                    <input type="text" placeholder='Product Name  ' name='name' value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        className={`w-full outline-gray-500 outline-1 px-4 py-2 ${theme === "dark" ? "placeholder:text-gray-500" : "placeholder:text-gray-800"} rounded-lg`} />
                    <input type="number" placeholder='Price ' name='price' value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        className={`w-full outline-gray-500 outline-1 px-4 py-2 ${theme === "dark" ? "placeholder:text-gray-500" : "placeholder:text-gray-800"} rounded-lg`} />
                    <input placeholder='Image URL ' name='image' value={newProduct.image}
                        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        className={`w-full outline-gray-500 outline-1 px-4 py-2 ${theme === "dark" ? "placeholder:text-gray-500" : "placeholder:text-gray-800"} rounded-lg`} />
                    <div className='w-full '>
                        <button className='bg-cyan-600 text-cyan-200 px-8 py-2  rounded-lg w-full hover:bg-sky-600 duration-300 hover:text-sky-200
                        ' onClick={handleAddProduct}>Add Product</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CreatePage;