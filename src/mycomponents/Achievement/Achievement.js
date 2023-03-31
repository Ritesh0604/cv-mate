import React from 'react';
import './Achievement.css';

export default function Achivement(){
    return(
        <div className ="Achievement-container">
        <table className="table">
            <thead>
              <tr>
                <th scope="col">SNo.</th>
                <th scope="col">Achievement title</th>
                <th scope="col">description</th>
                <th scope="col">Approved by</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>tyryyy</td>
                <td>You need a coffee as you are a coder</td>
                <td>jignesh vania</td>
                <td><button className="view btn btn-sm btn-primary ">View</button></td>
              </tr>
              
            </tbody>
          </table>
        </div>
    
        
    )
}
