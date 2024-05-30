import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Flex, Input, Button, Layout } from 'antd'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { removeUser } from '../../redux/slices/userSlice'
import classes from './Header.module.css'

const AntHeader = Layout.Header
const { Search } = Input

const Header = ({ collapsed, setCollapsed }) => {
  const { isAuth, email } = useAuth()
  const dispatch = useDispatch()

  const onSearch = (value, _e, info) => {
    console.log(info?.source, value, _e)
  }

  const handleBtnClick = () => {
    localStorage.removeItem('auth')
    localStorage.removeItem('email')
    localStorage.removeItem('id')
    localStorage.removeItem('token')
    dispatch(removeUser())
  }
  return (
    <AntHeader className={classes.header}>
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
        {isAuth ? (
          <Button onClick={handleBtnClick}>Log out {email}</Button>
        ) : (
          <Button>
            <Link to={'/login'}>Login</Link>
          </Button>
        )}
      </Flex>
    </AntHeader>
  )
}

export default Header
