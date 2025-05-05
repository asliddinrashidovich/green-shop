import { Button, Form, Input, Space, Upload } from 'antd';
import axios from 'axios';
import toast from 'react-hot-toast';
import { UploadOutlined } from '@ant-design/icons';
import MainButton from '../button/button';
import { useEffect, useState } from 'react';

function AccountDetails() {
    const user = JSON.parse(localStorage.getItem('user'))

  const postAccountData = async (values) => {
      const { firstName, lastName, email, phone, username,  } = values;
      
      await axios.post(`https://green-shop-backend.onrender.com/api/user/account-details?access_token=6506e8bd6ec24be5de357927`, {_id: user._id, name: firstName, surname: lastName, email: email, phone_number: phone, username: username, profile_photo: user.profile_photo})
      .then((res) => {
        console.log(res)
        toast.success("Your account details has been updated!")
      }).catch(() => {
      })
  };
  return (
    <>
        <h2 className='text-[16px] leading-[16px] font-[500] text-[#3D3D3D] mb-[20px]'>Personal Information</h2>
        <Form
            initialValues={{
                firstName: user.name,
                lastName: user.surname,
                email: user.email,
                phone: "",
                username: user.username,
            }}
            name="layout-multiple-horizontal"
            layout="horizontal"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            onFinish={(values) => postAccountData(values)}
            className='gap-[30px] grid grid-cols-1 sm:grid-cols-2 '
        >
            <Form.Item
                layout="vertical"
                label="First Name"
                name="firstName"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Input />
            </Form.Item>
            <Form.Item
                layout="vertical"
                label="Last Name"
                name="lastName"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Input />
            </Form.Item>
            <Form.Item
                layout="vertical"
                label="Email address"
                name="email"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Input />
            </Form.Item>
            <Form.Item
                layout="vertical"
                label="Phone Number"
                name="phone"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Space.Compact className='w-full'>
                    <Input style={{ width: '60px' }} defaultValue="+998" />
                    <Input style={{ width: '85%' }} placeholder='Your phone number...'/>
                </Space.Compact>
            </Form.Item>

            <Form.Item
                layout="vertical"
                label="Username"
                name="username"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Input placeholder='Your username...'/>
            </Form.Item>

            <Form.Item
                layout="vertical"
                label="Profile photo"
                name="profilePhoto"
                rules={[{ required: false }]}
                labelCol={{ span: 14 }}
                wrapperCol={{ span: 24 }}
            >
                <Upload>
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            </Form.Item>
            <button className='text-start'>
                <MainButton>Save Changes</MainButton>
            </button>
        </Form>
    </>
  )
};
export default AccountDetails;