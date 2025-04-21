import { Button, Checkbox, Form, Input } from 'antd';
import MainButton from '../button/button';
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const FormLogin = () => (
  <Form
    name="basic"
    // labelCol={{ span: 8 }}
    // wrapperCol={{ span: 16 }}
    style={{ width: '100%'}}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <h2 className='text-[13px] leading-[16px] font-[400] mb-[14px]'>Enter your username and password to login.</h2>
    <Form.Item
      name="email"
      style={{width: '100%'}} 
      rules={[{ required: true, message: 'Please input your username!'}]}
    >
      <Input  placeholder='almamun_uxui@outlook.com'/>
    </Form.Item>

    <Form.Item
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password  placeholder='Password'/>
    </Form.Item>

    <div className='flex justify-between mb-[27px]'>
      <div></div>
      <h2 className='text-[14px] leading-[16px] text-[#46A358] cursor-pointer font-[400] mb-[14px]'>Forgot Password?</h2>
    </div>

    <Form.Item label={null}>
      <Button 
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
    <h2 className='text-center text-[#3D3D3D] text-[13px] font-[400] leading-[16px]'>Or login with</h2>
  </Form>
);
export default FormLogin;