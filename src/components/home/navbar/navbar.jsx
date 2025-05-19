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
    Modal,
  } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';
import BasicTabs from '../../auth/login-modal';
import { Toaster } from 'react-hot-toast';
import MainButton from '../../button/button';
import { useSelector } from 'react-redux';
import LanguageChanger from '../../language/language-changer';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'))
  const {t} = useTranslation()
  const shoppingCard = useSelector((state) => state.shoppingSlice.data);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };
  const [open2, setOpen2] = useState(false);
  const handleOpen = () => setOpen2(true);
  const handleClose = () => setOpen2(false);
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', maxWidth: '1200px', mx: 'auto', paddingTop: '25px', paddingBottom: '18px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to={'/'} display="flex" alignItems="center" sx={{cursor: 'pointer'}}>
            <img src="/navbar/main_logo.svg" alt="logo" style={{ height: 40}} />
          </Link>

          <Box sx={{display: {xs: 'none', md: 'flex'}}}  gap={'50px'} alignItems="center">
            <Button sx={{ color: '#3D3D3D', fontSize: '16px', fontWeight: '400', lineHeight: '100%',}}>
                <Link to={'/'}>{t('navbarHome')}</Link>
            </Button>
            <Button sx={{ color: '#3D3D3D', fontSize: '16px', fontWeight: '400', lineHeight: '100%',}}>
                <Link to={'/blog'}>{t('navbarPosts')}</Link>
            </Button>
          </Box>
          <Toaster
            position="top-right"
            reverseOrder={false}
          />

          <Box display="flex" sx={{gap: {xs: '15px', md:'30px'}}} alignItems="center">
            <IconButton>
              <LanguageChanger/>
            </IconButton>

            <IconButton>
              <Link to={'/product-card'}>
                <Badge badgeContent={shoppingCard.length} color="success">
                  <img src="/navbar/shop_icon.svg" alt="" />
                </Badge>
              </Link>
            </IconButton>
            <Box >
                {!user && <Button
                variant="contained"
                onClick={handleOpen}
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
                </Button>}
                {user && (
                  <Box  sx={{display: {xs: 'none', md: 'flex'}}}>
                    <Link to={'/profile'}>
                      <MainButton>{user.name}</MainButton>
                    </Link>
                  </Box>
                )}
                <IconButton  sx={{display: {xs: 'flex', md: 'none'}}} onClick={toggleDrawer(true)}>
                    <img src="/navbar/menu_bar_icon.svg" alt="" />
                </IconButton>
            </Box>
            
            <Modal
              className="w-full h-full py-[20px] px-[30px] overflow-auto flex justify-center items-center"
              open={open2}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={{backgroundColor: '#fff', height: 'auto', marginTop: '20px',  borderRadius: '15px', maxWidth: '500px', width: '100%', padding: {xs: '10px', md: '30px'}}}>
                <BasicTabs setOpen2={setOpen2}/>
              </Box>
            </Modal>
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
            <Link to={'/'}>
              <ListItemText primary="Home" primaryTypographyProps={{ color: 'green' }} />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to={'/blog'}>
              <ListItemText primary="Blog" primaryTypographyProps={{ color: 'green' }} />
            </Link>
          </ListItem>
        </List>

        {!user && <Button
          variant="contained"
          fullWidth
          startIcon={<LoginIcon />}
          sx={{ mt: 3, backgroundColor: 'green', borderRadius: 1 }}
        >
          Login
        </Button>}
        {user && (
          <div className='flex '>
            <MainButton>{user.name}</MainButton>
          </div>
        )}
      </Drawer>
    </>
  )
}

export default Navbar
  
  

