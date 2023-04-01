

import React, { useState } from 'react';
import './ShareProfile.css';

import Achivement from '../Achievement/Achievement';
import ViewProfile from './ViewProfile';


export default function Profile() {
    const [state, updateState] = useState('Profile')


    return (
        <div className="View-profile-container">
            <div className="row">
                <h1 className="pt-3 text-center" style={{ color: "blue", position: "sticky", borderBottom: "2px solid #9FA6B2", boxShadow: "0px 6px " }}>VISHWAKARMA GOVERNMENT ENGINEERNING COLLEGE</h1>
            </div>
            <div className="row">

                <div className='content'>
                    <div class="navbar-nav">
                        <div className="collapse-navbar-collapse" >

                            <ul className="list-group me-auto ">
                                <li className="left-list list-group-item list-group-item-action  mb-2 " aria-disabled="true">CV Mate</li>
                            </ul>
                            <ul className="list-group  me-auto">
                                <li onClick={() => updateState("Profile")} className={"point left-list list-group-item list-group-item-action " + (state == "Profile" && "active")}>Profile</li>
                                <li onClick={() => updateState("Achievement")} className={"point left-list list-group-item list-group-item-action  " + (state == "Achievement" && "active")}>Achievement</li>
                            </ul>
                        </div>
                    </div>


                    <div className='items'>
                        {
                            state === "Profile"
                            &&
                            <ViewProfile />
                        }
                        {
                            state === "Achievement"
                            &&
                            <Achivement />
                        }
                    </div>

                </div>
            </div>
        </div>


    )
}