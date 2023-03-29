import React from 'react'
import { Link } from 'react-router-dom';
// import './Register.css'

export default function Register() {
    return (
    
        <div className="container">
    <h1 className="py-3 text-center">Register</h1>
    <form action="registerdata.php" method="post" className="form-floating">
        <div className="form-floating">
            <input type="text" className="form-control mb-3" name="fname" id="fname" placeholder="First Name"/>
            <label for="fname">First Name</label>
        </div>
        <div className="form-floating">
            <input type="text" className="form-control mb-3" name="lname" id="lname" placeholder="Last Name"/>
            <label for="lname">Last Name</label>
        </div>
        <div className="row">
        <div className="btn-group mb-3 justify-content-center" role="group">
            <input type="radio" className="btn-check" name="gender" id="gender1" value="M"/>
            <label className="btn btn-outline-secondary " for="gender1">Male</label>
          
            <input type="radio" className="btn-check" name="gender" id="gender2" value="F"/>
            <label className="btn btn-outline-secondary" for="gender2">Female</label>
          
            <input type="radio" className="btn-check" name="gender" id="gender3" value="O"/>
            <label className="btn btn-outline-secondary" for="gender3">Other</label>
          </div>
          </div>
       
        <div className="input-group mb-3">
            <span className="input-group-text"  >DOB</span>
            <div className="form-floating">
                <input type="date" className="form-control" name="DOB" id="date"/>
                <label for="date"></label>
            </div>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <div className="form-floating">
                <input type="text" className="form-control" name="uname" id="name" placeholder="Username"/>
                <label for="name">Username</label>
            </div>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">.com</span>
            <div className="form-floating">
                <input type="email" className="form-control" name="mail" id="mail" placeholder="E-Mail"/>
                <label for="mail">Email</label>
            </div>
        </div>
        <div className="input-group mb-5">
            <span className="input-group-text">*</span>
            <div className="form-floating">
                <input type="password" className="form-control" name="pass" id="pass" placeholder="Password" pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
                <label for="pass">Password</label>
            </div>
        </div>
        <div className="row text-center mb-5">
            <div className="col">
            <button type="submit" className="btn btn-outline-success" >Submit</button>
            </div>
            <div className="col">
                <button type="reset" className="btn btn-outline-dark">Clear</button>
            </div>
            <div className="col">
            <Link to="http://localhost:3000/login"  className="btn btn-outline-info " position="static">Login</Link>
           </div>
           </div>
    </form>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
    </div>
    );
}

