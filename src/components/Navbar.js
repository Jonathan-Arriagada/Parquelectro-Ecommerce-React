import CartWidget from './CartWidget';
import './Navbar.css'

function Navbar() {
    return (
      <header>
          <nav>
            <ul>
              <li className="botones"><a href="">Inicio</a></li>
              <li className="botones"><a href="">Informacion</a></li>
              <li className="botones"><a href="">Productos</a></li>
              <li className="botones"><a href="">Contacto</a></li>
            </ul>
            <div className='carrito'>
            <CartWidget />
            </div>
          </nav>

      </header>
    );
  }
  
  export default Navbar;
  