import carrito from './shopping-cart.png';
import useCartContext from '../store/CartContext';
import { Link } from "react-router-dom";

// Funcion para mostrar el icono del carrito con su cantidad.

function CartWidget() {
  const { cantCart } = useCartContext();

    return (
      <div>
       <Link to="/Cart"><img width="50" src={carrito} alt="logo"/></Link>
       <p className='bg-dark text-light'>{cantCart()}</p>
      </div> 
    );
  } 

  export default CartWidget;