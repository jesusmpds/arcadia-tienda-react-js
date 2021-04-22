import React, { useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    let {productId} = useParams();

    useEffect(() => {
        fetch('http://www.json-generator.com/api/json/get/cjapjMCvzC?indent=2')
        .then((response) => response.json())
        .then((myItem) => {
            setItem(myItem.tops.find((item) => item.id === parseInt(productId)) 
            || myItem.calzas.find((item) => item.id === parseInt(productId)))
        })
    },[productId])

    return (
        <div>
            {item ? <ItemDetail item={item}/> : "loading"}
        </div>
    )
}

export default ItemDetailContainer;