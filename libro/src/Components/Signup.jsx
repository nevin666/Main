import { Button, Switch } from '@mui/material'
import React, { useEffect, useState } from 'react'
import"./Signup.css"
import "./Navbar.jsx"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar.jsx'

const Signup = ({user}) => {

    const [isStudent, setIsStudent] = useState(true)
    const [admissionId, setAdmissionId] = useState({
        Email:user ? user.Email || '':'',
 } )
    const [employeeId,setEmployeeId] = useState()
    const [password, setPassword] = useState({
        Passsword:user?user.Password||'':'',
    })
    const [error, setError] = useState("")
    const navigate=useNavigate();
    const location=useLocation();
    useEffect(()=>{
        if(location.state &&location.state.val){
          setAdmissionId(location.state.val.Email); 
          setPassword(location.state.val.Password);
          }},[location]);
        
             
      function handlelogin(){
        axios.get('http://localhost:3000/user')
          .then((response) => {
            const users = response.data;
            console.log(response.data);
            const validuser = users.find((user) =>user.Email === admissionId&& user.Password === password);
            if (validuser) {
              alert('logged in successfully');
              profile(validuser);
            } else {
              alert('invalid');
            }
          }).catch((error) => {
            console.log('error');
          });
      };
    
      function profile(val){
        navigate('/profile', {state: {val} });
      };
     function adminlogin(){
      if(employeeId ==='1234'&& password ==='admin123'){
        console.log('login successfull');
        navigate('/books');}
        else{alert('invalid')}

      }
     
  return (
  
    <>
    <Navbar/>
    <div className='signin-container'>
            <div className="signin-card">
                <form >
                    <h2 style={{color:'black'}} className="signin-title"> Log in</h2>
                    <p className="line"></p>
                    <div className="persontype-question">
                        <p style={{color:'black'}}>Are you a Staff member ?</p>
                        <Switch
                            onChange={() => setIsStudent(!isStudent)}
                            color="primary"
                        />
                    </div>
                    <div className="error-message"><p>{error}</p></div>
                    <div className="signin-fields">
                        <label style={{color:'black'}} htmlFor={isStudent?"Email Id":"employeeId"}><b>{isStudent?"Email Id":"Employee ID"}</b> </label>
                        <input  className='signin-textbox' type="text" placeholder={isStudent?"Enter Email Id":"Enter Employee ID" } name={isStudent?"admissionId":"employeeId"} required onChange={(e) => { isStudent?setAdmissionId(e.target.value):setEmployeeId(e.target.value) }}/>
                        <label style={{color:'black'}} htmlFor="password"><b>Password</b></label>
                        <input className='signin-textbox' type="password" minLength='6' placeholder="Enter Password" name="psw" required onChange={(e) => { setPassword(e.target.value) }} />
                        </div>{ isStudent ?
                 <Button className="signin-button" onClick={handlelogin}>Login</Button>:<Button className="signin-button" onClick={adminlogin}>Login</Button>}
                  
                    
                    <div className='signup-option'>
                    
                </div>
                </form>
                <p style={{color:'black'}} className="signup-question">Don't have an account? </p>
                <Link to={'/login'}>
                <Button style={{marginBottom:'5px',marginTop:'0px'}}>signup</Button></Link>
                
            </div>
        </div> 
        </>
  )
}

export default Signup