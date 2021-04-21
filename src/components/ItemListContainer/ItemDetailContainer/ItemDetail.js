import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'

const ItemDetail = ({item}) => {
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
                        <p>Top de tono rosa con copa, tela de microfibra, y acabado mate.</p>
                    </div>
                    <h3 className="mt-4">Talla:
                        <ul className="list-group list-group-horizontal mt-2">
                            <button className="list-group-item p-2" >S</button>
                            <button className="list-group-item p-2" >M</button>
                            <button className="list-group-item p-2" >L</button>
                        </ul>
                    </h3>
                    <div className="d-flex justify-content-between mt-4" id="cantidadProducto">
                    <ItemCount/>
                    </div>
                    <button type="button" className="btn btn-primary mt-4" >Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;