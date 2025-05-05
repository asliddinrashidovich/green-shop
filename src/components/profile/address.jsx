import {  Form, Input, Space } from 'antd';
import MainButton from '../button/button';
import axios from 'axios';
import toast from 'react-hot-toast';

function Address() {
    const user = JSON.parse(localStorage.getItem('user'))

    const postAddress = async (values) => {
        const { firstName, lastName, email, phone, username, country, town, street_address, state, zip  } = values;
        
        await axios.post(`https://green-shop-backend.onrender.com/api/user/address?access_token=6506e8bd6ec24be5de357927`, {_id: user._id, name: firstName, surname: lastName, email: email, phone_number: phone, username: username, profile_photo: user.profile_photo, country, town, street_address, state, zip})
        .then((res) => {
          console.log(res)
          toast.success("Your address has been updated!")
        }).catch(() => {
        })
    };
  return (
    <>
        <h2 className='text-[16px] leading-[16px] font-[500] text-[#3D3D3D] mb-[10px]'>Billing Address</h2>
        <h3 className='text-[14px] leading-[15px] font-[400] text-[#727272] mb-[30px]'>The following addresses will be used on the checkout page by default.</h3>
        <Form
            name="layout-multiple-horizontal"
            layout="horizontal"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            onFinish={(values) => postAddress(values)}
            className='gap-[30px] grid grid-cols-1 sm:grid-cols-2 '
            initialValues={{
                firstName: user.name,
                lastName: user.surname,
                email: user.email,
                phone: "",
                username: user.username,
                country: "",
                town: "",
                street_address: "",
                state: "",
                zip: ""
            }}
        >
            <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true }]}
                layout="vertical"
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
                label="Country / Region"
                name="country"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Input placeholder='Select a country / region'/>
            </Form.Item>
            <Form.Item
                layout="vertical"
                label="Town / City"
                name="town"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Input placeholder='Select a town / city'/>
            </Form.Item>
            <Form.Item
                layout="vertical"
                label="Street Address"
                name="street_address"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Input placeholder='House number and street name'/>
            </Form.Item>
            <Form.Item
                layout="vertical"
                label="Extra address"
                name="extra-address"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Input placeholder='Appartment, suite, unit, etc. (optional)'/>
            </Form.Item>
            <Form.Item
                layout="vertical"
                label="State"
                name="state"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Input placeholder='Select a state...'/>
            </Form.Item>
            <Form.Item
                layout="vertical"
                label="Zip"
                name="zip"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Input placeholder='Appartment, suite, unit, etc. (optional)'/>
            </Form.Item>
            <Form.Item
                layout="vertical"
                label="Email address"
                name="email"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Input placeholder='asliddinnorboyev@gmail.com'/>
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
                    <Input style={{ width: '85%' }} defaultValue="" placeholder='Type your phone number' />
                </Space.Compact>
            </Form.Item>
            <button className='text-start'>
                <MainButton>Save Changes</MainButton>
            </button>
        </Form>
    </>
  )
};
export default Address;