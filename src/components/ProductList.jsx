import React, { useEffect, useState } from 'react'
import productData from '../assets/productsData.json';
import { ProductItem } from './ProductItem';
import axios from 'axios';
import { ProductLoadingSkeleton } from './ProductLoadingSkeleton';
import { AiOutlineSearch } from 'react-icons/ai';

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        try {
            const fetchProducts = async () => {
                setLoading(true)
                const { data } = await axios.get('https://dummyjson.com/products?limit=100');
                setProducts(data.products)
                setLoading(false)
            }
            fetchProducts()
        } catch (e) {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        try {
            const fetchProducts = async () => {
                setLoading(true)
                const { data } = await axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`);
                setProducts(data.products)
                setLoading(false)
            }
            fetchProducts()
        } catch (e) {
            setLoading(false)
        }
    }, [searchTerm])

    if (loading) return <ProductLoadingSkeleton />
    return (
        <>
            <div className='relative mt-4'>
                <input type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder='search for products...'
                    className='p-2 pl-10 rounded border shadow w-full focus:outline-none 
                focus:border-pink-300' />
                <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
                    <AiOutlineSearch />
                </span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6'>
                {
                    products.length > 0 && products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))
                }
            </div>
        </>
    )
}
