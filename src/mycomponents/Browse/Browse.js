import React from 'react';
import './Browse.css';

export default function Browse(){
    return(
         
        <div className ="browse-container">
    <div className="row ">
    
        <div className="col-4">
          <input type="email" className="form-control" id="inputEmail3" placeholder="Enrollment No."/>
        </div>
        
        <div className="col-6">
        <form className="d-flex" role="search">
          
          
            <select className = "btn btn-secondary mx-4" name ="level" id="level"> 
                     
                     <option value="department">department</option>
                     <select className = "btn btn-secondary mx-4" name ="level" id="level"> 
                     <option value="IT">IT</option>
                     <option value="Computer">Computer</option>
                     </select>
                     <option value="enrollment">enrollment</option>
                     <option value="Semester">Semester</option>
                      
                    </select>

            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
    </div>

</div>

    )
}
