import React,{useContext} from 'react'
import {CartContext} from '../../../context/CartContext'

export default function ItemSize() {
    const {onSizeAdd,productSize} = useContext(CartContext);
    
    return (
        <div>
            <ul className="list-group list-group-horizontal mt-2">
                <button onClick={onSizeAdd} className={`list-group-item p-2 ${productSize === "S"? "selected": false} `}>S</button>
                <button onClick={onSizeAdd} className={`list-group-item p-2 ${productSize === "M"? "selected": false} `} >M</button>
                <button onClick={onSizeAdd} className={`list-group-item p-2 ${productSize === "L"? "selected": false} `} >L</button>
            </ul>
        </div>
    )
}
