import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
       <Navbar />
       <ItemListContainer titulo="Lista de productos" subtitulo="Productos destacados"/>
       <ItemCount stock={5} initial={1}/>
    </div>
  );
}

export default App;
  