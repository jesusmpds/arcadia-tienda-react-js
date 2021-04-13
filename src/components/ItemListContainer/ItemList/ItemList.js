import React, { useState, useEffect } from 'react'
import Item from "./Item/Item"

const ItemList= () => {
    const [products, setProducts]= useState([]);

    useEffect(()=>{
      fetch('productos.json')
        .then((response) => response.json())
        .then((myJson) => setProducts(myJson.tops))
        .catch((e) => console.log(e))
    },[])

    return (
        <div id="topsTienda" className="row">
            {products.map((item)=>{
                return <Item key={item.id} name={item.nombre} price={item.precio} url={item.url}/>})
            }
        </div>
    )
}

export default ItemList;