import ItemList  from './ItemList';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProds, getProductsByCategory } from "../services/firestore";

// Contenedor de la lista de productos.

function ItemListContainer () {

const [info, setInfo] = useState([]);
const { categoryid } = useParams ();
const [isLoading, setIsLoading] = useState(true)

  useEffect( () => {
      getAllProds().then((data) => {
        setIsLoading(false);
      if (categoryid === undefined){
        setInfo(data);
      }else {
        getProductsByCategory(categoryid).then(respuesta => {
          setInfo(respuesta);
        });
      }   
    });
  }, [categoryid] ) ;

  return (
    <div className='min-vh-100'>
     {isLoading ? <h3 className="text-light">Cargando . . .</h3> : <ItemList productos={info}/>}
    </div>
    
      );
  }

  export default ItemListContainer;