import { createContext, useContext, useEffect } from 'react';
import reducer, { initialState } from './shopReducer';
import { useReducer } from 'react';

export const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem('cart_items', JSON.stringify({
            products: state.products,
            total: state.total
        }))
    }, [state])

    const addToCart = (product) => {
        const productIndex = state.products.findIndex(p => p.id == product.id);
        let updatedProducts = [...state.products];

        if (productIndex != -1) {
            updatedProducts[productIndex] = {
                ...updatedProducts[productIndex],
                quantity: updatedProducts[productIndex].quantity + 1
            }
        } else {
            updatedProducts = [
                ...updatedProducts,
                {
                    ...product,
                    quantity: 1
                }
            ]
        }
        calculateTotalPrice(updatedProducts);

        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                products: updatedProducts
            }
        })
    }

    const calculateTotalPrice = (products) => {
        let total = 0;
        products.forEach(product => {
            total += product.price * product.quantity;
        });
        dispatch({
            type: 'CALCULATE_TOTAL_PRICE',
            payload: {
                total
            }
        })
    }

    const updateProductQuantity = (product, newQuantity) => {
        const productIndex = state.products.findIndex(p => p.id == product.id);
        let updatedProducts = [...state.products];

        if (newQuantity < 0) {
            updatedProducts = updatedProducts.filter(p => p.id != product.id);
        } else {
            updatedProducts[productIndex] = {
                ...updatedProducts[productIndex],
                quantity: newQuantity
            }
        }

        calculateTotalPrice(updatedProducts);
        dispatch({
            type: 'UPDATE_PRODUCT_QUANTITY',
            payload: {
                products: updatedProducts
            }
        })
    }

    const removeFromCart = (product) => {
        const updateProduct = state.products.filter(p => p.id != product.id);
        calculateTotalPrice(updateProduct);
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                products: updateProduct
            }
        })

    }
    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART',
            payload: {}
        })
    }

    const value = {
        products: state.products,
        total: state.total,
        addToCart,
        updateProductQuantity,
        removeFromCart,
        clearCart
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}

const useShop = () => {
    const context = useContext(ShopContext);

    if (context == undefined) {
        throw new Error('context must be inside shop context');
    }
    return context;
}

export default useShop;