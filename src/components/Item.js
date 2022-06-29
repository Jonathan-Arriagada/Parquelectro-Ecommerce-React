import React from 'react';
import './Item.css';
import ItemCount from './ItemCount';

function Item ({producto}) {
    return (
 
        <div className='card'>    
          <h1>{producto.nombre}</h1>
          <img src={producto.img} width="100" height="80"/>
          <p> $ {producto.precio} </p> 
          <ItemCount stock={5} initial={1}/>
          <button>Detalles</button>
        </div>  

    )
  }

  export default Item;  