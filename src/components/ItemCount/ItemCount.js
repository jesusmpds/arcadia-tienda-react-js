import './ItemCount.scss'

import React,{useState} from 'react';

const ItemCount = ({onAdd}) => {
    const [itemCount, setItemCount] = useState(0)
    
    const increment = () => {
        const count = itemCount + 1
        setItemCount(count)
        onAdd(count)
    };
    
     const decrement = () => {
        if(itemCount > 0){
            const count = itemCount - 1
            setItemCount(count)
            onAdd(count)
        }

    }
        return(
                <div className="card m-0 p-0 w-100">
                    <div className="card-body d-flex justify-content-center align-items-baseline">
                        <button type="button" className="btn btn-primary" onClick={decrement}>-</button>
                        <span className="mx-3">{itemCount}</span>
                        <button type="button" className="btn btn-primary" onClick={increment}>+</button>
                    </div>
                </div>
        )
    }

export default ItemCount;