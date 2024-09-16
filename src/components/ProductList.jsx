import React, { useEffect, useState } from 'react'
import productData from '../assets/productsData.json';
import { ProductItem } from './ProductItem';
import axios from 'axios';
import { ProductLoadingSkeleton } from './ProductLoadingSkeleton';

export const ProductList = () => {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
       try {
        const fetchProducts = async () => {
            setLoading(true)
            const {data} = await axios.get('https://dummyjson.com/products?limit=100');
            setProducts(data.products) 
            setLoading(false)       
        } 
        fetchProducts()
       }catch(e) {
        setLoading(false)
       }
    },[])
    if (loading) return <ProductLoadingSkeleton/>
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
            {
                products.length > 0 && products.map(product => (
                  <ProductItem key={product.id} product={product}/>
                ))
            }
        </div>
    )
}
