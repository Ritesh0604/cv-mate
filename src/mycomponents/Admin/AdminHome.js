import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminHome.css';
import login_status from '../../store/login_status';

export default function AdminHome() {
    const [facultyData, addFacultyData] = useState([])
    const loginCtx = useContext(login_status)
    const navigate = useNavigate()

    useEffect(() => {
        if (loginCtx.isLoggedIn !== true || loginCtx.user !== "Admin")
            navigate('/adminLogin')        
        fetchFacultyData()
    }, [facultyData])

    const fetchFacultyData = async () => {
        const data = await fetch("http://localhost:5000/faculty/get_all")
        .then(response => {
            if (!response.ok)
                throw new Error("Cannot fetch faculty data")

            return response.json()
        })
        .catch(err => [
            // alert(err)
        ])

        addFacultyData(data)
    }

    const onDelete = async (e) => {
        console.log(e)
        await fetch("http://localhost:5000/faculty/delete", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: e})
        })
        .then(response => {
            if (!response.ok)
                throw new Error("Cannot fetch faculty data")

            return response.json()
        })
        .catch(err => [
            // alert(err)
        ])

        fetchFacultyData()
    }

    return (
        <div className="adminhome-container">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end pt-3">
                <Link to="http://localhost:3000/adminRegister"><button class="btn btn-danger" type="button" style={{background:"#90EE90"}}>Add</button></Link>
            </div>
            <div className="table-admin">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className=' px-5'>SNo.</th>
                        <th scope="col " className='px-5'>Faculty Name</th>
                        <th scope="col " className='px-5'>Faculty E-mail</th>
                        <th scope="col " className='px-5'>Domain</th>
                        <th scope="col " className='px-5'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            facultyData.map(data => {
                                return (
                                    <tr>
                                    <td scope="row">1</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.field}</td>
                                    <td><button onClick={(e) => onDelete(data.email)}  className="btn btn-sm" style={{background:"red",color:"white"}}>Delete</button></td>
                                    </tr>

                                )
                            })
                        }

                </tbody>
            </table>
        </div>
        </div>
       


    )
}
