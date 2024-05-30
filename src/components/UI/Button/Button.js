import { Button as AntButton } from 'antd'

const Button = ({ onClick, children }) => (
  <AntButton
    type="primary"
    size="large"
    onClick={onClick}
  >
    {children}
  </AntButton>
)
export default Button
