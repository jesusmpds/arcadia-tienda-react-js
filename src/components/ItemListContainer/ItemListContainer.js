import React, { useState, useEffect } from 'react'
import ItemList from "./ItemList/ItemList"
import '../../App.scss'
import { useParams } from 'react-router'
import {db} from '../../firebase'

const ItemListContainer = ({title,firstSection,secondSection}) =>{
    const [productListTops, setProductListTops]= useState([]);
    const [productListCalzas, setProductListCalzas]= useState([]);
    const {categoryName} = useParams();

    useEffect(()=>{
        const topCollection = db.collection("tops")
        const calzasCollection = db.collection("calzas")

        topCollection.get().then((Snapshot) =>{
            setProductListTops(Snapshot.docs.map(doc => ({id:doc.id,...doc.data()})))
        })

        calzasCollection.get().then((querySnapshot) =>{
            setProductListCalzas(querySnapshot.docs.map(doc => ({id:doc.id,...doc.data()})))
        })
        
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