import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const RequireAuth = ({ children }) => {
  const { isAuth } = useAuth()
  const location = useLocation()

  if (!isAuth) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
      />
    )
  }

  return children
}

export default RequireAuth
