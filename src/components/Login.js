import React, {useState} from "react";
import "./Login.css"



import Axios from "axios";
import { Navigate , useNavigate } from "react-router-dom";


function Login(){
  const [Name, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");



  let navigate = useNavigate();
  const routeChange = () =>{
    let path = '/register';
    navigate(path);
  }

  let ngate = useNavigate();
  const rteChange = () =>{
    let path = '/adminlogin';
    ngate(path);
  }
  

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      Name: Name,
      Password: Password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message);
      }else{
        setLoginStatus(<Navigate to="/userprofile" />);
     }
    })
  }

 
  return(

      <div className="loginForm">
        <form>
          <h4>LOG IN</h4>
          <label htmlFor="username">Username</label><br/>
          <input className="textInput" type="text" name="username" onChange={(e) => {setUsername(e.target.value)}} required /><br/>
          <label htmlFor="password">Password</label><br/>
          <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} required /><br/>
          <input className="button" type="submit" onClick={login} value="Login" /><br/>
          <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '0px'}}>{loginStatus}</h1>
        </form>
        <div className="signup">
        <div className="siup"><h6>Don't have an account?</h6></div>
        <div><a className="link-btn" onClick={routeChange}>Signup here.</a></div>
        </div>
        <input className="admin-button" type="submit" onClick={rteChange} value="Admin Login" />

      </div>
  );
  

}
export default Login;





