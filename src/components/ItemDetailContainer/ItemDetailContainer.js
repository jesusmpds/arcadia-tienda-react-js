import React, { useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const { productId } = useParams();

    useEffect(() => {
        fetch('productos.json')
        .then((response) => response.json())
        .then((myItem) => console.log(myItem))
    },[])

    console.log(item)
    return (
        <div>
            <ItemDetail item ={item}/>
        </div>
    )
}

export default ItemDetailContainer;