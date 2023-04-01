import { useRef } from "react"

const ActivitiesForm = () => {
    // technical quize
    const p_earnedRef = useRef()

    // skills required
    const skillRef = useRef()


    const TechnicalQuize = () => {
        return(
            <>
                 <div className="col-4">
                    <label htmlFor="description" className="form-label">Points earned :</label>
                </div>
                <div className="col-8">
                    <input ref={p_earnedRef} type="text" className="form-control col-8" id="p_earned" rows="3"/>
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
                    <input ref={skillRef} type="text" className="form-control col-8 " id="workshop" rows="3"/>
                </div>
            </>
        )
    }
    const Internship = () => {
        return(
            <>
            <div className="row">
                <div className="col-4">
                    <label htmlFor="description" className="form-label  ">Role</label>
                </div>
                <div className="col-8">
                <select className = "btn btn-secondary mx-4 col-8" name ="level" id="level"> 
                     <option value="department">Frontend</option>
                     <option value="enrollment">Backend</option>
                     <option value="Semester">Full-Stack</option>
                     <option value="Semester">Manager</option>
                     <option value="Semester">Sales Manager</option>
                </select>
                </div>
                </div>

                
               
                <div className="input-group row mt-3">
                    <div className="col-4 ">
                        Start date:
                    </div>
                    <div className="col-6">
                    <div className="form-floating mt-2 ">
                        <input type="date" className="form-control col-6 "name="s-date" id="date"/>
                        <label htmlFor="s-date"></label>
                        
                    </div>
                    </div>
                </div>

                
                <div className="input-group row">
                
                    <div className="col-4">
                    
                        End date:
                        </div>
                        <div className="col-6">
                    <div className="form-floating mt-2 ">
                        <input type="date" className="form-control col-6" id="date" name="ed-date"/>
                        <label htmlFor="ed-date"></label>
                    
                    </div>
                    
                </div>
                </div>
                
            </>
        )
    }
}

export default ActivitiesForm