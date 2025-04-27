import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context';
import { BiSolidRocket } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../utils/apiPaths';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import Product from '../../components/ProductItem/ProductItem';
const HomePage = () => {
    const { loading, setLoading, productList, setProductList } = useContext(GlobalContext);


    useEffect(() => {
        const fetchListsOfProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${BASE_URL}/api/products/`);
                const result = await response.data;
                console.log("Fetched products:", result.data);
                if (result && result.data && result.data.length) {
                    setProductList(result.data);
                    setLoading(false);
                }
            } catch (err) {
                setProductList([]);
                toast.error("Something went wrong. Please try again");
            }
            finally {
                setLoading(false);
            }
        };
        fetchListsOfProducts();
    }, []);
    return (
        <div className='max-w-7xl py-12 mx-auto'>
            <Toaster position='top-center' />
            <div className='flex justify-center items-center space-x-4 '>
                <h1 className='text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text text-transparent text-center '>Current Products</h1>
                <BiSolidRocket className='text-4xl mt-2 text-blue-400' />
            </div>
            <div className='mt-10 py-4 '>
                {
                    loading ?
                        <div className='flex items-center justify-center space-x-1 tracking-wide'>
                            <h1>No products found 😔</h1>
                            <Link to={"/create-product"} className='font-semibold text-blue-400'>
                                Create a product
                            </Link>
                        </div> :
                        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-4'>
                            {
                                productList && productList.length ?
                                    productList.map((productItem) => (<Product productItem={productItem} />
                                    ))

                                    : (<h3>No products added</h3>)
                            }
                        </div>
                }

            </div>
        </div>
    );
};

export default HomePage;