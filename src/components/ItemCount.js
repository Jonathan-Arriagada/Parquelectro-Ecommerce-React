import "./ItemCount.css";
import { useState } from "react";

function ItemCount(props) {
    const [num, setNum] = useState(props.initial);
    
    const sumar = () => {
        if(num<props.stock){
        setNum(num + 1)}
    }

    const restar = () => {
        if(num>props.initial) {
            setNum(num - 1)}
    }
    const agregar = () => { console.log("Agregado al carrito") }
    return (
        <>
            <p>Cantidad: {num}</p>
            <button onClick={sumar}>+</button>    
            <button onClick={restar}>-</button>
            <br/>
            <button onClick={agregar}>Agregar al carrito</button>
        </>
    );
  }

  export default ItemCount;