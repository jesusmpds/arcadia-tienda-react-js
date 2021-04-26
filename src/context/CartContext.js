import React,{useState,createContext} from 'react'

export const CartContext = createContext()

export const CartProvider = (props) =>{

    const [cartProducts,setCartProducts] = useState([])

    const isInCart = (itemId) => {
        return cartProducts.some((item)=> item.id === itemId)
    }
    const addItem = (items,quantity) =>{
        items.quantity = quantity
        if(isInCart(items.id) === true) {
            let duplicatedProduct = cartProducts.find((item)=> items.id === item.id)
            duplicatedProduct.quantity = duplicatedProduct.quantity + quantity
            setCartProducts(duplicatedProduct)
            return
        }
        setCartProducts([...cartProducts,items])
    }
    const removeItem = (itemId) =>{
        setCartProducts(cartProducts.filter((item)=> item.id !== itemId))
    }
    const clearItems = () =>{
        setCartProducts([])
    }


    return(
        <CartContext.Provider value={{setCartProducts,addItem,removeItem,clearItems}}>
            {props.children}
        </CartContext.Provider>
    )
}
