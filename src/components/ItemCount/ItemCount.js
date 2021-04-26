import './ItemCount.scss'
import {Link} from 'react-router-dom'
import React,{useState,useContext} from 'react';

const ItemCount = ({onAdd}) => {
    const [itemCount, setItemCount] = useState(0)
    
    const increment = () => {
        const count = itemCount + 1
        setItemCount(count)
    };
    
     const decrement = () => {
        if(itemCount > 0){
            const count = itemCount - 1
            setItemCount(count)
        }

    }
        return(
                <div className="card m-0 p-0 w-100">
                    <div className="card-body d-flex justify-content-center align-items-baseline">
                        <button type="button" className="btn btn-primary" onClick={decrement}>-</button>
                        <span className="mx-3">{itemCount}</span>
                        <button type="button" className="btn btn-primary" onClick={increment}>+</button>
                    </div>
                    {itemCount > 0 && <button  className="btn btn-primary" onClick={()=> onAdd(itemCount)}>Agregar al carrito</button>}
                </div>
                
        )
    }

export default ItemCount;