import React, { useState, useEffect } from 'react'
import ItemList from "./ItemList/ItemList"
import '../../App.scss'
import { useParams } from 'react-router'

const ItemListContainer = ({title,firstSection,secondSection}) =>{
    const [productListTops, setProductListTops]= useState([]);
    const [productListCalzas, setProductListCalzas]= useState([]);
    const {categoryName} = useParams();

    useEffect(()=>{
      fetch('productos.json')
        .then((response) => response.json())
        .then((myJson) => {
            console.log(myJson)
            if (categoryName === undefined){
            setProductListTops(myJson.tops)
            setProductListCalzas(myJson.calzas)
            } else if(categoryName === "tops") {
                setProductListTops(myJson.tops)
            } else if (categoryName === "calzas"){
                setProductListCalzas(myJson.calzas)
            }
        }
        )
        .catch((e) => console.log(e))
    },[categoryName])

    return (
        <div>
            <h1>{title}</h1>
            { productListTops && 
            <section className="container">
                <h2>{firstSection}</h2>
                <ItemList products={productListTops}/>
            </section> 
            }
            {productListCalzas &&
            <section className="container">
                <h2>{secondSection}</h2>
                <ItemList products={productListCalzas}/>
            </section>
            }
        </div>
    )
}

export default ItemListContainer;