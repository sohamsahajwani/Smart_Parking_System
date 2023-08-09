import { React, useState, useEffect } from 'react';
import axios from 'axios';
import "./Available.css"
import Navbar from './Navbar';
import { PieChart, Pie, Tooltip } from "recharts";
 
function App() {
  const [data, setData] = useState([]);
  var a = 0;
  var b = 0;
  // a = rcount[0];
  
  useEffect(() => {
    axios.get('http://localhost:3001/row')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  {data.map((item) => {
    b = item.rcount;
    })}

    a= 5-b;

  const pie = [
    { name: "Parked", value: b },
    { name: "Available", value: a },
  ];


  return (
    <div className='count'>
       <Navbar/>
      {/* <div className='count'>            
          {data.map((item) => {
            return (
              <h2 className='count'>{item.rcount}</h2>
            ) 
            })}
      </div> */}
      <div className='alr'>
      <div className='al'>
          <h3>Parked : {b}</h3>
          <h3>Available : {a}</h3>
      </div>
      <div className='ar'>
      <PieChart width={400} height={400}>
        <Pie
          dataKey = "value"
          data={pie}
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        />
        <Tooltip/>
      </PieChart>
      </div>
      
      </div>
    </div>
  );
}

export default App;
