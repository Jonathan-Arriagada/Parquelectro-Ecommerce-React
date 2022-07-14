import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './store/CartContext';

function App() {
  return (
    <div className="App">
     <CartContextProvider>
      <BrowserRouter>
       <Navbar />
         <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:categoryid" element={<ItemListContainer />}/>
          <Route path="/producto/:itemid" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
     </CartContextProvider>
    </div>
  );
}

export default App;
  