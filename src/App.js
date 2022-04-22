import React, { useState } from 'react'
import Navbar from './pages/navigation/navbar/Navbar'
import Shop from './pages/main-page/shop/Shop';
import {ItemPage} from './pages/item-page/ItemPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { CurrencyShowdown } from './pages/navigation/currency-showdown/CurrencyShowdown';

function App() {
  const [activeShowdownCurrency, setActiveShowdownCurrency] = useState(false);
  return (
    <Router>
      <div className="App">
        <Navbar 
              setActiveShowdownCurrency={setActiveShowdownCurrency}
              activeShowdownCurrency={activeShowdownCurrency}
        />
        <CurrencyShowdown activeShowdownCurrency={activeShowdownCurrency}/>
        <Routes>
          <Route exact path='/' element={<Shop />} />
          <Route exact path='/category/:categoryName' element={<Shop />} />
          <Route exact path='/clothes/:clothesId'  element={<ItemPage/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
