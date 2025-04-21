import {  Form, Input, Space } from 'antd';
// import axios from 'axios';
// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import toast from 'react-hot-toast';
// import { FaFacebook, FaGoogle } from "react-icons/fa";
import MainButton from '../button/button';

function Address() {
  return (
    <>
        <h2 className='text-[16px] leading-[16px] font-[500] text-[#3D3D3D] mb-[10px]'>Billing Address</h2>
        <h3 className='text-[14px] leading-[15px] font-[400] text-[#727272] mb-[30px]'>The following addresses will be used on the checkout page by default.</h3>
        <Form
            name="layout-multiple-horizontal"
            layout="horizontal"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            className='gap-[30px] grid grid-cols-1 sm:grid-cols-2 '
        >
            <Form.Item
                layout="vertical"
                label="First Name"
                name="first name"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Input />
            </Form.Item>
            <Form.Item
                layout="vertical"
                label="Last Name"
                name="last name"
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
                name="city"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Input placeholder='Select a town / city'/>
            </Form.Item>
            <Form.Item
                layout="vertical"
                label="Street Address"
                name="street"
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
                    <Input style={{ width: '15%' }} defaultValue="+998" />
                    <Input style={{ width: '85%' }} defaultValue="26888888" />
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