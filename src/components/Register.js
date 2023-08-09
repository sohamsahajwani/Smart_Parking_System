import { Navigate , useNavigate } from "react-router-dom";

import React, {useState} from "react";

import Axios from "axios";

function Register(){
    const [Name, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [Vehicle_Type, setVehicleType] = useState("");
    const [Phone_number, setContact] = useState("");
    const [Vehicle_Number, setVehicleNo] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");

    let navigate = useNavigate();
  const routeChange = () =>{
    let path = '/';
    navigate(path);
  }


    const register = (x) => {
        x.preventDefault();
        Axios.post("http://localhost:3001/signup", {
          Name: Name,
          Password: Password,
          Vehicle_Type: Vehicle_Type,
          Phone_number: Phone_number,
          Vehicle_Number: Vehicle_Number,
        }).then((response) => {
          if(response.data.message || !Name || !Password){
            setRegisterStatus(response.data.message);
          }else{
            setRegisterStatus(<Navigate to="/" />);
          }
        })
      }


  return (
    <div className="container">
    <div className="loginForm">
        <form>
          <h4>Register Here</h4>
          <label htmlFor="username">Username*</label><br/>
          <input className="textInput" type="username" name="username" onChange={(x) => {setUsername(x.target.value)}} required /><br/>
          <label htmlFor="password">Password*</label><br/>
          <input className="textInput" type="password" name="password" onChange={(x) => {setPassword(x.target.value)}} required /><br/>
          <label htmlFor="vehicle_type">Type of Vehicle*</label><br/>
          <input className="textInput" type="text" name="vehicle_type" onChange={(x) => {setVehicleType(x.target.value)}} required /><br/>
          <label htmlFor="contact">Contact*</label><br/>
          <input className="textInput" type="contact" name="contact" onChange={(x) => {setContact(x.target.value)}} required /><br/>
          <label htmlFor="vehicle_no">Vehicle No*</label><br/>
          <input className="textInput" type="vehicle_no" name="vehicle_no" onChange={(x) => {setVehicleNo(x.target.value)}} required /><br/>

          {/* <label htmlFor="a">a</label>
          <input className="textInput" type="text" name="a" onChange={(x) => {setA(x.target.value)}} required />
          <label htmlFor="b">b</label>
          <input className="textInput" type="text" name="b" onChange={(x) => {setB(x.target.value)}} required />
          <label htmlFor="c">c</label>
          <input className="textInput" type="text" name="c" onChange={(x) => {setC(x.target.value)}} required />
          <label htmlFor="d">d</label>
          <input className="textInput" type="text" name="d" onChange={(x) => {setD(x.target.value)}} required />
          <label htmlFor="e">e</label>
          <input className="textInput" type="text" name="e" onChange={(x) => {setE(x.target.value)}} required /> */}
          <input className="button" type="submit" onClick={register} value="Create an account" /><br/>
          <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '0px'}}>{registerStatus}</h1>
        </form>
        {/* <button className="link-btn" onClick={routeChange}>Already have an account? Login here.</button> */}
        <div className="signup">
        <div className="siup"><h6>Already have an account?</h6></div>
        <div><a className="link-btn" onClick={routeChange}>Login here.</a></div>
        </div>
      </div>
      </div>
  )
}



export default Register
