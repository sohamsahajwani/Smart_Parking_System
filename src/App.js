import './App.css';
import Login from './components/Login';
import { Route , Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Available from './components/Available';
import About from './components/About';
import Profile from './components/Profile';
import Register from './components/Register';
import UserDashboard from './components/UserDashboard';
import AdminLogin from './components/AdminLogin';
import UserProfile from './components/UserProfile';
import Slot from './components/Slot';
import Users from './components/Users';


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/adminlogin" element={<AdminLogin/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/available" element={<Available/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/userprofile" element={<UserProfile/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/userdashboard" element={<UserDashboard/>}/>
      <Route path="/slot" element={<Slot/>}/>
      <Route path="/users" element={<Users/>}/>
    </Routes>
    </div>
  );
}

export default App;
