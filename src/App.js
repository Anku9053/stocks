import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StockList from './components/StockList';
import StockDetails from './components/StockDetails';
import "./App.css"
import Navbar from './Navbar/Navbar';
function App() {
  return (
    <div className='App'>
      <div >

      <Navbar/>
      </div>

      <div>

      <Routes>
        <Route path="/" element={<StockList />} />
        <Route path="/stock/:ticker" element={<StockDetails />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
