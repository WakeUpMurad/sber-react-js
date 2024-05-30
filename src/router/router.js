import LoginPage from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Home from '../pages/Home/Home'
import Posts from '../pages/Posts/Posts'
import SinglePost from '../pages/Posts/SinglePost'
import About from '../pages/About/About'
import Contacts from '../pages/Contacts/Contacts'

export const publicRoutes = [
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <Register /> },
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contacts', element: <Contacts /> },
]

export const privateRoutes = [
  { path: '/posts', element: <Posts /> },
  { path: '/posts/:id', element: <SinglePost /> },
]
