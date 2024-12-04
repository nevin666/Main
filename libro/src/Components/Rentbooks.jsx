import React, { useEffect, useState } from "react";
import './Allbooks.css';

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import Navbaruser from "./Navbaruser";


const Rentbooks= () => {
    
  const [rows,setRows]=useState([])
  var navigate=useNavigate()
  
  
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
    <><Navbaruser/>
     <Grid container spacing={2} >

    {rows.map((item)=>(
    <div className="books-page">
       

      <div className="book" >
        <div className="book-card">
        
          <img src={item.Image} onClick={()=>{display(item)}}></img>
          <p className="bookcard-title" ON>{item.Name}</p>
          <p className="bookcard-author">{item.Author}</p>
        
         </div>
    </div>
      
    </div>))} </Grid></>
  );
}

export default Rentbooks;
