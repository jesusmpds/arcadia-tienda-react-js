const Item = ({name,price,url}) =>{
    return(
        <div className="col-sm-6 col-md-4 col-xl-3">
            <div className="card">
                <img className="card-img-top" src={url} alt={name} loading="lazy"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="d-flex flex-row justify-content-between">
                        <p className="card-title">{price}</p>
                        <ul className="list-group list-group-horizontal">
                            <button className="list-group-item p-2" >S</button>
                            <button className="list-group-item p-2" >M</button>
                            <button className="list-group-item p-2" >L</button>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-primary mt-4" >Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Item;