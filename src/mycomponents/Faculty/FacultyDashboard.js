import React from 'react';
import './FacultyDashboard.css';

export default function FacultyDashboard(){
    return(
            
    <div className="faculty_d_container">
    <div className="row">
        <h1 className="py-3 text-center text-primary ">VISHWAKARMA GOVERNMENT ENGINEERNING COLLEGE</h1>
    </div>
    <div className="row">
        <div className="offcanvas-body col-3 ">
            <nav className="bd-links w-30 navvv" id="bd-docs-nav" aria-label="Docs navigation">
                <ul className="list-group">
                    <li className="point left-list list-group-item list-group-item-action ">Profile</li>
                    <li className="point left-list list-group-item list-group-item-action ">Pending Approval</li>
                    <li className="point left-list list-group-item list-group-item-action ">Approved Approval</li>
                    <li className="point left-list list-group-item list-group-item-action">Log out</li>
                </ul>
            </nav>
        </div>
    </div>
    </div>

    )
}
