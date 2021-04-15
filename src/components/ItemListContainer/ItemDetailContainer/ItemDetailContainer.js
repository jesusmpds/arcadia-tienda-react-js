import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect(() => {
        fetch('productos.json')
        .then(res => res.json())
        .then(myItem => setItem(myItem.tops.find((item)=> item.id === "1")))
        
    },[])
    console.log(item)
    return (
        <div>
            <ItemDetail item ={item}/>
        </div>
    )
}

export default ItemDetailContainer;