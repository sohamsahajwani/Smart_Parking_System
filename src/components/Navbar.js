import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <div className='header'>
          <Link to="/dashboard"><h2>Parking</h2></Link>
          <ul className='nav-menu'>
            <li><Link to="/dashboard">Dashboard</Link> </li>
            <li><Link to="/available">Available</Link> </li>
            <li><Link to="/users">Users</Link> </li>
            <li><Link to="/profile">Profile</Link> </li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar
