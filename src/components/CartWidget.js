import './CartWidget.css';
import carrito from './shopping-cart.png';
import useCartContext from '../store/CartContext';

function CartWidget() {
  const { cantCart } = useCartContext();

    return (
      <div>
        <img width="50" src={carrito} alt="logo"/><p className='btn-dark'>{cantCart()}</p>
      </div> 
    );
  } 

  export default CartWidget;