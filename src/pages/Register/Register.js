import { Link, useLocation } from 'react-router-dom'
import SignUp from '../../components/SignUp/SignUp'
import Button from '../../components/UI/Button/Button'
import classes from './Register.module.css'

const Register = () => {
  const location = useLocation()
  const fromPage = location.state?.from || '/'

  return (
    <div className={classes.container}>
      <p className={classes.loginLink}>
        Already have an account?{' '}
        <Link
          to={'/login'}
          state={{ from: fromPage }}
        >
          <Button>Sing in</Button>
        </Link>
      </p>
      <h1>Please Register</h1>
      <SignUp fromPage={fromPage} />
    </div>
  )
}

export default Register
