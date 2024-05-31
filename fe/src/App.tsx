import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route, Navigate
} from 'react-router-dom';

import { Product } from './ui/screens/Product.tsx';
import { Warehouses } from './ui/screens/Warehouses.tsx';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<Product/>}/>

        <Route path="/warehouses" element={<Warehouses/>}/>

        <Route
          path="/"
          element={<Navigate to="/products" replace={true}/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
