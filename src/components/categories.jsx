import { FormControl, MenuItem, Select, Slider } from "@mui/material"
import useGetData from "../hooks/getData"
import { useState } from "react"
import MainButton from "./button"

function Categories() {
    const {data: categoryData, error, loading} = useGetData('https://green-shop-backend.onrender.com/api/flower/category?access_token=6506e8bd6ec24be5de357927')
    const {data: discountData, error2, loading2} = useGetData('https://green-shop-backend.onrender.com/api/features/discount?access_token=6506e8bd6ec24be5de357927')
    const {data: flowersData, error3, loading3} = useGetData('https://green-shop-backend.onrender.com/api/flower/category/house-plants?access_token=6506e8bd6ec24be5de357927')

    const [slider, setSlider] = useState(1000)

    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    console.log(flowersData)
  return (
    <div className="max-w-[1200px] mx-auto flex gap-[50px]">
        <div className="py-[14px] px-[20px] w-[310px]">
          <h2 className="font-[700] text-[18px] leading-[16px] mb-[7px]">Categories</h2>
          <div className="px-[12px] mb-[36px]">
            {categoryData?.data && categoryData?.data.map((item) => (
              <div key={item.title} className="flex justify-between w-full">
                <p className="font-[400] text-[15px] leading-[40px] text-[#3D3D3D] hover:text-[#46A358]">{item.title}</p>
                <p className="font-[400] text-[15px] leading-[40px] text-[#3D3D3D] hover:text-[#46A358]">({item.count})</p>
              </div>
            ))}
          </div>
          <h2 className="font-[700] text-[18px] leading-[16px] mb-[7px]">Price Range</h2>
          <div className="px-[12px] mb-[46px]">
            <Slider defaultValue={slider} value={slider} onChange={(e) => setSlider(e.target.value)} aria-label="Default" valueLabelDisplay="auto" className="mb-[20px] text-[#46A358]" />
            <h2 className="font-[700] text-[15px] leading-[16px] mb-[16px]">Price: $39 - $1230</h2>
            <MainButton>Filter</MainButton>
          </div>
          <h2 className="font-[700] text-[18px] leading-[16px] mb-[7px]">Categories</h2>
          <div className="px-[12px] mb-[36px]">
            <div className="flex justify-between w-full">
              <p className="font-[400] text-[15px] leading-[40px] text-[#3D3D3D] hover:text-[#46A358]">Small</p>
              <p className="font-[400] text-[15px] leading-[40px] text-[#3D3D3D] hover:text-[#46A358]">119</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="font-[400] text-[15px] leading-[40px] text-[#3D3D3D] hover:text-[#46A358]">Medium</p>
              <p className="font-[400] text-[15px] leading-[40px] text-[#3D3D3D] hover:text-[#46A358]">46</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="font-[400] text-[15px] leading-[40px] text-[#3D3D3D] hover:text-[#46A358]">Large</p>
              <p className="font-[400] text-[15px] leading-[40px] text-[#3D3D3D] hover:text-[#46A358]">35</p>
            </div>
          </div>
          <div className="pt-[22px] text-center bg-linear-to-br from-[#46A3581A] to-[#46A35808]">
            <h2 className="font-[400] text-[51px] leading-[65px] text-[#46A358] mb-[11px]">Super Sale</h2>
            <h2 className="font-[700] text-[23px] leading-[16px] text-[#3D3D3D] mb-[5px]">UP TO {discountData?.data?.discoount_up_to}% OFF</h2>
            <img src={discountData?.data?.poster_image_url} alt="image" />
          </div>
        </div>
        <div className="w-[70%]">
            <div className="flex justify-between items-center mb-[35px]">
              <div className="flex gap-[35px]">
                <h3 className="text-[15p] font-[400] cursor-pointer leading-[16px]">All Plants</h3>
                <h3 className="text-[15p] font-[400] cursor-pointer leading-[16px]">New Arrivals</h3>
                <h3 className="text-[15p] font-[400] cursor-pointer leading-[16px]">Sale</h3>
              </div>
              <div className="flex gap-[5px] items-center">
                <h2>Short by:</h2>
                <FormControl sx={{ marginLeft: 1, minWidth: 120,  }}>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>Default sorting</em>
                    </MenuItem>
                    <MenuItem value={10}>The Cheapest</MenuItem>
                    <MenuItem value={20}>The Expensive</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-[33px]">
              {flowersData?.data?.map((item) => (
                <div key={item.title}>
                  <div className="flex overflow-hidden justify-center w-full h-[300px] items-center bg-[#FBFBFB] mb-3">
                    <img src={item.main_image} alt="" />
                  </div>
                  <h2 className="text-[16px] font-[400] leading-[16px] text-[#3D3D3D] mb-[6px]">{item.title}</h2>
                  <h2 className="text-[18px] font-[700] leading-[16px] text-[#46A358] mb-[6px]">{item.price} <span className="font-[400] line-through text-[#A5A5A5]"> {item.discount_price}</span></h2>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Categories