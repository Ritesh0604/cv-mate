import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './AdminRegister.css'

export default function Register() {
    const [maxDate, updateMaxDate] = useState(new Date().toISOString().split("T")[0])
    const [error, updateError] = useState("")

    const navigate = useNavigate()

    const [gender, setGender] = useState('M')
    const [branch, setBranch] = useState('IT')


    //#region refs
    const nameRef = useRef()
    const dobRef = useRef()
    const enrNumRef = useRef()
    const phoneNumRef = useRef()
    const emailRef = useRef()
    const passRef = useRef()
    const semRef = useRef()
    //#endregion


    const register = (e) => {
        e.preventDefault()
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            gender: gender,
            dob: dobRef.current.value,
            phone_number: phoneNumRef.current.value,
            semester: semRef.current.value,
            enrollment_number: enrNumRef.current.value,
            branch: branch,
            password: passRef.current.value
        }

        fetch("http://localhost:5000/student/register", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok){
                throw new Error("Invalid enrollment number")
            }
            else{
                response.json()
            }
        })
        .then(response => {
            navigate('/login')
        })
        .catch(err => updateError(err))
    }
    
    return (
        // Extra fields add karvi pdse register ma! Me mokli e  
        <div className="Admin-reg-container">
            <h1 className="py-3 text-center">Register</h1>
            <form /*onSubmit={register}*/ className="form-floating">

                <div className="input-group mb-3">
                    <span className="input-group-text">Name</span>
                    <div className="form-floating">
                        <input ref={nameRef} type="text" className="form-control" name="uname" id="full_name" placeholder="Full Name" pattern="(?=.*[a-zA-Z]).{1,}" title="Only contain alphabets" required />
                        <label htmlFor="name">Full Name</label>
                    </div>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">Branch</span>
                    <div className="form-floating">
                        {/* <input type="text" className="form-control" name="uname" id="name" placeholder="Number" required/> */}
                        <select className='form-control' onChange={e => setBranch(e.target.value)}>
                            <option name="" value=''>--Please choose an option--</option>
                            <option name='Technical / Research Skill' value="Technical / Research Skill">Technical / Research Skill</option>
                            <option name='Sports And Cultural' value="Sports And Cultural">Sports And Cultural</option>
                            <option name='Community Outreach and Social Initiatives' value="Community Outreach and Social Initiatives">Community Outreach and Social Initiatives</option>
                            <option name='Innovation / IPR / Entrepreneur ship' value="Innovation / IPR / Entrepreneur ship">Innovation / IPR / Entrepreneur ship</option>
                            <option name='Leadership / Managment' value="Leadership / Managment">Leadership / Managment</option>
                        </select>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">.com</span>
                    <div className="form-floating">
                        <input ref={emailRef} type="email" className="form-control" name="mail" id="mail" placeholder="E-Mail" required/>
                        <label htmlFor="mail">abc@gmail.com</label>
                    </div>
                </div>
                <div className="input-group mb-5">
                    <span className="input-group-text">*</span>
                    <div className="form-floating">
                        <input ref={passRef} type="password" className="form-control" name="pass" id="pass" placeholder="Password" pattern="(?=.*\d)(?=.*[@$!%*#?&])(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter and one special character(@$!%*#?&), and at least 8 or more characters" required/>
                        <label htmlFor="pass">Password</label>
                    </div>
                </div>
                <div className="row text-center mb-5">
                    <div className="col">
                        <button type="Add" className="btn btn-outline-success">Add</button>
                    </div>
                    <div className="col">
                        <button type="reset" className="btn btn-outline-dark">Clear</button>
                    </div>
                    <div className="col">
                        <Link to="http://localhost:3000/adminHome" className="btn btn-outline-info " position="static">Back</Link>
                    </div>
                </div>
            </form>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossOrigin="anonymous"></script>
        </div>
    );
}