import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Goods from './components/Goods';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Goods />} />
      </Routes>
    </div>
  );
}

export default App;
