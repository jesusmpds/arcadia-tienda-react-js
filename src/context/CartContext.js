import React,{useState,createContext} from 'react'

export const CartContext = createContext()

export const CartProvider = (props) =>{

    const [cartProducts,setCartProducts] = useState([])
    const [productSize,setProductSize] = useState("")
    const [userInfo,setUserInfo] = useState([])

    const onSizeAdd = (e)=>{
        setProductSize(e.target.innerText)
    }
    const isInCart = (itemId) => {
        return cartProducts.some((item)=> item.id === itemId && item.talla === productSize)
    }
    const addItem = (items,quantity) =>{
        if(isInCart(items.id)) {
            let duplicatedProduct = cartProducts.filter((item)=> items.id === item.id)
            duplicatedProduct[0].quantity = duplicatedProduct[0].quantity + quantity
            return
        }
        items.talla = productSize
        items.quantity = quantity
        setCartProducts([...cartProducts,items])
    }
    
    const removeItem = (itemId) =>{
        setCartProducts(cartProducts.filter((item)=> item.id !== itemId))
    }
    const clearItems = () =>{
        setCartProducts([])
    }
    function productsTotalAmount(productos,quantity) {
        let total = 0
        productos.forEach(item => total += item[quantity])
        return total
    }
    
    function productsTotalPrice(productos,quantity,precio) {
        let total = 0
        productos.forEach(item => total += (item[quantity] * item[precio]))
        return total
    }

    return(
        <CartContext.Provider value={{setCartProducts,addItem,removeItem,clearItems,cartProducts,productsTotalAmount,productsTotalPrice,onSizeAdd,productSize,setProductSize,userInfo,setUserInfo}}>
            {props.children}
        </CartContext.Provider>
    )
}
