import { AiOutlineComment } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Skeleton } from 'antd';

function CardSkleton() {
    const dataLoading = [1,1,1,1,1,1,1,1,1,1,1,1]

  return (
    <div className="max-w-[1200px] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid py-[40px] gap-[30px] px-[40px]">
        {dataLoading.map(item => (
            <div key={item._id} className="border-[0.5px] border-[#A5A5A5]  rounded-[15px]">
                <div className="p-[20px]">
                    <Skeleton active paragraph={{ rows: 3 }} />
                </div>
                <hr className="border-[#A5A5A5]"/>
                <div className="flex px-[30px] py-[20px] justify-between">
                <div className="flex gap-[4px] items-center cursor-pointer hover:text-[#46A358]">
                    <IoEyeOutline />
                    <h2>{item.views}</h2>
                </div>
                <div className="flex gap-[4px] items-center cursor-pointer hover:text-[#46A358]">
                    <AiOutlineComment />
                    <h2>{item.__v}</h2>
                </div>
                <div className="flex gap-[4px] items-center cursor-pointer hover:text-[#46A358]">
                    <CiHeart />
                    <h2>{item.reaction_length}</h2>
                </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CardSkleton