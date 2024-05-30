import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import NotFound from './pages/NotFound/NotFound'
import { privateRoutes, publicRoutes } from './router/router'
import RequireAuth from './hoc/RequireAuth'
import './App.css'

const AppRouter = () => {
  return (
    <Routes>
      <Route
        element={<MainLayout />}
        path="https://wakeupmurad.github.io/sber-react-js/"
      >
        {publicRoutes.map((route) => (
          <Route
            element={route.element}
            path={route.path}
            key={route.path}
          />
        ))}
        {privateRoutes.map((route) => (
          <Route
            element={<RequireAuth>{route.element}</RequireAuth>}
            path={route.path}
            key={route.path}
          />
        ))}
        <Route
          element={<NotFound />}
          path="*"
        />
      </Route>
    </Routes>
  )
}

export default AppRouter
