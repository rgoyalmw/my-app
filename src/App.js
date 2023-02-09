import React from 'react';

import './App.css';
import './styles/searchForm.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Colourize from './components/Colourize';
import SearchForm from './components/SearchForm';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<SearchForm />}></Route>
        <Route path='/colour' element={<Colourize/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
