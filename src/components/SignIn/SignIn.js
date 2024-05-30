import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserData } from '../../redux/slices/userSlice'
import Form from '../UI/Form/Form'

const SignIn = ({ fromPage }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (email, password, remember) => {
    dispatch(getUserData({ email, password, remember })).then(() => {
      navigate(fromPage, { replace: true })
    })
  }
  return (
    <Form
      title="Sing in"
      handleSubmit={handleLogin}
    />
  )
}
export default SignIn
