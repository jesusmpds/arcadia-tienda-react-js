import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/CartContext'
import './Cart.scss'

function Cart() {
    const {cartProducts,removeItem,productsTotalPrice,productsTotalAmount,setCartProducts} = useContext(CartContext);
        console.log(cartProducts)
        
        const Amount = productsTotalAmount(cartProducts,"quantity")
        const Price = productsTotalPrice(cartProducts,"quantity","precio")

        const updateProductQuantity = (e, itemId) =>{
            console.log(e)
            let quantity = e.target.value
            let duplicatedProduct = cartProducts.filter((item)=> itemId === item.id)
            duplicatedProduct[0].quantity = parseInt(quantity)
            return setCartProducts(setCartProducts)
        }

    return (
        <div className="container modal-dialog-centered modal-lg modal-xl">
            { cartProducts.length > 0 ?
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title" id="exampleModalCenterTitle">TU CARRITO</h2>
                </div>
                    <div className="modal-body" id="carritoBody" >
                            <div className="container-fluid" id="precioTotal">
                                <h4 className="row">TOTAL: {Amount} {Amount===1 ? "producto": "productos"} $({Price}) </h4>
                            </div>
                        {cartProducts.map((item) =>{
                            return(
                            <div className="container-fluid" id="listaProductosCarrito" key={item.id}>
                                <div className="d-flex border rounded w-100 mb-2" >
                                    <div className="col-6 col-md-4">
                                        <img src={item.url} className="mr-3 w-100" alt={item.nombre}></img>
                                    </div>
                                    <div className="col-6 col-md-8 media-body p-3">
                                        <div className="row justify-content-between">
                                            <h3 className="mt-0 ">{item.nombre}</h3>
                                            <h3 className="pr-3"> ${item.precio}</h3>
                                        </div>
                                        <h3 className="mt-5">Talla:<p className="d-inline"> S</p></h3>
                                        <div className="d-flex justify-content-between mt-5" id="cantidadProducto">
                                            <select defaultValue={item.quantity} onChange={(e) => updateProductQuantity(e,item.id)}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="button" className="col-1 btn-close" aria-label="Close" onClick={() => removeItem(item.id)}></button>
                                </div>
                            </div>
                            )})}
                        </div>
                    
                <div className="modal-footer">
                    <Link to="/" className="btn btn-secondary" data-dismiss="modal">Ir a la Tienda</Link>
                    <button type="button" className="btn btn-primary">Ir a pagar</button>
                </div>
            </div> : <div className="container d-flex flex-column align-items-center">
                        <p>Añade un producto al carrito para poder comprar.</p>
                        <Link to="/" className="btn btn-primary">Ir a la tienda</Link>
                    </div>
            }
        </div>
    )
}

export default Cart;