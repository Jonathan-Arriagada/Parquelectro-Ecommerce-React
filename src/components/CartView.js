import React from "react";
import { Link } from "react-router-dom";
import useCartContext from '../store/CartContext';

function CartView() {
    const { cart, removeFromCart, clearCart, totalCart } = useCartContext();

if (cart.length === 0){
    return(<>
        <h4 className="text-light">Carrito vacio.</h4>
        <Link to="/"><button className="btn btn-outline-secondary border-2">Ir al Inicio</button></Link>
        </>
    )
    }
else{
    return <div>
    {cart.map( itemCart => {
        return <div className="container">
               <div className="card text-center bg-dark"> 
                <div className="card-body text-light" key={itemCart.id}>
                <img src={itemCart.img} width="100" height="125" className="card-img-top"/>
                <h2 className="card-title-white">{itemCart.nombre}</h2>
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
       <br/><br/><br/>
       <h4>Total: ${totalCart()}</h4>
        </div>
}    
}

export default CartView;