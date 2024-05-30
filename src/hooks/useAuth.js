import { useSelector } from 'react-redux'
import { selectUser } from '../redux/slices/userSlice'

export function useAuth() {
  const user = useSelector(selectUser)
  const { email, token, id } = user

  return {
    isAuth: !!email,
    email,
    token,
    id,
  }
}
