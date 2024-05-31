import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { Product } from './ui/screens/Product.tsx';
import { ProductsList } from './ui/components/ProductsList.tsx';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product/>}/>

        <Route path="/list" element={<ProductsList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
