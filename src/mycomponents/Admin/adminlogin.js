import React, { useState, useRef, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Login/Login.css';
import login_status from '../../store/login_status';

export default function Login() {
    const ctx = useContext(login_status)
    const [user, setuser] = useState("Admin")

    const navigate = useNavigate()

    // there is a lag switching between student and faculty

    const unameRef = useRef()
    const passRef = useRef()

    const studentLogin = async (e) => {
        e.preventDefault()

        const data = {
            username: unameRef.current.value,
            password: passRef.current.value
        }

        await fetch("http://localhost:5000/admin/login", {
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
            ctx.updateLoginStatus(true, user, {})
            
            // redirect to home page
            navigate('/adminHome')
        })
        .catch(err => {
            alert(err)
        })
    }

    return (

        <div className="login-container">
            <div className="title-text">
                <div className="rounded-5 title user" style={{textAlign:"center"}}><h3>Admin login</h3></div>

            </div>
            <div className="form-container">
                <div className="form-inner">
                    <form onSubmit={studentLogin} className="admin">
                        <div className="row mx-2 pt-4 pb-5 mb-4">
                            <div className="input-group mb-3 ">
                                <span className="input-group-text">No.</span>
                                <div className="form-floating">
                                    <input ref={unameRef} type="text" className="form-control" name="name" id="name" placeholder="Username" required/>
                                    <label htmlFor="name">Username</label>
                                </div>
                            </div>
                            <div className="input-group mb-4">
                                <span className="input-group-text">*</span>
                                <div className="form-floating">
                                    <input ref={passRef} type="password" className="form-control" name="pass" id="pass" placeholder="Password" required />
                                    <label htmlFor="pass">Password</label>
                                </div>
                            </div>
                            <center>
              <div className="btn-layer"> 
                
                <button type="Submit" className="btn btn-primary mt-4 mx-1 pt-2 pb-2 px-5" id="submit">Login</button>
                <button type="Reset"  className="btn btn-primary mt-4 mx-1 pt-2 pb-2 px-5 " id="reset">Reset</button>                
              </div>
            </center>
           </div>
        </form>
                </div>
            </div>
        </div>
    )
}