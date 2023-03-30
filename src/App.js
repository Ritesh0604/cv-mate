import logo from './logo.svg';
import './App.css';
import Login from './mycomponents/Login'
import Register from './mycomponents/Register'
import Profile from './mycomponents/profile'
import Approval from './mycomponents/Approval'
import Achivment from './mycomponents/Achivment'
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [val, updateVal] = useState("Ok")
  
  return (
    <BrowserRouter>

      <Routes>
      <Route path='' element={<Login/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='Profile' element={<Profile/>}></Route>
        <Route path='Approval' element={<Approval/>}></Route>
        <Route path='Achivment' element={<Achivment/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
