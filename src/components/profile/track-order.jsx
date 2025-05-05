import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Modal } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

function TrackOrder() {
  const now = new Date()
  const [activeOrder, setActiveOrder] = useState(null);
  const queryClient = useQueryClient();
  const coupon_has = useSelector((state) => (state.shoppingSlice.coupon))
  const showModal = (orderItem) => {
    setActiveOrder(orderItem);
  };

  
  const getOrders = async () => {
    const res = await axios.get(`https://green-shop-backend.onrender.com/api/order/get-order?access_token=6506e8bd6ec24be5de357927`);
    return res.data;
    };

    async function handleDelete(id) {
        setActiveOrder(null)
        await axios.delete(`https://green-shop-backend.onrender.com/api/order/delete-order?access_token=6506e8bd6ec24be5de357927`,  
        {
            data: { _id: id }
        }).then((res) => {
            toast.success('Order deleted successfully')
        })
        queryClient.invalidateQueries(["order"]);
    }
  
  const { data: orderData} = useQuery({
    queryKey: ["order"],
    queryFn: getOrders,
  });
  console.log(orderData)
  return (
    <>
      <h2 className="text-[20px] font-[700] text-[#3D3D3D] mb-[20px]">Track your Orders</h2>
      {orderData?.data.map(item => (
         <div key={item._id} className="flex justify-between mb-[40px]">
            <div>
                <h3 className="text-[14px] font-[400] leading-[16px] text-[#727272] mb-[7px]">Oreder Number</h3>
                <h3 className="text-[15px] font-[700] leading-[16px] text-[#3D3D3D]">{item._id.slice(item._id.length-14, item._id.length)}</h3>
            </div>
            <div>
                <h3 className="text-[14px] font-[400] leading-[16px] text-[#727272] mb-[7px]">Date</h3>
                <h3 className="text-[15px] font-[700] leading-[16px] text-[#3D3D3D]">{now.toString().slice(0, 16)}</h3>
            </div>
            <div>
                <h3 className="text-[14px] font-[400] leading-[16px] text-[#727272] mb-[7px]">Total</h3>
                <h3 className="text-[15px] font-[700] leading-[16px] text-[#3D3D3D]">${(item.extra_shop_info.total_price) ?? (item.extra_shop_info.total)}</h3>
            </div>
            <div>
                <h3 className="text-[14px] font-[400] leading-[16px] text-[#727272] mb-[7px]">Payment Method</h3>
                <h3 onClick={() => showModal(item)} className="text-[15px] font-[700] leading-[16px] text-[#46A358] cursor-pointer">Get Details</h3>
                <Modal
                    title="Detailed Order"
                    open={!!activeOrder}
                    onOk={() => handleDelete(activeOrder._id)}
                    okButtonProps={{className: 'delete_btn'}}
                    okText={'delete'}
                    onCancel={() => setActiveOrder(null)}
                    mask={false}
                    >
                {activeOrder && (
                    <>
                    <hr className="mb-[20px] border-[#46A358]" />
                    <div className="flex justify-between mb-[40px]">
                        <div>
                        <h3 className="text-[14px] font-[400] leading-[16px] text-[#727272] mb-[7px]">Order Number</h3>
                        <h3 className="text-[15px] font-[700] leading-[16px] text-[#3D3D3D]">
                            {activeOrder._id.slice(activeOrder._id.length - 14)}
                        </h3>
                        </div>
                        <div>
                        <h3 className="text-[14px] font-[400] leading-[16px] text-[#727272] mb-[7px]">Date</h3>
                        <h3 className="text-[15px] font-[700] leading-[16px] text-[#3D3D3D]">
                            {now.toString().slice(0, 16)}
                        </h3>
                        </div>
                        <div>
                        <h3 className="text-[14px] font-[400] leading-[16px] text-[#727272] mb-[7px]">Total</h3>
                        <h3 className="text-[15px] font-[700] leading-[16px] text-[#3D3D3D]">
                            ${activeOrder.extra_shop_info.total_price ?? activeOrder.extra_shop_info.total}
                        </h3>
                        </div>
                        <div>
                        <h3 className="text-[14px] font-[400] leading-[16px] text-[#727272] mb-[7px]">Payment Method</h3>
                        <h3 className="text-[15px] font-[700] leading-[16px] text-[#3D3D3D]">Cash on delivery</h3>
                        </div>
                    </div>

                    <h2 className="text-[17px] font-[700] leading-[16px] mb-[12px] text-[#3D3D3D]">Order Details</h2>
                    <table className="w-full mb-[30px]">
                        <thead>
                        <tr className="border-b-[1px] border-[#46A358] pb-[11px] w-full mb-[11px]">
                            <th className="min-w-[100px] text-start font-[500] text-[16px] leading-[16px] pb-[11px] text-[#3D3D3D]">Products</th>
                            <th className="min-w-[40px] text-end font-[500] text-[16px] leading-[16px] pb-[11px] text-[#3D3D3D]">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        {activeOrder.shop_list.map(itemData => (
                            <tr key={itemData._id}>
                                <td className="flex items-center gap-[14px] mt-[10px]">
                                    <div className="w-[70px] h-[70px] p-1 gap-[14px] overflow-hidden">
                                    <img src={itemData.main_image} alt="img" className="w-full" />
                                    </div>
                                    <div>
                                    <h2 className="text-[16px] font-[500] leading-[16px] text-[#3D3D3D] mb-[10px]">{itemData.title}</h2>
                                    <div className="flex gap-[10px]">
                                        <span className="font-[400] text-[14px] leading-[16px]">SKU: </span>
                                        <span className="font-[600] text-[14px] leading-[16px]">{itemData._id}</span>
                                    </div>
                                    </div>
                                    <h2 className="flex ">(x {itemData.count})</h2>
                                </td>
                                <td className="text-[#46A358] text-[16px] text-end leading-[16px] font-[700]">
                                    ${(itemData.price * itemData.count)}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <div className="flex justify-between items-center mb-[26px]">
                        <h2 className="text-[#3D3D3D] text-[15px] leading-[16px] font-[500] ">Shipping</h2>
                        <h3 className="text-[#3D3D3D] text-[18px] leading-[16px] font-[500] ">$16.00</h3>
                    </div>

                    <div className="flex justify-between items-center mb-[30px]">
                        <h2 className="text-[#3D3D3D] text-[16px] leading-[16px] font-[500] ">Total</h2>
                        <div className="flex flex-col gap-[10px]">
                        <h3
                            className={` text-[18px] leading-[16px] font-[700] ${
                            coupon_has.has_coupon ? 'line-through text-[#3D3D3D]' : 'text-[#46A358]'
                            }`}
                        >
                            ${activeOrder.extra_shop_info.total_price ?? activeOrder.extra_shop_info.total}
                        </h3>
                        </div>
                    </div>

                    <hr className="mb-[10px] border-[#46A358]" />
                    </>
                )}
                </Modal>
            </div>
        </div>
      ))}
    </>
  )
}

export default TrackOrder