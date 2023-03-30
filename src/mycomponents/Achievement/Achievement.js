import React from 'react';
import './Achievement.css';

export default function Achivement(){
    return(
        <div className ="achievement-container">
        <table className="table">
            <thead>
              <tr>
                <th scope="col">SNo.</th>
                <th scope="col">Achivement title</th>
                <th scope="col">discription</th>
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
                <td><button className="approve btn btn-sm btn-primary ">Approve</button></td>
              </tr>
              
            </tbody>
          </table>
        </div>
    
        
    )
}
