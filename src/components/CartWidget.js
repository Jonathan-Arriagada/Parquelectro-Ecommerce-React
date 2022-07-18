import './CartWidget.css';
import carrito from './shopping-cart.png';
import useCartContext from '../store/CartContext';
import { Link } from "react-router-dom";

function CartWidget() {
  const { cantCart } = useCartContext();

    return (
      <div>
       <Link to="/Cart"><img width="50" src={carrito} alt="logo"/></Link>
       <p className='btn-dark'>{cantCart()}</p>
      </div> 
    );
  } 

  export default CartWidget;