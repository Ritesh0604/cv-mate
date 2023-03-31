import React from 'react';
import { Link} from 'react-router-dom';
import './AdminHome.css';

export default function AdminHome() {
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
                    <tr>
                        <th scope="row" className='px-5'>1</th>
                        <td className='px-5'>jignesh vaniya</td>
                        <td className='px-5'>jv@gmail.com</td>
                        <td className='px-5'>Technical</td>
                        <td className='px-5'><button className="btn btn-sm" style={{background:"red",color:"white"}}>Delete</button></td>
                    </tr>

                </tbody>
            </table>
        </div>
        </div>
       


    )
}
