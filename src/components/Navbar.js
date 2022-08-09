import CartWidget from './CartWidget';
import './Navbar.css';
import { Link } from 'react-router-dom';

// Funcion para mostrar la Navbar.

function Navbar() {

    return (
      <header>
          <nav>
          <div className='nav-logo'>
                <div className='logo'>
                    <p><Link to="/" className='text-decoration-none text-white'>PE</Link></p> 
                </div>
           </div>
           <div className='nav-links'>
            <ul>
              <li className="botones"><Link to="/">Inicio</Link></li>
              <li className="botones"><Link to="/category/PC">PC</Link></li>
              <li className="botones"><Link to="/category/Celulares">Celulares</Link></li>
              <li className="botones"><Link to="/category/Consolas">Consolas</Link></li>
            </ul>
          </div>
            <div className='carrito'>
              <CartWidget />
            </div>
          </nav>
      </header>
    );
  }
  
  export default Navbar;
  