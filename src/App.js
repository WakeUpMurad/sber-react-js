import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Contacts from './components/pages/Contacts/Contacts'
import NotFound from './components/pages/NotFound/NotFound'
import Posts from './components/pages/Posts/Posts'
import SinglePost from './components/pages/Posts/SinglePost'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            element={<MainLayout />}
            path="/"
          >
            <Route
              element={<Home />}
              index
            />
            <Route
              element={<About />}
              path="about"
            />
            <Route
              element={<Contacts />}
              path="contacts"
            />
            <Route
              element={<Posts />}
              path="posts"
            />
            <Route
              element={<SinglePost />}
              path="posts/:id"
            />
            <Route
              element={<NotFound />}
              path="*"
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
