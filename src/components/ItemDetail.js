import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail ({product}) {
    return (
 
        <div className='card'>    
          <h1>{product.nombre}</h1>
          <img src={product.img} width="100" height="80"/>
          <p> $ {product.precio} </p> 
          <ItemCount stock={product.stock} initial={1}/>
        </div>  

    )
  }

  export default ItemDetail;  