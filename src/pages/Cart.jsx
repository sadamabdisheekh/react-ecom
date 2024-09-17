import React from 'react'

export const Cart = () => {
    const products = [];
  return (
    <div className='flex flex-col lg:flex-row p-4 lg:p-8 space-y-6 lg:space-x-0'>
        <div className='flex-1'>
            <h2 className='text-2xl font-semibold mb-4'>
                {products.length > 0 ? 'Your cart items' : 'Your cart is empty right now please go a head and add some items'}
            </h2>
        </div>
    </div>
  )
}
