import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaOpencart, FaRegSquarePlus } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { GlobalContext } from '../../context';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(GlobalContext);
    return (
        <div className='max-w-7xl mx-auto px-4'>
            <div className={`flex h-20 justify-between items-center px-4 rounded-md`}>
                {/* ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}  */}
                <div className='flex space-x-4 items-center text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text text-transparent uppercase'>
                    <NavLink to={"/"}>
                        Product Store
                    </NavLink>
                    <FaOpencart className='text-sky-400' />
                </div>
                <div className=''>
                    <ul className='flex justify-between p-4 items-center space-x-3'>
                        {
                            theme === "dark" ? <button className='bg-gray-700 py-2 px-2 rounded-md border-none  '>
                                <li>
                                    <NavLink to={"/create-product"}>
                                        <FaRegSquarePlus className='text-3xl hover:text-cyan-500 duration-500  ' />
                                    </NavLink>
                                </li>
                            </button> : <button className=' py-2 px-2 rounded-md border-none  '>
                                <li>
                                    <NavLink to={"/create-product"}>
                                        <FaRegSquarePlus className='text-3xl hover:text-cyan-500 duration-500  ' />
                                    </NavLink>
                                </li>
                            </button>
                        }


                        <li>
                            <button onClick={toggleTheme}>
                                {
                                    theme === "dark" ?
                                        <FaToggleOn className='text-3xl hover:text-cyan-500 duration-500 mt-1' />
                                        : <FaToggleOff className="text-gray-800 text-3xl mt-1" />
                                }

                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;