import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/CartContext'

const CartWidget = () =>{
    const {cartProducts,productsTotalAmount} = useContext(CartContext);
    return(
        <div className="iconsHeader me-3 text-white order-1 order-lg-2 order-xl-2 flex-sm-grow-2">
            <i className="icon-search"></i>
            <i className="icon-user"></i>
            <Link to="/cart" className="text-white">
                <i className="icon-cart" type="button">
                    { cartProducts.length >= 1 ? <span className="badge bg-secondary">{productsTotalAmount(cartProducts,"quantity")}</span> : null}
                </i>
            </Link>
        </div> 
    )
}
export default CartWidget;