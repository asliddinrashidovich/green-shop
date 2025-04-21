import { Button, Form, Input } from 'antd';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook, FaGoogle } from "react-icons/fa";

FormRegister.propTypes  = {
  setOpen2: PropTypes.func.isRequired
}


function FormRegister({setOpen2}) {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disButton, setDisbutton] = useState(false)
    
    if(name.length && surname.length && email.length && password.length) {
        setDisbutton(true)
    }
    const postRegister = async () => {
        await axios.post(`https://green-shop-backend.onrender.com/api/user/sign-up?access_token=6506e8bd6ec24be5de357927`, {name, surname,password, email}).then(() => {
            setOpen2(false)
        }).catch((err) => {
        if(err.status == 409) {
            toast.error('User Not found, please Try again')
        } else {
            toast.error('Something went wrong')
        }
        })
    };
  return  (
  <Form
    name="basic"
    style={{ width: '100%'}}
    initialValues={{ remember: true }}
    onFinish={postRegister}
    autoComplete="off"
  >
    <h2 className='text-[13px] leading-[16px] font-[400] mb-[14px]'>Enter your email and password to register.</h2>
    <Form.Item
      name="name"
      style={{width: '100%'}} 
      rules={[{ required: true, message: 'Please enter your name!'}]}
    >
      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
    </Form.Item>

    <Form.Item
      name="surname"
      style={{width: '100%'}} 
      rules={[{ required: true, message: 'Please enter your surname!'}]}
    >
      <Input value={surname} onChange={(e) => setSurname(e.target.value)} placeholder='Surname'/>
    </Form.Item>

    <Form.Item
      name="email"
      rules={[{ required: true, message: 'Please enter your email!' }]}
    >
      <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email address'/>
    </Form.Item>

    <Form.Item
      name="password"
      rules={[{ required: true, message: 'Please enter your password!' }]}
    >
      <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
    </Form.Item>

    <Form.Item
      name="password2"
      rules={[{ required: true, message: 'Please enter your password!' }]}
    >
      <Input.Password  placeholder='Confirm Password'/>
    </Form.Item>

    <Form.Item label={null}>
      <Button 
        disabled={disButton}
        htmlType="submit"
        style={{
          width: '100%',
          backgroundColor: '#46A358',
          color: 'white',
          border: 'none',
          padding: '16px 0',
          marginBottom: '30px'
        }}
      >
        Register
      </Button>
    </Form.Item>
    <h2 className='text-center text-[#3D3D3D] text-[13px] font-[400] leading-[16px] mb-[27px]'>Or register with</h2>
    <Button className='mb-[20px] flex gap-[10px] items-center border-[#EAEAEA] border-[1px] rounded-[5px] w-full py-[10px] justify-center cursor-pointer'>
      <FaGoogle />
      <span>Login with Google</span>
    </Button>
    <Button className='mb-[20px] flex gap-[10px] items-center border-[#EAEAEA] border-[1px] rounded-[5px] w-full py-[10px] justify-center cursor-pointer'>
      <FaFacebook />
      <span>Login with Facebook</span>
    </Button>
  </Form>
)};
export default FormRegister;