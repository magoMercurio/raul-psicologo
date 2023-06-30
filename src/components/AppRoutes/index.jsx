import { useRoutes } from 'react-router-dom'

import Home from '../../Pages/Home'
import Blog from '../../Pages/Blog'
import NotFound from '../../Pages/NotFound'





const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/blog', element: <Blog />},
    {path: '*', element: <NotFound /> }

  ])
  return routes
}

export default AppRoutes