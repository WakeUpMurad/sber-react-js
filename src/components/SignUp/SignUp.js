import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUserData } from '../../redux/slices/userSlice'
import Form from '../UI/Form/Form'

const SignUp = ({ fromPage }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = (email, password, remember) => {
    dispatch(registerUserData({ email, password, remember })).then(() => {
      navigate(fromPage, { replace: true })
    })
  }
  return (
    <Form
      title="Register"
      handleSubmit={handleRegister}
    />
  )
}
export default SignUp
