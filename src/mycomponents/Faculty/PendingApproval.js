import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
//import './Achievement.css';

export default function PendingApproval() {
  const [approval, addApproval] = useState([])
  const navigate = useNavigate()

  const fetchApproval = async () => {
    const data = await fetch("http://localhost:5000/faculty/get_details",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ id: localStorage.getItem("id")})
    })
    .then(res => {
      return res.json()
    })
    .catch(err => {
      localStorage.removeItem("id")
      navigate('/login')
    })

    addApproval(data)
  }

  useEffect(() => {
    fetchApproval()
  }, [addApproval])

  console.log(approval)

  return (
    <div className="PendingApproval-container px-1">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Achievement title</th>
            <th scope="col">description</th>
            <th scope="col">Certificate</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            approval.map(a => {
              return (
                <tr>
                  <td>{a.title}</td>
                  <td>{a.description}</td>
                  <td><button className="approve btn btn-sm btn-primary ">View</button></td>
                  <td><button className="approve btn btn-sm btn-primary mx-2">Approve</button>
                    <button className="approve btn btn-sm btn-primary ">Reject</button></td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>


  )
}
