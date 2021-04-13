import React from 'react'
import ItemList from "./ItemList/ItemList"

const ItemListContainer = ({title,firstSection}) =>{
    return (
        <div>
            <h1>{title}</h1>
            <section className="container">
            <h2>{firstSection}</h2>
            <ItemList/>
            </section>
        </div>
    )
}

export default ItemListContainer;