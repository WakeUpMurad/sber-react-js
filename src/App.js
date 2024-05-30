import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../src/redux/slices/userSlice'
import { useAuth } from './hooks/useAuth'
import AppRouter from './AppRouter'
import './App.css'
import Error from './components/Error/Error'

const App = () => {
  const dispatch = useDispatch()
  const { isAuth } = useAuth()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(setUser({ email: localStorage.getItem('email'), id: localStorage.getItem('id'), tokes: localStorage.getItem('token') }))
    }
  }, [dispatch])

  return (
    <div className="App">
      <AppRouter isAuth={isAuth} />
      <Error />
    </div>
  )
}

export default App
