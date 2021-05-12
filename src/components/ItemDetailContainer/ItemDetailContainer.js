import React, { useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import ItemDetail from "./ItemDetail";
import {db} from '../../firebase'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    let {productId} = useParams();

    useEffect( () => {
        const getItem = async () =>{
            const topCollection = db.collection("tops").doc(productId)
            const calzasCollection = db.collection("calzas").doc(productId)

            const detailedTop =  await topCollection.get().then((Snapshot) =>{
                if(Snapshot.data()){ 
                    return ({id:productId,...Snapshot.data()})}
            }) 
            
            const detailedCalza = await calzasCollection.get().then((querySnapshot) =>{
                if(querySnapshot.data()){ 
                return ({id:productId,...querySnapshot.data()})
                }
            })
            
            detailedTop ? setItem(detailedTop): setItem(detailedCalza)
        }
        getItem()
    },[productId])

    return (
        <div>
            {item ? <ItemDetail item={item}/> : "loading"}
        </div>
    )
}

export default ItemDetailContainer;