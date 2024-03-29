import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";
import useCartContext from '../store/CartContext';

// Funcion para mostrar el detalle del producto.

function ItemDetail ({product}) {
const [isInCart, setIsInCart] = useState(false);
const { addToCart } = useCartContext();

  function onAdd(num){
    setIsInCart(true);
    addToCart(product, num);
  }  
  if (!product){
    return  <h3 className="text-light min-vh-100">Cargando . . .</h3>
  }
  
  return (
   <div className="container min-vh-100">
    <div className="card text-center bg-dark">    
      <div className="card-body text-light">
      <img src={product.img} className="card-img-top" width="100" height="125"/>
      <h3 className="card-title">{product.nombre}</h3>         
      <p className="card-text"> $ {product.precio} </p> 
          { isInCart?
              <Link to="/Cart"><button className="btn btn-outline-secondary border-2">Ir al carrito</button></Link>
            :
              <ItemCount onAdd={onAdd}  stock={product.stock} initial={1}/>
          }
      </div>  
    </div>
   </div>  
    )
  }

  export default ItemDetail;  