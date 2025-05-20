import { useDispatch } from 'react-redux';
import { Select } from 'antd';
import { setLanguage } from '../../reducers/languageSlice';

function LanguageChanger() {
  const dispatch = useDispatch();

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e));
    console.log(e);
  };

  return (
    <div>
        <Select
            dropdownStyle={{
                background: 'white',
                boxShadow: 'none',
                borderRadius: 0,
            }}
            defaultValue="en"
            style={{ width: 60 }}
            onChange={handleLanguageChange}
            options={[
                { value: 'en', label: 'en' },
                { value: 'uz', label: 'uz' },
                { value: 'ru', label: 'ru' },
            ]}
        />
    </div>
  );
}

export default LanguageChanger;