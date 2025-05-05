import { useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { IoMdSpeedometer } from "react-icons/io";
import { Modal } from "antd";

function ProfileSection() {
    const {pathname} = useLocation()
    const activeFilter = pathname.split('/')[2] ? pathname.split('/')[2] : 'account-details'
    console.log(activeFilter)
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate('/')
        window.location.reload();
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    function handleTab(path) {
        navigate(`${path == 'Account Details' ? '' : path.split('').map(item => item.replace(' ', '-')).join('').toLowerCase()}`)
    }
  return (
    <div className="max-w-[1200px] mx-auto flex py-[40px] gap-[30px] px-[20px]">
        <div className="md:block hidden w-[25%] p-[18px]">
            <h2 className="font-[700] text-[18px] leading-[16px] mb-[17px]">My Account</h2>
            <div>
                <div onClick={() => handleTab('Account Details')} className={`flex gap-[11px] items-center border-l-[5px] pl-[20px] cursor-pointer  ${activeFilter == 'account-details' ? 'border-[#46A358]' : 'border-[#fff]'}`}> 
                    <img src="/profile/user_logo.svg" alt="user" />
                    <p className={`font-[700] text-[15px] leading-[45px] ${activeFilter == 'account-details' ? 'text-[#46A358]' : 'text-[#727272]'}`}>Account Details</p>
                </div>
                <div onClick={() => handleTab('My products')} className={`flex gap-[11px] items-center border-l-[5px] pl-[20px] cursor-pointer ${activeFilter == 'my-products' ? 'border-[#46A358]' : 'border-[#fff]'}`}> 
                    <img src="/profile/Bag.svg" alt="bag" />
                    <p className={`font-[700] text-[15px] leading-[45px] ${activeFilter == 'my-products' ? 'text-[#46A358]' : 'text-[#727272]'}`}>My products</p>
                </div>
                <div onClick={() => handleTab('Address')} className={`flex gap-[11px] items-center border-l-[5px] pl-[20px] cursor-pointer ${activeFilter == 'address' ? 'border-[#46A358]' : 'border-[#fff]'}`}> 
                    <img src="/profile/Location.svg" alt="location" />
                    <p className={`font-[700] text-[15px] leading-[45px] ${activeFilter == 'address' ? 'text-[#46A358]' : 'text-[#727272]'}`}>Address</p>
                </div>
                <div onClick={() => handleTab('Wishlist')} className={`flex gap-[11px] items-center border-l-[5px] pl-[20px] cursor-pointer ${activeFilter == 'wishlist' ? 'border-[#46A358]' : 'border-[#fff]'}`}> 
                    <img src="/profile/like (2).svg" alt="likes" />
                    <p className={`font-[700] text-[15px] leading-[45px] ${activeFilter == 'wishlist' ? 'text-[#46A358]' : 'text-[#727272]'}`}>Wishlist</p>
                </div>
                <div onClick={() => handleTab('Track Order')} className={`flex gap-[11px] items-center border-l-[5px] pl-[20px] cursor-pointer ${activeFilter == 'track-order' ? 'border-[#46A358]' : 'border-[#fff]'}`}> 
                    <IoMdSpeedometer style={{color: '#727272'}}/>
                    <p className={`font-[700] text-[15px] leading-[45px] ${activeFilter == 'track-order' ? 'text-[#46A358]' : 'text-[#727272]'}`}>Track Order</p>
                </div>
            </div>
            <hr className="border-[0.5px] border-[#46A358] my-[30px]"/>
            <button  onClick={showModal} className="flex gap-[11px] text-[#e04242] items-center  pl-[20px] cursor-pointer"> 
                <img src="/profile/Logout.svg" alt="logout"  className="text-inherit border-[#e04242]"/>
                <p className="font-[700] text-[15px] text-inherit leading-[45px]">Logout</p>
            </button>
            <Modal title="❗Do you want to logout?" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p className="text-[15px] font-[500]">Please make sure, bacause this action cannot be undone!</p>
            </Modal>
        </div>
        <div className="w-full md:w-[75%]">
            <Outlet/>
        </div>
    </div>
  )
}

export default ProfileSection