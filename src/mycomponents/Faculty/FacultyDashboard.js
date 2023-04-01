import React, { useContext, useState } from 'react';
import Faculty from './Faculty';
import './FacultyDashboard.css';
import PendingApproval from './PendingApproval';
import login_status from '../../store/login_status';

export default function FacultyDashboard(){
    const [state, updateState] = useState("Profile")
    const loginCtx = useContext(login_status)

    return(
            
    <div className="faculty_d_container">
    <div className="row">
        <h1 className="py-3 text-center text-primary ">VISHWAKARMA GOVERNMENT ENGINEERNING COLLEGE</h1>
    </div>
    <div className=" options">
        <div className="offcanvas-body col-3 ">
            <nav className="bd-links w-30 navvv" id="bd-docs-nav" aria-label="Docs navigation">
                <ul className="list-group">
                    <li onClick={() => updateState("Profile")} className={"point left-list list-group-item list-group-item-action " + (state==="Profile"&&"active")}>Profile</li>
                    <li onClick={() => updateState("Pending")} className={"point left-list list-group-item list-group-item-action " + (state==="Pending"&&"active")}>Pending Approval</li>
                    <li onClick={() => loginCtx.logOut()} className="point left-list list-group-item list-group-item-action">Log out</li>
                </ul>
            </nav>
        </div>
        <div className='content'>
        {
            state==="Profile"
            &&
            <Faculty/>
        }
        {
            state==="Pending"
            &&
            <PendingApproval/>
        }
        
        </div>
    </div>
    </div>

    )
}
