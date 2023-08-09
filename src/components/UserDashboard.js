import React from 'react'
import { Navigate , useNavigate } from "react-router-dom";

const UserDashboard = () => {

  let navigate = useNavigate();
  const routeChange = () =>{
    let path = '/userprofile';
    navigate(path);
  }

  return (
    <div>
      <h1>User Dashboard</h1>
      <div className="userd"><a className="link-btn" onClick={routeChange}>User Profile</a></div>
    </div>
  )
}

export default UserDashboard
