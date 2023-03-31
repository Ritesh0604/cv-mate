import React from 'react';
import './ApprovedApproval.css';

export default function ApprovedApproval(){
    return(
        <div className ="ApprovedApproval-container px-1">
        <table className="table">
            <thead>
              <tr>
                <th scope="col">Achievement id</th>
                <th scope="col">Achievement title</th>
                <th scope="col">description</th>
                <th scope="col">Certificate</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>tyryyy</td>
                <td>You need a coffee as you are a coder</td>
                <td><button className="approve btn btn-sm btn-primary ">View</button></td>
                <td><label>Pending/Rejected</label></td>
              </tr>
              
            </tbody>
          </table>
        </div>
    
        
    )
}
