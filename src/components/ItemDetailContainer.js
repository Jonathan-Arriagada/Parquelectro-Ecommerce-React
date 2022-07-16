import ItemDetail from './ItemDetail';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer () {

const [product, setProduct] = useState()
const { itemid } = useParams ();

  useEffect( () => {
    setTimeout( () =>{
    fetch('/data.json')  
    .then((resp) => resp.json()) 
    .then((data) => {     
      setProduct(data[itemid])}) 
  }, 500)
  }, [itemid] ) ;

  return (
    <div>
     <ItemDetail product={product}/>
    </div>
    
  );
  }

  export default ItemDetailContainer;