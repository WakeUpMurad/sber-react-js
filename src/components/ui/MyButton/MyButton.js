import { Button } from 'antd'

const MyButton = ({ onClick, children }) => (
  <Button
    type="primary"
    size="large"
    onClick={onClick}
  >
    {children}
  </Button>
)
export default MyButton
