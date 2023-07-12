import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {

    const [cartProducts, setcartProducts] = useState([])
    const updateLocalStorage = async (products) => {
        await localStorage.setItem('codeburger:cartInfo', JSON.stringify(products))
    }

    const putProductsInCart = async product => {

        const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)
        let newCartProducts
        if (cartIndex >= 0) {
            newCartProducts = cartProducts

            newCartProducts[cartIndex].quantity =
                newCartProducts[cartIndex].quantity + 1
            setcartProducts(newCartProducts)

        } else {
            product.quantity = 1
            newCartProducts = [...cartProducts, product]
            setcartProducts([...cartProducts, product])
        }
       await updateLocalStorage(newCartProducts)

        

    }


    const deleteProducts = async productId => {
        const newCart = cartProducts.filter(product => product.id !== productId)


        setcartProducts(newCart)
        await updateLocalStorage(newCart)
    }





    const increaseProducts = async productId => {
        const newCart = cartProducts.map(product => {
            return product.id === productId ? { ...product, quantity: product.quantity + 1 } : product


        })
        setcartProducts(newCart)
        await updateLocalStorage(newCart)
        
    }


    const decreaseProducts = async productId => {
        const cartIndex = cartProducts.findIndex(pd => pd.id === productId)


        if (cartProducts[cartIndex].quantity > 1) {




            const newCart = cartProducts.map(product => {
                return product.id === productId ? { ...product, quantity: product.quantity - 1 } : product


            })


            setcartProducts(newCart)
            await updateLocalStorage(newCart)
        }else{
            deleteProducts(productId)
        }
      
        
    }


    useEffect(() => {
        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem('codeburger:cartInfo')
            if (clientCartData) {
                setcartProducts(JSON.parse(clientCartData))

            }

        }

        loadUserData()
    }, [])


    return (
        <CartContext.Provider value={{ putProductsInCart, cartProducts, increaseProducts, decreaseProducts }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("useCart must be used with CartContext")
    }
    return context
}




CartProvider.prototypes = {
    children: PropTypes.node
}

