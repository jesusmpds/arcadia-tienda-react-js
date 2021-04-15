import Item from "./Item/Item"

const ItemList= ({products}) => {
    return (
        <div id="topsTienda" className="row">
            {products.map((item)=>{
                return <Item key={item.id} name={item.nombre} price={item.precio} url={item.url}/>})
            }
        </div>
    )
}

export default ItemList;