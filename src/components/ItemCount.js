import "./ItemCount.css";
import { useState } from "react";

function ItemCount() {
    const [num, setNum] = useState(0);
    
    const sumar = () => {
        setNum(num + 1)
    }

    const restar = () => {
        if(num>0) {
            setNum(num - 1)}
    }
    
    return (
        <>
            <p>{num}</p>
            <button onClick = {sumar}>+</button>
            <button onClick = {restar}>-</button>
        </>
    );
  }

  export default ItemCount;