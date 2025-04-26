import MainButton from '../button/button'

function UnauthCase() {
  return (
    <div className="max-w-[1200px]  mx-auto  my-[20px]  px-[40px]">
      <div className="bg-[#f5f5f5] flex justify-between gap-[30px] px-[40px] py-[60px]">
        <div className="max-w-[400px]">
          <img src="/blog/blog_avatar_1.png" className="w-full translate-y-[-10px]" alt="avatar 1" />
        </div>
        <div className="max-w-[200px]">
          <img src="/blog/blog_avatar_2.png" className="w-full translate-y-[30px]" alt="avatar 2" />
        </div>
        <div className="max-w-[200px]">
          <img src="/blog/blog_avatar_3.png" className="w-full translate-y-[50px]" alt="avatar 3" />
        </div>
        <div className="max-w-[200px]">
          <img src="/blog/blog_avatar_4.png" className="w-full translate-y-[30px]" alt="avatar 4" />
        </div>
        <div className="max-w-[200px]">
          <img src="/blog/blog_avatar_5.png" className="w-full translate-y-[0px]" alt="avatar 5" />
        </div>
      </div>
      <div className='text-center'>
        <h1 className=" text-[50px] md:text-[80px] max-w-[1000px] mx-auto font-[800] text-center my-[30px]">Monetize your content with <span className="text-[#46A358]">GreenShop</span></h1>
        <p className="text-[20px] max-w-[1000px] mx-auto font-[500] text-center my-[30px]">Greenshop - a platform for buying and selling, publishing and monetizing all types of flowers: acrticles, notes, video, photos, podcasts or songs.</p>
        <div>
          <MainButton ><p className='py-[7px]'>Join Greenshop</p></MainButton>
        </div>
      </div>
    </div>
  )
}

export default UnauthCase