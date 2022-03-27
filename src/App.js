import './App.css';
import { Navbar } from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { AllProducts } from './Components/AllProducts';
import { ProductDetails } from './Components/ProductDetails';
import { NotFound } from './Components/NotFound';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/all_products' element={<AllProducts/>} />
        <Route path='/all_products/:prodId' element={<ProductDetails/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
