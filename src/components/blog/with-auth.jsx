import { PlusOutlined } from '@ant-design/icons';
import { Button, Input, Space, Tooltip } from 'antd';
const { Search } = Input;

const onSearch = (value, _e, info) =>
  console.log(info === null || info === void 0 ? void 0 : info.source, value);

function WithauthCase() {
  return (
    <div className="max-w-[1200px]  mx-auto  mt-[20px]  px-[40px]">
        <h1 className="text-[35px] mb-[15px] text-center font-[600]">My Feed</h1>
        <div className='text-center mb-[30px]'>
            <Space direction="vertical">
                <Search placeholder="Search..." onSearch={onSearch}  className='input-search' />
            </Space>
        </div>
        <div className='cursor-pointer'>
            <Tooltip title="New Post" placement="top" arrow>
                <Button
                shape="circle"
                icon={<PlusOutlined />}
                size='medium'
                style={{
                    border: '3px solid black',
                    color: 'black',
                    background: 'white',
                }}
                />
            </Tooltip>
        </div>
    </div>
  )
}

export default WithauthCase