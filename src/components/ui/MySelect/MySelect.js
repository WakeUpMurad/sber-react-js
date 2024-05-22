import { Select } from 'antd'

const MySelect = ({ defaultValue, options, onChange }) => {
  return (
    <Select
      defaultValue={defaultValue}
      options={options}
      onChange={onChange}
    />
  )
}

export default MySelect
