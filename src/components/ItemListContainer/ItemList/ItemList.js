import React, { useState, useEffect } from 'react'
import Item from "./Item"

const ItemList= ({category}) => {
    const [products, setProducts]= useState(false);
    const getData=()=>{
      fetch('productos.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          setProducts(myJson)
        }).catch((e) => console.log(e));
    }
    useEffect(()=>{
      getData()
    },[])

        const productCategory = category;
        let productList= [];

        if(productCategory === "tops"){
            productList = products.tops.map((item)=>{
                return <Item key={item.id} name={item.nombre} price={item.precio} url={item.url}/>})
            } else if (productCategory === "calzas"){
                productList = products.calzas.map((item)=>{
                    return <Item key={item.id} name={item.nombre} price={item.precio} url={item.url}/>})
            }
    return (
        <div>
            { products ? productList : false}
        </div>
    )
}

export default ItemList;