import React, { useContext, useEffect, useState } from "react";
import './Allbooks.css';
import Navbaruser from "./Navbaruser";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import { UserContext } from "../context/UserContext";

const Activity = () => {
  const [rows, setRows] = useState([]);
  const { username } = useContext(UserContext);

  useEffect(() => {
    axios.get('http://localhost:3000/rental')
      .then((response) => {
        const users = response.data;
        console.log(response.data);
        console.log('name:',username)
        // Filter out the rental requests that belong to the current user
        const userRequests = users.filter(user => user.Email === username);
        setRows(userRequests);
      })
      .catch((error) => {
        console.log('Error fetching rental data:', error);
      });
  }, [username]);

  return (
    <>
      <Navbaruser />
      <div>
        <Card style={{marginTop:'50px',width:'500px'}}>
          <div>
            {rows.length === 0 ? (
              <p>No rental requests found.</p>
            ) : (
              rows.map((item, index) => (
                <div key={index}>
                  <p>{item.Book} </p>
                  <button>{item.Status}</button>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

export default Activity;
