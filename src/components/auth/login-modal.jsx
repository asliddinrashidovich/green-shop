// import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MainButton from '../button/button';
import axios from 'axios';
import { useState } from 'react';
import FormLogin from './form';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
    role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [valueTab, setValueTab] = useState(0);
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [password, setPassword] = useState('')
  
  const [email, setEmail] = useState('')
    const postRegister = async () => {
        await axios.post(`https://green-shop-backend.onrender.com/api/user/sign-up?access_token=6506e8bd6ec24be5de357927`, {name, surname, password, email}).then((res) => {
            console.log(res)
        })
    };

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={valueTab} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Register" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={valueTab} index={0}>
        {/* <form>
            <h2>Enter your username and password to login.</h2>
            <label htmlFor="email">
                <input className='w-full p-[10px] my-[5px]' type="text" placeholder='email'/>
            </label>
            <label htmlFor="email">
                <input className='w-full p-[10px] my-[5px]' type="text" placeholder='password'/>
            </label>
            <button>
                <MainButton>Submit</MainButton>
            </button>
        </form> */}
        <FormLogin/>
      </CustomTabPanel>
      <CustomTabPanel value={valueTab} index={1}>
        <form onSubmit={postRegister}>
            <h2>Enter your email and password to register.</h2>
            <label htmlFor="name">
                <input value={name} onChange={(e) => setName(e.target.value)} className='w-full p-[10px] my-[5px]' type="text" placeholder='name'/>
            </label>
            <label htmlFor="surname">
                <input value={surname} onChange={(e) => setSurname(e.target.value)} className='w-full p-[10px] my-[5px]' type="text" placeholder='surname'/>
            </label>
            <label htmlFor="email">
                <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full p-[10px] my-[5px]' type="email" placeholder='email'/>
            </label>
            <label htmlFor="password">
                <input value={password} onChange={(e) => setPassword(e.target.value)} className='w-full p-[10px] my-[5px]' type="password" placeholder='password'/>
            </label>
            <button type='submit' >
                <MainButton>Submit</MainButton>
            </button>
        </form>
      </CustomTabPanel>
    </Box>
  );
}
