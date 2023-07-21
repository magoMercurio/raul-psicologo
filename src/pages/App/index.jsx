import { BrowserRouter, useRoutes } from 'react-router-dom'
import  './App.css'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'


import Home from '../Home'
import NoEncontrado from '../NoEncontrado'
/* import Blog from '../../Pages/Blog' */


const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    /* { path: '/blog', element: <Blog />}, */
    {path: '*', element: <NoEncontrado /> }

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
