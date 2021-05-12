import React,{useContext,useState,useEffect} from 'react'
import {CartContext} from '../../context/CartContext'
import firebase from 'firebase/app';
import 'firebase/firestore';
import {db} from '../../firebase'
import swal from 'sweetalert';


export default function PaymentModal() {
    const {cartProducts,clearItems,productsTotalPrice,productsTotalAmount,userInfo,setUserInfo} = useContext(CartContext);
    const [orderId,setOrderId] =  useState("")
    const [isPurchaseOver, setIsPurchaseOver] = useState(false)

    const Amount = productsTotalAmount(cartProducts,"quantity")
    const Price = productsTotalPrice(cartProducts,"quantity","precio")

    const handlechange = (e,property)=> {
        let info = e.target.value
        userInfo ? setUserInfo({...userInfo,[property]: info}) : setUserInfo([{[property]:info,...userInfo}])
    }

    const orders = db.collection('orders')
    const newOrder = {
        buyer : userInfo,
        items : cartProducts,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: Price
    }

    const handleNewOrder = () => {
        orders.add(newOrder)
        .then( ({id}) => {
            setOrderId(id)
        }).catch(err => {
            return err
        })
    }

    const updateFirestoreStock = async ()=> {

        const topCollection = db.collection("tops")
        .where(firebase.firestore.FieldPath.documentId(), 'in', cartProducts.map(i=> i.id))

        const calzasCollection = db.collection("calzas")
        .where(firebase.firestore.FieldPath.documentId(), 'in', cartProducts.map(i=> i.id))

        const topsToUpdate = await topCollection.get()
        const calzasToUpdate = await calzasCollection.get()
    
        const batch = db.batch()

        topsToUpdate.docs.forEach( async (Snapshot,id) => {
            if(Snapshot.data().stock >= cartProducts[id].quantity){
                batch.update(Snapshot.ref, {stock: Snapshot.data().stock - cartProducts[id].quantity})
            }
        })

        calzasToUpdate.docs.forEach( async (Snapshot,id) => {
            if(Snapshot.data().stock >= cartProducts[id].quantity){
                batch.update(Snapshot.ref, {stock: Snapshot.data().stock - cartProducts[id].quantity})
            }
        })
        await batch.commit().then(r => r)
    }

    useEffect(() => {
        if(orderId !== "" && isPurchaseOver === true){
        swal("Genial",`Tu numero de orden es: ${orderId}`, "success")
        clearItems()
        }
    }, [orderId,isPurchaseOver,clearItems])

    return (
        <>
            <div className="modal fade" id="PaymentModal1" tabIndex="-1" aria-labelledby="PaymentModal1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="PaymentModal1Label">Añade tus datos personales</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="mb-3">
                                    <label htmlFor="userName" className="col-form-label">Nombre:</label>
                                    <input type="text" className="form-control" id="userName" onChange={(e) => handlechange(e,"name")} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="userEmail" className="col-form-label">Email:</label>
                                    <input className="form-control" id="userEmail" onChange={(e) => handlechange(e,"email")} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="userPhone" className="col-form-label">Telefono:</label>
                                    <input className="form-control" id="userPhone" onChange={(e) => handlechange(e,"phone")} required/>
                                </div>
                                { Object.keys(userInfo).length === 3 && <input type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#PaymentModal2" data-bs-dismiss="modal" value="Siguiente"/>}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Volver al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="PaymentModal2" tabIndex="-1" aria-labelledby="PaymentModal2" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="PaymentModal2Title">Resumen de tu compra</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" id="carritoBody" >
                        {cartProducts.map((item) =>{
                            return(
                            <div className="container-fluid" key={item.id}>
                                <div className="d-flex border rounded w-100 mb-2" >
                                    <div className="col-6 col-md-4">
                                        <img src={item.url} className="mr-3 w-100" alt={item.nombre}></img>
                                    </div>
                                    <div className="col-6 col-md-8 media-body p-3">
                                        <div className="row justify-content-between">
                                            <h3 className="mt-0 ">{item.nombre}</h3>
                                            <h3 className="pr-3"> ${item.precio}</h3>
                                        </div>
                                        <h3 className="mt-5">Talla:<p className="d-inline"> {item.talla}</p></h3>
                                        
                                        <h3 className="mt-5">Cantidad: <p className="d-inline"> {item.quantity}</p></h3>
                                    </div>
                                </div>
                            </div>
                            )})}
                        </div>
                        <div className="container d-flex justify-content-center" id="precioTotal">
                                <h3 className="row text-center">TOTAL: <br/>
                                {Amount} {Amount===1 ? "producto": "productos"} $({Price}) </h3>
                            </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#PaymentModal1" data-bs-dismiss="modal">Atras</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" 
                            onClick={() => {
                                handleNewOrder()
                                updateFirestoreStock()
                                setIsPurchaseOver(true)
                            }}>Enviar pedido</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


