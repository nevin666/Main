import { useEffect, useState } from 'react';
import { TextField, Button, Container, Typography, InputAdornment, Card } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import PasswordIcon from '@mui/icons-material/Password';
import axios from 'axios';
function Login({user}) {
  const [form,setForm]=useState({
    Name:user ? user.Name ||'':'',
    Place:user ? user.Place ||'':'',
    Age:user ? user.Age ||'':'',
    Email:user ? user.Email ||'':'',
    Education:user ? user.Education ||'':'',
    Phone:user ? user.Phone ||'':'',
    Address:user ? user.Address ||'':'',
    Password:user ? user.password ||'':''
   
  })
  

const location=useLocation();
const navigate=useNavigate();
useEffect(()=>{if(location.state ){
  setForm({...form,  
    Name:location.state.val?.Name,
    Place:location.state.val?.Place,
    Age:location.state.val?.Age,
  Email:location.state.val?.Email,
  Phone:location.state.val?.Phone,
  Address:location.state.val?.Address,
    Education:location.state.val?.Education
  })
}
},[location.state]);  
const handleSubmit = async(e) => {
  e.preventDefault();
  try{const response=await axios.post('http://localhost:3000/adduser',form);
  
   
    profile(form)
  }
  catch(error){
    console.log('error')
  }
  // Handle login logic
};


function valueCap(e){
       
  setForm({...form,[e.target.name]:e.target.value});}

  const valueadd=()=>{
  //   const name=document.getElementById('person.name')?.value;
  //   axios.post('http://localhost:3000/addmovie',{name}).then((res)=>{if(res.data.valid){console.log('Values added succesfully');}
  // else{alert('invalid')}}).catch((error)=>console.log('error'))
    
        
              axios.post('http://localhost:3000/adduser',form).then((res)=>{
                if(location.state&&location.state.val){
                profile(location.state.val?._id)
                }else{console.log("null");}
              }).catch((error)=>{console.log(error)})
             
            }
           
 function profile(val){
  
  navigate('/profile',{state:{val}})
 }
 
 





  return (
<div>
   
    <Card style={{marginTop:'70px'}}>
    <Container maxWidth="xs">
   
    <Typography variant="h2" sx={{ mb: 3 }} style={{color:"#954535"}}>Signup</Typography>
     
      <form onSubmit={handleSubmit}>
      <TextField label="Name" fullWidth required sx={{ mb: 2 }} value={form.Name} name="Name" onChange={valueCap} variant='standard' style={{borderColor:'black'}}  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
         />
      <TextField label="Place" fullWidth required sx={{ mb: 2 }} value={form.Place} name="Place" onChange={valueCap}variant='standard' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FmdGoodIcon />
            </InputAdornment> ),}}/>
      <TextField label="Age" fullWidth required sx={{ mb: 2 }} value={form.Age} name="Age" onChange={valueCap} variant='standard' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CalendarMonthIcon />
            </InputAdornment>
          ),
        }}/>
      <TextField label="Email" fullWidth required sx={{ mb: 2 }} value={form.Email} name="Email" onChange={valueCap} variant='standard' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }} />
      <TextField label="Education" fullWidth required sx={{ mb: 2 }} value={form.Education}name="Education" onChange={valueCap} variant='standard' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SchoolIcon />
            </InputAdornment>
          ),
        }} />
      <TextField label="Phone" fullWidth required sx={{ mb: 2 }} value={form.Phone} name="Phone" onChange={valueCap} variant='standard' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),}} />
      <TextField label="Address" fullWidth required sx={{ mb: 2 }} value={form.Address} name="Address" onChange={valueCap} variant='standard' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HomeIcon />
            </InputAdornment>
          ),}}/>
      <TextField label="Password" type="password" fullWidth required sx={{ mb: 2 }} value={form.Password}name="Password" onChange={valueCap} variant='standard' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PasswordIcon />
            </InputAdornment>
          ),}}/>
      
        <Button type="submit" variant="contained" color="primary" style={{backgroundColor:'#954535'}}>SUBMIT</Button>
      </form>
    </Container> <br/>
    </Card></div>
  );
}

    
 
export default Login