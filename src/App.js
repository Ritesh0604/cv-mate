import logo from './logo.svg';
import './App.css';
import Login from './mycomponents/Login'
import Register from './mycomponents/Register'
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [val, updateVal] = useState("Ok")
  
  return (
    <BrowserRouter>

      <Routes>
<<<<<<< HEAD
      <Route path='' element={<Login/>}></Route>
=======
        <Route path='' element={<Login/>}></Route>
>>>>>>> ab63e27271c72ff6e44bd683cf2e83cb2b518b1c
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
