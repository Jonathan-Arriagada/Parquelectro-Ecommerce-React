import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCartContext from '../store/CartContext';
import GetForm from "./Form";


// Funcion para mostrar lo seleccionado en en el Carrito.

function CartView() {
    const { cart, removeFromCart, clearCart, totalCart } = useCartContext();
    const [finish, setFinish] = useState(false);

    const finishHandler = () =>{
        setFinish(true)
    }
if (cart.length === 0){
    return(<div className="min-vh-100">
        <h4 className="text-light">Carrito vacio.</h4>
        <Link to="/"><button className="btn btn-outline-secondary border-2">Ir al Inicio</button></Link>
        </div>
    )
    }
else{
    return <div className="min-vh-100">
    {cart.map( itemCart => {
        return <div className="container">
               <div className="card text-center bg-dark"> 
                <div className="card-body text-light" key={itemCart.id}>
                <img src={itemCart.img} width="100" height="125" className="card-img-top"/>
                <h4 className="card-title-white">{itemCart.nombre}</h4>
                <h5 className="card-text">Cantidad: {itemCart.cant}</h5>
                <h5 className="card-text">Subtotal: {itemCart.precio*itemCart.cant}</h5>            
                <button className="btn btn-outline-secondary border-2" onClick={() => removeFromCart(itemCart.id)}>Eliminar</button>
                <hr/>
               </div>
              </div>
              </div>
    })}
       <br/>
       <button className="btn btn-outline-secondary border-2" onClick={clearCart}>Vaciar Carrito</button>
       <br/><br/>
       <h4 className="card-title text-light">Total: ${totalCart()}</h4>
       <br/>
       <button className="btn btn-outline-secondary border-2 mx-2" onClick={finishHandler}>¡Comprar!</button>
 
       <Link to="/"><button className="btn btn-outline-secondary border-2">Seguir comprando</button></Link>
       
       {finish ? <GetForm/> : <></>}
       <br/><br/>
       </div>
        
}
}

export default CartView;