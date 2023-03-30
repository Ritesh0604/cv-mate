import React from 'react';
import './Login.css';

export default function Faculty(){
    return(
        <div className = "faculty-container">
        <div className="row px-3">

            <div className="col-4">
                <div className="image">
               <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="30%" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                   <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                 </svg>
                </div>
                <div className="name mt-2 px-3">
                   <h3> Name</h3>
                </div>
            </div>
            <div className="col-8">
                <p>Education Details </p>
            </div>
        </div>
        <div className="row px-3">
            <h4>Achievment</h4>
        </div>

    </div>
  
    )
}