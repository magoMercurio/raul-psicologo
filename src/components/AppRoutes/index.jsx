import { useRoutes } from 'react-router-dom'

import Home from '../../pages/Home'
import Blog from '../../Pages/Blog'
import NoEncontrado from '../NoEncontrado'






const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/blog', element: <Blog />},
    {path: '*', element: <NoEncontrado /> }

  ])
  return routes
}

export default AppRoutes