import {Link} from 'react-router-dom'
import React,{useState,useContext} from 'react';
import {CartContext} from '../../context/CartContext'

const ItemCount = ({onAdd,stock,handleStock}) => {
    const {setProductSize} = useContext(CartContext);
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
                    {itemCount > 0 && <Link to="/cart" className="btn btn-primary" 
                    onClick={(e)=> {
                        if(itemCount <= stock){ 
                            onAdd(e,itemCount)
                            setProductSize("")
                        } else{
                             handleStock(e)
                             setProductSize("")
                            }
                        }}>Agregar al carrito</Link>}
                </div>
                
        )
    }

export default ItemCount;