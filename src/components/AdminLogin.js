import React, {useState} from "react";
// import "./Login.css"



import Axios from "axios";
import { Navigate , useNavigate } from "react-router-dom";


function AdminLogin(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");



  let navigate = useNavigate();
  const routeChange = () =>{
    let path = '/';
    navigate(path);
  }
  

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/adminlogin", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message);
      }else{
        setLoginStatus(<Navigate to="/dashboard" />);
     }
    })
  }

 
  return(

    <div className="container">
      <div className="loginForm">
        <form>
          <h4>ADMIN LOG IN</h4>
          <label htmlFor="username">Email</label><br/>
          <input className="textInput" type="text" name="username" onChange={(e) => {setUsername(e.target.value)}} required /><br/>
          <label htmlFor="password">Password</label><br/>
          <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} required /><br/>
          <input className="button" type="submit" onClick={login} value="Login" /><br/>
          <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '0px'}}>{loginStatus}</h1>
        </form>
        {/* <div className="siup"><h6>Don't have an account?</h6><a className="link-btn" onClick={routeChange}>Signup here.</a></div> */}
        <div className="signup">
        <div className="siup"><h6>Not an admin?</h6></div>
        <div><a className="link-btn" onClick={routeChange}>Login here.</a></div>
        </div>
      </div>
      </div>
  );
  

}
export default AdminLogin;




