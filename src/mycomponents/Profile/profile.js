import React, { useState } from 'react';
import './profile.css';

import Achivement from '../Achievement/Achievement';
import Approval from '../Approval/Approval';
import ViewProfile from './ViewProfile';
import Browse from '../Browse/Browse';

export default function Profile(){
    const [state, updateState] = useState('Profile')


    return(
        <div className="profile-container">
        <div className = "row">
               <h1 className = "pt-3 text-center" style={{color:"blue",position:"sticky"}}>VISHWAKARMA GOVERNMENT ENGINEERNING COLLEGE</h1>
        </div>
        <div className="row">
           
         <div className='content'><div class="navbar-nav"> 
         <div className="collapse-navbar-collapse" >
      
               <ul className="list-group me-auto "> 
                    <li className="left-list list-group-item list-group-item-action  mb-2 " aria-disabled="true">CV Mate</li>
                    </ul>
                <ul className="list-group  me-auto">
                    <li onClick={() => updateState("Profile")} className={"point left-list list-group-item list-group-item-action " + (state=="Profile"&&"active")}>Profile</li>
                    <li onClick={() => updateState("Achievement")} className={"point left-list list-group-item list-group-item-action  " + (state=="Achievement"&&"active")}>Achievement</li>
                    <li onClick={() => updateState("Approval")} className={"point left-list list-group-item list-group-item-action  " + (state=="Approval"&&"active")}>Approval</li>
                    <li onClick={() => updateState("Browse")}className={"point left-list list-group-item list-group-item-action " + (state=="Browse"&&"active")}>Browse</li>
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
          {
            state === "Approval"
            &&
            <Approval />
          }
          {
            state === "Browse"
            &&
            <Browse/>
          }
          </div>
            
        </div>
        </div>
    </div>

    
    )
}