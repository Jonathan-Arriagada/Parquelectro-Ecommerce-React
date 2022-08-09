import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

function Item ({producto}) {
    return (
       <div className="container">
        <div className="card text-center bg-dark">    
         <div className="card-body text-light">
          <img src={producto.img} className="card-img-top" width="100" height="125"/>
          <h4 className="card-title">{producto.nombre}</h4>         
          <p className="card-text"> $ {producto.precio} </p> 
          <Link to={`/producto/${producto.id}`}>
            <button className="btn btn-outline-secondary border-2">Detalles</button>
          </Link>
          </div>
        </div>  
      </div>
    )
  } 

  export default Item;    