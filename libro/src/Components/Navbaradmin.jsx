import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import LoginIcon from '@mui/icons-material/Login';
import Email from '@mui/icons-material/Email';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const Navbaradmin = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          width: '100vw', 
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          boxShadow: 'none'
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Library App
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to={'/books'} style={{ textDecoration: 'none' }}>
                <MenuItem onClick={handleClose} sx={{ color: 'black' }}>
                  <LibraryBooksIcon sx={{ mr: 1 }} /> Books
                </MenuItem>
              </Link>
              <Link to={'/add'} style={{ textDecoration: 'none' }}>
                <MenuItem onClick={handleClose} sx={{ color: 'black' }}>
                  <BookIcon sx={{ mr: 1 }} /> Add Books
                </MenuItem>
              </Link>
              <Link to={'/userdetails'} style={{ textDecoration: 'none' }}>
                <MenuItem onClick={handleClose} sx={{ color: 'black' }}>
                  <AccountCircle sx={{ mr: 1 }} /> Users
                </MenuItem>
              </Link>
              <Link to={'/req'} style={{ textDecoration: 'none' }}>
                <MenuItem onClick={handleClose} sx={{ color: 'black' }}>
                  <Email sx={{ mr: 1 }} /> Requests
                </MenuItem>
              </Link>
              <Link to={'/'} style={{ textDecoration: 'none' }}>
                <MenuItem onClick={handleClose} sx={{ color: 'black' }}>
                  <LoginIcon sx={{ mr: 1 }} /> Logout
                </MenuItem>
              </Link>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbaradmin;
