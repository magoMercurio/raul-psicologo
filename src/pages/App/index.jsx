import { BrowserRouter, useRoutes } from 'react-router-dom'
import  './App.css'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'


import Home from '../../pages/Home'
/* import Blog from '../../Pages/Blog' */
import NotFound from '../../Pages/NotFound'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    /* { path: '/blog', element: <Blog />}, */
    {path: '*', element: <NotFound /> }

  ])
  return routes
}

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
