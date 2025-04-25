import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='max-w-7xl mx-auto px-4'>
            <div className='flex h-16 justify-between items-center'>
                <span>Product</span>
                <div className=''>
                    <ul className='flex justify-between p-4 items-center space-x-5'>
                        <li>
                            <NavLink to={"/"}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/create-product"}>
                                Create
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;