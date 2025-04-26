import { IoEyeOutline } from "react-icons/io5"
import MainButton from "../button/button"
import { AiOutlineComment } from "react-icons/ai"
import { MdOutlineShare } from "react-icons/md";
import { CiHeart } from "react-icons/ci"
import { Button, Tooltip } from "antd";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import BlogDetailsSkeleton from "../skleteton/blog-details-skelton";
import ParagraphSkileton from "../skleteton/paragraph-skileton";

function BlogDetails() {
    const {id} = useParams()

    const fetchBlogDetails = async () => {
        const {data} = await axios.get(`https://green-shop-backend.onrender.com/api/user/blog/${id}?access_token=64bebc1e2c6d3f056a8c85b7`);
        return data
    };
    const fetchProfileCreated = async () => {
        const {data} = await axios.get(`https://green-shop-backend.onrender.com/api/user/by_id/${blogDetails?.data?.created_by}?access_token=64bebc1e2c6d3f056a8c85b7`);
        return data
    };

    const { data: blogDetails, isLoading: loading1} = useQuery({
        queryKey: ["blogDetails", id],
        queryFn: fetchBlogDetails,
    });
    const { data: createdByProfile, isLoading: loading2} = useQuery({
        queryKey: ["createdByProfile", id],
        queryFn: fetchProfileCreated,
    });
    console.log(createdByProfile)
    
    if(loading1, loading2) {
        return (
            <div className="max-w-[800px] mx-auto py-[40px] px-[40px]">
                <BlogDetailsSkeleton/>
                <ParagraphSkileton/>
            </div>
        )
    }
  return (
    <div className="max-w-[800px] mx-auto py-[40px] px-[40px]">
        <div className="flex justify-between items-center mb-[30px]">
            <div className="flex gap-[20px] items-center">
                <div className="w-[70px] h-[70px] rounded-[50%] overflow-hidden">
                    <img src={createdByProfile?.data?.profile_photo} alt="image" />
                </div>
                <div>
                    <h2 className="text-[18px] font-[700]">{createdByProfile?.data?.name} {createdByProfile?.data?.surname}</h2>
                    <p className="text-[15px] font-[400]">Followers {createdByProfile?.data?.followers.length}</p>
                </div>
            </div>
            <div>
                <MainButton>Follow</MainButton>
            </div>
        </div>
        <h2 className="mb-[40px] text-[30px] font-[700]">{blogDetails?.data?.title}</h2>
        <div className="text-[18px] font-[500] leading-[130%] mb-[20px]"  dangerouslySetInnerHTML={{ __html: blogDetails?.data?.content }}/>
        <div className="flex items-center">
            <Tooltip title="Views" placement="top" arrow className="flex items-center">
                <Button  icon={<IoEyeOutline />}  size='large'  style={{
                    border: 'none',
                    color: 'black',
                    background: 'white',
                }}>
                    <span className="text-[18px] font-[500] leading-[100%]">{blogDetails?.data?.views}</span>
                </Button>
            </Tooltip>
            <Tooltip title="Comments" placement="top" arrow className="flex items-center">
                <Button  icon={<AiOutlineComment />}  size='large'  style={{
                    border: 'none',
                    color: 'black',
                    background: 'white',
                }}>
                    <span className="text-[18px] font-[500] leading-[100%]">{blogDetails?.data?.__v}</span>
                </Button>
            </Tooltip>
            <Tooltip title="Likes" placement="top" arrow className="flex items-center">
                <Button  icon={<CiHeart />}  size='large'  style={{
                    border: 'none',
                    color: 'black',
                    background: 'white',
                }}>
                    <span className="text-[18px] font-[500] leading-[100%]">{blogDetails?.data?.reaction_length}</span>
                </Button>
            </Tooltip>
            <Tooltip title="Share" placement="top" arrow className="flex items-center">
                <Button  icon={<MdOutlineShare />}  size='large'  style={{
                    border: 'none',
                    color: 'black',
                    background: 'white',
                }}>
                    <span className="text-[18px] font-[500] leading-[100%]">0</span>
                </Button>
            </Tooltip>
        </div>
    </div>
  )
}

export default BlogDetails