import ItemDetail from './ItemDetail';
import { useState,useEffect } from 'react';

function ItemDetailContainer () {

const [product, setProduct] = useState([])

  useEffect( () => {
    setTimeout( () =>{
    fetch('data.json')  
    .then((resp) => resp.json())  
    .then((data) => setProduct(data[0]))
    }, 500)
    console.log(product)
  }, [] ) ;

  return (
    <div>
     <ItemDetail product={product}/>
    </div>
    
      );
  }

  export default ItemDetailContainer;