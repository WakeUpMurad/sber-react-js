import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Flex, Input, Button, Layout } from 'antd'
import classes from './MyHeader.module.css'

const { Header } = Layout
const { Search } = Input
const onSearch = (value, _e, info) => {
  console.log(info?.source, value, _e)
}

const MyHeader = ({ collapsed, setCollapsed }) => {
  return (
    <Header className={classes.header}>
      <Flex
        justify={'space-between'}
        align={'center'}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className={classes.collapseBtn}
        />
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
      </Flex>
    </Header>
  )
}

export default MyHeader
