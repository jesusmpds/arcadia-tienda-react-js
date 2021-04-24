import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import ItemSize from './ItemSize/ItemSize'

const ItemDetail = ({item}) => {
    const [productAmount, setProductAmount] = useState(0)
    
    const onAdd = (itemCount) =>{
        setProductAmount(itemCount)
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
                        <ItemSize onSizeAdd={onSizeAdd}/>
                    </h3>
                    <div className="d-flex justify-content-between mt-4" id="cantidadProducto">
                    <ItemCount onAdd={onAdd}/>
                    </div>
                    {productAmount <= 0 ? "" : <Link to="/cart" className="btn btn-primary mt-4" >Agregar al carrito</Link>}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;