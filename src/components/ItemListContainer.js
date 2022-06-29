import './ItemListContainer.css';
import ItemList  from './ItemList';
import { useState,useEffect } from 'react';

function ItemListContainer () {

const [info, setInfo] = useState([])

  useEffect( () => {
    setTimeout( () =>{
    fetch('data.json')  
    .then((resp) => resp.json())  
    .then((data) => setInfo(data))
    }, 2000)
    console.log(info)
  }, [] ) ;



  return (
    <div>
     <ItemList productos={info}/>
    </div>
    
      );
  }

  export default ItemListContainer;