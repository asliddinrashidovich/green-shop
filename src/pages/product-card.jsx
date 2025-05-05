import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { decreaseCountFromShopping, deleteFlowerFromShopping, increaseCountFromShopping, setCoupon, setNotCoupon } from "../reducers/shoppingSlice"
import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { TiDelete } from "react-icons/ti";
import NotFound from "../components/profile/not-found"
import { MainButton } from "../components"

function ProductCard() {
    const shopData = JSON.parse(localStorage.getItem('shopping_card'))
    const totalPrice = useSelector((state) => (state.shoppingSlice.total))
    const coupon_has = useSelector((state) => (state.shoppingSlice.coupon))
    const dispatch = useDispatch()
    const [couponCode, setCouponCode] = useState('')
    const navigate = useNavigate()
    // get coupon
    async function handleApplyCoupon(e) {
        e.preventDefault()
        await axios.get(`https://green-shop-backend.onrender.com/api/features/coupon?access_token=6506e8bd6ec24be5de357927&coupon_code=${couponCode}`).then((res) => {
            dispatch(setCoupon(res.data.data.discount_for))
            toast.success('Coupon set successfully!')
        }).catch(() => {
            toast.error('Coupon not found')
        })
    }
    
    function handleSetNotCoupon() {
        dispatch(setNotCoupon())
        setCouponCode('')
    }
    console.log(shopData)
    function handleCheckout() {
        if(shopData) {
            navigate('/product-checkout')
        } else {
            toast.error('Nothing to proceed!')
        }
    }
  return (
    <div className="pt-9 mb-[87px] px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
            <div className="mb-[50px]">
                <Link to={'/'} className="font-[400] text-[#3D3D3D] text-[15px] leading-[16px]">Home</Link> / 
                <span className="font-[700] text-[15px] text-[#3D3D3D] leading-[16px]"> Shopping Card
                </span>
            </div>
            <div className="flex lg:flex-row flex-col justify-between gap-[86px] ">
                <div className="w-full overflow-auto lg:w-[75%]">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b-[1px] border-[#46A358] pb-[11px] w-full mb-[11px]">
                                <th className="min-w-[350px] text-start font-[500] text-[16px] leading-[16px] pb-[11px] text-[#3D3D3D]">Products</th>
                                <th className="min-w-[100px] text-start font-[500] text-[16px] leading-[16px] pb-[11px] text-[#3D3D3D]">Price</th>
                                <th className="min-w-[150px] text-start font-[500] text-[16px] leading-[16px] pb-[11px] text-[#3D3D3D]">Quantity</th>
                                <th className=" text-start font-[500] text-[16px] leading-[16px] pb-[11px] text-[#3D3D3D]">Total</th>
                                <th className="min-w-[30px] text-end font-[500] text-[16px] leading-[16px] pb-[11px] text-[#3D3D3D]"></th>
                            </tr>
                        </thead>
                        <tbody >
                           {shopData && shopData.map(item => (
                             <tr key={item._id}>
                                <td className="flex items-center gap-[14px] mt-[10px]">
                                    <div className="w-[70px] h-[70px] p-1 gap-[14px] overflow-hidden">
                                        <img src={item.main_image} alt="i" className="w-full" />
                                    </div>
                                    <div>
                                        <h2 className="text-[20px] font-[500] leading-[16px] text-[#3D3D3D] mb-[10px]">{item.title}</h2>
                                        <div className="flex gap-[10px]">
                                            <span className="font-[400] text-[15px] leading-[16px]">SKU: </span>
                                            <span className="font-[600] text-[15px] leading-[16px]">{item._id}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-[20px] text-[#727272] font-[600] leading-[16px]">${item.price}</td>
                                <td>
                                    <div className="flex gap-[16px] items-center">
                                        <button onClick={() => dispatch(decreaseCountFromShopping(item))} className="flex justify-center active:bg-[#265d31] transition-all duration-150  items-center bg-[#46A358] w-[25px] h-[25px] text-[#fff] rounded-full cursor-pointer">
                                            <span className="text-[30px] translate-y-[-3px]">
                                                -
                                            </span>
                                        </button>
                                        <span className="text-[17px]">{item.count}</span>
                                        <button  onClick={() => dispatch(increaseCountFromShopping(item))} className="flex justify-center active:bg-[#265d31] transition-all duration-150 items-center bg-[#46A358] w-[25px] h-[25px] text-[#fff] rounded-full cursor-pointer">
                                            <span className="text-[30px] translate-y-[-3px]">
                                                +
                                            </span>
                                        </button>
                                    </div>
                                </td>
                                <td className="text-[#46A358] text-[20px] leading-[16px] font-[700]">${((item.price * 100)/100 * item.count)}</td>
                                <td>
                                    <img onClick={() => dispatch(deleteFlowerFromShopping(item))} className="cursor-pointer" src="/add-to-card/Delete.svg" alt="delete" />
                                </td>
                            </tr>
                           ))}
                           {shopData.length == 0 && 
                            <tr>
                                <td colSpan={5} className="text-[center]">
                                    <NotFound>No data</NotFound>
                                    <Link to={'/'} className="mx-auto block w-[110px] mt-[20px]">
                                        <MainButton>{"Let's Shop"}</MainButton>
                                    </Link>
                                </td>
                            </tr>}
                        </tbody>
                    </table>
                </div>
                <div className="w-full  lg:w-[25%]">
                    <h2 className="border-b-[1px] font-[700] text-[18px] leading-[16px] border-[#46A358] pb-[11px]">Card Total</h2>
                    <h3 className="font-[400] text-[14px] leading-[16px] mt-[11px] mb-2 text-[#3D3D3D]">Coupon Apply</h3>
                    <form onSubmit={handleApplyCoupon} className="w-full flex overflow-hidden mb-[30px] border-[1px] border-[#46A358] rounded-[6px]">
                        <input disabled={coupon_has.has_coupon} value={couponCode} onChange={(e) => setCouponCode(e.target.value)} type="text" className={`w-full outline-none shadow-xl p-[12px] ${coupon_has.has_coupon ? 'cursor-not-allowed' : ' '}`} placeholder="Enter coupon code here..."/>
                        {!coupon_has.has_coupon && <button type="submit" className={`px-[26px] active:bg-[#265d31] py-[12px]  bg-[#46A358] text-[#fff] cursor-pointer`}>Apply</button>}
                        {coupon_has.has_coupon && <button onClick={() => handleSetNotCoupon()} type="button" className="px-[26px] cursor-pointer active:bg-[#265d31] py-[12px]  bg-[#46A358] text-[#fff]">
                            <TiDelete className="scale-[200%]"/>
                        </button>}
                    </form>
                    <div className="flex justify-between items-center mb-[20px]">
                        <h2 className="text-[#3D3D3D] text-[15px] leading-[16px] font-[400] ">Subtotal</h2>
                        <h3 className="text-[#3D3D3D] text-[18px] leading-[16px] font-[500] ">${totalPrice}</h3>
                    </div>
                    <div className="flex justify-between items-center mb-[20px]">
                        <h2 className="text-[#3D3D3D] text-[15px] leading-[16px] font-[400] ">Coupon Discount</h2>
                        <h3 className="text-[#3D3D3D] text-[18px] leading-[16px] font-[500] ">(-)  { coupon_has.has_coupon ? (totalPrice / 100 *(coupon_has.discount_for)) : '00.00'}</h3>
                    </div>
                    <div className="flex justify-between items-center mb-[26px]">
                        <h2 className="text-[#3D3D3D] text-[15px] leading-[16px] font-[400] ">Shiping</h2>
                        <h3 className="text-[#3D3D3D] text-[18px] leading-[16px] font-[500] ">$16.00</h3>
                    </div>
                    <div className="flex justify-between items-center mb-[30px]">
                        <h2 className="text-[#3D3D3D] text-[16px] leading-[16px] font-[700] ">Total</h2>
                        <div className="flex flex-col gap-[10px]">
                            <h3 className={` text-[18px] leading-[16px] font-[700] ${coupon_has.has_coupon ? 'line-through text-[#3D3D3D]' : 'text-[#46A358]'}`}>${totalPrice}</h3>
                            {coupon_has.has_coupon && <h3 className="text-[#46A358] text-[18px] leading-[16px] font-[700] ">${(totalPrice / 100 *( 100 - coupon_has.discount_for))}</h3>}
                        </div>
                    </div>
                    <button onClick={() =>  handleCheckout()}  className="w-full active:bg-[#265d31] bg-[#46A358] text-[#FFFFFF] py-3 rounded-[4px] mb-[14px] cursor-pointer font-[700] text-[15px]">
                        Proceed To Checkout
                    </button>
                    <Link to={'/'} className="text-[15px] inline-block w-full font-[400] leading-[16px] text-[#46A358] cursor-pointer text-center">Continue Shopping</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard