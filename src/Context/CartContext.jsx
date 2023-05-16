import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const productsInLocalStorage = localStorage.getItem("cartProducts");
            return productsInLocalStorage ? JSON.parse(productsInLocalStorage) : []
        } catch (error) {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartItems))
    }, [cartItems])

    const addProductsToCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );

        if (inCart) {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, amount: inCart.amount + 1 }
                    } else {
                        return productInCart;
                    }
                })
            )
        } else {
            setCartItems([...cartItems, { ...product, amount: 1 }])
        }
    };

    const deleteProducts = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );

        if (inCart.amount === 1) {
            setCartItems(
                cartItems.filter((productsInCart) => productsInCart.id !== product.id)
                );
        } else {
            setCartItems((productInCart) => {
                if (productInCart.id === product.id) {
                    return { ...inCart, amount: inCart.amount - 1 }
                } else return productInCart;
            })
        }
    };

    return(
        <CartContext.Provider value={{ cartItems, addProductsToCart, deleteProducts }}>
            { children }
        </CartContext.Provider>
    )

}