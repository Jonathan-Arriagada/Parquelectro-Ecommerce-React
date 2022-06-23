import './CartWidget.css';
import carrito from './shopping-cart.png'

function CartWidget() {
    return (
      <div>
        <img width="50" src={carrito} alt="logo"/>
      </div> 
    );
  } 

  export default CartWidget;