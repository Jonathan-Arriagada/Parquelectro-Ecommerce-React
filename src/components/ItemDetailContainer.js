import ItemDetail from './ItemDetail';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProd } from '../services/firestore';

// Contenedor del detalle de producto.

function ItemDetailContainer () {

const [product, setProduct] = useState()
const { itemid } = useParams ();

  useEffect( () => {
      getProd(itemid).then((data) => {     
      setProduct(data)}) 
  }, [itemid] ) ;

  return (
    <div> 
     <ItemDetail product={product}/>
    </div>
    
  );
  }

  export default ItemDetailContainer;