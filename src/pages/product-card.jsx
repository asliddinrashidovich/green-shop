import { Link } from "react-router-dom"

function ProductCard() {
  return (
    <div className="pt-9 mb-[87px] px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
            <div className="mb-[50px]">
                <Link to={'/'} className="font-[400] text-[#3D3D3D] text-[15px] leading-[16px]">Home</Link> / 
                <span className="font-[700] text-[15px] text-[#3D3D3D] leading-[16px]"> Shopping Card
                </span>
            </div>
            <div className="flex justify-between gap-[86px] ">
                <div className="w-[75%]">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b-[1px] border-[#46A358] pb-[11px] w-full mb-[11px]">
                                <th className="min-w-[100px] text-start font-[500] text-[16px] leading-[16px] pb-[11px] text-[#3D3D3D]">Products</th>
                                <th className="min-w-[100px] text-start font-[500] text-[16px] leading-[16px] pb-[11px] text-[#3D3D3D]">Price</th>
                                <th className="min-w-[100px] text-start font-[500] text-[16px] leading-[16px] pb-[11px] text-[#3D3D3D]">Quantity</th>
                                <th className="min-w-[100px] text-start font-[500] text-[16px] leading-[16px] pb-[11px] text-[#3D3D3D]">Total</th>
                                <th className="min-w-[10px] text-start font-[500] text-[16px] leading-[16px] pb-[11px] text-[#3D3D3D]"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="flex items-center gap-[14px] mt-[10px]">
                                    <div className="w-[70px] h-[70px] p-1 gap-[14px]">
                                        <img src="/navbar/green-shop-logo.svg" alt="i" className="w-full" />
                                    </div>
                                    <div>
                                        <h2 className="text-[20px] font-[500] leading-[16px] text-[#3D3D3D] mb-[6px]">Barberton Daisy</h2>
                                        <div className="flex gap-[10px]">
                                            <span className="font-[400] text-[15px] leading-[16px]">SKU: </span>
                                            <span className="font-[600] text-[15px] leading-[16px]">SKU: 1995751877966</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-[20px] text-[#727272] font-[600] leading-[16px]">$119.00</td>
                                <td>
                                    <div className="flex gap-[16px] items-center">
                                        <button className="flex justify-center items-center bg-[#46A358] w-[25px] h-[25px] text-[#fff] rounded-full cursor-pointer">
                                            <span className="text-[30px] translate-y-[-3px]">
                                                -
                                            </span>
                                        </button>
                                        <span>10</span>
                                        <button className="flex justify-center items-center bg-[#46A358] w-[25px] h-[25px] text-[#fff] rounded-full cursor-pointer">
                                            <span className="text-[30px] translate-y-[-3px]">
                                                +
                                            </span>
                                        </button>
                                    </div>
                                </td>
                                <td className="text-[#46A358] text-[20px] leading-[16px] font-[700]">$238.00</td>
                                <td>
                                    <img className="cursor-pointer" src="/add-to-card/Delete.svg" alt="delete" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-[25%]">
                    <h2 className="border-b-[1px] font-[700] text-[18px] leading-[16px] border-[#46A358] pb-[11px]">Card Total</h2>
                    <h3 className="font-[400] text-[14px] leading-[16px] mt-[11px] mb-2 text-[#3D3D3D]">Coupon Apply</h3>
                    <form action="" className="w-full flex overflow-hidden mb-[30px] border-[1px] border-[#46A358] rounded-[6px]">
                        <input type="text" className="w-full outline-none shadow-xl p-[12px]" placeholder="Enter coupon code here..."/>
                        <button className="px-[26px] py-[12px]  bg-[#46A358] text-[#fff]">Apply</button>
                    </form>
                    <div className="flex justify-between items-center mb-[20px]">
                        <h2 className="text-[#3D3D3D] text-[15px] leading-[16px] font-[400] ">Subtotal</h2>
                        <h3 className="text-[#3D3D3D] text-[18px] leading-[16px] font-[500] ">$2,683.00</h3>
                    </div>
                    <div className="flex justify-between items-center mb-[20px]">
                        <h2 className="text-[#3D3D3D] text-[15px] leading-[16px] font-[400] ">Coupon Discount</h2>
                        <h3 className="text-[#3D3D3D] text-[18px] leading-[16px] font-[500] ">(-) 00.00</h3>
                    </div>
                    <div className="flex justify-between items-center mb-[10px]">
                        <h2 className="text-[#3D3D3D] text-[15px] leading-[16px] font-[400] ">Shiping</h2>
                        <h3 className="text-[#3D3D3D] text-[18px] leading-[16px] font-[500] ">$16.00</h3>
                    </div>
                    <h2 className="text-[#46A358] text-[15px] leading-[16px] font-[400] text-end mb-[26px]">View shipping charge</h2>
                    <div className="flex justify-between items-center mb-[30px]">
                        <h2 className="text-[#3D3D3D] text-[16px] leading-[16px] font-[700] ">Total</h2>
                        <h3 className="text-[#46A358] text-[18px] leading-[16px] font-[700] ">$2,699.00</h3>
                    </div>
                    <button className="w-full bg-[#46A358] text-[#FFFFFF] py-3 rounded-[4px] mb-[14px] cursor-pointer font-[700] text-[15px]">
                        Proceed To Checkout
                    </button>
                    <p className="text-[15px] font-[400] leading-[16px] text-[#46A358] cursor-pointer text-center">Continue Shopping</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard