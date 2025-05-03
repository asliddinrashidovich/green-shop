import { Form, Input, Modal, Radio, Space } from "antd"
import { Link, useNavigate } from "react-router-dom"
import { MainButton } from "../components"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeEverythingZero } from "../reducers/shoppingSlice";
const { TextArea } = Input;

function Checkout() {
    const [payValue, setPayValue] = useState(1);
    const shopData = JSON.parse(localStorage.getItem('shopping_card'))
    const totalPrice = useSelector((state) => (state.shoppingSlice.total))
    const coupon_has = useSelector((state) => (state.shoppingSlice.coupon))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const now = new Date()
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        dispatch(makeEverythingZero())
        navigate('/profile/track-order')
    };
    const handleCancel = () => {
        dispatch(makeEverythingZero())
        navigate('/')
    };
    const onChange = e => {
        setPayValue(e.target.value);
    };

  function handleSubmit() {
    showModal()
  }
  return (
    <div className="pt-9 mb-[87px] px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
            <div className="mb-[36px]">
                <Link to={'/'} className="font-[400] text-[#3D3D3D] text-[15px] leading-[16px]">Home</Link> / 
                <span className="font-[700] text-[15px] text-[#3D3D3D] leading-[16px]"> Product-Checkout
                </span>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-between gap-[75px]">
                <div className="w-full lg:w-[60%]">
                    <h2 className="font-[700] text-[17px] leading-[16px] mb-[21px]">Billing Address</h2>
                    <Form
                        name="layout-multiple-horizontal"
                        layout="horizontal"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 20 }}
                        onFinish={handleSubmit}
                        className='gap-[30px] grid grid-cols-1 md:grid-cols-2 '
                    >
                        <Form.Item
                            layout="vertical"
                            label="First Name"
                            name="first name"
                            rules={[{ required: true }]}
                            labelCol={{ span: 24 }}
                            className="h-[35px]"
                            wrapperCol={{ span: 24 }}
                        >
                            <Input placeholder='Type your first name...' />
                        </Form.Item>
                        <Form.Item
                            layout="vertical"
                            label="Last Name"
                            name="last name"
                            rules={[{ required: true }]}
                            className="h-[35px]"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input placeholder='Type your last name...' />
                        </Form.Item>
                        <Form.Item
                            layout="vertical"
                            label="Country / Region"
                            name="country"
                            rules={[{ required: true }]}
                            className="h-[35px]"
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
                            className="h-[35px]"
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
                            className="h-[35px]"
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
                            className="h-[35px]"
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
                            className="h-[35px]"
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
                            className="h-[35px]"
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
                            className="h-[35px]"
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
                            className="h-[35px]"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Space.Compact className='w-full'>
                                <Input style={{ minWidth: '17%', maxWidth: '20%' }} defaultValue="+998" />
                                <Input style={{ width: '85%' }} defaultValue="" placeholder="Type your phone number" />
                            </Space.Compact>
                        </Form.Item>
                        <Form.Item
                            layout="vertical"
                            label="Payment"
                            name="pay-value"
                            rules={[{ required: true }]}
                            className="h-[140px]"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 54 }}
                        >
                           <Radio.Group onChange={onChange} value={payValue} className="radio-group">
                                <Radio value={1}><img src="/footer/payload.png" alt="payload" /></Radio>
                                <Radio value={2}>Dorect bank transfer</Radio>
                                <Radio value={3}>Cash on delivery</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <div></div>
                        <Form.Item
                            layout="vertical"
                            label="Order notes (optional)"
                            name="Message"
                            rules={[{ required: false }]}
                            className="h-[250px] col-span-2"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 54 }}
                        >
                             <TextArea rows={10} placeholder="Your order notes..." maxLength={100} />
                        </Form.Item>
                        <button  type="submit" className="col-span-2 w-full p-[10px] bg-[#46A358] cursor-pointer text-[16px] text-[#fff] rounded-[5px]">
                            Place Order
                        </button>
                        <Modal title="Order Confirmation" onCancel={handleCancel} open={isModalOpen} footer={null}>
                            <hr className="mb-[20px] border-[#46A358]"/>
                            <div className="flex justify-between mb-[40px]">
                                <div>
                                    <h3 className="text-[14px] font-[400] leading-[16px] text-[#727272] mb-[7px]">Oreder Number</h3>
                                    <h3 className="text-[15px] font-[700] leading-[16px] text-[#3D3D3D]">Osdfsfdsr</h3>
                                </div>
                                <div>
                                    <h3 className="text-[14px] font-[400] leading-[16px] text-[#727272] mb-[7px]">Date</h3>
                                    <h3 className="text-[15px] font-[700] leading-[16px] text-[#3D3D3D]">{now.toString().slice(0, 16)}</h3>
                                </div>
                                <div>
                                    <h3 className="text-[14px] font-[400] leading-[16px] text-[#727272] mb-[7px]">Total</h3>
                                    <h3 className="text-[15px] font-[700] leading-[16px] text-[#3D3D3D]">${totalPrice}</h3>
                                </div>
                                <div>
                                    <h3 className="text-[14px] font-[400] leading-[16px] text-[#727272] mb-[7px]">Payment Method</h3>
                                    <h3 className="text-[15px] font-[700] leading-[16px] text-[#3D3D3D]">{payValue == 1 ? 'Paypal' : payValue == 2 ? 'Dorect bank transfer' : 'Cash on delivery'}</h3>
                                </div>
                            </div>
                            <h2 className="text-[17px] font-[700] leading-[16px] mb-[12px] text-[#3D3D3D]">Order Details</h2>
                            <table className="w-full mb-[30px]">
                                <thead>
                                    <tr className="border-b-[1px] border-[#46A358] pb-[11px] w-full mb-[11px]">
                                        <th className="min-w-[100px] text-start font-[500] text-[16px] leading-[16px] pb-[11px] text-[#3D3D3D]">Products</th>
                                        <th className="min-w-[40px] text-end  font-[500] text-[16px] leading-[16px] pb-[11px] text-[#3D3D3D]">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {shopData.map(item => (
                                        <tr key={item._id}>
                                            <td className="flex items-center gap-[14px] mt-[10px]">
                                                <div className="w-[70px] h-[70px] p-1 gap-[14px] overflow-hidden">
                                                    <img src={item.main_image} alt="i" className="w-full" />
                                                </div>
                                                <div>
                                                    <h2 className="text-[16px] font-[500] leading-[16px] text-[#3D3D3D] mb-[10px]">{item.title}</h2>
                                                    <div className="flex gap-[10px]">
                                                        <span className="font-[400] text-[14px] leading-[16px]">SKU: </span>
                                                        <span className="font-[600] text-[14px] leading-[16px]">{item._id}</span>
                                                    </div>
                                                </div>
                                                <h2 className="flex ">(x {item.count})</h2>
                                            </td>
                                            <td className="text-[#46A358] text-[16px] text-end leading-[16px] font-[700]">${(item.price * item.count).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="flex justify-between items-center mb-[26px]">
                                <h2 className="text-[#3D3D3D] text-[15px] leading-[16px] font-[500] ">Shiping</h2>
                                <h3 className="text-[#3D3D3D] text-[18px] leading-[16px] font-[500] ">$16.00</h3>
                            </div>
                            <div className="flex justify-between items-center mb-[30px]">
                                <h2 className="text-[#3D3D3D] text-[16px] leading-[16px] font-[500] ">Total</h2>
                                <div className="flex flex-col gap-[10px]">
                                    <h3 className={` text-[18px] leading-[16px] font-[700] ${coupon_has.has_coupon ? 'line-through text-[#3D3D3D]' : 'text-[#46A358]'}`}>${totalPrice.toFixed(2)}</h3>
                                    {coupon_has.has_coupon && <h3 className="text-[#46A358] text-[18px] leading-[16px] font-[700] ">${(totalPrice / 100 *( 100 - coupon_has.discount_for)).toFixed(2)}</h3>}
                                </div>
                            </div>
                            <hr className="mb-[10px] border-[#46A358]"/>
                            <p className="text-center font-[600] text-[15px] mb-[20px]">Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.</p>
                            <button onClick={handleOk} className="w-full p-[10px] bg-[#46A358] cursor-pointer text-[16px] text-[#fff] rounded-[5px]">
                                Track your order
                            </button>
                        </Modal>
                    </Form>
                </div>
                <div className="w-full lg:w-[40%]">
                    <h2 className="font-[700] text-[17px] leading-[16px] mb-[21px]">Your Order</h2>
                    <table className="w-full mb-[30px]">
                        <thead>
                            <tr className="border-b-[1px] border-[#46A358] pb-[11px] w-full mb-[11px]">
                                <th className="min-w-[100px] text-start font-[500] text-[16px] leading-[16px] pb-[11px] text-[#3D3D3D]">Products</th>
                                <th className="min-w-[40px] text-end  font-[500] text-[16px] leading-[16px] pb-[11px] text-[#3D3D3D]">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shopData.map(item => (
                                <tr key={item._id}>
                                    <td className="flex items-center gap-[14px] mt-[10px]">
                                        <div className="w-[70px] h-[70px] p-1 gap-[14px] overflow-hidden">
                                            <img src={item.main_image} alt="i" className="w-full" />
                                        </div>
                                        <div>
                                            <h2 className="text-[16px] font-[500] leading-[16px] text-[#3D3D3D] mb-[10px]">{item.title}</h2>
                                            <div className="flex gap-[10px]">
                                                <span className="font-[400] text-[14px] leading-[16px]">SKU: </span>
                                                <span className="font-[600] text-[14px] leading-[16px]">{item._id}</span>
                                            </div>
                                        </div>
                                        <h2 className="flex ">(x {item.count})</h2>
                                    </td>
                                    <td className="text-[#46A358] text-[16px] text-end leading-[16px] font-[700]">${(item.price * item.count).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between items-center mb-[20px]">
                        <h2 className="text-[#3D3D3D] text-[15px] leading-[16px] font-[400] ">Subtotal</h2>
                        <h3 className="text-[#3D3D3D] text-[18px] leading-[16px] font-[500] ">${totalPrice.toFixed(2)}</h3>
                    </div>
                    <div className="flex justify-between items-center mb-[20px]">
                        <h2 className="text-[#3D3D3D] text-[15px] leading-[16px] font-[400] ">Coupon Discount</h2>
                        <h3 className="text-[#3D3D3D] text-[18px] leading-[16px] font-[500] ">(-)  { coupon_has.has_coupon ? (totalPrice / 100 *(coupon_has.discount_for)).toFixed(2) : '00.00'}</h3>
                    </div>
                    <div className="flex justify-between items-center mb-[26px]">
                        <h2 className="text-[#3D3D3D] text-[15px] leading-[16px] font-[400] ">Shiping</h2>
                        <h3 className="text-[#3D3D3D] text-[18px] leading-[16px] font-[500] ">$16.00</h3>
                    </div>
                    <div className="flex justify-between items-center mb-[30px]">
                        <h2 className="text-[#3D3D3D] text-[16px] leading-[16px] font-[700] ">Total</h2>
                        <div className="flex flex-col gap-[10px]">
                            <h3 className={` text-[18px] leading-[16px] font-[700] ${coupon_has.has_coupon ? 'line-through text-[#3D3D3D]' : 'text-[#46A358]'}`}>${totalPrice.toFixed(2)}</h3>
                            {coupon_has.has_coupon && <h3 className="text-[#46A358] text-[18px] leading-[16px] font-[700] ">${(totalPrice / 100 *( 100 - coupon_has.discount_for)).toFixed(2)}</h3>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout