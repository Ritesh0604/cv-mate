import React, { useState } from 'react';
import ActivitiesForm from './ActivitiesForm';
import './Approval.css';

export default function Approval() {
    const [majorActivity, setMajorActivity] = useState("")
    const [subActivity, setSubActivity] = useState([])
    const [currentActivity, setCurrentActivity] = useState("")
    const activityList = [
        {
            major: "Select Major Activity",
            sub: [
                "Select Sub Activity"
            ]
        },
        {
            major: "Technical / Research Skill",
            sub: [
                "--Select Sub Activity--",
                // "Group Discussion",
                {
                    name: "Technical Quiz",
                    view: ActivitiesForm.technicalQuize()
                },
                // "Aptitude / Reasoning",
                // "Tech-Fest",
                { 
                    name:"Workshop",
                    view: ActivitiesForm.workshop()
                },
                // "STTP",
                // "MOOC With Final Assessment",
                // "Student Skill Devlopment",
                // "Paper Presentation",
                // "Poster",
                {
                    name: "Training / Internship / Professional Certification",
                    view: ActivitiesForm.internship()
                }
                // "Project (Non Curricullar)",
                // "Industrial / Exhibition Visit With Report",
                // "Consultancy Projects"
            ]
        },
        {
            major: "Sports And Cultural",
            sub: [
                "--Select Sub Activity--",
                "Sports",
                "Cultural"
            ]
        },
        {
            major: "Community Outreach and Social Initiatives",
            sub: [
                "--Select Sub Activity--",
                "Community Service & Allied Activities (Two Days)",
                "Community Service & Allied Activities (Up to One Week)",
                "Community Service & Allied Activities (One Month)",
                "Community Service & Allied Activities (One Semester)",
                "Community Service & Allied Activities (One Academic Year)",
                "NSS/NCC (On the Successful completion of one year program)"
            ]
        },
        {
            major: "Innovation / IPR / Entrepreneur ship",
            sub: [
                "--Select Sub Activity--",
                "High Customer Reviews For Creative Products",
                "Awards / Recognitions For Products (State,National, Or International Level",
                "Legally Registered a Start-Up Company",
                "Flied a Patent",
                "Completed Prototype Devlopment",
                "Generated Significant Revenue/Profits",
                "Published Patent",
                "Patent Approved",
                "Attracted External Funding(Investor)",
                "Other Major Industry Specific Achievements",
                "User / Industry Implementing the Innovation Devloped By Student",
                "Significant Value Addition / Augmentation of Grass Roots / Social Innovation"
            ]
        },
        {
            major: "Leadership / Managment",
            sub: [
                "--Select Sub Activity--",
                "Hobby Club Activities / E-Cell /Placement Cell / Media Club Etc.",
                "Festival (Technical / Business / Other) Events",
                "Professional Societies (E.g. ASME / ACM / IEEE / SAE, Etc)",
                "Speical Initiatives",
                "GTU Innovation Club / S4 Extension Center",
                "GIC Associates"
            ]
        },
    ]


    const updateActivities = (value) => {
        setMajorActivity(value)
        activityList.map(activityList => {
            if (activityList.major === value) {
                setSubActivity(activityList.sub)
            }
        })
    }


    return (


        <div className="approval-container">
            <div className="row">
                <div className="col-2">
                    Select major activity :
                </div>
                <div className="dropdown col-9 mb-2">

                    <select onChange={e => updateActivities(e.target.value)} className="btn btn-secondary" name="m-activity" id="m-activity">
                        {
                            activityList.map(activity => {
                                return <option value={activity.major} >{activity.major}</option>
                            })
                        }
                    </select>
                </div>

                <div className="col-2">
                    Select sub activity head :
                </div>

                <div className="dropdown col-9 ">
                    <select onChange={e => setCurrentActivity(e.currentTarget.value)} className="btn btn-secondary" name="s-activity" id="s-activity">
                        {
                            subActivity.map(activity => {
                                return <option >{activity.name}</option>
                            })
                        }
                    </select>

                </div>
            </div>


            <div className="row">
            {
                subActivity.map(e => {
                    if (e.name === currentActivity){
                        return e.view
                    }
                })
            }
                <div className="col-3">
                    <label htmlFor="description" className="form-label">Description :</label>
                </div>
                <div className="col-9">
                    <textarea className="form-control col-9 mt-3" id="description" rows="3"></textarea>
                </div>
            </div>

            <div className="input-group mb-3 row">
                

                

                <div className="input-group mb-3 row">
                    <div className="col-2">
                        Event date :
                    </div>
                    <div className="col-3">
                        <div className="form-floating mt-2">
                            <input type="date" className="form-control" name="e-date" id="date" />
                            <label htmlFor="e-date"></label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="level col-2">
                        level :
                    </div>
                    <div className="dropdown col-9">

                        <select className="btn btn-secondary" name="level" id="level">
                            <option value="Collage Level">Collage Level</option>
                            <option value="Zonal Level">Zonal Level</option>
                            <option value="State Level">State Level</option>
                            <option value="National Level">National Level</option>
                            <option value="International Level">International Level</option>
                        </select>

                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-2">
                        Are you winner?
                    </div>
                    <div className="dropdown col-9 ">
                        <select className="btn btn-secondary" name="y-n" id="y-n">

                            <option value="National">Yes</option>
                            <option value="state">No</option>

                        </select>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-2 ">
                        Choose file :
                    </div>
                    <div className="col-9">
                        <div className="input-group">
                            <input type="file" className="form-control" id="inputGroupFile02" />
                            <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                        </div>
                    </div>
                </div>
                <center>

                    <button type="button" className="submit btn btn-primary mb-3 mt-3">Submit</button>

                </center>

            </div>
        </div>
    )
}