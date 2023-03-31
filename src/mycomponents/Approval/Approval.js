import React, { useState } from 'react';
import './Approval.css';

export default function Approval(){
    const [majorActivity, setMajorActivity] = useState("")
    const [subActivity, setSubActivity] = useState([])

    const activityList = [
        {
            major: "Select Major Activity",
            sub: [
                "Select Sub Activity"
            ]
        },
        {
            major: "Technical and Research",
            sub: [
                "Group Discussion",
                "Technical Quiz", 
                "Aptitude",
                "Tech Fest",
                "Workshop"
            ]
        },
        {
            major:" Sports and Cultural",
            sub:[
                "Sports",
                "Cultural"
            ]
        }
    ]

    console.log(subActivity)

    const updateActivities = (value) => {
        setMajorActivity(value)
        activityList.map(activityList => {
            if (activityList.major === value){
                setSubActivity(activityList.sub)
            }
        })
    }


    return(

    
        <div className="approval-container">
        <div className="row">
        <div className = "col-2">
            Select major activity :
        </div>
        <div className="dropdown col-9 mb-2">
            
            <select onChange={e => updateActivities(e.target.value)}  className="btn btn-secondary" name ="m-activity" id="m-activity"> 
            {/* <ul className="dropdown-menu">
                <li><option selected>major activity</option></li>
                <li><option value="">1</option></li>
                <li><option value="">2</option></li>
                <li><option value = "">3</option></li>
            </ul> */}
            {
                activityList.map(activity => {
                    return <option value={activity.major} >{activity.major}</option>
                })
            }
        </select>
          </div>
       
          <div className = "col-2">
            Select sub activity head :
        </div>
    
          <div className="dropdown col-9 ">
            <select className="btn btn-secondary" name ="s-activity" id="s-activity"> 
                {/* <ul className="dropdown-menu">
                    <li><option selected>sub activity</option></li>
                    <li><option value="">1</option></li>
                    <li><option value="">2</option></li>
                    <li><option value = "">3</option></li>
                </ul> */}
                {
                    subActivity.map(activity => {
                        return <option>{activity}</option>
                    })
                }
            </select>
             
            </div>
         </div>
    
    
        <div className = "row">
            <div className="col-2">
           <label htmlFor="description" className="form-label">Description :</label>
        </div>
        <div className="col-9">
            <textarea className="form-control col-9 mt-3" id="description" rows="3"></textarea>
        </div>
        </div>
    
       
            <div className="input-group mb-3 row">
                <div className = "col-2">
                    Event date :
            </div> 
               <div className="col-3">
                <div className="form-floating mt-2">
                    <input type="date" className="form-control" name="e-date" id="date"/>
                    <label htmlFor="e-date"></label>
                </div>
            </div>
            </div>
    
            <div className="row">
                <div className = "level col-2">
                    level :
                </div>
                <div className="dropdown col-9">
                    
                    
                    <select className = "btn btn-secondary" name ="level" id="level"> 
                        {/* <ul className="dropdown-menu">
                     <li><option selected>level</option></li>
                      <li><option value="National">National</option></li>
                      <li><option value="state">State</option></li>
                      <li><option value = "College">College</option></li>
                    </ul> */}
                     <option value="Collage Level">Collage Level</option>
                     <option value="Zonal Level">Zonal Level</option>
                     <option value="State Level">State Level</option>
                      <option value="National Level">National Level</option>
                     <option value="International Level">International Level</option>
                    </select>
                  
                  </div>
            </div>
    
            <div className ="row mt-2">
                <div className = "col-2">
                    Are you winner?
                    </div>
                <div className="dropdown col-9 ">
                    <select className = "btn btn-secondary" name ="y-n" id="y-n"> 
                       
                      <option value="National">Yes</option>
                      <option value="state">No</option>
                      
                 
                    </select>
                </div>
            </div>
            
            <div className="row mt-2">
            <div className ="col-2 ">
                Choose file :
            </div>
            <div className ="col-9">
             <div className="input-group">
                <input type="file" className="form-control" id="inputGroupFile02"/>
                <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
              </div>
            </div>
            </div>
        <center>
        
           <button type="button" className="btn btn-primary mb-3 mt-3">Submit</button>
        
        </center>
    
    
       </div>    
    )
}