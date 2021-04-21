import Item from "./Item/Item"

const ItemList= ({products}) => {
    return (
        <section className="container">
            <div className="row">
                {products.map((item)=>{
                    return <Item key={item.id} name={item.nombre} price={item.precio} url={item.url} item={item}/>})
                }
            </div>
        </section>
    )
}

export default ItemList;