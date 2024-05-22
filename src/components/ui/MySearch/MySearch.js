import { Input } from 'antd'

const { Search } = Input

const MySearch = ({ onChange, onSearch = () => {} }) => {
  return (
    <Search
      allowClear
      placeholder="input search text"
      onChange={onChange}
      onSearch={onSearch}
    />
  )
}

export default MySearch
