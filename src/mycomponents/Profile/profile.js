import React, { useState } from 'react';
import '../Login/Login.css';

import Achivement from '../Achievement/Achievement';
import Approval from '../Approval/Approval';
import ViewProfile from './ViewProfile';

export default function Profile(){
    const [state, updateState] = useState('Approval')


    return(
        <div className="profile-container">
        <div className = "row">
               <h1 className = "py-3 text-center" style={{color:"blue"}}>VISHWAKARMA GOVERNMENT ENGINEERNING COLLEGE</h1>
        </div>
        <div className="row">
            <div className="col-3" >

                <ul className="list-group">
                    <li className="left-list list-group-item list-group-item-action" aria-current="true">CV Mate</li>
                    <li onClick={() => updateState("Profile")} className={"point left-list list-group-item list-group-item-action " + (state=="Profile"&&"active")}>Profile</li>
                    <li onClick={() => updateState("Achievement")} className={"point left-list list-group-item list-group-item-action " + (state=="Achievement"&&"active")}>Achievement</li>
                    <li onClick={() => updateState("Approval")} className={"point left-list list-group-item list-group-item-action " + (state=="Approval"&&"active")}>Approval</li>
                    <li className="point left-list list-group-item list-group-item-action">Browse</li>
                  </ul>
           </div>

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
          {
            state === "Approval"
            &&
            <Approval />
          }
          {
            
          }
            
        </div>

    </div>

    
    )
}