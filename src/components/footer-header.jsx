function FooterHeader() {
  return (
    <div className="max-w-[1200px] bg-[#46A3581A] border-y-[1px] border-[#46A358] px-[10px] md:px-[30px] gap-[10px] md:gap-[60px] flex-col md:flex-row flex items-center justify-between mx-auto py-[25px]">
        <img src="/navbar/main_logo.svg" className="mb-[30px] md:mb-[0]" alt="" />
        <div className="flex items-center gap-[15px]">
            <img src="/footer/Location.svg" alt="" />
            <p className="text-[14px] font-[400] leading-[22px]">70 West Buckingham Ave. <br />
            Farmingdale, NY 11735</p>
        </div>
        <div className="flex items-center gap-[15px]">
            <img src="/footer/Message.svg" alt="" />
            <p className="text-[14px] font-[400] leading-[22px]">contact@greenshop.com</p>
        </div>
        <div className="flex items-center gap-[15px]">
            <img src="/footer/Calling.svg" alt="" />
            <p className="text-[14px] font-[400] leading-[22px]">+88 01911 717 490</p>
        </div>
    </div>
  )
}

export default FooterHeader