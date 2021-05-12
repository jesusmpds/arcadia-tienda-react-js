import React, {useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemSize from './ItemSize/ItemSize'
import {CartContext} from '../../context/CartContext'
import swal from 'sweetalert';

const ItemDetail = ({item}) => {
    const {addItem,productSize} = useContext(CartContext);
    
    const handleAddToCartWithNoItemSize = (e)=> {
        e.preventDefault()
        swal("Oh no!", "Elige una talla para añadir tu prenda al carrito", "error") }

    const onAdd = (e,itemCount) =>{
        productSize ? addItem(item,itemCount) : handleAddToCartWithNoItemSize(e)
    }

    const handleNotEnoughStock = (e)=> {
        e.preventDefault()
        swal("Oh no! No tenemos stock suficiente", `Nuestro stock disponible para
         este producto es ${item.stock} unidades`, "error")
    }
    return (
        <div className="container">
            <div className="d-flex border rounded w-100 mb-2">
                <div className="col-6 col-md-4">
                    <img src={item.url} alt ={item.nombre} className="mr-3 w-100"/>
                </div>
                <div className="col-6 col-md-8 media-body p-3">
                    <div className="row justify-content-between">
                        <h3 className="mt-0 ">{item.nombre}</h3>
                        <h3 className="pr-3"> ${item.precio}</h3>
                        <p>{item.descripcion}</p>
                    </div>
                    <h3 className="mt-4">Talla:
                        <ItemSize/>
                    </h3>
                    <div className="d-flex justify-content-between mt-4" id="cantidadProducto">
                        <ItemCount onAdd={onAdd} stock={item.stock} handleStock={handleNotEnoughStock}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;