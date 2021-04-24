import React from 'react'
import './ItemSize.scss'

export default function ItemSize({onSizeAdd}) {
    const [productSize,setProductSize] = useState("")
    const [isActive,setIsActive] = useState()

    const onSizeAdd = (e)=>{
        setProductSize(e.target.innerText)
    }

    return (
        <div>
            <ul className="list-group list-group-horizontal mt-2">
                <button onClick={onSizeAdd} className="{list-group-item p-2" >S</button>
                <button onClick={onSizeAdd} className="list-group-item p-2" >M</button>
                <button onClick={onSizeAdd} className="list-group-item p-2" >L</button>
            </ul>
        </div>
    )
}
