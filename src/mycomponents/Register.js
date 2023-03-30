import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

export default function Register() {
    const [maxDate, updateMaxDate] = useState(new Date().toISOString().split("T")[0])
    const [error, updateError] = useState("")

    const [gender, setGender] = useState('M')
    const [branch, setBranch] = useState('IT')

    const navigate = useNavigate()

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
            response.json()
        })
        .then(response => {
            // redirect to login page
            navigate('/login')
        })
        .catch(err => updateError(err))
    }
    
    return (
        // Extra fields add karvi pdse register ma! Me mokli e  
        <div className="reg-container">
            <h1 className="py-3 text-center">Register</h1>
            <form onSubmit={register} className="form-floating">

                <div className="input-group mb-3">
                    <span className="input-group-text">Name</span>
                    <div className="form-floating">
                        <input ref={nameRef} type="text" className="form-control" name="uname" id="full_name" placeholder="Full Name" pattern="(?=.*[a-zA-Z]).{1,}" title="Only contain alphabets" required />
                        <label htmlFor="name">Full Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="btn-group mb-3 justify-content-center" role="group">
                        <input type="radio" className="btn-check" name="gender" id="gender1" value="M" onClick={e => setGender(e.target.value)}/>
                        <label className="btn btn-outline-secondary " htmlFor="gender1">Male</label>

                        <input type="radio" className="btn-check" name="gender" id="gender2" value="F" onClick={e => setGender(e.target.value)}/>
                        <label className="btn btn-outline-secondary" htmlFor="gender2">Female</label>

                        <input type="radio" className="btn-check" name="gender" id="gender3" value="O" onClick={e => setGender(e.target.value)}/>
                        <label className="btn btn-outline-secondary" htmlFor="gender3">Other</label>
                    </div>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text"  >DOB</span>
                    <div className="form-floating">
                        <input ref={dobRef} id="date" type="date" className="form-control" max={maxDate} required />
                        <label htmlFor="date"></label>
                    </div>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">No.</span>
                    <div className="form-floating">
                        <input ref={enrNumRef} type="text" className="form-control" name="uname" id="enrollment_number" placeholder="Enrollment Number" title="Must contain 12 digits" pattern="[0-9]{12}" minLength={12} maxLength={12} required />
                        <label htmlFor="name">Enrollment Number</label>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Semester</span>
                    <div className="form-floating">
                        <input ref={semRef} type="text" className="form-control" name="sem" id="sem" placeholder="Enrollment Number" pattern="[1-8]{1}" minLength='1' maxLength='1' title="Only contain Number Between 1-8 " required />
                        <label htmlFor="name">Sem.</label>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Phone No.</span>
                    <div className="form-floating">
                        <input ref={phoneNumRef} type="text" className="form-control" name="uname" id="phone_number" placeholder="Number" title="Must contain 10 digits" pattern="[0-9]{10}" minLength={10} maxLength={10} required/>
                        <label htmlFor="name">Phone Number</label>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Branch</span>
                    <div className="form-floating">
                        {/* <input type="text" className="form-control" name="uname" id="name" placeholder="Number" required/> */}
                        <select className='form-control' onChange={e => setBranch(e.target.value)}>
                            <option name="" value=''>--Please choose an option--</option>
                            <option name='Information Technology' value="Information Technology">Information-Technology</option>
                            <option name='Computer Engineering' value="Computer Engineering">Computer Engineering</option>
                            <option name='Electrical Engineering' value="Electrical Engineering">Electrical Engineering</option>
                            <option name='Chemical Engineering' value="Chemical Engineering">Chemical Engineering</option>
                            <option name='Civil Engineering' value="Civil Engineering">Civil Engineering</option>
                            <option name='Electrical And Communication' value="Electrical And Communication">Electrical And Communication</option>
                            <option name='Instrumentation And Control' value="Instrumentation And Control">Instrumentation And Control</option>
                            <option name='Mechanical Engineering' value="Mechanical Engineering">Mechanical Engineering</option>
                            <option name='Power Electronics' value="Power Electronics">Power Electronics</option>
                            <option name='Data Science' value="Data Science">Data Science</option>
                            <option name='Electronics And Instrumentation Engineering' value="Electronics And Instrumentation Engineering">Electronics And Instrumentation Engineering</option>
                            <option name='Applied Mechanics' value="Applied Mechanics">Applied Mechanics</option>
                            <option name='Science And Humanities' value="Science And Humanities">Science And Humanities</option>
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
                        <button type="submit" className="btn btn-outline-success">Submit</button>
                    </div>
                    <div className="col">
                        <button type="reset" className="btn btn-outline-dark">Clear</button>
                    </div>
                    <div className="col">
                        <Link to="http://localhost:3000/login" className="btn btn-outline-info " position="static">Login</Link>
                    </div>
                </div>
            </form>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossOrigin="anonymous"></script>
        </div>
    );
}