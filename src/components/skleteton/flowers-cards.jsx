import { Skeleton } from 'antd';

const FlowersCards = () => {
    const dataArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 
    return (
       <div className='max-w-[1200px] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid gap-[30px]'>
            {dataArray.map((item, i) => (
                <div key={i} className='w-full'>
                    <Skeleton.Image active className='skeleton-img'/>
                    <Skeleton paragraph={{rows: 2}} className='my-[20px]'/>
                </div>
            ))}
       </div>
    )
}
export default FlowersCards;