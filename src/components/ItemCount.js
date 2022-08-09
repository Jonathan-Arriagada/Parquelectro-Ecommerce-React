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

    return (
        <>
            <p>Cantidad: {num}</p>
            <button className="btn btn-outline-secondary border-2" onClick={sumar}>+</button>    
            <button className="btn btn-outline-secondary border-2" onClick={restar}>-</button>
            <br/>
            <button className="btn btn-outline-secondary border-2" onClick={() => props.onAdd(num)}>Agregar al carrito</button>
        </>
    );
  }

  export default ItemCount;