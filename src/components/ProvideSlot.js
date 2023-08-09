import { React, useState, useEffect } from 'react';
import axios from 'axios';


const ProvideSlot = () => {

    const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3001/userprofiles')
      .then(res => {
        setData(res.data);
        
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {data.map((item) => {
            return (
      
            <div>
              <h1>Your Slot No :- {item.slot_no}</h1>
            </div>
        ) 
      })}
    </div>
  )
}

export default ProvideSlot
