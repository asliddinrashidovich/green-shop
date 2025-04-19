import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineComment } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

function BlogsAll() {
    const fetchBlog = async () => {
      const res = await axios.get(`https://green-shop-backend.onrender.com/api/user/blog?access_token=64bebc1e2c6d3f056a8c85b7&search=`);
      return res.data;
    };
    const { data: blog} = useQuery({
      queryKey: ["blog"],
      queryFn: fetchBlog,
    });

    console.log(blog)
  return (
    <div className="max-w-[1200px] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid py-[40px] gap-[30px] px-[40px]">
        {blog?.data.map((item) => (
            <div key={item._id} className="border-[0.5px] border-[#A5A5A5]  rounded-[15px]">
                <h2 className="text-[20px] px-[20px] pt-[20px] font-[500] leading-[100%] mb-[20px]">{item.title}</h2>
                <p className="text-[14px] px-[20px] pb-[20px] font-[400] leading-[16px]">{item.short_description}</p>
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

export default BlogsAll