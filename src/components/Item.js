import React from 'react';
import './Item.css';

function Item ({producto}) {
    return (
 
        <div className='card'>    
          <h1>{producto.nombre}</h1>
          <img src={producto.img} width="100" height="80"/>
          <p> $ {producto.precio} </p> 
          <button>Detalles</button>
        </div>  

    )
  }

  export default Item;  