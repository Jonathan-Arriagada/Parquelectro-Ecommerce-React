import './Navbar.css'
import carrito from './shopping-cart.png'

function Navbar() {
    return (
      <header>
        <div>
          <nav>
            <ul>
              <a className="carrito">
                <img width="50" src={carrito} alt="logo"/>
              </a>  
              <li className="botones"><a href="">Inicio</a></li>
              <li className="botones"><a href="">Informacion</a></li>
              <li className="botones"><a href="">Productos</a></li>
              <li className="botones"><a href="">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Navbar;
  