import React, { useEffect, useState } from "react";
import './Allbooks.css';
import Navbaradmin from "./Navbaradmin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";


const Allbooks= () => {
    
  const [rows,setRows]=useState([])
  var navigate=useNavigate()
  
  function deletevalue(a){
  axios.delete('http://localhost:3000/deletebook/'+a).then((res)=>{
    alert('data deleted')
    window.location.reload()
  }).catch((error)=>{console.log(error)})
}

function updatevalue(item){
  navigate('/add',{state:{book:item}})
}
function display(val){
  navigate('/single',{state:{val}})
}

useEffect(()=>{
  axios.get('http://localhost:3000/books').then((res)=>{
  setRows(res.data);
}).catch((error)=>{
  console.log('error')
  })},[]);
  return (
    <><Navbaradmin/>
     <Grid container spacing={2} >

    {rows.map((item)=>(
    <div className="books-page">
       

      <div className="book" >
        <div className="book-card">
        
          <img src={item.Image}  onClick={()=>{display(item)}}></img>
          <p className="bookcard-title">{item.Name}</p>
          <p className="bookcard-author">{item.Author}</p>
          
          <div className="bookcard-emptybox"></div>
          <div><Button size="small" onClick={()=>{updatevalue(item)}} variant="outlined" style={{marginRight:'5px',color:'white',backgroundColor:'rgba(0,0,0,1)'}}>UPDATE</Button>
      <Button size="small" onClick={()=>{deletevalue(item._id)}}variant="outlined" style={{marginLeft:'5px',color:'white',backgroundColor:'rgba(0,0,0,1)'}}>DELETE</Button></div> 
      </div>
      
      </div>
      
    </div>))} </Grid></>
  );
}

export default Allbooks;
