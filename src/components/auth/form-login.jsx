import { Button, Form, Input } from 'antd';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook, FaGoogle } from "react-icons/fa";

FormLogin.propTypes  = {
  setOpen2: PropTypes.func.isRequired
}
function FormLogin({setOpen2}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const postLogin = async () => {
      await axios.post(`https://green-shop-backend.onrender.com/api/user/sign-in?access_token=6506e8bd6ec24be5de357927`, {password, email}).then((res) => {
        setOpen2(false)
        console.log(res)
        localStorage.setItem('user', JSON.stringify(res.data.data.user))
      }).catch((err) => {
        if(err.status == 409) {
          toast.error('User Not found, please Try again')
        } else {
          toast.error('Something went wrong')
        }
      })
  };
  return (
  <Form
    name="basic"
    style={{ width: '100%'}}
    initialValues={{ remember: true }}
    onFinish={postLogin}
    autoComplete="off"
  >
    <h2 className='text-[13px] leading-[16px] font-[400] mb-[14px]'>Enter your username and password to login.</h2>
    <Form.Item
      name="email"
      style={{width: '100%'}} 
      rules={[{ required: true, message: 'Please enter your email!'}]}
    >
      <Input value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='almamun_uxui@outlook.com'/>
    </Form.Item>

    <Form.Item
      name="password"
      rules={[{ required: true, message: 'Please enter your password!' }]}
    >
      <Input.Password  value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
    </Form.Item>

    <div className='flex justify-between mb-[27px]'>
      <div></div>
      <h2 className='text-[14px] leading-[16px] text-[#46A358] cursor-pointer font-[400] '>Forgot Password?</h2>
    </div>

    <Form.Item label={null}>
      <Button 
        onSubmit={postLogin}
        htmlType="submit"
        style={{
          width: '100%',
          backgroundColor: '#46A358',
          color: 'white',
          border: 'none',
          padding: '16px 0',
          marginBottom: '47px'
        }}
      >
        Login
      </Button>
    </Form.Item>
    <h2 className='text-center text-[#3D3D3D] text-[13px] font-[400] leading-[16px] mb-[27px]'>Or login with</h2>
    <Button className='mb-[20px] flex gap-[10px] items-center border-[#EAEAEA] border-[1px] rounded-[5px] w-full py-[10px] justify-center cursor-pointer'>
      <FaGoogle />
      <span>Login with Google</span>
    </Button>
    <Button className='mb-[20px] flex gap-[10px] items-center border-[#EAEAEA] border-[1px] rounded-[5px] w-full py-[10px] justify-center cursor-pointer'>
      <FaFacebook />
      <span>Login with Facebook</span>
    </Button>
  </Form>
  )
};
export default FormLogin;