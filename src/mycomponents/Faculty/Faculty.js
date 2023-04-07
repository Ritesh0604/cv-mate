import React, { useState, useEffect} from 'react';
import './Faculty.css';

export default function Faculty(){
    const [facultyData, updatefacultyData]=useState({name: "", field: ""})

    const fetchFacultyProfile = async () => {
      const id = localStorage.getItem("id")
      await fetch("http://localhost:5000/faculty/get_faculty_details", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({id: id})
      })
      .then(response => {
        if (!response.ok){
          throw new Error("Failed attempt")
        }

        return response.json()
      })
      .then(data => {
        updatefacultyData(data)
      })
      .catch(err => {
        // logout
        updatefacultyData({ name: "", field: ""})
        window.history.pushState({},  "", "http://localhost:3000/login")
        window.location.reload()
      })
    }
    console.log(facultyData)
    useEffect(() => {
      fetchFacultyProfile()
    }, [updatefacultyData])
    return(
        <div className = "faculty-container">
        <div className="row px-3">
            <div className="col-4">
                <div className="image">
               <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="30%" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                   <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                 </svg>
                 
                </div>
                <div className="name mt-2 px-1">
                   <h3>{facultyData.name}</h3>
                </div><div className=" mt-2 px-1">
                   <h5>Field: {facultyData.field}</h5>
                </div>
            </div>
        </div>
        <div className="row px-3">
        </div>

    </div>
  
    )
}