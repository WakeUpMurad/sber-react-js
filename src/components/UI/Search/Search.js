import { Input } from 'antd'

const AntSearch = Input.Search

const Search = ({ onChange }) => {
  return (
    <AntSearch
      allowClear
      placeholder="input search text"
      onChange={onChange}
    />
  )
}

export default Search
