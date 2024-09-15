import React from 'react'
import productData from '../assets/productsData.json';

export const ProductList = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
            {
                productData.map(product => (
                    <div className='border border-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-0'></div>
                ))
            }
        </div>
    )
}
