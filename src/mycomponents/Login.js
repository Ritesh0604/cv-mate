import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';


export default function Login() {
    const [user, setuser] = useState("")
    console.log(user)
    return (

        <div className="container">
            <div className="title-text">
                <div className="title user">login</div>

            </div>
            <div className="form-container">
                <div className="row mx-2">
                    <div className="slide-controls btn-group mb-3 justify-content-center" role="group">
                        <input type="radio" className="btn-check" name="slide" id="user" checked />
                        <label className="slide user" htmlFor="user" onClick={() => setuser("Student")}> Student </label>

                        <input type="radio" className="btn-check" name="slide" id="admin" />
                        <label className="slide admin" htmlFor="admin">Faculty</label>
                        <div className="slider-tab"></div>
                    </div>
                </div>
                {/* <script>
                    document.querySelector('#register').addEventListener('click', function() {
    
  });
  document.querySelector('#register').disabled = true;
                </script> */}
                <div className="form-inner">
                    <form action="#" className="admin">
                        <div className="row mx-2 pt-4 pb-5 mb-4">
                            <div className="input-group mb-3 ">
                                <span className="input-group-text">No.</span>
                                <div className="form-floating">
                                    <input type="Number" className="form-control" name="name" id="name" placeholder="Username" />
                                    <label htmlFor="name">Username</label>
                                </div>
                            </div>
                            <div className="input-group mb-4">
                                <span className="input-group-text">*</span>
                                <div className="form-floating">
                                    <input type="password" className="form-control" name="pass" id="pass" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                                    <label htmlFor="pass">Password</label>
                                </div>
                            </div>
                            {/* <div id="pass">
  <h3>Password must contain the following:</h3>
  <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
  <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
  <p id="number" class="invalid">A <b>number</b></p>
  <p id="length" class="invalid">Minimum <b>8 characters</b></p>
</div>     */}
                            <center>

                                <div className="btn-layer">

                                    <div> <button type="Submit" className="btn btn-primary mt-4 mx-1 pt-2 pb-2 px-5" id="submit">Submit</button>
                                        <button type="Reset" className="btn btn-primary mt-4 mx-1 pt-2 pb-2 px-5 " id="reset">Reset</button>

                                    </div>
                                    <Link to="http://localhost:3000/register">
                                        <button className="btn btn-primary mt-4 mx-1 pt-2 pb-2 px-5" id="register">Register</button></Link>

                                </div>
                            </center>
                        </div>
                    </form>


                </div>
            </div>
        </div>


    )
}

