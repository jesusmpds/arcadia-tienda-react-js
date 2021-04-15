import React, { useState, useEffect } from 'react'
import ItemList from "./ItemList/ItemList"
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer"
import '../../App.scss'

const ItemListContainer = ({title,firstSection}) =>{
    const [productList, setProductList]= useState([]);

    useEffect(()=>{
      fetch('productos.json')
        .then((response) => response.json())
        .then((myJson) => setProductList(myJson.tops))
        .catch((e) => console.log(e))
    },[])
    return (
        <div>
            <h1>{title}</h1>
            <section className="container">
                <h2>{firstSection}</h2>
                <ItemList products={productList}/>
            </section>
            <section className="container">
                <ItemDetailContainer/>
            </section>
        </div>
    )
}

export default ItemListContainer;