import './ItemListContainer.css';
import ItemList  from './ItemList';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer () {

const [info, setInfo] = useState([]);
const { categoryid } = useParams ();

  useEffect( () => {
    setTimeout( () =>{
    fetch('data.json')  
    .then((resp) => resp.json())  
    .then((data) => {
      let itemFind = data.find( (ítem) => ítem.id === producto.id)
     setInfo(itemFind)
    })
    .then((data) => setInfo(data))}
    , 500)
    console.log(info)
  }, [categoryid] ) ;



  return (
    <div>
     <ItemList productos={info}/>
    </div>
    
      );
  }

  export default ItemListContainer;