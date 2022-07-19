import ItemDetail from './ItemDetail';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProd } from '../services/firestore';

function ItemDetailContainer () {

const [product, setProduct] = useState()
const { itemid } = useParams ();

  useEffect( () => {
    setTimeout( () =>{
      getProd(itemid).then((data) => {     
      setProduct(data)}) 
  }, 500)
  }, [itemid] ) ;

  return (
    <div> 
     <ItemDetail product={product}/>
    </div>
    
  );
  }

  export default ItemDetailContainer;