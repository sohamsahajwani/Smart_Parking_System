import { React, useState, useEffect } from 'react';
import axios from 'axios';
import "./UserProfile.css"
import {useNavigate} from 'react-router-dom'
 
function App() {

  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/about');
  }

  const navigateToSlot = () => {
    navigate('/slot');
  }

  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3001/userprofile')
      .then(res => {
        setData(res.data);
        
      })
      .catch(err => {
        console.log(err);
      });
  }, []);



  return (
    
      <div className='userpro'>
        <h1>Your Profile</h1>
        {data.map((item) => {
            return (
      // <h1>Your Profile</h1>
     
      <div className='upro'>
      <div className='userprol'>
      
          
            <div>
              <h5>Username :- {item.Name}</h5>
              <h5>Vehicle Type :- {item.Vehicle_Type}</h5>
              <h5>Contact :- {item.Phone_number}</h5>
              <h5>Vehicle No :- {item.Vehicle_Number}</h5>
              </div>
            
        
      
      </div>
        <div className='userpror'>
          <img src='q1.png' />
          <div onClick={navigateToSlot}><input className="qr-button" type="submit" value="Know Your Slot" /></div>
          <div onClick={navigateToAbout}><input className="qr-button" type="submit" value="Know More" /></div>
        </div>
        </div>
        ) 
      })}
      </div>
    
  );
}

export default App;
