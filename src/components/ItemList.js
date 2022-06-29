import React from 'react';
import './ItemList.css';
import Item from './Item';


function ItemList ( {productos} ) {
    
   return(
    <>
        {productos.map( (prod) => {
        return(
          <Item producto={prod} key={prod.id} />
        )
   })
}
    </>
   )
}
export default ItemList;


