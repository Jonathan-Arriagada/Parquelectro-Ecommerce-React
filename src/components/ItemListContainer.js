import './ItemListContainer.css';
import ItemList  from './ItemList';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProds } from "../services/firestore";

function ItemListContainer () {

const [info, setInfo] = useState([]);
const { categoryid } = useParams ();

  useEffect( () => {
    setTimeout( () =>{
      getAllProds().then((data) => {
      if (categoryid === undefined){
        setInfo(data);
      }else {
      let itemFind = data.filter( (item)=> item.category === categoryid ) 
      setInfo(itemFind)
      }
     })
  }
    , 500)
   }, [categoryid] ) ;



  return (
    <div>
     <ItemList productos={info}/>
    </div>
    
      );
  }

  export default ItemListContainer;