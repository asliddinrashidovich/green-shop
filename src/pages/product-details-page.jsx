import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import {Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import {MainButton} from "../components"
import { FaRegHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function ProductDetailsPage() {
    const {id, category} = useParams()
    console.log(category)
    const fetchFlower = async () => {
      const {data} = await axios.get(`https://green-shop-backend.onrender.com/api/flower/category/${category}/${id}?access_token=6506e8bd6ec24be5de357927`);
      return data;
    };
    const { data: flowersData } = useQuery({
      queryKey: ["flower"],
      queryFn: () => fetchFlower(),
    });
    console.log(flowersData)
  return (
    <div className="pt-9 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-[43px]">
            <Link to={'/'} className="font-[400] text-[#3D3D3D] text-[15px] leading-[16px]">Home</Link> / 
            <span className="font-[700] text-[15px] text-[#3D3D3D] leading-[16px]"> Shop</span>
          </div>
          <div className="grid grid-cols-2 gap-[52px] items-start justify-between">
            <div className="flex gap-[29px] ">
              <div className="flex flex-col gap-[16px]">
                {flowersData?.data?.detailed_images.map(item => (
                  <div key={item} className="min-w-[50px] min-h-[50px] max-w-[100px] w-full h-full cursor-pointer bg-[#f1f1f1] flex items-center justify-center border-[#46A358] border-[1px] overflow-hidden max-h-[100px]">
                    <img src={item} className="w-full object-cover" alt="detailed image" />
                  </div>
                ))}
              </div>
              <div className="p-[20px] w-full max-w-[444px] max-h-[444px] flex overflow-hidden justify-center items-center">
                <img src={flowersData?.data?.main_image} alt="main img" />
              </div>
            </div>
            <div>
              <div className="flex justify-between pb-[20px] border-b-[2px] border-[#46A358] rounded-[2px]"> 
                <div className="flex items-center gap-[10px]">
                  <div className="w-[50px] h-[50px] rounded-full">
                    <img src="" alt="image" />
                  </div>
                  <div>
                    <h2 className="text-[#3D3D3D] text-[28px] font-[700] leading-[16px] mb-[21px]">asdada</h2>
                    <h3 className="text-[#46A358] text-[22px] font-[700] leading-[16px]">asdada</h3>
                  </div>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="flex gap-[5px]">
                    <FaStar className="cursor-pointer text-[#C4C4C4]" />
                    <FaStar className="cursor-pointer text-[#C4C4C4]" />
                    <FaStar className="cursor-pointer text-[#C4C4C4]" />
                    <FaStar className="cursor-pointer text-[#C4C4C4]" />
                    <FaStar className="cursor-pointer text-[#C4C4C4]" />
                  </div>
                  <h2><span>19</span> Customer Review</h2>
                </div>
              </div>
              <div>
                <h3 className="text-[#3D3D3D] text-[20px] font-[500] leading-[16px] mt-[15px] mb-[10px]" >Short Description:</h3>
                <p className="text-[#727272] text-[15px] font-[400] leading-[24px] mb-[24px]">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                <h3 className="text-[#3D3D3D] text-[20px] font-[500] leading-[16px] mt-[15px] mb-[10px]" >Size:</h3>
                <div className="flex gap-[10px] mb-[23px]">
                  <button className="flex justify-center items-center w-[28px] h-[28px] text-[#727272] font-[700] text-[18px] leading-[16px] border-[1px] border-[#727272] rounded-full cursor-pointer">
                    S
                  </button>
                  <button className="flex justify-center items-center w-[28px] h-[28px] text-[#727272] font-[700] text-[18px] leading-[16px] border-[1px] border-[#727272] rounded-full cursor-pointer">
                    M
                  </button>
                  <button className="flex justify-center items-center w-[28px] h-[28px] text-[#727272] font-[700] text-[18px] leading-[16px] border-[1px] border-[#727272] rounded-full cursor-pointer">
                    L
                  </button>
                  <button className="flex justify-center items-center w-[28px] h-[28px] text-[#727272] font-[700] text-[18px] leading-[16px] border-[1px] border-[#727272] rounded-full cursor-pointer">
                    XL
                  </button>
                </div>
                <div className="flex gap-[26px] items-center mb-[26px]">
                  <div className="flex gap-[23px] items-center">
                    <button className="flex justify-center items-center bg-[#46A358] w-[35px] h-[35px] text-[#fff] rounded-full cursor-pointer">
                      <span className="text-[30px] translate-y-[-3px]">
                        -
                      </span>
                    </button>
                    <span>10</span>
                    <button className="flex justify-center items-center bg-[#46A358] w-[35px] h-[35px] text-[#fff] rounded-full cursor-pointer">
                      <span className="text-[30px] translate-y-[-3px]">
                        +
                      </span>
                    </button>
                  </div>
                  <div className="flex gap-[10px] ">
                    <MainButton>Buy NOW</MainButton>
                    <button className="font-[700] text-[14px] leading-[20px] border-[1px] border-[#46A358] rounded-[6px] px-[20px] uppercase text-[#46A358] cursor-pointer py-[11px]">Add to cart</button>
                    <button className="font-[700] text-[20px] leading-[20px] border-[1px] border-[#46A358] rounded-[6px] p-[10px] uppercase text-[#46A358] cursor-pointer ">
                      <FaRegHeart />
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex gap-[10px] mb-[10px]">
                    <span className="font-[400] text-[15px] leading-[16px]">SKU: </span>
                    <span className="font-[600] text-[15px] leading-[16px]"> {flowersData?.data?._id}</span>
                  </div>
                  <div className="flex gap-[10px] mb-[10px]">
                    <span className="font-[400] text-[15px] leading-[16px]">Categories: </span>
                    <span className="font-[600] text-[15px] leading-[16px] uppercase"> {flowersData?.data?.category}</span>
                  </div>
                  <div className="flex gap-[10px] mb-[28px]">
                    <span className="font-[400] text-[15px] leading-[16px]">Tags: </span>
                    <span className="font-[600] text-[15px] leading-[16px] "> {flowersData?.data?.tags.map(it => (it + ',  '))}</span>
                  </div>
                  <div className="flex gap-[17px] items-center" >
                    <h2 className="font-[500] text-[20px] leading-[16px] text-[#3D3D3D] cursor-pointer">Share this products: </h2>
                    <FaFacebookF className="cursor-pointer"/>
                    <FaTwitter  className="cursor-pointer"/>
                    <FaLinkedinIn  className="cursor-pointer"/>
                    <CiMail className="cursor-pointer"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductDetailsPage