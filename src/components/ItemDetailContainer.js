import ItemDetail from './ItemDetail';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProd } from '../services/firestore';

function ItemDetailContainer () {

const [product, setProduct] = useState()
const { id } = useParams ();

  useEffect( () => {
    setTimeout( () =>{
      getProd(id).then((data) => {     
      setProduct(data[id])}) 
  }, 500)
  }, [id] ) ;

  return (
    <div>
     <ItemDetail product={product}/>
    </div>
    
  );
  }

  export default ItemDetailContainer;