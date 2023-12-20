import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar";
import ProductCard from "./Components/ProductCard";
import CartPage from './Components/CartPage';
import OrderPlacedPage from './Components/OrderPlacedPage';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<ProductCard/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/order-placed" element={<OrderPlacedPage />} />
      </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
