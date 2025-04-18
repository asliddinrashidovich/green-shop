import useGetData from "../hooks/getData"

function BlogsAll() {
    const {data: blog, error, loading} = useGetData('https://green-shop-backend.onrender.com/api/user/blog?access_token=64bebc1e2c6d3f056a8c85b7&search=')

    console.log(blog)
  return (
    <div className="max-w-[1200px] mx-auto grid-cols-3 grid py-[40px] gap-[30px] px-[40px]">
        {blog?.data.map((item) => (
            <div key={item._id} className="border-[0.5px] border-[#A5A5A5] p-[20px] rounded-[15px]">
                <h2 className="text-[20px] font-[500] leading-[100%] mb-[20px]">{item.title}</h2>
                <p className="text-[14px] font-[400] leading-[16px]">{item.short_description}</p>
            </div>
        ))}
    </div>
  )
}

export default BlogsAll