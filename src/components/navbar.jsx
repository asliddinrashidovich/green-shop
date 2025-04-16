import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Box,
    Badge,
    Typography,
  } from '@mui/material';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', maxWidth: '1200px', mx: 'auto', paddingTop: '25px', paddingBottom: '18px' }}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box display="flex" alignItems="center" sx={{cursor: 'pointer'}}>
        <img src="/public/navbar/main_logo.svg" alt="logo" style={{ height: 40}} />
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
            <IconButton  sx={{display: {xs: 'flex', md: 'none'}}}>
                <img src="/public/navbar/menu_bar_icon.svg" alt="" />
            </IconButton>
        </Box>
      </Box>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar