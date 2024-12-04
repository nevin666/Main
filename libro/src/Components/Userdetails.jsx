import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button } from '@mui/material';
import Navbaradmin from './Navbaradmin';
const Userdetails = () => {
    const [rows,setRows]=useState([]);
    function handleDelete(a){
        axios.delete('http://localhost:3000/deleteuser/'+a).then((res)=>{
          alert("deleted")
          window.location.reload()
        }
        ).catch((error)=>{
          console.log('error:',error)
        }
        )
       }
       const handleAccept = (requestId) => {
        axios.post('http://localhost:3000/accept/'+requestId)
          .then((res) => {
            console.log('Rental request accepted:', response.data);
            setRentalRequests(rentalRequests.filter(request => request._id !== requestId));
            // Handle success (e.g., show a notification)
          })
          .catch(error => {
            console.error('Error accepting rental request:', error);
            // Handle error (e.g., show an error message)
          });
      };
      const getrequest=(val)=>{
        axios.get('http://localhost:3000/request/'+ val).then((res)=>{const requestId=res.data._id;
          handleAccept(requestId);
        }).catch((error)=>{console.log('error')})
      }
    useEffect(() => {
                  axios.get('http://localhost:3000/user').then((res)=>{
                    
                     setRows(res.data)
                  }).catch((error)=>{
                    console.error('error fetching user data:',error);
                  });
                },[])
  return (
    <div><Navbaradmin/>
    <TableContainer style={{marginTop:'100px' ,backgroundColor:'rgba(255, 255, 255, 0.8)'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Place</TableCell>
            <TableCell align="left">Age</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Education</TableCell>
            <TableCell align="left">Phone </TableCell>
            <TableCell align="left">Address </TableCell>

            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           
            {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="left">{row.Place}</TableCell>
              <TableCell align="left">{row.Age}</TableCell>
              <TableCell align="left">{row.Email}</TableCell>
              <TableCell align="left">{row.Education}</TableCell>
              <TableCell align="left">{row.Phone}</TableCell>
              <TableCell align="left">{row.Address}</TableCell>
              <TableCell align="left">
                                    <Button
                                        variant="contained"
                                        style={{backgroundColor:'black',color:'white'}}
                                        onClick={() => handleDelete(row._id)}
                                    >
                                        Block
                                    </Button>
                                </TableCell>
             <TableCell align="right">
                                    
                                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Userdetails