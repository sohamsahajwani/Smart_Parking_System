import { React, useState, useEffect } from 'react';
import axios from 'axios';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Dashboard.css"
import Navbar from './Navbar';
// import details from "../components/Details.js"
// import "./Dashboard.css";

// import { useNavigate } from "react-router-dom";

// var a=38;

 
function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3001/data')
      .then(res => {
        setData(res.data);
        
      })
      .catch(err => {
        console.log(err);
      });
  }, []);



  return (
    <div className='dash'>
       <Navbar/>
      <h1>Currently Parked Vehicles :-</h1>
      {/* <div className="vd-btn"><a className="link-btn" onClick={rteChange}>Profile</a></div> */}
      <div className='tbl'>
      <table>
            <tr>
              <th className='b'>Name</th>
              <th className='b'>Contact</th>
              <th className='b'>Vehicle_Type(2/4)</th>
              <th className='b'>Vehicle_No</th>
              <th className='b'>Date</th>
              <th className='b'>Time</th>
            </tr>

          
          {data.map((item) => {
            return (
            <tr>
              <td className='c'>{item.name}</td>
              <td className='c'>{item.contact}</td>
              <td className='c'>{item.vehicle_type}</td>
              <td className='c'>{item.vehicle_no}</td>
              <td className='c'>{item.date}</td>
              <td className='c'>{item.time}</td>
            </tr>
            ) 
            })}
        
      </table>
      </div>
    </div>
  );
}

export default App;
// export {a};
