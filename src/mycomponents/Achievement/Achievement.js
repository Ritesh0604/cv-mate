import React, { useContext, useEffect, useState } from 'react';
import './Achievement.css';
import api_store from '../../store/api_store';
import login_status from '../../store/login_status';

export default function Achivement(){
    const apiStoreCtx = useContext(api_store)
    const loginCtx = useContext(login_status)
    const [achievementsData,setAchievementData] = useState([])

    useEffect(() => {
      fetchAchievements()
    }, [setAchievementData])

    const fetchAchievements = async () => {
      const { enrollment_number } = loginCtx.userData
      const data = await apiStoreCtx.getAchievement({ enrollment_number: enrollment_number})
      setAchievementData(data)
    }


    return(
        <div className ="achievement-container">
        <table className="table">
            <thead>
              <tr>
                <th  scope="col">Achievement title</th>
                <th  scope="col">description</th>
                <th  scope="col">Faculty</th>
                <th  scope="col">Status</th>
                <th  scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                achievementsData.map(data => {
                    return(
                      <tr>
                        <td  scope="col">{data.data.title}</td>
                        <td  scope="col">{data.data.description}</td>
                        <td  scope="col">{data.data.faculty_name}</td>
                        <td  scope="col">{data.data.status}</td>
                        <td  scope="col"><button className='btn btn-primary'>View</button></td>
                      </tr>
                    )
                })
              }
              
            </tbody>
          </table>
        </div>
    
        
    )
}
