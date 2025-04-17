import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Box,
    Badge,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
  } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', maxWidth: '1200px', mx: 'auto', paddingTop: '25px', paddingBottom: '18px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center" sx={{cursor: 'pointer'}}>
            <img src="/navbar/main_logo.svg" alt="logo" style={{ height: 40}} />
          </Box>

          <Box sx={{display: {xs: 'none', md: 'flex'}}}  gap={'50px'} alignItems="center">
            <Button sx={{ color: '#3D3D3D', fontSize: '16px', fontWeight: '400', lineHeight: '100%',}}>
                <Link to={'/home'}>Home</Link>
            </Button>
            <Button sx={{ color: '#3D3D3D', fontSize: '16px', fontWeight: '400', lineHeight: '100%',}}>
                <Link to={'/shop'}>Shop</Link>
            </Button>
          </Box>

          <Box display="flex" sx={{gap: {xs: '15px', md:'30px'}}} alignItems="center">
            <IconButton>
              <img src="/navbar/search_icon.svg" alt="" />
            </IconButton>
            <IconButton sx={{display: {xs: 'none', md: 'flex'}}}>
              <svg className='text-[#3D3D3D]' viewBox="64 64 896 896" focusable="false" data-icon="bell" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"></path></svg>
            </IconButton>

            <IconButton>
              <Badge badgeContent={6} color="success">
                <img src="/navbar/shop_icon.svg" alt="" />
              </Badge>
            </IconButton>

            
            <Box>
                <Button
                variant="contained"
                sx={{
                    backgroundColor: '#46A358',
                    textTransform: 'none',
                    fontWeight: 600,
                    px: '16px',
                    py: '8px',
                    gap: '10px',
                    display: {xs: 'none', md: 'flex'},
                    '&:hover': { backgroundColor: '#388e3c' },
                }}
                >
                    <img src="/navbar/Logout.svg" alt="" />
                    <Typography sx={{fontSize: '16px', fontWeight: '400', lineHeight: '100%'}}>
                        Login
                    </Typography>
                </Button>
                <IconButton  sx={{display: {xs: 'flex', md: 'none'}}} onClick={toggleDrawer(true)}>
                    <img src="/navbar/menu_bar_icon.svg" alt="" />
                </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { borderRadius: '10px 0 0 10px', width: 300, padding: 2 }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">Site map</Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          <ListItem button>
            <ListItemText primary="Home" primaryTypographyProps={{ color: 'green' }} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Blog" primaryTypographyProps={{ color: 'green' }} />
          </ListItem>
        </List>

        <Button
          variant="contained"
          fullWidth
          startIcon={<LoginIcon />}
          sx={{ mt: 3, backgroundColor: 'green', borderRadius: 1 }}
        >
          Login
        </Button>
      </Drawer>
    </>
  )
}

export default Navbar
  
  

