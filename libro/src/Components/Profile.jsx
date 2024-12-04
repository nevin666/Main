import React, { useContext, useEffect, useState } from 'react'
import Navbaruser from './Navbaruser'
import axios from "axios";
import { Card, Divider, Typography } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Profile = ({user}) => {
  const [form,setForm] = useState({
    Name: user ? user.Name || '' : '',
    Age: user ? user.Age || '' : '',
    Email: user? user.Email || '' : '',
    Phone: user ? user.Phone|| '' : '',
    Place: user ? user.Place || '' : '',
    Education: user ? user.Education || '' : '',
    Address: user? user.Address || '' : '',


  });
  const location = useLocation();
  const {setUsername}=useContext(UserContext);
  
  useEffect(()=>{if(location.state!=null ){
    setForm({...form,  
      Name:location.state.val?.Name,
      Place:location.state.val?.Place,
      Age:location.state.val?.Age,
    Email:location.state.val?.Email,
    Phone:location.state.val?.Phone,
    Address:location.state.val?.Address,
      Education:location.state.val?.Education
    });setUsername(location.state.val.Email);
}
},[location.state]);      
  return (
    <>
    <Navbaruser/>
    <Card style={{width:'100vh',height:'maxcontent'}}>
      
          <div style={{marginRight:5}}>
            <br></br>
          <div style={{display:'flex',alignItems:'center',alignContent:'center'}}>
            
            <AccountCircle  style={{marginRight:5,width:90,height:150}} /><span><p style={{fontWeight:'bold',display:'inline'}}>{form.Name}</p><br></br>
            {form.Email}<br></br>{form.Phone}
            </span>
           
            </div>
            <Divider/>
            <div >
              <p style={{display:'inline'}}>Age:</p><p style={{fontWeight:'bold',display:'inline'}}> {form.Age}</p>
            </div>
            <div >
              <p style={{display:'inline'}}>Place:</p><p style={{fontWeight:'bold',display:'inline'}}> {form.Place}</p>
            </div>
            
            <div >
              <p style={{display:'inline'}}>Education:</p><p style={{fontWeight:'bold',display:'inline'}}> {form.Education}</p>
            </div>
           
            <div >
              <p style={{display:'inline'}}>Address:</p><p style={{fontWeight:'bold',display:'inline'}}> {form.Address}</p>
            </div>
          
            </div>


        
    </Card>
  
    </>
  )
}

export default Profile