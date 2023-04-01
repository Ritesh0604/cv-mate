import React, { useState, useRef, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import login_status from '../../store/login_status';

export default function Login() {
    const ctx = useContext(login_status)
    const [user, setuser] = useState("Student")

    const navigate = useNavigate()
    // there is a lag switching between student and faculty

    const enrNoRef = useRef()
    const passRef = useRef()

    const unameRef = useRef()
    const facPassRef = useRef()

    const facultyLogin = async (e) => {
        e.preventDefault()

        const data = {
            name: enrNoRef.current.value,
            password: passRef.current.value
        }

        await fetch("http://localhost:5000/faculty/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Invalid credential.")
                }

                return response.json()
            })
            .then(res => {
                // store id in local
                localStorage.setItem("id", res)
                ctx.updateLoginStatus(true, user, res)

                // redirect to home page
                navigate('/facultyDashboard')
            })
            .catch(err => {
                // alert(err)
            })
    }
    const studentLogin = async (e) => {
        e.preventDefault()

        const data = {
            enrollment_number: enrNoRef.current.value,
            password: passRef.current.value
        }

        await fetch("http://localhost:5000/student/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Invalid credential.")
                }

                return response.json()
            })
            .then(res => {
                // store id in local
                localStorage.setItem("id", res.token)
                ctx.updateLoginStatus(true, user, res)

                // redirect to home page
                navigate('/profile')
            })
            .catch(err => {
                alert(err)
            })
    }

    return (

        <div className="login-container">
            <div className="title-text">
                <div className="title user" style={{ textAlign: "center" }}><h3>login</h3></div>

            </div>
            <div className="form-container">
                <div className="row mx-2">
                    <div className="slide-controls btn-group mb-3 justify-content-center" role="group">
                        <input type="radio" className="btn-check" name="slide" id="user" checked onClick={() => setuser("Student")} />
                        <label className="slide user" htmlFor="user"> Student </label>

                        <input type="radio" className="btn-check" name="slide" id="admin" onClick={() => setuser("Faculty")} />
                        <label className="slide admin" htmlFor="admin">Faculty</label>
                        <div className="slider-tab"></div>
                    </div>
                </div>
                <div className="form-inner">
                    <form onSubmit={user==="Student"?studentLogin:facultyLogin} className="admin">
                        <div className="row mx-2 pt-4 pb-5 mb-4">
                            <div className="input-group mb-3 ">
                                <span className="input-group-text">No.</span>
                                <div className="form-floating">
                                    <input ref={enrNoRef} type="text" className="form-control" name="name" id="name" placeholder="Username"  required />
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
                                    <button type="Reset" className="btn btn-primary mt-4 mx-1 pt-2 pb-2 px-5 " id="reset">Reset</button>
                                    {
                                        user === "Student"
                                        &&
                                        <Link to="http://localhost:3000/register"> <button className="btn btn-primary mt-4 mx-1 pt-2 pb-2 px-5" id="register">Register</button></Link>
                                    }
                                </div>
                            </center>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}