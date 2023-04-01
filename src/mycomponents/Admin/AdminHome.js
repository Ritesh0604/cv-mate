import React from 'react';
import { Link} from 'react-router-dom';
import './AdminHome.css';

export default function AdminHome() {
    return (
        <div className="adminhome-container col-9 px-3">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end pt-3">
                <Link to="http://localhost:3000/adminRegister"><button class="btn btn-danger" type="button" style={{background:"#90EE90"}}>Add</button></Link>
            </div>
            <table className="table " style={{width:"100%"}}>
                <thead>
                    <tr>
                        <th scope="col">SNo.</th>
                        <th scope="col">Faculty Name</th>
                        <th scope="col">Faculty E-mail</th>
                        <th scope="col">Domain</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>jignesh vaniya</td>
                        <td>jv@gmail.com</td>
                        <td>Technical</td>
                        <td><button className="btn btn-sm" style={{background:"red",color:"white"}}>Delete</button></td>
                    </tr>

                </tbody>
            </table>
        </div>


    )
}
