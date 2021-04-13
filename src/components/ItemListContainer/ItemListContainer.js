import ItemList from "./ItemList/ItemList"

const ItemListContainer = ({title,firstSection,secondSection}) =>{
    return (
        <div>
            <h1>{title}</h1>
            <h2>{firstSection}</h2>
            <div className="row">
                <ItemList category="tops"/>
            </div>
            <hr></hr>
            <h2>{secondSection}</h2>
            <hr></hr>
            <div className="row">
                <ItemList category="calzas"/>
            </div>
        </div>
    )
}

export default ItemListContainer;