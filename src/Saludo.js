import logo from './logo.svg';
import './App.css';

function Saludo(props) {
    return (
      <div className="Saludo">
       <p>
           Buen finde {props.nombre} !
          </p>

      </div>
    );
  }
  
  export default Saludo;
  