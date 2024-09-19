import React, { useContext } from 'react'
import { FaTrash } from "react-icons/fa6";
import { Payments } from './Payments';
import { ShopContext } from '../ShopContext';

export const CartItems = () => {
    const {products} = useContext(ShopContext);
    return (
        <div className='flex flex-col lg:flex-row p-4 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-6'>
            <div className='flex-1'>
                <h2 className='text-2xl font-semibold mb-4'>
                    {products.length > 0 ? 'Your cart items' : 'Your cart is empty right now please go a head and add some items'}
                </h2>
                {products.map((product) => (
                    <div className='flex items-start space-x-4 mb-6'>
                        <img className='w-24 h-24 object-cover rounded-lg' src={product.thumbnail} alt={product.title} />
                        {/* {product info} */}
                        <div className='flex flex-col justify-between flex-1'>
                            <div className='text-lg font-semibold'>{product.title}</div>
                            <div className='text-sm text-gray-500'>{product.description}</div>
                            <div className='flex items-center justify-between mt-2'>
                                <div className='flex items-center space-x-2'>
                                    <span className='text-lg text-pink-600 font-semibold'>
                                        ${product.price}
                                    </span>
                                    <div className='flex items-center space-x-2'>
                                        <label htmlFor="" className='text-sm font-semibold'>Quantity</label>
                                        <input type="number" className='w-16 border border-gray-400 rounded-md p-1 text-center' />
                                    </div>
                                </div>
                                <button className='text-red-500 hover:text-red-700 transition-colors duration-200 ease-in-out'>
                                <FaTrash  className='w-4 h-5'/>
                                </button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
            <Payments/>
            <div>
            </div>
        </div>
    )
}
