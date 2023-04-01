import './mycomponents/Login/Login.css#cfe4e0';
import Login from './mycomponents/Login/Login'
import AdminLogin from './mycomponents/Admin/adminlogin'
import AdminRegister from './mycomponents/Admin/AdminRegister'
import AdminHome from './mycomponents/Admin/AdminHome'
import Register from './mycomponents/Register/Register'
import Profile from './mycomponents/Profile/profile'
import ViewProfile from './mycomponents/Profile/ViewProfile'
import ShareProfile from './mycomponents/Profile/ShareProfile'
import Achievement from './mycomponents/Achievement/Achievement'
import Approval from './mycomponents/Approval/Approval'
import Browse from './mycomponents/Browse/Browse'
import Faculty from './mycomponents/Faculty/Faculty'
import PendingApproval from './mycomponents/Faculty/PendingApproval'
import ApprovedApproval from './mycomponents/Faculty/ApprovedApproval'
import Viewapproval from './mycomponents/Viewapproval/Viewapproval'
import FacultyDashboard from './mycomponents/Faculty/FacultyDashboard';
import Editprofile from './mycomponents/Profile/Editprofile';

import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import login_status from './store/login_status';

function App() {
  const [val, updateVal] = useState("Ok")
  const ctx = useContext(login_status)

  useEffect(() => {
    // checking if data is already fetched
    try{
      const id = localStorage.getItem("id")
      if (id === "" || id === null)
        return 
      
      fetch("http://localhost:5000/student/get_details", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({id: id})
      })
      .then(response => {
        if (!response.ok){
          throw new Error("Error with auto-login")
        }
        else{
          return response.json()
        }
      })
      .then(response => {
        ctx.updateLoginStatus(true, "Student", response)
        window.history.pushState({},  "", "http://localhost:3000/profile")
      })
      .catch(async err => {
        await fetch("http://localhost:5000/faculty/verify_id", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({id: id})
        })
        .then(response => {
          if (!response.ok){
            throw new Error("Error with auto-login")
          }
          
          return response.json()
        })
        .then(resp => {
          ctx.updateLoginStatus(true, "Faculty", {})
          window.history.pushState({},  "", "http://localhost:3000/facultyDashboard")
        })
        .catch(err => {
          localStorage.removeItem("id")
          window.history.pushState({},  "", "http://localhost:3000/login")
          window.location.reload()
        })
      })
    }
    catch(err){
      alert(err)
    }
  }, [ctx.isLoggedIn])
  
  return (
    <BrowserRouter>

      <Routes>
      <Route path='' element={<Login/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='adminlogin' element={<AdminLogin/>}></Route>
        <Route path='adminRegister' element={<AdminRegister/>}></Route>
        <Route path='adminHome' element={<AdminHome/>}></Route>
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
        <Route path='ShareProfile' element={<ShareProfile/>}></Route>
        <Route path='facultydashboard' element={<FacultyDashboard/>}></Route>
        <Route path="editprofile" element={<Editprofile/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
