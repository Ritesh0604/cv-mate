import './App.css';
import Login from './mycomponents/Login/Login'
import Register from './mycomponents/Register/Register'
import Profile from './mycomponents/Profile/profile'
import ViewProfile from './mycomponents/Profile/ViewProfile'
import Achievement from './mycomponents/Achievement/Achievement'
import Approval from './mycomponents/Approval/Approval'
import Browse from './mycomponents/Browse/Browse'
import Faculty from './mycomponents/Faculty/Faculty'
import PendingApproval from './mycomponents/Faculty/PendingApproval'
import ApprovedApproval from './mycomponents/Faculty/ApprovedApproval'
import Viewapproval from './mycomponents/Viewapproval/Viewapproval'
import FacultyDashboard from './mycomponents/Faculty/FacultyDashboard';

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
        <Route path='Achievement' element={<Achievement/>}></Route>
        <Route path='approval' element={<Approval/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='faculty' element={<Faculty/>}></Route>
        <Route path='PendingApproval' element={<PendingApproval/>}></Route>
        <Route path='ApprovedApproval' element={<ApprovedApproval/>}></Route>
        <Route path='browse' element={<Browse/>}></Route>
        <Route path='viewapproval' element={<Viewapproval/>}></Route>
        <Route path='ViewProfile' element={<ViewProfile/>}></Route>
        <Route path='facultydashboard' element={<FacultyDashboard/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
