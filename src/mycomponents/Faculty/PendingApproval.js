import React from 'react';
//import './Achievement.css';

export default function PendingApproval() {
  return (
    <div className="PendingApproval-container px-1">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Achievement id</th>
            <th scope="col">Achievement title</th>
            <th scope="col">description</th>
            <th scope="col">Certificate</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>tyryyy</td>
            <td>You need a coffee as you are a coder</td>
            <td><button className="approve btn btn-sm btn-primary ">View</button></td>
            <td><button className="approve btn btn-sm btn-primary mx-2">Approve</button>
              <button className="approve btn btn-sm btn-primary ">Reject</button></td>
          </tr>

        </tbody>
      </table>
    </div>


  )
}
