import {Link} from 'react-router-dom'

const Item = ({name,price,url,item}) =>{
    return(
        <div className="col-sm-6 col-md-4 col-xl-3">
            <div className="card">
                <img className="card-img-top" src={url} alt={name} loading="lazy"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="d-flex flex-row justify-content-between">
                        <p className="card-title">${price}</p>
                    </div>
                    <Link to={`/product/${item.id}`} className="btn btn-primary mt-4" >Ver más</Link>
                </div>
            </div>
        </div>
    )
}

export default Item;