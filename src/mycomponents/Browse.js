import React from 'react';
import './Login.css';

export default function Browse(){
    return(
         
        <div className ="browse-container">
    <div className="row mt-3">
    
        <div className="col-4">
          <input type="email" className="form-control" id="inputEmail3" placeholder="E-mail"/>
        </div>
        
        <div className="col-6">
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
    </div>

</div>

    )
}
