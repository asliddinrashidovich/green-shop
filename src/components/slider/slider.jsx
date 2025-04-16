import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { heroSlider } from '../../data/data';

export default function Slider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' w-[40px] h-[4px] bg-[coral]" ></span>';
    },
  };

  return (
    <div className='max-w-[1200px] px-[10px] md:px-[40px] slider_css mb-[30px] mx-auto h-[330px] md:h-[450px]'>
      <Swiper
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        className=" mySwiper h-full"
        autoplay={{ delay: 3000 }}
      >
        {heroSlider.map(item => (
          <SwiperSlide key={item.img} >
            <div className='w-[100%] h-full grid grid-cols-2 justify-between'>
              <div>
                <h3 className='mt-[30px] md:mt-[68px] font-[500] text-[11px] md:text-[14px] leading-[16px] text-[#3D3D3D] mb-[7px]'>WELCOME TO GREENSHOP</h3>
                <h1 className='font-[900] text-[24px] md:text-[70px] leading-[30px] md:leading-[70px] text-[#3D3D3D] mb-[5px]'>{item.headerText} <span className='text-[#46A358]'>PLANET</span></h1>
                <p className='font-[400] text-[10px] md:text-[14px] leading-[24px] text-[#727272] mb-[55px]'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
              </div>
              <div className='relative h-[100%] '>
                <img src={item.img} className='absolute bottom-[40px] sm:bottom-[1px] md:bottom-[70px] w-[100%] md:w-[85%] lg:w-[60%] right-0' alt="" />
                <img src="/hero/flover_smal1.png" className='hidden md:flex absolute bottom-[40px] w-[30%] md:w-[25%] right-[250px]' alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
