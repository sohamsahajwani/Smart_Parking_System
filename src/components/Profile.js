import React from "react";
import Navbar from "./Navbar";
import "./Profile.css";
import {useNavigate} from 'react-router-dom'

const Profile = () => {

  const navigate = useNavigate();

  const navigateToAdminLogin = () => {
    navigate('/adminlogin');
  }

  return (
    <div className="adminprofile">
      <Navbar />
      <h1>Admin Profile</h1>
      <div className="ap">
        <div className="apl">
          <img src="soham.jpeg" />
          <h4>Soham Sahajwani</h4>
          <button class="button-3" onClick={navigateToAdminLogin}>Log out</button>
        </div>
        <div className="vl"></div>
        <div className="apr">
          <div className="aprlr">
            <div className="aprl">
              <h3>First Name</h3>
              <div className="zz">Soham</div>
              <h3>Birth Date</h3>
              <div className="zz">27-07-2002</div>
            </div>

            <div className="aprr">
              <h3>Last Name</h3>
              <div className="zz">Sahajwani</div>
              <h3>Gender</h3>
              <div className="zz">Male</div>
            </div>
          </div>
          <h3>Email</h3>
          <div className="zz">soham2707@gmail.com</div>
          <h3>Contact</h3>
          <div className="zz">9598605275</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
