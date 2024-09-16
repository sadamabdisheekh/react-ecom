import React from 'react'
import { Link } from 'react-router-dom'

export const ProductItem = ({product}) => {
  return (
    <Link to={`/product-details/${product.id}`} className='border border-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in'>
    <img className='w-full h-48 object-cover' 
    src={product.thumbnail} alt={product.title}
    />
    <div className='p-4'>
        <h2 className='font-bold text-xl mb-2 truncate'>{product.title}</h2>
        <p className='text-gray-600 mb-2 truncate'>{product.description}</p>
        <div className='flex justify-between items-center'>
            <span className='text-blue-600 font-semibold'>{product.price}</span>
            <div className='text-sm text-gray-600'>
                {product.stock > 0 ? `${product.stock} in Stock` : 'Out of stock'}
            </div>
        </div>
        <div className='mb-4'>
            <span className='text-yellow-500'>
                {'★'.repeat(Math.round(product.rating))}
            </span>
            <span className='text-gray-500'>
                {'★'.repeat(Math.round(5 - product.rating))}
            </span>
        </div>
    </div>
</Link>
  )
}
