import React, { useState, useEffect } from 'react'
import ItemList from "./ItemList/ItemList"
import '../../App.scss'
import { useParams } from 'react-router'

const ItemListContainer = ({title,firstSection,secondSection}) =>{
    const [productListTops, setProductListTops]= useState([]);
    const [productListCalzas, setProductListCalzas]= useState([]);
    const {categoryName} = useParams();

    useEffect(()=>{
      fetch('./productos.json')
        .then((response) => response.json())
        .then((myJson) => {
            setProductListTops(myJson.tops)
            setProductListCalzas(myJson.calzas)
            }
        )
        .catch((e) => console.log(e))
    },[])

    return (
        <div>
            <h1>{title}</h1>
            { productListTops && !categoryName ?
            <>
                <section className="container">
                    <h2>{firstSection}</h2>
                    <ItemList products={productListTops}/>
                </section>
                <section className="container">
                    <h2>{secondSection}</h2>
                    <ItemList products={productListCalzas}/>
                </section> 
            </>: null
            }
            {productListTops && categoryName === "tops"?
            <section className="container">
                <h2>{firstSection}</h2>
                <ItemList products={productListTops}/>
            </section> : null
            }
            {
            productListCalzas && categoryName === "calzas"?
                <section className="container">
                <h2>{secondSection}</h2>
                <ItemList products={productListCalzas}/>
            </section> : null
            }
        </div>
    )
}

export default ItemListContainer;