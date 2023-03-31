const ActivitiesForm = {
    technicalQuize: () => {
        return(
            <>
                 <div className="col-4">
                    <label htmlFor="description" className="form-label">Points earned :</label>
                </div>
                <div className="col-8">
                    <input type="text" className="form-control col-8" id="description" rows="3"/>
                </div>
            </>
        )
    },
    workshop: () => {
        return (
            <>
                <div className="col-4">
                    <label htmlFor="description" className="form-label">Skills Required :</label>
                </div>
                <div className="col-8">
                    <input type="text" className="form-control col-8 " id="workshop" rows="3"/>
                </div>
            </>
        )
    },
    internship: () => {
        return(
            <>
                <div className="col-4">
                    <label htmlFor="description" className="form-label">Role</label>
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
                <div>
                    <div className="col-4">
                        <label htmlFor="description" className="form-label">Start date</label>
                    </div>
                    <div className="col-8">
                        <input type="date" className="form-control col-8 " id="sdate" rows="3"/>
                    </div>
                </div>
                <div>
                    <div className="col-4">
                        <label htmlFor="description" className="form-label">End date</label>
                    </div>
                    <div className="col-8">
                        <input type="date" className="form-control col-8" id="edate" rows="3"/>
                    </div>
                </div>
            </>
        )
    }
}

export default ActivitiesForm