import { Select as AntSelect } from 'antd'

const Select = ({ defaultValue, options, onChange }) => {
  return (
    <AntSelect
      defaultValue={defaultValue}
      options={options}
      onChange={onChange}
    />
  )
}

export default Select
