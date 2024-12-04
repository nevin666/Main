import React, { useEffect, useState, useContext } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Alert } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Navbaruser from './Navbaruser';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const Singlepage = ({ book }) => {
  const { username } = useContext(UserContext);
  const [form, setForm] = useState({
    _id: book ? book._id || '' : '',
    Name: book ? book.Name || '' : '',
    Image: book ? book.Image || '' : '',
    Author: book ? book.Author || '' : '',
    Description: book ? book.Description || '' : '',
  });

  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.val) {
      setForm({
        _id: location.state.val._id,
        Name: location.state.val.Name,
        Image: location.state.val.Image,
        Author: location.state.val.Author,
        Description: location.state.val.Description,
      });
    }
  }, [location.state]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleRent = async (bookName) => {
    try {
      const status = 'pending';
      const response = await axios.post('http://localhost:3000/addrequest', {
        Email: username,
        Book: bookName,
        Status: status,
      });
      console.log('Rental request created:', response.data);
      setSnackbarMessage('Rental request sent successfully!');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error creating rental request:', error);
      setSnackbarMessage('Error sending rental request. Please try again.');
      setSnackbarOpen(true);
      setError(error); // Set error state to handle it appropriately
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRent(form.Name);
    handleClose();
  };

  return (
    <>
      <Navbaruser />
      <Box sx={{ marginTop: '64px' }}> {/* Adjust this value based on the height of Navbaruser */}
        <Card sx={{ 
          display: 'flex', 
          padding: 2, 
          opacity: 0.8, 
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          backdropFilter: 'blur(10px)', 
          boxShadow: 3 
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <CardMedia
                component="img"
                sx={{ width: '100%', height: 'auto' }}
                image={form.Image}
                alt={form.Name}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <CardContent>
                <Typography component="h1" variant="h4" gutterBottom>
                  {form.Name}
                </Typography>
                <Typography component="h2" variant="h6" gutterBottom>
                  {form.Author}
                </Typography>
                <Typography variant="body1" paragraph>
                  {form.Description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClickOpen}
                  sx={{ marginTop: 2 }}
                >
                  Rent
                </Button>
              </CardContent>
            </Grid>
          </Grid>
        </Card>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Rent {form.Name}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to rent {form.Name}? We will send updates occasionally.
            </DialogContentText>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <DialogActions>
                <Button onClick={handleClose} color="secondary">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </DialogActions>
            </Box>
          </DialogContent>
        </Dialog>

        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <Alert onClose={handleSnackbarClose} severity={error ? 'error' : 'success'} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default Singlepage;
