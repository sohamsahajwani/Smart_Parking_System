import { React, useState, useEffect } from 'react';
import axios from 'axios';
import "./Dashboard.css"
import Navbar from './Navbar';

 
function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3001/users')
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
      <h1>Registered Users :-</h1>
      <div className='tbl'>
      <table>
            <tr>
              <th className='b'>Username</th>
              <th className='b'>Vehicle_Type(2/4)</th>
              <th className='b'>Vehicle_No</th>
              <th className='b'>Contact</th>
            </tr>

          
          {data.map((item) => {
            return (
            <tr>
              <td className='c'>{item.Name}</td>
              <td className='c'>{item.Vehicle_Type}</td>
              <td className='c'>{item.Vehicle_Number}</td>
              <td className='c'>{item.Phone_number}</td>
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
