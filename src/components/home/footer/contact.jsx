import { footerContactCards } from "../../../data/data"

function FooterContact() {
  return (
    <div className="max-w-[1200px] bg-[#FBFBFB] px-[10px] md:px-[40px]  mx-auto flex-col md:flex-row flex">
        <div className="flex flex-col md:flex-row px-[40px] md:w-[70%]">
            {footerContactCards.map((item, index) => (
                <div key={item.img} className="p-[25px] " >
                    <div className={`${index != 0 && 'md:border-l-[1px] md:pl-[40px] border-[#46A358]'} md:text-start text-center md:block  flex flex-col items-center`}>
                        <img src={item.img} className="w-[60px] md:w-[auto]" alt="image" />
                        <h2 className="text-[17px] font-[700] mb-[9px]">{item.text}</h2>
                        <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="md:w-[30%] p-[50px] md:p-[25px]">
            <h2 className="text-[17px] font-[700] mb-[19px] ">Would you like to join newsletters?</h2>
            <form action="" className="w-full flex mb-[17px]">
                <input type="text" className="w-full rounded-l-[6px] outline-none shadow-xl p-[12px]" placeholder="enter your email address..."/>
                <button className="px-[26px] py-[12px]  rounded-r-[6px] bg-[#46A358] text-[#fff]">Join</button>
            </form>
            <p className="font-[400] text-[13px] leading-[22px] text-[#727272]">We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
        </div>
    </div>
  )
}

export default FooterContact