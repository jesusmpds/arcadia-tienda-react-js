import React,{useState,createContext} from 'react'

export const CartContext = createContext()

export const CartProvider = (props) =>{

    const [cartProducts,setCartProducts] = useState([])

    const isInCart = (itemId) => {
        console.log(cartProducts)
        return cartProducts.some((item)=> item.id === itemId)
    }
    const addItem = (items,quantity) =>{
        if(isInCart(items.id)) {
            let duplicatedProduct = cartProducts.filter((item)=> items.id === item.id)
            duplicatedProduct[0].quantity = duplicatedProduct[0].quantity + quantity
            console.log(cartProducts)
            //setCartProducts(onCartProducts)
            return
        }
        items.quantity = quantity
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
