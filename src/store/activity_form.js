import React, { useState } from "react";

const ActivityFormContext = React.createContext({

})

const ActivityForm = (props) => {
    // technical quize
    const [p_earned, set_p_earned] = useState("")

    const getTechnicalExtra = () => { return { points_earned: p_earned }}

    // skills required
    const [skill, set_skill] = useState("")

    const getWorkshopExtra = () => { return {skill: skill}}

    // internship
    const [role, set_role] = useState("")

    const [sDate, setSDate] = useState("")
    const [eDate, setEDate] = useState("")

    const getInternshipExtra = () => { return { role: role, sDate: sDate, eDate: eDate }}


    const TechnicalQuize = () => {
        return(
            <>
                 <div className="col-4">
                    <label htmlFor="description" className="form-label">Points earned :</label>
                </div>
                <div className="col-8">
                    <input onChange={el => set_p_earned(el.target.value)} type="text" className="form-control col-8" id="p_earned" rows="3"/>
                </div>
            </>
        )
    }
    const Workshop = () => {
        return (
            <>
                <div className="col-4">
                    <label htmlFor="description" className="form-label">Skills Required :</label>
                </div>
                <div className="col-8">
                    <input onChange={el => set_skill(el.target.value)} type="text" className="form-control col-8 " id="workshop" rows="3"/>
                </div>
            </>
        )
    }

    const Internship = () => {
        return(
            <>
                <div className="col-4">
                    <label htmlFor="role" className="form-label">Role</label>
                </div>
                <div className="col-8">
                <select onChange={e => set_role(e.target.value)} className = "btn btn-secondary mx-4 col-8" name ="role" id="role"> 
                     <option value="department">Frontend</option>
                     <option value="enrollment">Backend</option>
                     <option value="Semester">Full-Stack</option>
                     <option value="Semester">Manager</option>
                     <option value="Semester">Sales Manager</option>
                </select>
                </div>
                <div>
                    <div className="col-4">
                        <label htmlFor="description" className="form-label">Start date</label>
                    </div>
                    <div className="col-8">
                        <input onChange={e => setSDate(e.target.value)} type="date" className="form-control col-8 " id="sdate" rows="3"/>
                    </div>
                </div>
                <div>
                    <div className="col-4">
                        <label htmlFor="description" className="form-label">End date</label>
                    </div>
                    <div className="col-8">
                        <input onChange={e => setEDate(e.target.value)} type="date" className="form-control col-8" id="edate" rows="3"/>
                    </div>
                </div>
            </>
        )
    }

    return(
        <ActivityFormContext.Provider value={{
            subActivityExtra: {                
                0: getTechnicalExtra(),
                1: getWorkshopExtra(),
                2: getInternshipExtra(),
            },
            TechnicalQuize: TechnicalQuize(),
            Workshop: Workshop(),
            Internship: Internship()
        }}>
            {props.children}
        </ActivityFormContext.Provider>
    )
}

export default ActivityFormContext 
export { ActivityForm }