import { Skeleton } from 'antd';
const ParagraphSkileton = () => {
    return (
        <div className="max-w-[800px] mx-auto py-[40px] px-[40px]">
            <Skeleton active paragraph={{ rows: 20 }} />
        </div>
    )
}
export default ParagraphSkileton;