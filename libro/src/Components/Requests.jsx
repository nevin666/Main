import React, { useEffect, useState } from "react";
import './Allbooks.css';
import Navbaradmin from "./Navbaradmin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Grid } from "@mui/material";


const Requests= () => {
    
  const [rows,setRows]=useState([])
  var navigate=useNavigate()
  
  function deletevalue(a){
  axios.delete('http://localhost:3000/deleterequest/'+a).then((res)=>{
    alert('data deleted')
    window.location.reload()
  }).catch((error)=>{console.log(error)})
}
function rejectvalue(val){

  axios.put('http://localhost:3000/rejectrequest/'+val).then((res)=>{
    alert('Rejected')
    setRows(prevRows => prevRows.filter(item => item._id !== val));

    // deletevalue(val)
  }).catch((error)=>{console.log(error)})
}
function updatevalue(val){

  axios.put('http://localhost:3000/editrequest/'+val).then((res)=>{
    alert('Accepted')
   setRows(prevRows => prevRows.filter(item => item._id !== val));
   
    // deletevalue(val)
  }).catch((error)=>{console.log(error)})
}

function display(val){
  navigate('/single',{state:{val}})
}

useEffect(()=>{
  axios.get('http://localhost:3000/rental').then((res)=>{
 const filteredData = res.data.filter(item => item.status !== 'Accepted' && item.Status !== 'Rejected');
        setRows(filteredData);
}).catch((error)=>{
  console.log('error')
  })},[]);
  return (
    <><Navbaradmin/>
    <Card style={{marginTop:'100px'}}>
    {rows.map((item)=>(
     
     <div>
      
     <div>
      
        <p>{item.Email} has sent request to rent {item.Book}</p> 
       
    <div><Button size="small" onClick={()=>{updatevalue(item._id)}} variant="outlined" style={{marginRight:'5px'}}>Accept</Button>
      <Button size="small" onClick={()=>{rejectvalue(item._id)}}variant="outlined">REJECT</Button></div> </div></div>
     ))}</Card> </>
  );
}

export default Requests;
