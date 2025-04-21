import { Box, Button, FormControl, MenuItem, Modal, Select, Slider } from "@mui/material"
import { useState } from "react"
import MainButton from "../../button/button"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Categories() {
  const [categoryBy, setCategoryBy] = useState('house-plants')
  const [activeCategory, setActiveCategory] = useState('house-plants')
  const [activeCapacity, setActiveCapacity] = useState('Small')
  const [activeNew, setActiveNew] = useState('All Plants')
  const [age, setAge] = useState('');
  const [value, setValue] = useState([300, 660]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    // getting APIs
    const fetchCategory = async () => {
      const res = await axios.get(`https://green-shop-backend.onrender.com/api/flower/category?access_token=6506e8bd6ec24be5de357927`);
      return res.data;
    };
    const fetchDiscount = async () => {
      const res = await axios.get(`https://green-shop-backend.onrender.com/api/features/discount?access_token=6506e8bd6ec24be5de357927`);
      return res.data;
    };
    const fetchFlowersByCategory = async (categoryBy) => {
      const res = await axios.get(`https://green-shop-backend.onrender.com/api/flower/category/${categoryBy}?access_token=6506e8bd6ec24be5de357927`);
      return res.data;
    };

    const { data: categoryData} = useQuery({
      queryKey: ["category"],
      queryFn: fetchCategory,
    });
    const { data: discountData } = useQuery({
      queryKey: ["discount"],
      queryFn: fetchDiscount,
    });
    const { data: flowersData } = useQuery({
      queryKey: ["flowers", categoryBy],
      queryFn: () => fetchFlowersByCategory(categoryBy),
    });

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const handleChangeSlider = (event, newValue) => {
      setValue(newValue);
    };
    function handleActiveCategory(path) {
      setCategoryBy(path)
      setActiveCategory(path)
      handleClose()
    }
    // console.log(flowersData)
  return (
    <div className="max-w-[1200px] mx-auto flex gap-[50px] px-[20px] sm:px-[40px]">
        <div className="py-[14px] px-[20px] hidden lg:flex md:flex-col w-[310px]">
          <h2 className="font-[700] text-[18px] leading-[16px] mb-[7px]">Categories</h2>
          <div className="px-[12px] mb-[36px]">
            {categoryData?.data && categoryData?.data.map((item) => (
              <div key={item.title} onClick={() => handleActiveCategory(item.route_path)} className="flex text-[#46A358] justify-between w-full cursor-pointer group">
                <p className={`font-[700] text-[15px] leading-[40px] ${activeCategory == item.route_path ? 'text-[#46A358]' : 'text-[#3D3D3D] '}  group-hover:text-[#46A358] transition-all duration-[.3s]` }>{item.title}</p>
                <p className={`font-[700] text-[15px] leading-[40px] ${activeCategory == item.route_path ? 'text-[#46A358]' : 'text-[#3D3D3D] '} group-hover:text-[#46A358] transition-all duration-[.3s]`}>({item.count})</p>
              </div>
            ))}
          </div>
          <h2 className="font-[700] text-[18px] leading-[16px] mb-[7px]">Price Range</h2>
          <div className="px-[12px] mb-[46px]">
          <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChangeSlider}
            valueLabelDisplay="auto"
            max={1000}
            style={{color: '#46A358'}}
          />
            <h2 className="font-[700] text-[15px] leading-[16px] mb-[16px]">Price: <span className="text-[#46A358]">${value[0]} - ${value[1]}</span></h2>
            <MainButton>Filter</MainButton>
          </div>
          <h2 className="font-[700] text-[18px] leading-[16px] mb-[7px]">Categories</h2>
          <div className="px-[12px] mb-[36px]">
            <div onClick={() => setActiveCapacity('Small')} className="flex text-[#46A358] justify-between w-full cursor-pointer group">
              <p className={`font-[700] text-[15px] leading-[40px] ${activeCapacity == 'Small' ? 'text-[#46A358]' : 'text-[#3D3D3D] '}  group-hover:text-[#46A358] transition-all duration-[.3s]` }>Small</p>
              <p className={`font-[700] text-[15px] leading-[40px] ${activeCapacity == 'Small' ? 'text-[#46A358]' : 'text-[#3D3D3D] '} group-hover:text-[#46A358] transition-all duration-[.3s]`}>119</p>
            </div>
            <div onClick={() => setActiveCapacity('Medium')} className="flex text-[#46A358] justify-between w-full cursor-pointer group">
              <p className={`font-[700] text-[15px] leading-[40px] ${activeCapacity == 'Medium' ? 'text-[#46A358]' : 'text-[#3D3D3D] '}  group-hover:text-[#46A358] transition-all duration-[.3s]` }>Medium</p>
              <p className={`font-[700] text-[15px] leading-[40px] ${activeCapacity == 'Medium' ? 'text-[#46A358]' : 'text-[#3D3D3D] '} group-hover:text-[#46A358] transition-all duration-[.3s]`}>46</p>
            </div>
            <div onClick={() => setActiveCapacity('Large')} className="flex text-[#46A358] justify-between w-full cursor-pointer group">
              <p className={`font-[700] text-[15px] leading-[40px] ${activeCapacity == 'Large' ? 'text-[#46A358]' : 'text-[#3D3D3D] '}  group-hover:text-[#46A358] transition-all duration-[.3s]` }>Large</p>
              <p className={`font-[700] text-[15px] leading-[40px] ${activeCapacity == 'Large' ? 'text-[#46A358]' : 'text-[#3D3D3D] '} group-hover:text-[#46A358] transition-all duration-[.3s]`}>35</p>
            </div>
          </div>
          <div className="pt-[22px] text-center bg-linear-to-br from-[#46A3581A] to-[#46A35808]">
            <h2 className="font-[400] text-[51px] leading-[65px] text-[#46A358] mb-[11px]">Super Sale</h2>
            <h2 className="font-[700] text-[23px] leading-[16px] text-[#3D3D3D] mb-[5px]">UP TO {discountData?.data?.discoount_up_to}% OFF</h2>
            <img src={discountData?.data?.poster_image_url} alt="image" />
          </div>
        </div>
        <div className="w-full lg:w-[70%]">
            <div className="flex justify-between items-center mb-[35px]">
              <div className="flex gap-[15px] md:gap-[35px]">
                <h3 onClick={() => setActiveNew('All Plants')} className={`text-[14px] md:text-[16px] ${activeNew == 'All Plants' ? 'text-[#46A358] border-b-[1px] border-[#46A358] pb-[5px]' : 'text-[#3D3D3D] pb-[5px]'}  font-[700] cursor-pointer leading-[16px]`}>All Plants</h3>
                <h3 onClick={() => setActiveNew('New Arrivals')} className={`text-[14px] md:text-[16px] ${activeNew == 'New Arrivals' ? 'text-[#46A358] border-b-[1px] border-[#46A358] pb-[5px]' : 'text-[#3D3D3D] pb-[5px]'}  font-[700] cursor-pointer leading-[16px]`}>New Arrivals</h3>
                <h3 onClick={() => setActiveNew('Sale')} className={`text-[14px] md:text-[16px] ${activeNew == 'Sale' ? 'text-[#46A358] border-b-[1px] border-[#46A358] pb-[5px]' : 'text-[#3D3D3D] pb-[5px]'}  font-[700] cursor-pointer leading-[16px]`}>Sale</h3>
              </div>
              <div className="lg:flex gap-[5px] hidden items-center">
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
              <div className="flex lg:hidden cursor-pointer">
                <Button onClick={handleOpen}>
                  <img src="/flowers/modal_change.svg" alt="change modal" />
                </Button>
                <Modal className="w-full h-full py-[20px] px-[30px] overflow-auto flex justify-center items-center" open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                  <Box sx={{backgroundColor: '#fff', height: 'auto', marginTop: '20px',  borderRadius: '15px', maxWidth: '500px', width: '100%', padding:'30px'}}>
                    <h2 className="font-[700] text-[18px] leading-[16px] mb-[7px]">Categories</h2>
                    <div className="px-[12px] mb-[36px]">
                      {categoryData?.data && categoryData?.data.map((item) => (
                        <div key={item.title} onClick={() => handleActiveCategory(item.route_path)} className="flex text-[#46A358] justify-between w-full cursor-pointer group">
                          <p className={`font-[700] text-[15px] leading-[40px] ${activeCategory == item.route_path ? 'text-[#46A358]' : 'text-[#3D3D3D] '}  group-hover:text-[#46A358] transition-all duration-[.3s]` }>{item.title}</p>
                          <p className={`font-[700] text-[15px] leading-[40px] ${activeCategory == item.route_path ? 'text-[#46A358]' : 'text-[#3D3D3D] '} group-hover:text-[#46A358] transition-all duration-[.3s]`}>({item.count})</p>
                        </div>
                      ))}
                    </div>
                    <h2 className="font-[700] text-[18px] leading-[16px] mb-[7px]">Price Range</h2>
                    <div className="px-[12px] mb-[46px]">
                    <Slider
                      getAriaLabel={() => 'Temperature range'}
                      value={value}
                      onChange={handleChangeSlider}
                      valueLabelDisplay="auto"
                      max={1000}
                      style={{color: '#46A358'}}
                    />
                      <h2 className="font-[700] text-[15px] leading-[16px] mb-[16px]">Price: <span className="text-[#46A358]">${value[0]} - ${value[1]}</span></h2>
                      <div onClick={handleClose} className="inline-block">
                        <MainButton>Filter</MainButton>
                      </div>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[33px]">
              {flowersData?.data?.map((item) => (
                <div key={item.title}>
                  <div className="flex group overflow-hidden justify-center relative w-full h-[300px] items-center bg-[#FBFBFB] mb-3">
                    <img src={item.main_image} alt="" />
                    <div className="hidden gap-[20px] group-hover:flex items-center absolute bottom-[10px]">
                      <img className="cursor-pointer" src="/navbar/shop_icon.svg" alt="shop" />
                      <img className="cursor-pointer" src="/flowers/like.svg" alt="like" />
                      <img className="cursor-pointer" src="/navbar/search_icon.svg" alt="search" />
                    </div>
                    {item.discount && <div className={`absolute left-0 top-[20px]`}>
                      <MainButton >13% OFF</MainButton>
                    </div>}
                  </div>
                  <h2 className="text-[16px] font-[400] leading-[16px] text-[#3D3D3D] mb-[6px]">{item.title}</h2>
                  <h2 className="text-[18px] font-[700] leading-[16px] text-[#46A358] mb-[6px]">${item.price} <span className="font-[400] line-through text-[#A5A5A5]"> {item.discount && '$'}{item.discount &&  item.discount_price}</span></h2>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-center pt-[100px] ">
              {!flowersData?.data.length && (
                <div className="text-center gap-[10px]">
                  <img src="/flowers/no_data.svg" alt="no data" />
                  <p>Data is empty.</p>
                </div>
              )}
            </div>
        </div>
    </div>
  )
}

export default Categories