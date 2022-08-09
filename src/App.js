import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './store/CartContext';
import CartView from './components/CartView';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <CartContextProvider>
      <BrowserRouter>
       <Navbar/>
         <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:categoryid" element={<ItemListContainer />}/>
          <Route path="/producto/:itemid" element={<ItemDetailContainer/>}/>
          <Route path="/Cart" element={<CartView/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
     </CartContextProvider>
    </div>
  );
}

export default App;
  