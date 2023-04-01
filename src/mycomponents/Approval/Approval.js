import React, { useContext, useState, useRef, useEffect } from 'react';
import ActivityFormContext from '../../store/activity_form';
import './Approval.css';
import api_store from '../../store/api_store';
import login_status from '../../store/login_status';

export default function Approval() {
    const activityCtx = useContext(ActivityFormContext)
    const apiCtx = useContext(api_store)
    const loginCtx = useContext(login_status)

    const [majorActivity, setMajorActivity] = useState("")
    const [subActivity, setSubActivity] = useState([])
    const [currentActivity, setCurrentActivity] = useState("")
    const [faculty, setFaculty] = useState("")

    const descriptionRef = useRef()
    const levelRef = useRef()
    const winnerRef = useRef()
    const titleRef = useRef()

    const [facultiesData,addFacultyData] = useState([])

    useEffect(() => {
        fetchFacultyData()
    }, [addFacultyData])

    const fetchFacultyData = async () => {
        const data = await fetch("http://localhost:5000/faculty/get_all")
        .then(response => {
            return response.json()
        })

        setFaculty(data[0]._id)
        addFacultyData(data)
    }

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
                {
                    name: "--Select Sub Activity--"
                },
                // "Group Discussion",
                {
                    id: 0,
                    name: "Technical Quiz",
                    view: activityCtx.TechnicalQuize,
                    extra: {
                        points_earned: activityCtx.p_earnedRef,
                    }
                },
                // "Aptitude / Reasoning",
                // "Tech-Fest",
                {
                    id: 1,
                    name:"Workshop",
                    view: activityCtx.Workshop,
                    extra: {
                        skill: activityCtx.skillRef
                    }
                },
                // "STTP",
                // "MOOC With Final Assessment",
                // "Student Skill Devlopment",
                // "Paper Presentation",
                // "Poster",
                {
                    id: 2,
                    name: "Training / Internship / Professional Certification",
                    view: activityCtx.Internship,
                    extra: {
                        role: activityCtx.role,
                        sDate: activityCtx.sDate,
                        eDate: activityCtx.eDate
                    }
                }
                // "Project (Non Curricullar)",
                // "Industrial / Exhibition Visit With Report",
                // "Consultancy Projects"
            ],
            
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

    const onSubmit = async () => {
        const facultyData = await fetch("http://localhost:5000/faculty/get_faculty_details", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({id:faculty})}).then(res => { return res.json() })

        const achievementData = {
            title: titleRef.current.value,
            major_activity: majorActivity,
            sub_activity: currentActivity.name,
            description: descriptionRef.current.value,
            level: levelRef.current.value,
            winner: winnerRef.current.value==="Yes"?true:false,
            faculty_id: faculty,
            faculty_name: facultyData.name
        }
        console.log(achievementData)
        achievementData.enrollment_number = loginCtx.userData.enrollment_number
        const id = currentActivity.id
        const extraData = activityCtx.subActivityExtra[id]
        const data = {
            data: achievementData,
            extraData: extraData
        }
        apiCtx.addAchievement(data)
    }


    return (
        <div className="approval-container">
            <div className="row">
                <div className="col-5">
                    Select major activity :
                </div>
                <div className="dropdown col-7">

                    <select onChange={e => updateActivities(e.currentTarget.value)} className="btn btn-secondary col-7" name="m-activity" id="m-activity">
                        {
                            activityList.map(activity => {
                                return <option value={activity.major} >{activity.major}</option>
                            })
                        }
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="col-5">
                    Select sub activity:
                </div>

                <div className="dropdown col-7 ">
                    <select onChange={e => {
                        subActivity.map(activity => {
                            if (activity.name === e.target.value)
                                setCurrentActivity(activity)
                        })
                    }} className="btn btn-secondary col-7 " name="s-activity" id="s-activity">
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
                currentActivity.view
            }
            </div>

            <div className='row'>
                <div className="col-4">
                    <label htmlFor="description" className="form-label">Title :</label>
                </div>
                <div className="col-8">
                    <input ref={titleRef} type='text' className="form-control col-8" id="title" rows="3"></input>
                </div>
            </div>
            <div className='row'>
                <div className="col-4">
                    <label htmlFor="description" className="form-label">Description :</label>
                </div>
                <div className="col-8">
                    <textarea ref={descriptionRef} className="form-control col-8" id="description" rows="3"></textarea>
                </div>
            </div>
                <div className="row">
                    <div className="level col-4">
                        level :
                    </div>
                    <div className="dropdown col-8">
                        <select ref={levelRef} className="btn btn-secondary col-8" name="level" id="level">
                            <option value="Collage Level">Collage Level</option>
                            <option value="Zonal Level">Zonal Level</option>
                            <option value="State Level">State Level</option>
                            <option value="National Level">National Level</option>
                            <option value="International Level">International Level</option>
                        </select>

                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        Are you winner?
                    </div>
                    <div className="dropdown col-5 ">
                        <select ref={winnerRef} className="btn btn-secondary col-5" name="y-n" id="y-n">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        Faculties
                    </div>
                    <div className="dropdown col-5 ">
                        <select onChange={e => setFaculty(e.target.value)} className="btn btn-secondary col-5" name="faculties" id="faculties">
                            {
                                facultiesData.map(data => {
                                    if (data.field === majorActivity){
                                        return <option value={data._id}>{data.name}</option>
                                    }
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-4 ">
                        Choose file :
                    </div>
                    <div className="col-8">
                        <div className="input-group ">
                            <input type="file" className="form-control col-8" id="inputGroupFile02" />
                            <label className="input-group-text " htmlFor="inputGroupFile02">Upload</label>
                        </div>
                    </div>
                </div>
                <center>
                    <button onClick={onSubmit} type="button" className="submit btn btn-primary mb-3 mt-4">Submit</button>
                </center>

            </div>
    
    )
}

