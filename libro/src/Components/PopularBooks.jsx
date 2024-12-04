import React, { useEffect, useState } from "react";
import "./PopularBooks.css";
import Navbar from "./Navbar";
import axios from "axios";


function PopularBooks() {
  const [rows,setRows]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/books').then((res)=>{
    setRows(res.data);
  }).catch((error)=>{
    console.log('error')
    })},[]);

  return (
    <><Navbar/>
    <div className="popularbooks-container">
      <h className="popularbooks-title">Popular Books</h>
      <div className="popularbooks">
        <div className="popularbook-images">
          {rows.map((item)=>
          <img
            className="popular-book"
            src={item.Image}
            alt=""
          ></img>)
          }
        </div>
        
        </div>
      
    </div></>
  );
}

export default PopularBooks;
