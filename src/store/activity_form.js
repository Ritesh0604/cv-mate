import React, { useState } from "react";

const ActivityFormContext = React.createContext({

})

const ActivityForm = (props) => {
    // technical quize
    const [p_earned, set_p_earned] = useState("")

    // skills required
    const [skill, set_skill] = useState("")


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

    return(
        <ActivityFormContext.Provider value={{
            p_earnedRef: p_earned,
            skillRef: skill,
            TechnicalQuize: TechnicalQuize(),
            Workshop: Workshop()
        }}>
            {props.children}
        </ActivityFormContext.Provider>
    )
}

export default ActivityFormContext 
export { ActivityForm }