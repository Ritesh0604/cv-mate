import React, { useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import login_status from '../store/login_status';

export default function Login() {
    const ctx = useContext(login_status)
    const [user, setuser] = useState("Student")

    // there is a lag switching between student and faculty

    const enrNoRef = useRef()
    const passRef = useRef()

    const studentLogin = async (e) => {
        e.preventDefault()

        const data = {
            enrollment_number: enrNoRef.current.value,
            password: passRef.current.value
        }

        await fetch("http://localhost:5000/student/login", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok){
                throw new Error("Invalid credential.")
            }

            return response.json()
        })
        .then(res => {
            // store id in local
            localStorage.setItem("id", res.id)
            ctx.updateLoginStatus(true, user)
            // redirect to home page
            alert("Logged in")
        })
        .catch(err => {
            alert(err)
        })
    }

    return (

        <div className="login-container">
            <div className="title-text">
                <div className="title user" style={{textAlign:"center"}}><h3>login</h3></div>

            </div>
            <div className="form-container">
                <div className="row mx-2">
                    <div className="slide-controls btn-group mb-3 justify-content-center" role="group">
                        <input type="radio" className="btn-check" name="slide" id="user" checked onClick={() => setuser("Student")}/>
                        <label className="slide user" htmlFor="user"> Student </label>

                        <input type="radio" className="btn-check" name="slide" id="admin" onClick={() => setuser("Faculty")}/>
                        <label className="slide admin" htmlFor="admin">Faculty</label>
                        <div className="slider-tab"></div>
                    </div>
                </div>
                <div className="form-inner">
                    <form onSubmit={studentLogin} className="admin">
                        <div className="row mx-2 pt-4 pb-5 mb-4">
                            <div className="input-group mb-3 ">
                                <span className="input-group-text">No.</span>
                                <div className="form-floating">
                                    <input ref={enrNoRef} type="text" className="form-control" name="name" id="name" placeholder="Username" pattern="[0-9]{12}" minlength="12" minLength={12} maxLength={12} title="Must contain 12 digits" required/>
                                    <label htmlFor="name">Username</label>
                                </div>
                            </div>
                            <div className="input-group mb-4">
                                <span className="input-group-text">*</span>
                                <div className="form-floating">
                                    <input ref={passRef} type="password" className="form-control" name="pass" id="pass" placeholder="Password" pattern="(?=.*\d)(?=.*[!@#\$%\^&\*])(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter and one special character (!@#\$%\^&\*]), and at least 8 or more characters" minLength={8} required />
                                    <label htmlFor="pass">Password</label>
                                </div>
                            </div>
                            <center>
              <div className="btn-layer"> 
                
                <button type="Submit" className="btn btn-primary mt-4 mx-1 pt-2 pb-2 px-5" id="submit">Login</button>
                <button type="Reset"  className="btn btn-primary mt-4 mx-1 pt-2 pb-2 px-5 " id="reset">Reset</button>
                <Link to="http://localhost:3000/register"> <button className="btn btn-primary mt-4 mx-1 pt-2 pb-2 px-5" id="register">Register</button></Link>
                
              </div>
            </center>
           </div>
        </form>
                </div>
            </div>
        </div>
    )
}