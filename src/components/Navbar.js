import CartWidget from './CartWidget';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <header>
          <nav>
            <ul>
              <li className="botones"><Link to="">Inicio</Link></li>
              <li className="botones"><Link to="/category/PC">PC</Link></li>
              <li className="botones"><Link to="/category/Celulares">Celulares</Link></li>
              <li className="botones"><Link to="/category/Consolas">Consolas</Link></li>
            </ul>
            <div className='carrito'>
            <CartWidget />
            </div>
          </nav>

      </header>
    );
  }
  
  export default Navbar;
  